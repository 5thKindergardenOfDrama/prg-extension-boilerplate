import { Extension } from "../../typescript-support/Extension";
import { Environment } from "../../typescript-support/types";
import defineTranslations from "./translations";

type Details = {
  name: "",
  description: "",
  iconURL: "",
  insetIconURL: ""
};

class _ extends Extension<Details, {
  // Blocks
}> {
  init(env: Environment) { }

  defineBlocks(): _["BlockDefinitions"] {
    return {

    }
  }

  // Ignore! Translations are still a work in progress (but will be supported)
  defineTranslations = defineTranslations;
}

export = _;