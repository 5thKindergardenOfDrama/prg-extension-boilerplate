var poseFace=function(e,t){"use strict";var i=t.extractLegacySupportFromOldGetInfo({blocks:[{opcode:"affdexGoToPart",text:"go to [AFFDEX_POINT]",blockType:t.BlockType.Command,isTerminal:!1,arguments:{AFFDEX_POINT:{type:t.ArgumentType.Number,defaultValue:0,menu:"AFFDEX_POINT"}}},{opcode:"affdexWhenExpression",text:"when [EXPRESSION] detected",blockType:t.BlockType.Hat,isTerminal:!0,arguments:{EXPRESSION:{type:t.ArgumentType.String,defaultValue:"smile",menu:"EXPRESSION"}}},{opcode:"affdexExpressionAmount",text:"amount of [EXPRESSION]",blockType:t.BlockType.Reporter,isTerminal:!0,arguments:{EXPRESSION:{type:t.ArgumentType.String,defaultValue:"smile",menu:"EXPRESSION"}}},{opcode:"affdexIsExpression",text:"expressing [EXPRESSION]",blockType:t.BlockType.Boolean,isTerminal:!0,arguments:{EXPRESSION:{type:t.ArgumentType.String,defaultValue:"smile",menu:"EXPRESSION"}}},{opcode:"affdexWhenEmotion",text:"when [EMOTION] feeling detected",blockType:t.BlockType.Hat,isTerminal:!0,arguments:{EMOTION:{type:t.ArgumentType.String,defaultValue:"joy",menu:"EMOTION"}}},{opcode:"affdexEmotionAmount",text:"level of [EMOTION_ALL]",blockType:t.BlockType.Reporter,isTerminal:!0,arguments:{EMOTION_ALL:{type:t.ArgumentType.String,defaultValue:"joy",menu:"EMOTION_ALL"}}},{opcode:"affdexIsTopEmotion",text:"feeling [EMOTION]",blockType:t.BlockType.Boolean,isTerminal:!0,arguments:{EMOTION:{type:t.ArgumentType.String,defaultValue:"joy",menu:"EMOTION"}}},{opcode:"videoToggle",blockType:t.BlockType.Command,text:t.mockFormatMessage({id:"videoSensing.videoToggle",default:"turn video [VIDEO_STATE]",description:"Controls display of the video preview layer"}),arguments:{VIDEO_STATE:{type:t.ArgumentType.Number,menu:"VIDEO_STATE",defaultValue:0}}},{opcode:"setVideoTransparency",blockType:t.BlockType.Command,text:t.mockFormatMessage({id:"videoSensing.setVideoTransparency",default:"set video transparency to [TRANSPARENCY]",description:"Controls transparency of the video preview layer"}),arguments:{TRANSPARENCY:{type:t.ArgumentType.Number,defaultValue:50}}}],menus:{AFFDEX_POINT:{acceptReporters:!1,items:[{text:"left ear",value:0},{text:"left chin",value:1},{text:"chin",value:2},{text:"right chin",value:3},{text:"right ear",value:4},{text:"left outer eyebrow",value:5},{text:"left eyebrow",value:6},{text:"left inner eyebrow",value:7},{text:"right inner eyebrow",value:8},{text:"right eyebrow",value:9},{text:"right outer eyebrow",value:10},{text:"nose bridge",value:11},{text:"nose tip",value:12},{text:"left nostril",value:13},{text:"nose tip",value:14},{text:"right nostril",value:15},{text:"left outer eye crease",value:16},{text:"left inner eye crease",value:17},{text:"right inner eye crease",value:18},{text:"right outer eye crease",value:19},{text:"left mouth crease",value:20},{text:"left upper lip point",value:21},{text:"upper lip",value:22},{text:"right upper lip point",value:23},{text:"right mouth crease",value:24},{text:"right lower lip point",value:25},{text:"lower lip",value:26},{text:"left lower lip point",value:27},{text:"upper lip bottom",value:28},{text:"lower lip top",value:29},{text:"left upper eyelid",value:30},{text:"left lower eyelid",value:31},{text:"right upper eyelid",value:32},{text:"right lower eyelid",value:33}]},EMOTION:{acceptReporters:!0,items:[{text:"joyful",value:"joy"},{text:"sad",value:"sadness"},{text:"disgusted",value:"disgust"},{text:"angry",value:"anger"},{text:"fearful",value:"fear"}]},EXPRESSION:{acceptReporters:!0,items:[{text:"smile",value:"smile"},{text:"mouth open",value:"mouthOpen"},{text:"eye closure",value:"eyeClosure"},{text:"eyebrow raise",value:"browRaise"},{text:"whistling",value:"lipPucker"},{text:"eye widening",value:"eyeWiden"},{text:"eyebrow furrow",value:"browFurrow"},{text:"nose wrinkle",value:"noseWrinkle"},{text:"upper lip raise",value:"upperLipRaise"},{text:"lip corner pull",value:"lipCornerDepressor"},{text:"chin raise",value:"chinRaise"},{text:"smirk",value:"smirk"},{text:"attention",value:"attention"},{text:"eyelid tighten",value:"lidTighten"},{text:"jaw drop",value:"jawDrop"},{text:"cheek dimple",value:"dimpler"},{text:"cheek raise",value:"cheekRaise"},{text:"lip stretch",value:"lipStretch"}]},EMOTION_ALL:{acceptReporters:!0,items:[{text:"joy",value:"joy"},{text:"sadness",value:"sadness"},{text:"disgust",value:"disgust"},{text:"contempt",value:"contempt"},{text:"anger",value:"anger"},{text:"fear",value:"fear"},{text:"surprise",value:"surprise"},{text:"valence",value:"valence"},{text:"engagement",value:"engagement"}]},ATTRIBUTE:{acceptReporters:!0,items:[{text:t.mockFormatMessage({id:"videoSensing.motion",default:"motion",description:'Attribute for the "video [ATTRIBUTE] on [SUBJECT]" block'}),value:"motion"},{text:t.mockFormatMessage({id:"videoSensing.direction",default:"direction",description:'Attribute for the "video [ATTRIBUTE] on [SUBJECT]" block'}),value:"direction"}]},SUBJECT:{acceptReporters:!0,items:[{text:t.mockFormatMessage({id:"videoSensing.sprite",default:"sprite",description:'Subject for the "video [ATTRIBUTE] on [SUBJECT]" block'}),value:"this sprite"},{text:t.mockFormatMessage({id:"videoSensing.stage",default:"stage",description:'Subject for the "video [ATTRIBUTE] on [SUBJECT]" block'}),value:"Stage"}]},VIDEO_STATE:{acceptReporters:!0,items:[{text:t.mockFormatMessage({id:"videoSensing.off",default:"off",description:'Option for the "turn video [STATE]" block'}),value:0},{text:t.mockFormatMessage({id:"videoSensing.on",default:"on",description:'Option for the "turn video [STATE]" block'}),value:1},{text:t.mockFormatMessage({id:"videoSensing.onFlipped",default:"on and flipped",description:'Option for the "turn video [STATE]" block that causes the video to be flipped horizontally (reversed as in a mirror)'}),value:2}]}}});const o=0,a=1,s=2;function u(e){return parseFloat(Number(e).toFixed(2))}class l extends t.Extension{internal_getCodeGenArgs(){return{id:"poseFace",name:"Face Sensing",blockIconURI:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMTE3IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwIDQwIgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzU2Q0JGNTt9Cgkuc3Qxe29wYWNpdHk6MC41NztmaWxsOiNFRTQwOTc7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Qye2ZpbGw6IzQ2OTFGRjt9Cgkuc3Qze2ZpbGw6IzM3NTI3Qjt9Cgkuc3Q0e29wYWNpdHk6MC40OTtmaWxsOiNFMDMwMEU7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Q1e29wYWNpdHk6MC40OTtmaWxsOiNCMjBEMjQ7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Q2e2ZpbGw6I0VERURFQjt9Cgkuc3Q3e2ZpbGw6I0NFQ0VDQzt9Cgkuc3Q4e2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjxzb2RpcG9kaTpuYW1lZHZpZXcgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3MTE5IiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJFeHRlbnNpb25zL1NvZnR3YXJlL1ZpZGVvLVNlbnNpbmctQmxvY2siIGlua3NjYXBlOmN4PSIxNC40NjcwNjkiIGlua3NjYXBlOmN5PSI2LjU5MDMwNTYiIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6c25hcC1zbW9vdGgtbm9kZXM9ImZhbHNlIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5MDciIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTYwMCIgaW5rc2NhcGU6d2luZG93LXg9IjU3MSIgaW5rc2NhcGU6d2luZG93LXk9Ijk2IiBpbmtzY2FwZTp6b29tPSI3LjA0IiBvYmplY3R0b2xlcmFuY2U9IjEwIiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSI+Cgk8L3NvZGlwb2RpOm5hbWVkdmlldz4KPHRpdGxlICBpZD0idGl0bGUxMDQiPkV4dGVuc2lvbnMvU29mdHdhcmUvVmlkZW8tU2Vuc2luZy1CbG9jazwvdGl0bGU+CjxkZXNjICBpZD0iZGVzYzEwNiI+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LjgsMjIuOWwtMS4xLTMuM2MtMC41LTEuNi0wLjgtMy4yLTAuOC00LjljMC02LjYsNS4zLTExLjksMTEuOS0xMS45czExLjksNS4zLDExLjksMTEuOQoJYzAsMS43LTAuMywzLjMtMC44LDQuOWwtMS4xLDMuM0g5Ljh6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOS44LDUuMWMtMi40LDAtNC44LDAuOS02LjYsMi40YzEuMi0wLjUsMi41LTAuOCwzLjktMC44YzUuOCwwLDEwLjQsNC42LDEwLjQsMTAuNGMwLDEuNS0wLjMsMi45LTAuNyw0LjMKCWwtMC40LDEuMmgyLjJsMS0yLjljMC40LTEuNCwwLjctMi44LDAuNy00LjNDMzAuMiw5LjcsMjUuNiw1LjEsMTkuOCw1LjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNi4yLDMyLjlsLTMuNSwyLjljLTAuOCwwLjctMS44LDEtMi45LDFzLTIuMS0wLjMtMi45LTFsLTMuNS0yLjljLTEuMS0xLTEuOC0yLjQtMS45LTMuOGwtMC40LTYuNGwwLjctNwoJYzAuMy0yLjMsMi4xLTMuOSw0LjQtMy45aDcuNGMyLjMsMCw0LjEsMS43LDQuNCwzLjlsMC43LDdMMjguMiwyOUMyOC4xLDMwLjUsMjcuNCwzMS45LDI2LjIsMzIuOXoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTI4LDE5LjloMS43YzAuNiwwLDEuMSwwLjUsMS4xLDEuMXYyLjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43TDI4LDE5LjlMMjgsMTkuOXoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTExLjYsMTkuOUg5LjljLTAuNiwwLTEuMSwwLjUtMS4xLDEuMXYyLjdjMCwxLjUsMS4yLDIuNywyLjcsMi43TDExLjYsMTkuOUwxMS42LDE5Ljl6Ii8+CjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMS41LDI3aC0xLjd2LTZsMC4xLDAuMkMyMC4xLDIzLjIsMjAuOCwyNS4zLDIxLjUsMjd6Ii8+CjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xNi42LDMwLjJsMi4yLTEuMWwxLjEsMC41bDEuMS0wLjVsMi4yLDEuMUwyMSwzMS40aC0yLjJMMTYuNiwzMC4yeiIvPgo8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjMuMSwzMC4yaC0wLjVDMjIuNywzMC4yLDIyLjksMzAuMywyMy4xLDMwLjJMMjMuMSwzMC4yeiIvPgo8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjIuNiwzMC4yaC02bDIuMSwxQzE5LjgsMzAuNywyMS4yLDMwLjIsMjIuNiwzMC4yeiIvPgo8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjEuNSwyMWwwLjctMC41YzAuNC0wLjMsMS4xLTAuNiwxLjgtMC42YzAuNywwLDEuMywwLjIsMS44LDAuNmwwLjcsMC41bC0wLjcsMC41Yy0wLjQsMC4zLTEuMSwwLjYtMS44LDAuNgoJYy0wLjcsMC0xLjMtMC4yLTEuOC0wLjZMMjEuNSwyMXoiLz4KPHBhdGggY2xhc3M9InN0NyIgZD0iTTI1LjcsMjAuNWMtMC40LTAuMy0xLjEtMC41LTEuNy0wLjVjLTAuNywwLTEuMywwLjItMS44LDAuNkwyMS41LDIxbDAuMiwwLjJDMjIuOSwyMC43LDI0LjMsMjAuNSwyNS43LDIwLjV6IgoJLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTEzLjMsMjFsMC43LTAuNWMwLjQtMC4zLDEuMS0wLjYsMS44LTAuNmMwLjcsMCwxLjMsMC4yLDEuOCwwLjZsMC43LDAuNWwtMC43LDAuNWMtMC40LDAuMy0xLjEsMC42LTEuOCwwLjYKCWMtMC43LDAtMS4zLTAuMi0xLjgtMC42TDEzLjMsMjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xNy40LDIwLjVjLTAuNS0wLjMtMS4xLTAuNS0xLjctMC41Yy0wLjcsMC0xLjMsMC4yLTEuOCwwLjZMMTMuMywyMWwwLjMsMC4yQzE0LjcsMjAuNywxNi4xLDIwLjUsMTcuNCwyMC41CglMMTcuNCwyMC41eiIvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjcuOCwxNS42Yy0wLjEtMS4yLTAuOC0yLjQtMS43LTMuMXYwLjFsMC44LDcuNmwtMC40LDdjLTAuMSwxLjctMC45LDMuMS0yLjEsNC4ybC0zLjgsMy4xCgljLTEsMC45LTIuNCwxLjMtMy44LDEuMWwwLjEsMC4xYzEuNywxLjQsNC4xLDEuNCw1LjgsMGwzLjUtMi45YzEuMS0xLDEuOC0yLjQsMS45LTMuOGwwLjQtNi40TDI3LjgsMTUuNnoiLz4KPHBhdGggY2xhc3M9InN0OCIgZD0iTTIuMyw2LjRoNS42VjUuMkgxLjZDMS4zLDUuMiwxLDUuNSwxLDUuOHY2LjNoMS4zVjYuNHoiLz4KPHBhdGggY2xhc3M9InN0OCIgZD0iTTM3LjQsMTIuMWgxLjNWNS44YzAtMC4zLTAuMy0wLjYtMC42LTAuNmgtNi4zdjEuM2g1LjZWMTIuMXoiLz4KPHBhdGggY2xhc3M9InN0OCIgZD0iTTM3LjQsMzYuNWgtNS42djEuM0gzOGMwLjMsMCwwLjYtMC4zLDAuNi0wLjZ2LTYuM2gtMS4zdjUuNkgzNy40eiIvPgo8cGF0aCBjbGFzcz0ic3Q4IiBkPSJNMS42LDM3LjhoNi4zdi0xLjNIMi4zdi01LjZIMXY2LjNDMSwzNy41LDEuMywzNy44LDEuNiwzNy44eiIvPgo8L3N2Zz4K"}}init(e){this.runtime=e.runtime,this.runtime.ioDevices&&this._loop()}static get DIMENSIONS(){return[480,360]}projectStarted(){this.setTransparency(this.globalVideoTransparency),this.toggleVideo(this.globalVideoState)}convertCoordsToScratch({x:e,y:t}){return{x:e-l.DIMENSIONS[0]/2,y:l.DIMENSIONS[1]/2-t}}async _loop(){for(;;){const e=this.runtime.ioDevices.video.getFrame({format:"image-data",dimensions:l.DIMENSIONS}),t=+new Date;e&&(this.affdexState=await this.estimateAffdexOnImage(e));const i=(+new Date-t)/4;await new Promise((e=>setTimeout(e,i)))}}isConnected(){return this.hasResult}async estimateAffdexOnImage(e){const t=await this.ensureAffdexLoaded(e);return t.process(e,0),new Promise(((e,i)=>{const o=function(i,a,s){t.removeEventListener("onImageResultsSuccess",o),i.length<1?e(null):e(i[0])};t.addEventListener("onImageResultsSuccess",o)}))}async ensureAffdexLoaded(e){if(this.affdexDetector)return this.affdexDetector;const i=await t.untilExternalGlobalVariableLoaded("https://download.affectiva.com/js/3.2.1/affdex.js","affdex"),o=new Promise(((t,o)=>{const a=l.DIMENSIONS[0],s=l.DIMENSIONS[1],u=i.FaceDetectorMode.LARGE_FACES,r=new i.PhotoDetector(e,a,s,u);r.detectAllEmotions(),r.detectAllExpressions(),r.start(),this.affdexDetector=r,r.addEventListener("onInitializeSuccess",t)}));return await o,this.affdexDetector}goToPart(e,t){if(!this.affdexState||!this.affdexState.featurePoints)return;const i=this.affdexState.featurePoints[e],{x:o,y:a}=this.convertCoordsToScratch(i);t.target.setXY(o,a,!1)}isExpression(e){return!(!this.affdexState||!this.affdexState.expressions)&&this.affdexState.expressions[e]>.5}expressionAmount(e){return this.affdexState&&this.affdexState.expressions?u(this.affdexState.expressions[e]):0}isTopEmotion(e,t){if(!this.affdexState||!this.affdexState.emotions)return!1;let i=-Number.MAX_VALUE,o=null;return t.forEach((e=>{console.log(e);const t=this.affdexState.emotions[e];console.log(t),t>i&&(i=t,o=e)})),console.log(o),e===o}emotionAmount(e){return this.affdexState&&this.affdexState.emotions?u(this.affdexState.emotions[e]):0}toggleVideo(e){if(e===o)return this.runtime.ioDevices.video.disableVideo();this.runtime.ioDevices.video.enableVideo(),this.runtime.ioDevices.video.mirror=e===a}setTransparency(e){const t=Math.max(Math.min(e,100),0);this.runtime.ioDevices.video.setPreviewGhost(t)}defineBlocks(){this.globalVideoState=a,this.globalVideoTransparency=50,this.projectStarted();const e=[{text:"left ear",value:0},{text:"left chin",value:1},{text:"chin",value:2},{text:"right chin",value:3},{text:"right ear",value:4},{text:"left outer eyebrow",value:5},{text:"left eyebrow",value:6},{text:"left inner eyebrow",value:7},{text:"right inner eyebrow",value:8},{text:"right eyebrow",value:9},{text:"right outer eyebrow",value:10},{text:"nose bridge",value:11},{text:"nose tip",value:12},{text:"left nostril",value:13},{text:"nose tip",value:14},{text:"right nostril",value:15},{text:"left outer eye crease",value:16},{text:"left inner eye crease",value:17},{text:"right inner eye crease",value:18},{text:"right outer eye crease",value:19},{text:"left mouth crease",value:20},{text:"left upper lip point",value:21},{text:"upper lip",value:22},{text:"right upper lip point",value:23},{text:"right mouth crease",value:24},{text:"right lower lip point",value:25},{text:"lower lip",value:26},{text:"left lower lip point",value:27},{text:"upper lip bottom",value:28},{text:"lower lip top",value:29},{text:"left upper eyelid",value:30},{text:"left lower eyelid",value:31},{text:"right upper eyelid",value:32},{text:"right lower eyelid",value:33}],u=[{text:"smile",value:"smile"},{text:"mouth open",value:"mouthOpen"},{text:"eye closure",value:"eyeClosure"},{text:"eyebrow raise",value:"browRaise"},{text:"whistling",value:"lipPucker"},{text:"eye widening",value:"eyeWiden"},{text:"eyebrow furrow",value:"browFurrow"},{text:"nose wrinkle",value:"noseWrinkle"},{text:"upper lip raise",value:"upperLipRaise"},{text:"lip corner pull",value:"lipCornerDepressor"},{text:"chin raise",value:"chinRaise"},{text:"smirk",value:"smirk"},{text:"attention",value:"attention"},{text:"eyelid tighten",value:"lidTighten"},{text:"jaw drop",value:"jawDrop"},{text:"cheek dimple",value:"dimpler"},{text:"cheek raise",value:"cheekRaise"},{text:"lip stretch",value:"lipStretch"}],l=u.map((e=>e.value)),r=[{text:"joyful",value:"joy"},{text:"sad",value:"sadness"},{text:"disgusted",value:"disgust"},{text:"angry",value:"anger"},{text:"fearful",value:"fear"}],n=r.map((e=>e.value)),c=r.concat([{text:"contempt",value:"contempt"},{text:"surprise",value:"surprise"},{text:"valence",value:"valence"},{text:"engagement",value:"engagement"}]).map((e=>e.value));return{goToFacePartCommand:()=>i.affdexGoToPart({type:t.BlockType.Command,arg:{type:t.ArgumentType.Number,options:e},text:e=>`go to ${e}`,operation:(e,t)=>{this.goToPart(e,t)}}),whenExpressionDetectedHat:()=>i.affdexWhenExpression({type:t.BlockType.Hat,arg:{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:u,handler:e=>l.includes(e)?e:"smile"}},text:e=>`when ${e} detected`,operation:e=>this.isExpression(e)}),amountOfExpressionDetectedReport:()=>i.affdexExpressionAmount({type:t.BlockType.Reporter,arg:{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:u,handler:e=>l.includes(e)?e:"smile"}},text:e=>`amount of ${e}`,operation:e=>this.expressionAmount(e)}),isExpressionReport:()=>i.affdexIsExpression({type:t.BlockType.Boolean,arg:{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:u,handler:e=>l.includes(e)?e:"smile"}},text:e=>`expressing ${e}`,operation:e=>this.isExpression(e)}),whenFeelingDetectedHat:()=>i.affdexWhenEmotion({type:t.BlockType.Hat,arg:{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:r,handler:e=>n.includes(e)?e:"joy"}},text:e=>`when ${e} feeling detected`,operation:e=>this.isTopEmotion(e,r)}),levelOfFeelingReport:()=>i.affdexEmotionAmount({type:t.BlockType.Reporter,arg:{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:c,handler:e=>c.includes(e)?e:"joy"}},text:e=>`level of ${e}`,operation:e=>this.emotionAmount(e)}),isFeelingReport:()=>i.affdexIsTopEmotion({type:t.BlockType.Boolean,arg:{type:t.ArgumentType.String,options:{acceptsReporters:!0,items:r,handler:e=>n.includes(e)?e:"joy"}},text:e=>`feeling ${e}`,operation:e=>this.isTopEmotion(e,r)}),videoToggleBlock:()=>i.videoToggle({type:t.BlockType.Command,arg:{type:t.ArgumentType.Number,options:{acceptsReporters:!0,items:[{text:"off",value:o},{text:"on",value:a},{text:"on and flipped",value:s}],handler:e=>Math.min(Math.max(e,o),s)}},text:e=>`turn video ${e}`,operation:e=>{this.toggleVideo(e)}}),setVideoTransparencyBlock:()=>i.setVideoTransparency({type:t.BlockType.Command,arg:{type:t.ArgumentType.Number,defaultValue:50},text:e=>`set video transparency to ${e}`,operation:e=>{this.setTransparency(e)}})}}}return e.Extension=l,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=poseFace.js.map
