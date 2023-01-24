import { Extension, Environment, ButtonBlock, BlockType } from "$common";

type Details = {
  name: "A",
  description: "B",
  iconURL: "",
  insetIconURL: ""
};

export default class _ extends Extension<Details, {
  fireRequest: ButtonBlock,
}> {
  init(env: Environment) { }

  defineBlocks(): _["BlockDefinitions"] {
    return {
      fireRequest: {
        text: "Do it",
        type: BlockType.Button,
        operation: async () => {
          const url = "https://jovial-choux-e140a5.netlify.app/.netlify/functions/ai-blocks/drive";

          const resp = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify("Hi") // body data type must match "Content-Type" header
          });
          const json = await resp.json();
          console.log(json);
        }

      }
    }
  }
}
