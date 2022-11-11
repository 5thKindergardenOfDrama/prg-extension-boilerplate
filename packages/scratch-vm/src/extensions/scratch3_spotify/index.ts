import { ArgumentType, BlockType } from "../../typescript-support/enums";
import { Extension } from "../../typescript-support/Extension";
import {
    Block,
    DefineBlock,
    Environment,
    ExtensionMenuDisplayDetails,
} from "../../typescript-support/types";
import defineTranslations from "./translations";
// FEEDBACK could not use external js file
import Tone from "./tone.js";

// FEEDBACK is it ok to still use require like this?
const nets = require("nets");
const SERVER_TIMEOUT = 10000; // 10 seconds

/**
 * @summary This type describes how your extension will display in the extensions menu.
 * @description Like all Typescript type declarations, it looks and acts a lot like a javascript object.
 * It will be passed as the first generic argument to the Extension class that your specific extension `extends`
 * (see the class defintion below for more information on extending the Extension base class).
 * @see ExtensionMenuDisplayDetails for all possible display menu properties.
 * @link https://www.typescriptlang.org/docs/handbook/2/objects.html Learn more about object types! (This is specifically a 'type alias')
 * @link https://www.typescriptlang.org/docs/handbook/2/generics.html Learn more about generics!
 */
type Details = {
    name: "Spotify";
    description: "This extension plays 30 second previews of songs from Spotify. It's a resurrection of Eric Rosenbaum's https://github.com/ericrosenbaum/spotify-extension/blob/gh-pages/extension.js";
    /**
     * IMPORTANT! Place your icon image (typically a png) in the same directory as this index.ts file
     */
    iconURL: "Replace with the name of your icon image file (which should be placed in the same directory as this file)";
    /**
     * IMPORTANT! Place your inset icon image (typically an svg) in the same directory as this index.ts file
     * NOTE: This icon will also appear on all of your extension's blocks
     */
    insetIconURL: "Replace with the name of your inset icon image file (which should be placed in the same directory as this file)";
};

/**
 * @summary This type describes all of the blocks your extension will/does implement.
 * @description As you can see, each block is represented as a function.
 * In typescript, you can specify a function in either of the following ways (and which you choose is a matter of preference):
 * - Arrow syntax: `nameOfFunction: (argument1Name: argument1Type, argument2Name: argument2Type, ...etc...) => returnType;`
 * - 'Method' syntax: `nameOfFunction(argument1Name: argument1Type, argument2Name: argument2Type, ...etc...): returnType;`
 *
 * The three included functions demonstrate some of the most common types of blocks: commands, reporters, and hats.
 * - Command functions/blocks take 0 or more arguments, and return nothing (indicated by the use of a `void` return type).
 * - Reporter functions/blocks also take 0 or more arguments, but they must return a value (likely a `string` or `number`).
 * - Hat functions/blocks also take 0 or more arguments, but they must return a boolean value.
 *
 * Feel free to delete these once you're ready to implement your own blocks.
 *
 * This type will be passed as the second generic argument to the Extension class that your specific extension 'extends'
 * (see the class defintion below for more information on extending the Extension base class).
 * @link https://www.typescriptlang.org/docs/handbook/2/functions.html Learn more about function types!
 * @link https://www.typescriptlang.org/docs/handbook/2/objects.html Learn more about object types! (This is specifically a 'type alias')
 * @link https://www.typescriptlang.org/docs/handbook/2/generics.html Learn more about generics!
 */
type Blocks = {
    /*exampleCommand(exampleString: string, exampleNumber: number): void;
  exampleReporter: () => number;
  exampleHat(condition: boolean): boolean;*/
    searchAndPlay(query: string): void;
    searchAndPlayWait(query: string): void;
    trackData(trackAttr: string): string;
    stopMusic(): void;
    // TODO uncomment when blocks are implemented
    /* playNextBeat(): void;
    playBeat(beatNum: number): void;
    playBeatAndWait(beatNum: number): void;
    currentBeat(): number;
    everyBeat(): boolean;
    everyBar(): boolean; */
};

/**
 * @summary This is the class responsible for implementing the functionality of your blocks.
 * @description You'll notice that this class `extends` (or 'inherits') from the base `Extension` class.
 *
 * Hover over `Extension` to get a more in depth explanation of the base class, and what it means to `extend it`.
 */
