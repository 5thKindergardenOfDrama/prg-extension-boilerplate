const Clone = require('../../util/clone');
const log = require('../../util/log');
const RenderedTarget = require('../../sprites/rendered-target');
const StageLayering = require('../../engine/stage-layering');

const symbols = require('./symbols');
const { updateVariableIdentifiers } = require('../../util/variable-util');

class VizHelpers {
    constructor (runtime) {
        this.runtime = runtime;

        /**
         * The ID of the renderer Skin corresponding to the pen layer.
         * @type {int}
         * @private
         */
        this._penSkinId = -1;

        /**
         * The ID of the renderer Drawable corresponding to the pen layer.
         * @type {int}
         * @private
         */
        this._penDrawableId = -1;

        this.noteList = [];

        this.axisStartX = -200;
        this.axisStartY = -45;
        this.xAxisLength = 400;
        this.yAxisLength = 200;
        this.staffLength = 400;
        this.staffStartX = -200;
        this.staffStartY = -130;
        this.staffWidth = 8;

        this._onTargetCreated = this._onTargetCreated.bind(this);
        this.runtime.on('targetWasCreated', this._onTargetCreated);

        this._onTargetMoved = this._onTargetMoved.bind(this);

        pitchToStaff = {
            60: -2,
            61: -2,
            62: -1,
            63: 0,
            64: 0,
            65: 2,
            66: 2,
            67: 3,
            68: 3,
            69: 4,
            70: 5,
            71: 5,
            72: 6,
            73: 6,
            75: 7,
            76: 8
        }
    }

    /**
     * The key to load & store a target's music-related state.
     * @type {string}
     */
    static get VIZ_STATE_KEY () {
        return 'Scratch.musicviz';
    }

    static get DEFAULT_PEN_STATE () {
        return {
            penDown: false,
            color: 66.66,
            saturation: 100,
            brightness: 100,
            transparency: 0,
            _shade: 50, // Used only for legacy `change shade by` blocks
            penAttributes: {
                color4f: [0, 0, 1, 1],
                diameter: 1
            }
        };
    }

    /**
     * The minimum and maximum allowed pen size.
     * The maximum is twice the diagonal of the stage, so that even an
     * off-stage sprite can fill it.
     * @type {{min: number, max: number}}
     */
    static get PEN_SIZE_RANGE () {
        return {min: 1, max: 1200};
    }

        /**
     * When a music-playing Target is cloned, clone the music state.
     * @param {Target} newTarget - the newly created target.
     * @param {Target} [sourceTarget] - the target used as a source for the new clone, if any.
     * @listens Runtime#event:targetWasCreated
     * @private
     */
    _onTargetCreated (newTarget, sourceTarget) {
        if (sourceTarget) {
            const penState = sourceTarget.getCustomState(VizHelpers.VIZ_STATE_KEY);
            if (penState) {
                newTarget.setCustomState(VizHelpers.VIZ_STATE_KEY, Clone.simple(penState));
                if (penState.penDown) {
                    newTarget.addListener(RenderedTarget.EVENT_TARGET_MOVED, this._onTargetMoved);
                }
            }
        }
    }

    _onTargetMoved (target, oldX, oldY, isForce) {
        // Only move the pen if the movement isn't forced (ie. dragged).
        if (!isForce) {
            const penSkinId = this._getPenLayerID();
            if (penSkinId >= 0) {
                const penState = this._getPenState(target);
                this.runtime.renderer.penLine(penSkinId, penState.penAttributes, oldX, oldY, target.x, target.y);
                this.runtime.requestRedraw();
            }
        }
    }

    _getPenLayerID () {
        if (this._penSkinId < 0 && this.runtime.renderer) {
            this._penSkinId = this.runtime.renderer.createPenSkin();
            this._penDrawableId = this.runtime.renderer.createDrawable(StageLayering.PEN_LAYER);
            this.runtime.renderer.updateDrawableProperties(this._penDrawableId, {skinId: this._penSkinId});
        }
        return this._penSkinId;
    }

