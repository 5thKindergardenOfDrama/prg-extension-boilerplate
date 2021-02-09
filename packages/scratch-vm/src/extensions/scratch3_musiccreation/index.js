const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Clone = require('../../util/clone');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');
const log = require('../../util/log');

const VizHelpers = require('./vizhelpers');
const MusicCreationHelpers = require('./musiccreationhelpers');
const MusicAccompanimentHelpers = require('./musicaccompanimenthelpers');
const AnalysisHelpers = require('./analysishelpers');


class Scratch3MusicCreation {
    constructor (runtime) {
        this.runtime = runtime;

        this.vizHelper = new VizHelpers(runtime);
        this.musicCreationHelper = new MusicCreationHelpers(runtime);
        this.musicAccompanimentHelper = new MusicAccompanimentHelpers(runtime);
        this.analysisHelper = new AnalysisHelpers(runtime);


        this.noteList = [];
        
        this.volumes = [{text: "pianissimo", value: 15}, 
                    {text: "piano", value: 30}, 
                    {text: "mezzo-piano", value: 45},
                    {text: "mezzo-forte", value: 60},
                    {text: "forte", value: 85},
                    {text: "fortissimo", value: 100}];

        this.files = [{text: "mystery 1", value: 1}, 
                    {text: "mystery 2", value: 2}, 
                    {text: "mystery 3", value: 3},
                    {text: "mystery 4", value: 4},
                    {text: "mystery 5", value: 5},
                    {text: "mystery 6", value: 6}];


        this._playNoteForPicker = this._playNoteForPicker.bind(this);
        this.runtime.on('PLAY_NOTE', this._playNoteForPicker);

        this._onTargetCreated = this._onTargetCreated.bind(this);
        this.runtime.on('targetWasCreated', this._onTargetCreated);

    }


