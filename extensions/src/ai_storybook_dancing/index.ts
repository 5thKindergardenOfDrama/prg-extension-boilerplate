import { Environment, ExtensionMenuDisplayDetails, extension, block, SaveDataHandler, RuntimeEvent, } from "$common";
import BlockUtility from "$root/packages/scratch-vm/src/engine/block-utility";
import { hideNonBlocklyElements, stretchWorkspaceToScreen } from "./layout";
import { announce, requestDanceMove, untilMessageReceived } from "./messaging";

const details: ExtensionMenuDisplayDetails = { name: "Dancing Activity for AI Storybook" };

const dance = async (move: "hop") => {
  requestDanceMove(move);
  await untilMessageReceived(`end ${move}`);
}

let flipFlopper = false;

export default class ExtensionNameGoesHere extends extension(details, "blockly", "customSaveData") {
  async init(env: Environment) {
    hideNonBlocklyElements();
    stretchWorkspaceToScreen();
    announce("ready");
  }

  /**
   * As noted in the extension documentation: 
   * "[A hat] starts a stack if its value changes from falsy to truthy ('edge triggered')"
   * so this property continuously flips between true and false to trigger a hat block continuously.
   */
  get runContinuously() {
    flipFlopper = !flipFlopper;
    return flipFlopper;
  }

  protected override saveDataHandler = new SaveDataHandler({
    Extension: ExtensionNameGoesHere,
    onSave: () => ({ hackToLoadExtensionEvenIfNoBlocksInProject: true }),
    onLoad: () => { },
  });

  @block({
    text: "Hop",
    type: "command"
  })
  async hop(util: BlockUtility) {
    await dance("hop");
  }

  @block({
    text: "Tell doodlebot to dance",
    type: "hat"
  })
  entry(util: BlockUtility) {

    // Todo: use `util` to identify if there are any scripts attached to this block.
    // If so: (and the music isn't already playing) start the music
    // If not: (and the music is playing) stop the music

    return this.runContinuously;
  }
}