    _getPenState (target) {
        let penState = target.getCustomState(VizHelpers.VIZ_STATE_KEY);
        if (!penState) {
            penState = Clone.simple(VizHelpers.DEFAULT_PEN_STATE);
            target.setCustomState(VizHelpers.VIZ_STATE_KEY, penState);
        }
        return penState;
    }

    testWaveformViz (noteList, args, util) {
        log.log("HELPER");
        this.noteList = noteList;
        this.clear();
        this.drawAxes(args, util);
        this.drawSignal(args, util);
    }

    testSheetMusicViz (noteList, args, util) {
        this.noteList = noteList;
        log.log("HELPER");
        this.clear();
        this.drawStaff(args, util);
        this.drawMusic(args, util);
    }

    drawAxes(args, util) {
        util.target.setXY(this.axisStartX, this.axisStartY + this.yAxisLength);
        this.penDown(args, util);
        util.target.setXY(this.axisStartX, this.axisStartY);
        this.penUp(args, util);
        util.target.setXY(this.axisStartX, this.axisStartY+this.yAxisLength/2);
        this.penDown(args, util);
        util.target.setXY(this.axisStartX+this.xAxisLength, this.axisStartY+this.yAxisLength/2);
        this.penUp(args, util);
    }

    drawSignal(args, util) {
        x = this.axisStartX;
        y = this.axisStartY+this.yAxisLength/2;
        signal = this.noteList;
        fs = 500;
        const totalSamples = fs*signal
            .map( v => v[1] )                                
            .reduce( (sum, current) => sum + current, 0 );
        xStep = this.xAxisLength/totalSamples;
        log.log(xStep);
        heightScaling = 100;
        util.target.setXY(x, y);
        this.penDown(args, util);
        for (var i in signal) {
            note = signal[i];
            midi = note[0];
            dur = note[1];
            freq = 2**((midi - 69)/12)*440;
            Omega = 2*Math.PI*freq/fs;
            log.log(dur*fs);
            for (var s = 0; s < dur*fs; s++) {
                val = heightScaling*(Math.sin(2*Math.PI*freq/44140*s));
                util.target.setXY(x, y + val);
                x = x+xStep;
            }
            log.log(freq, dur);
        }
        this.penUp(args,util);
    }

    drawStaff(args, util) {
        startX = this.staffStartX;
        endX = this.staffStartX+this.staffLength;
        y = this.staffStartY;
        yStep = this.staffWidth;
        for (var i = 0; i < 5; i++) {
            this.penUp(args, util);
            util.target.setXY(startX, y);
            this.penDown(args, util);
            util.target.setXY(endX, y);
            y = y+yStep;
        }
        this.drawTreble(args, util);
    }

    drawTreble(args, util) {
        xstart = -200;
        ystart = -80;
        treble = symbols.treble;
        this.penUp(args, util);
        for (var i in treble) {
            coord = treble[i];
            x = coord[0]/5 + xstart;
            y = -coord[1]/5 + ystart;
            util.target.setXY(x, y);
            this.penDown(args, util);     
        }
        this.penUp(args, util);
        for (var i in treble) {
            coord = treble[i];
            x = coord[0]/5 + xstart+1;
            y = -coord[1]/5 + ystart;
            util.target.setXY(x, y);
            this.penDown(args, util);     
        }
    }

    drawMusic(args, util) {
        x = -190;
        y = -130;
        xStep = 40;
        signal = this.convertSignalToMusicList(args, util);
        for (i in signal) {
            note = signal[i][0];
            duration = signal[i][1];
            if (note <= 4) {
                up = true;
            } else {
                up = false;
            }
            x = x+xStep;
            ymid = y+note*this.staffWidth/2;
            xmid = x - 8;
            this.drawNote(xmid, ymid, duration, up, args, util);

        }
        this.penUp(args, util);
    }