    /**
     * The key to load & store a target's music-related state.
     * @type {string}
     */
    static get STATE_KEY () {
        return 'Scratch.musiccreation';
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
            const musicState = sourceTarget.getCustomState(Scratch3MusicCreation.STATE_KEY);
            if (musicState) {
                newTarget.setCustomState(Scratch3MusicCreation.STATE_KEY, Clone.simple(musicState));
            }
        }
    }

    /**
     * Create data for a menu in scratch-blocks format, consisting of an array of objects with text and
     * value properties. The text is a translated string, and the value is one-indexed.
     * @param  {object[]} info - An array of info objects each having a name property.
     * @return {array} - An array of objects with text and value properties.
     * @private
     */
    _buildMenu (info) {
        return info.map((entry, index) => {
            const obj = {};
            obj.text = entry.name;
            obj.value = String(index + 1);
            return obj;
        });
    }


    /**
     * An array of info about each instrument.
     * @type {object[]}
     * @param {string} name - the translatable name to display in the instruments menu.
     * @param {string} dirName - the name of the directory containing audio samples for this instrument.
     * @param {number} [releaseTime] - an optional duration for the release portion of each note.
     * @param {number[]} samples - an array of numbers representing the MIDI note number for each
     *                           sampled sound used to play this instrument.
     */
    get INSTRUMENT_INFO () {
        return [
            {
                name: formatMessage({
                    id: 'musiccreation.instrumentPiano',
                    default: 'Piano',
                    description: 'Sound of a piano'
                }),
                dirName: '1-piano',
                releaseTime: 0.5,
                samples: [24, 36, 48, 60, 72, 84, 96, 108]
            },
            {
                name: formatMessage({
                    id: 'musiccreation.instrumentGuitar',
                    default: 'Guitar',
                    description: 'Sound of an accoustic guitar'
                }),
                dirName: '4-guitar',
                releaseTime: 0.5,
                samples: [60]
            },            {
                name: formatMessage({
                    id: 'music.instrumentBass',
                    default: 'Bass',
                    description: 'Sound of an accoustic upright bass'
                }),
                dirName: '6-bass',
                releaseTime: 0.25,
                samples: [36, 48]
            },
            {
                name: formatMessage({
                    id: 'musiccreation.instrumentCello',
                    default: 'Cello',
                    description: 'Sound of a cello being played with a bow'
                }),
                dirName: '8-cello',
                releaseTime: 0.1,
                samples: [36, 48, 60]
            },
            {
                name: formatMessage({
                    id: 'musiccreation.instrumentSaxophone',
                    default: 'Saxophone',
                    description: 'Sound of a saxophone being played'
                }),
                dirName: '11-saxophone',
                samples: [36, 60, 84]
            },
            {
                name: formatMessage({
                    id: 'music.instrumentClarinet',
                    default: 'Clarinet',
                    description: 'Sound of a clarinet being played'
                }),
                dirName: '10-clarinet',
                samples: [48, 60]
            },
            {
                name: formatMessage({
                    id: 'musiccreation.instrumentSynthLead',
                    default: 'Synth',
                    description: 'Sound of a "lead" synthesizer being played'
                }),
                dirName: '20-synth-lead',
                releaseTime: 0.1,
                samples: [60]
            }
        ];
    }


    getInfo () {
        return {
            id: 'musiccreation',
            name: 'Music Creation',
            blocks: [
                {
                    opcode: 'setInstrument',
                    blockType: BlockType.COMMAND,
                    text: 'set instrument to [INSTRUMENT]',
                    arguments: {
                        INSTRUMENT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: "INSTRUMENT"
                        }
                    }
                },
                {
                    opcode: 'setVolume',
                    blockType: BlockType.COMMAND,
                    text: 'set volume to [VOLUME]',
                    arguments: {
                        VOLUME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 60,
                            menu: "VOLUME"
                        }
                    }
                },
                {
                    opcode: 'playNote',
                    blockType: BlockType.COMMAND,
                    text: 'play note with frequency [NOTE] for [SECS] seconds',
                    arguments: {
                        NOTE: {
                            type: ArgumentType.NOTE,
                            defaultValue: 60
                        },
                        SECS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0.25
                        }
                    }
                },
                {
                    opcode: 'getVolume',
                    text: formatMessage({
                        id: 'musiccreation.getVolume',
                        default: 'volume',
                        description: 'get the current volume'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getInstrument',
                    text: formatMessage({
                        id: 'musiccreation.getInstrument',
                        default: 'instrument',
                        description: 'get the current instrument'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'testMagentaPlayer',
                    text: formatMessage({
                        id: 'musiccreation.testMagentaPlayer',
                        default: 'test Magenta player',
                        description: 'test Magenta'
                    }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: 'testMagentaRNN',
                    text: formatMessage({
                        id: 'musiccreation.testMagentaRNN',
                        default: 'test Magenta RNN',
                        description: 'test Magenta RNN'
                    }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: 'testMagentaMVAE',
                    text: formatMessage({
                        id: 'musiccreation.testMagentaMVAE',
                        default: 'test Magenta MVAE',
                        description: 'test Magenta MVAE'
                    }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: 'testSheetMusicViz',
                    text: formatMessage({
                        id: 'musiccreation.testSheetMusicViz',
                        default: 'test sheet music viz',
                        description: 'test sheet music viz'
                    }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: 'testWaveformViz',
                    text: formatMessage({
                        id: 'musiccreation.testWaveformViz',
                        default: 'test waveform viz',
                        description: 'test waveform viz'
                    }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: 'compareFiles',
                    blockType: BlockType.COMMAND,
                    text: 'compare [FILE1] and [FILE2]',
                    arguments: {
                        FILE1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: "FILES"
                        },
                        FILE2: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                            menu: "FILES"
                        },
                    },
                },
                {
                    opcode: 'getLouder',
                    text: formatMessage({
                        id: 'musiccreation.getLouder',
                        default: 'louder',
                        description: 'get the current louder note'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getHigher',
                    text: formatMessage({
                        id: 'musiccreation.getHigher',
                        default: 'higher',
                        description: 'get the current higher note'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getInst1',
                    text: formatMessage({
                        id: 'musiccreation.getInst1',
                        default: 'instrument 1',
                        description: 'get the current instrument 1'
                    }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getInst2',
                    text: formatMessage({
                        id: 'musiccreation.getInst2',
                        default: 'instrument 2',
                        description: 'get the current instrument 2'
                    }),
                    blockType: BlockType.REPORTER
                }

            ],
            menus: {
                VOLUME: {
                    acceptReporters: true,
                    items: this.volumes
                },
                INSTRUMENT: {
                    acceptReporters: true,
                    items: this._buildMenu(this.INSTRUMENT_INFO)
                },
                FILES: {
                    acceptReporters: true,
                    items: this.files
                }
            }
        };
    }

    testWaveformViz (args, util) {
        this.vizHelper.testWaveformViz(args, util);
    }

    testSheetMusicViz (args, util) {
        this.vizHelper.testSheetMusicViz(this.noteList, args, util);
        this.noteList = [];
    }

    /**
     * Select an instrument for playing notes.
     * @param {object} args - the block arguments.
     * @param {object} util - utility object provided by the runtime.
     * @property {int} INSTRUMENT - the number of the instrument to select.
     */
    setInstrument (args, util) {
        this.musicCreationHelper._setInstrument(args.INSTRUMENT, util, false);
    }

    testMagentaPlayer (util) {
        this.musicAccompanimentHelper.testMagentaPlayer(util);
    }

    testMagentaRNN (utils) {
        this.musicAccompanimentHelper.testMagentaRNN(utils);
    }

    testMagentaMVAE (utils) {
        this.musicAccompanimentHelper.testMagentaMVAE(utils);
    }

    getInstrument (util) {
        return this.musicCreationHelper.getInstrument(util);
    }


    _playNoteForPicker (noteNum, category) {
        if (category !== this.getInfo().name) return;
        const util = {
            runtime: this.runtime,
            target: this.runtime.getEditingTarget()
        };
        this.musicCreationHelper._playNote(util, noteNum, 0.25);
    }

    /**
     * Set the current tempo to a new value.
     * @param {object} args - the block arguments.
     * @property {number} TEMPO - the tempo, in beats per minute.
     */
    setVolume (args, util) {
        const volume = Cast.toNumber(args.VOLUME);
        this.musicCreationHelper._updateVolume(volume, util);
    }

    getVolume () {
        return this.musicCreationHelper.getVolume();
    }

    playNote (args, util) {
        toAdd = this.musicCreationHelper.playNote(args, util);
        if (toAdd.length == 2) {
            this.noteList.push(toAdd);
        }
    }

    compareFiles (args, util) {
        this.analysisHelper.compareFiles(args, util);
    }

    getLouder (util) {
        return this.analysisHelper.getLouder(util);
    }

    getHigher (util) {
        return this.analysisHelper.getHigher(util);
    }

    getInst1 (util) {
        return this.analysisHelper.getInst1(util);
    }

    getInst2 (util) {
        return this.analysisHelper.getInst2(util);
    }


}

module.exports = Scratch3MusicCreation;