class Spotify extends Extension<Details, Blocks> {
    /**
     * @summary A field to demonstrate how Typescript Class fields work
     * @link https://www.typescriptlang.org/docs/handbook/2/classes.html#fields
     */
    // Example field 1
    //exampleField: number;
    prevQuery: string;
    currentArtistName: string;
    currentTrackName: string;
    currentAlbumName: string;

    spotifyToken: AccessToken;

    // FEEDBACK using JS library, not sure what type to put
    player: any;
    gain: any;
    audioContext: any;

    // TODO update all the "any"s with more descriptive types
    beatPlayers: any[];
    trackTimingData: any;
    beatTimeouts: any[];
    barTimeouts: any[];
    trackTimeout: any;
    trackStartTime: any;

    releaseDur: number;
    currentBeatPlayerIndex: number;
    currentBeatNum: number;
    beatFlag: boolean;
    barFlag: boolean;
    currentTrackDuration: number;
    trackTempo: number;
    numBeats: number;

    async init(env: Environment) {
        if (typeof Tone !== "undefined") {
            this.prevQuery = "";
            this.currentArtistName = "no artist";
            this.currentTrackName = "no track";
            this.currentAlbumName = "no album";

            // player for playing entire track
            this.player = new Tone.Player().toMaster();

            // beat players for playing individual beat at a time
            this.beatPlayers = [];
            this.releaseDur = 0.01;
            for (let i = 0; i < 4; i++) {
                let beatPlayer = new Tone.Player();
                let ampEnv = new Tone.AmplitudeEnvelope({
                    attack: 0.01,
                    decay: 0,
                    sustain: 1.0,
                    release: this.releaseDur,
                }).toMaster();
                beatPlayer.connect(ampEnv);
                beatPlayer.ampEnv = ampEnv;
                this.beatPlayers.push(beatPlayer);
            }
            this.currentBeatPlayerIndex = 0;

            // gain node
            this.gain = new Tone.Gain();
            Tone.Master.chain(this.gain);

            this.audioContext = Tone.context;

            //this.trackTimingData;
            this.currentBeatNum = 0;
            this.beatFlag = false;
            this.barFlag = false;
            this.beatTimeouts = [];
            this.barTimeouts = [];
            //this.trackTimeout;
            //this.trackStartTime;
            this.numBeats = 0;

            this.currentTrackDuration = 0;
            this.trackTempo = 0;

            // Get Spotify token
            this.spotifyToken = await getAccessToken();
        }
    }

    // Ignore! Translations coming soon...
    defineTranslations = defineTranslations as typeof this.defineTranslations;

    playTrack() {
        if (
            !this.player.buffer ||
            !this.player.buffer.loaded ||
            !this.trackTimingData
        ) {
            return;
        }
        this.player.start(Tone.now(), 0, this.currentTrackDuration);
        this.trackStartTime = Tone.now();
        this.setupTimeouts();
    }

    clearTimeouts() {
        clearTimeout(this.trackTimeout);
        for (let i = 0; i < this.beatTimeouts.length; i++) {
            clearTimeout(this.beatTimeouts[i]);
        }
        for (let i = 0; i < this.barTimeouts.length; i++) {
            clearTimeout(this.barTimeouts[i]);
        }
    }

    resetTrackData() {
        this.player = new Tone.Player().toMaster();
        this.currentArtistName = "no artist";
        this.currentTrackName = "no track";
        this.currentAlbumName = "no album";
        this.trackTempo = 0;
    }