    drawNote(xmid, ymid, duration, up, args, util) {
        xrad = 8;
        yrad = 4;
        if (up) {
            flip = 1;
        } else {
            flip = -1;
        }
        step = Math.PI/100;
        if (duration <= 1){ //draw solid note for sixteenth, eighth, and quarter notes
            for (var theta = 0; theta < 2*Math.PI; theta +=step) {
                this.penUp(args, util);
                util.target.setXY(xmid, ymid);
                var x = xmid + xrad*Math.cos(theta);
                var y = ymid - yrad*Math.sin(theta);
                this.penDown(args, util);
                util.target.setXY(x, y);
            }
        } else { //draw hollow note for half, dotted half, and whole notes
            x = xmid + xrad;
            y = ymid;
            for (var theta = 0; theta < 2*Math.PI; theta +=step) {
                this.penUp(args, util);
                util.target.setXY(x, y);
                x = xmid + xrad*Math.cos(theta);
                y = ymid - yrad*Math.sin(theta);
                this.penDown(args, util);
                util.target.setXY(x, y);
            }
            x = xmid + xrad - 1;
            y = ymid;
            for (var theta = 0; theta < 2*Math.PI; theta +=step) {
                this.penUp(args, util);
                util.target.setXY(x, y);
                x = xmid + (xrad-1)*Math.cos(theta);
                y = ymid - (yrad-1)*Math.sin(theta);
                this.penDown(args, util);
                util.target.setXY(x, y);
            }
        }
        if (duration == 3) { //add dot for dotted half note
            dotrad = 2;
            for (var theta = 0; theta < 2*Math.PI; theta +=step) {
                this.penUp(args, util);
                util.target.setXY(xmid+12, ymid);
                var x = xmid + 12 + dotrad*Math.cos(theta);
                var y = ymid - dotrad*Math.sin(theta);
                this.penDown(args, util);
                util.target.setXY(x, y);
            }
        }
        if (duration != 4) { //add stem for non-whole notes
            this.penUp(args, util);
            util.target.setXY(xmid+flip*xrad, ymid);
            this.penDown(args, util);
            util.target.setXY(xmid+flip*xrad, ymid+flip*30);
        }
        if (duration < 1) { //add tails for < quarter notes
            offset = 0;
            for (var i = 0; i < 1/(duration*2); i++) {
                this.penUp(args, util);
                util.target.setXY(xmid+flip*xrad, ymid+flip*(30+offset*6));
                this.penDown(args, util);
                util.target.setXY(xmid+flip*xrad+2, ymid + flip*(30 + offset*6 - 8));
                util.target.setXY(xmid+flip*xrad+10, ymid + flip*(30 + offset*6 - 12));
                this.penUp(args, util);
                util.target.setXY(xmid+flip*xrad, ymid+flip*(30+offset*6+2));
                this.penDown(args, util);
                util.target.setXY(xmid+flip*xrad+2, ymid + flip*(30 + offset*6 - 8+1));
                util.target.setXY(xmid+flip*xrad+10, ymid + flip*(30 + offset*6 - 12+1));
                offset += 1;
                this.penUp(args, util);
            }
        }
    }

    convertSignalToMusicList (args, util) {
        signal = [];
        for (var i in this.noteList) {
            freq = this.noteList[i][0];
            staff = pitchToStaff[freq];
            dur = this.noteList[i][1]*4 ;
            signal.push([staff, dur]);
        }
        this.noteList = [];
        return signal;
    }

    penUp (args, util) {
        const penState = this._getPenState(util.target);
        if (penState.penDown) {
            penState.penDown = false;
            util.target.removeListener(RenderedTarget.EVENT_TARGET_MOVED, this._onTargetMoved);
        }
    }

    penDown (args, util) {
        const penState = this._getPenState(util.target);
        if (!penState.penDown) {
            penState.penDown = true;
            util.target.addListener(RenderedTarget.EVENT_TARGET_MOVED, this._onTargetMoved);
        }

        const penSkinId = this._getPenLayerID();
        if (penSkinId >= 0) {
            this.runtime.renderer.penPoint(penSkinId, penState.penAttributes, util.target.x, util.target.y);
            this.runtime.requestRedraw();
        }
    }

    /**
     * The pen "clear" block clears the pen layer's contents.
     */
    clear () {
        const penSkinId = this._getPenLayerID();
        if (penSkinId >= 0) {
            this.runtime.renderer.penClear(penSkinId);
            this.runtime.requestRedraw();
        }
    }

}

module.exports = VizHelpers;