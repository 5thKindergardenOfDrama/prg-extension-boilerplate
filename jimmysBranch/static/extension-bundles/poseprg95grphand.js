var poseprg95grphand=function(e,t){"use strict";class i extends t.Extension{internal_getCodeGenArgs(){return{id:"poseprg95grphand",name:"Hand Sensing",blockIconURI:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c3R5bGU+LnN0MHtmaWxsOiMwMDdhY2N9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCAyMDBWMGg0MDB2NDAwSDAiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNODcuNyAyMDAuN1YyMTdoNTJ2MTQ4aDM2LjlWMjE3aDUydi0xNmMwLTkgMC0xNi4zLS40LTE2LjUgMC0uMy0zMS43LS40LTcwLjItLjRsLTcwIC4zdjE2LjRsLS4zLS4xek0zMjEuNCAxODRjMTAuMiAyLjQgMTggNyAyNSAxNC4zIDMuNyA0IDkuMiAxMSA5LjYgMTIuOCAwIC42LTE3LjMgMTIuMy0yNy44IDE4LjgtLjQuMy0yLTEuNC0zLjYtNC01LjItNy40LTEwLjUtMTAuNi0xOC44LTExLjItMTItLjgtMjAgNS41LTIwIDE2IDAgMy4yLjYgNSAxLjggNy42IDIuNyA1LjUgNy43IDguOCAyMy4yIDE1LjYgMjguNiAxMi4zIDQxIDIwLjQgNDguNSAzMiA4LjUgMTMgMTAuNCAzMy40IDQuNyA0OC43LTYuNCAxNi43LTIyIDI4LTQ0LjMgMzEuNy03IDEuMi0yMyAxLTMwLjUtLjMtMTYtMy0zMS4zLTExLTQwLjctMjEuMy0zLjctNC0xMC44LTE0LjctMTAuNC0xNS40bDMuOC0yLjQgMTUtOC43IDExLjMtNi42IDIuNiAzLjVjMy4zIDUuMiAxMC43IDEyLjIgMTUgMTQuNiAxMyA2LjcgMzAuNCA1LjggMzktMiAzLjctMy40IDUuMy03IDUuMy0xMiAwLTQuNi0uNy02LjctMy0xMC4yLTMuMi00LjQtOS42LTgtMjcuNi0xNi0yMC43LTguOC0yOS41LTE0LjQtMzcuNy0yMy00LjctNS4yLTktMTMuMy0xMS0yMC0xLjUtNS44LTItMjAtLjYtMjUuNyA0LjMtMjAgMTkuNC0zNCA0MS0zOCA3LTEuNCAyMy41LS44IDMwLjQgMWwtLjIuMnoiLz48L3N2Zz4="}}init(e){this.exampleField=0}defineBlocks(){const e=[{text:"thumb",value:"thumb"},{text:"index finger",value:"index"},{text:"middle finger",value:"middle"},{text:"ring finger",value:"ring"},{text:"pinky finger",value:"pinky"}],i=[{text:"tip",value:0},{text:"first knuckle",value:1},{text:"second knuckle",value:2},{text:"base",value:3}];return{goToHandPart:()=>({type:t.BlockType.Command,args:[{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:e,handler:e=>{if(!(e in["thumb","index","middle","ring","pinky"]))return console.log("Error: 'go to' block only accepts 'thumb', 'index', 'middle', 'ring', or 'pinky'"),"thumb"}}},{type:t.ArgumentType.Number,options:{acceptsReporters:!0,items:i,handler:e=>Math.max(Math.min(e,3),0)}}],text:(e,t)=>`go to ${e} ${t}`,operation:(e,t)=>{console.log(e+" with "+t)}}),videoToggle:()=>({type:t.BlockType.Command,arg:{type:t.ArgumentType.Number,options:{acceptsReporters:!0,items:[{text:"off",value:0},{text:"on",value:1},{text:"on and flipped",value:2}],handler:e=>Math.min(Math.max(e,0),2)}},text:e=>`turn video ${e}`,operation:e=>{0===e?this.runtime.ioDevices.video.disableVideo():(this.runtime.ioDevices.video.enableVideo(),this.runtime.ioDevices.video.mirror=1==e)}}),setVideoTransparency:()=>({type:t.BlockType.Command,arg:{type:t.ArgumentType.Number,defaultValue:50},text:e=>`set video transparency to ${e}`,operation:e=>{const t=Math.max(Math.min(e,100),0);this.runtime.ioDevices.video.setPreviewGhost(t)}})}}}return e.Extension=i,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=poseprg95grphand.js.map