    requestSearch(query: string) {
        return new Promise<void> ((resolve, reject) => {
            if (this.player) {
                this.player.stop();
                this.clearTimeouts();
            }

            if (query == "") {
                return reject();
            }

            this.currentBeatNum = 0;

            // if we are making the exact same query again, abort
            // keeping the same metadata, no need to reload
            if (query == this.prevQuery) {
                return resolve();
            }

            nets(
                {
                    url:
                        "https://api.spotify.com/v1/search?q=" +
                        query +
                        "&type=track",
                    headers: {
                        Authorization: "Bearer " + this.spotifyToken.value,
                    },
                    timeout: SERVER_TIMEOUT,
                },
                (err, res, body) => {
                    if (err) {
                        console.log("Error with Spotify API query");
                        console.log(err);
                        console.log(res);
                        return reject();
                    }

                    if (res.statusCode !== 200) {
                        console.log("Error with Spotify API query");
                        console.log(res);
                        console.log(JSON.parse(body));

                        // if the error is a 401 (unauthorized), the token probably has expired, so request a new one.
                        // TODO make sure I'm doing this right
                        if (res.statusCode == 401) {
                            // TODO figure out why this isn't calling refresh access token
                            console.log("401 error");
                            getAccessToken().then((token) => {
                                this.spotifyToken = token;
                                return reject();
                            });
                        } else {
                            console.error(
                                "Spotify token error: " + res.statusCode
                            );
                            return reject();
                        }
                    }

                    // success
                    this.prevQuery = query;
                    let trackObjects = JSON.parse(body).tracks.items;

                    // fail if there are no tracks
                    if (!trackObjects || trackObjects.length === 0) {
                        this.resetTrackData();
                        return reject();
                    }

                    // find the first result without explicit lyrics
                    let notExplicit = false;
                    for (let i = 0; i < trackObjects.length; i++) {
                        if (!trackObjects[i].explicit) {
                            trackObjects = trackObjects.slice(i);
                            notExplicit = true;
                            break;
                        }
                    }

                    // fail if there were none without explicit lyrics
                    if (!notExplicit) {
                        this.resetTrackData();
                        console.log("no results without explicit lyrics");
                        return reject();
                    }

                    this.keepTryingToGetTimingData(
                        trackObjects,
                        resolve,
                        reject
                    );
                }
            );
        });
    }

    keepTryingToGetTimingData(trackObjects, resolve, reject) {
        this.getTrackTimingData(trackObjects[0].preview_url).then(
            () => {
                // store track name, artist, album
                this.currentArtistName = trackObjects[0].artists[0].name;
                this.currentTrackName = trackObjects[0].name;
                this.currentAlbumName = trackObjects[0].album.name;
                resolve();
            },
            () => {
                console.log(
                    "no timing data for " +
                        trackObjects[0].name +
                        ", trying next track"
                );
                if (trackObjects.length > 1) {
                    trackObjects = trackObjects.slice(1);
                    this.keepTryingToGetTimingData(
                        trackObjects,
                        resolve,
                        reject
                    );
                } else {
                    console.log("no more results");
                    this.resetTrackData();
                    reject();
                }
            }
        );
    }

    // code adapted from spotify
    getTrackTimingData(url: string) {
        return new Promise((resolve, reject) => {
            if (!url) {
                reject();
                return;
            }

            const findString = (buffer, string) => {
                for (let i = 0; i < buffer.length - string.length; i++) {
                    let match = true;
                    for (let j = 0; j < string.length; j++) {
                        var c = String.fromCharCode(buffer[i + j]);
                        if (c !== string[j]) {
                            match = false;
                            break;
                        }
                    }
                    if (match) {
                        return i;
                    }
                }
                return -1;
            };

            const getSection = (buffer, start, which) => {
                let sectionCount = 0;
                let i;
                for (i = start; i < buffer.length; i++) {
                    if (buffer[i] == 0) {
                        sectionCount++;
                    }
                    if (sectionCount >= which) {
                        break;
                    }
                }
                i++;
                let content = "";
                while (i < buffer.length) {
                    if (buffer[i] == 0) {
                        break;
                    }
                    var c = String.fromCharCode(buffer[i]);
                    content += c;
                    i++;
                }
                let js = "";
                try {
                    js = eval("(" + content + ")");
                } catch (e) {
                    js = "";
                }
                return js;
            };

            const makeRequest = (url, resolve, reject) => {
                if (!url) {
                    reject();
                    return;
                }

                nets(
                    {
                        url: url,
                    },
                    (err, res, body) => {
                        if (err) {
                            console.error("Spotify token error: " + err);
                            // TODO make sure I did this right (changed from "return reject()")
                            return reject();
                        }

                        if (res.statusCode !== 200) {
                            console.error(
                                "Spotify token error: " + res.statusCode
                            );
                            return reject();
                        }

                        // success
                        let buffer = new Uint8Array(body);
                        let idx = findString(buffer, "GEOB");

                        this.trackTimingData = getSection(buffer, idx + 1, 8);

                        if (!this.trackTimingData) {
                            reject();
                            return;
                        }

                        // estimate the tempo using the average time interval between beats
                        let sum = 0;
                        for (
                            let i = 0;
                            i < this.trackTimingData.beats.length - 1;
                            i++
                        ) {
                            sum +=
                                this.trackTimingData.beats[i + 1] -
                                this.trackTimingData.beats[i];
                        }
                        let beatLength =
                            sum / (this.trackTimingData.beats.length - 1);
                        this.trackTempo = 60 / beatLength;

                        // use the loop duration to set the number of beats
                        for (
                            let i = 0;
                            i < this.trackTimingData.beats.length;
                            i++
                        ) {
                            if (
                                this.trackTimingData.loop_duration <
                                this.trackTimingData.beats[i]
                            ) {
                                this.numBeats = i;
                                break;
                            }
                        }

                        // decode the audio
                        this.audioContext.decodeAudioData(
                            buffer.buffer,
                            (audioBuffer) => {
                                this.player.buffer.set(audioBuffer);
                                this.currentTrackDuration =
                                    this.trackTimingData.loop_duration;
                                for (
                                    let i = 0;
                                    i < this.beatPlayers.length;
                                    i++
                                ) {
                                    this.beatPlayers[i].buffer.set(audioBuffer);
                                }
                                resolve();
                            }
                        );
                    }
                );
            };
            makeRequest(url, resolve, reject);
        });
    }

    setupTimeouts() {
        // events on each beat
        this.beatTimeouts = [];
        for (let i = 0; i < this.numBeats; i++) {
            let t = window.setTimeout(
                function (i) {
                    this.beatFlag = true;
                    this.currentBeatNum = i;
                },
                (this.trackTimingData.beats[i] - 0.1) * 1000,
                i
            );
            this.beatTimeouts.push(t);
        }

        // events on each bar
        this.barTimeouts = [];
        for (let i = 0; i < this.trackTimingData.downbeats.length; i++) {
            if (
                this.trackTimingData.downbeats[i] <
                this.trackTimingData.beats[this.numBeats - 1]
            ) {
                let t = window.setTimeout(() => {
                    this.barFlag = true;
                }, (this.trackTimingData.downbeats[i] - 0.1) * 1000);
                this.barTimeouts.push(t);
            }
        }
    }

    // All example definitions below are syntactically equivalent,
    // and which you use is just a matter of preference.
    defineBlocks(): Spotify["BlockDefinitions"] {
        // Example 1
        //type DefineExampleCommand = DefineBlock<Blocks["exampleCommand"]>;

        // Example 2
        /*const exampleCommand: DefineExampleCommand = () => ({
      type: BlockType.Command,
      args: [ArgumentType.String, { type: ArgumentType.Number, defaultValue: 789 }],
      text: (exampleString, exampleNumber) => `This is where the blocks display text goes, with arguments --> ${exampleString} and ${exampleNumber}`,
      operation: (exampleString, exampleNumber, util) => {
        alert(`This is a command! Here's what it received: ${exampleString} and ${exampleNumber}`); // Replace with what the block should do! 
        console.log(util.stackFrame.isLoop); // just an example of using the BlockUtility
      }
    });*/

        return {
            // Example 1?
            //exampleCommand,

            // Example 3
            /*exampleReporter: function (self: Spotify): Block<Blocks["exampleReporter"]> {
        return {
          type: BlockType.Reporter,
          text: "This increments an internal field and then reports it's value",
          operation: () => {
            return ++self.exampleField;
          }
        }
      },*/

            // Example 4
            // exampleHat: pickFromOptions,
            searchAndPlay: searchAndPlay,
            searchAndPlayWait: searchAndPlayWait,
            trackData: getTrackData,
            stopMusic: stopMusic,
            // leaving out fancy blocks that allow mixing for now
            /*playNextBeat: playNextBeat,
            playBeat: playBeat,
            playBeatAndWait: playBeatAndWait,
            currentBeat: getCurrentBeat,
            everyBeat: everyBeat,
            everyBar: everyBar,*/
        };
    }
}

// Example 4
//type WithOptionsBlock = Blocks["exampleHat"];
/*const pickFromOptions = (): Block<WithOptionsBlock> => ({
  type: BlockType.Hat,
  arg: { type: ArgumentType.Boolean, options: [{ text: 'Yes', value: true }, { text: 'No', value: false }] },
  text: (argument1) => `Should the below block execute? ${argument1}`,
  operation: function (argument1) {
    return argument1;
  }
});*/

type AccessToken = {
    expirationTime: number;
    value: string;
};

const currentTimeSec = (): number => {
    return new Date().getTime() / 1000;
};

const getAccessToken = (): Promise<AccessToken> => {
    return new Promise((resolve, reject) => {
        nets(
            {
                // We're piggybacking off of Eric's (?) account and that's bad
                // TODO make our own way to get a spotify token
                url: "https://u61j2fb017.execute-api.us-east-1.amazonaws.com/prod/get-spotify-token",
                timeout: SERVER_TIMEOUT,
            },
            (err, res, body) => {
                if (err) {
                    console.error("Spotify token error: " + err);
                    // TODO make sure I did this right (changed from "return reject()")
                    return reject();
                }

                if (res.statusCode !== 200) {
                    console.error("Spotify token error: " + res.statusCode);
                    return reject();
                }

                // success
                let token: AccessToken = {
                    expirationTime: currentTimeSec() + 3600,
                    value: JSON.parse(body).token,
                };
                resolve(token);
            }
        );
    });
};

const refreshAccessTokenIfNeeded = (
    token: AccessToken
): Promise<AccessToken> => {
    return new Promise((resolve, reject) => {
        if (currentTimeSec() > token.expirationTime) {
            getAccessToken().then((newToken) => {
                token = newToken;
                console.log("token expired, got a new one");
                resolve(token);
            });
        } else {
            resolve(token);
        }
    });
};

type SearchAndPlayBlock = Blocks["searchAndPlay"];
const searchAndPlay = (Spotify): Block<SearchAndPlayBlock> => ({
    type: BlockType.Command,
    arg: { type: ArgumentType.String, defaultValue: "tacos" },
    text: (searchQuery) => `play music like ${searchQuery}`,
    operation: async function (searchQuery) {
        let token = await refreshAccessTokenIfNeeded(Spotify.spotifyToken);
        Spotify.spotifyToken = token;
        await Spotify.requestSearch(searchQuery);
        await Spotify.playTrack();
    },
});

type SearchAndPlayWaitBlock = Blocks["searchAndPlayWait"];
const searchAndPlayWait = (Spotify): Block<SearchAndPlayWaitBlock> => ({
    type: BlockType.Command,
    arg: { type: ArgumentType.String, defaultValue: "lauryn hill" },
    text: (searchQuery) => `play music like ${searchQuery} until done`,
    operation: async function (searchQuery) {
        let token = await refreshAccessTokenIfNeeded(Spotify.spotifyToken);
        Spotify.spotifyToken = token;
        await Spotify.requestSearch(searchQuery);
        await Spotify.playTrack();
        
        return new Promise<void> (resolve => {
            setTimeout(() => {
                resolve();
            }, Spotify.currentTrackDuration*1000);
        });
    },
});

type StopMusicBlock = Blocks["stopMusic"];
const stopMusic = (Spotify): Block<StopMusicBlock> => ({
    type: BlockType.Command,
    text: `stop the music`,
    operation: function () {
        Spotify.player.stop();
        Spotify.clearTimeouts();
    },
});

type TrackData = Blocks["trackData"];
const getTrackData = (): Block<TrackData> => ({
    type: BlockType.Reporter,
    arg: {
        type: ArgumentType.String,
        defaultValue: "full",
        options: ["track", "artist", "album", "full"],
    },
    text: (requestedData) => `${requestedData} name`,
    operation: function (requestedData) {
        switch (requestedData) {
            case "track":
                return this.currentTrackName;
            case "artist":
                return this.currentArtistName;
            case "album":
                return this.currentAlbumName;
            case "full":
                return (
                    this.currentTrackName +
                    " by " +
                    this.currentArtistName +
                    " from " +
                    this.currentAlbumName
                );
            default:
                return "";
        }
    },
});

export = Spotify;
