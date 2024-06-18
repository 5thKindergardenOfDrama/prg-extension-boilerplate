var selfieSegmentation=function(e,t){"use strict";function s(e,t,s,a,o,i){function n(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var r,c=a.kind,l="getter"===c?"get":"setter"===c?"set":"value",d=e?a.static?e:e.prototype:null,h=d?Object.getOwnPropertyDescriptor(d,a.name):{},m=!1,u=s.length-1;u>=0;u--){var p={};for(var g in a)p[g]="access"===g?{}:a[g];for(var g in a.access)p.access[g]=a.access[g];p.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");i.push(n(e||null))};var f=(0,s[u])("accessor"===c?{get:h.get,set:h.set}:h[l],p);if("accessor"===c){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(r=n(f.get))&&(h.get=r),(r=n(f.set))&&(h.set=r),(r=n(f.init))&&o.unshift(r)}else(r=n(f))&&("field"===c?o.unshift(r):h[l]=r)}d&&Object.defineProperty(d,a.name,h),m=!0}function a(e,t,s,a){return new(s||(s=Promise))((function(o,i){function n(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}c((a=a.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;const o={name:"Selfie Detector",tags:["Made by PRG"]};let i=(()=>{var e;let i,n,r,c,l,d,h=t.extension(o,"video","drawable","addCostumes","setTransparencyBlock","toggleVideoBlock"),m=[];return e=class extends h{constructor(){super(...arguments),this.model=function(e,t,s){for(var a=arguments.length>2,o=0;o<t.length;o++)s=a?t[o].call(e,s):t[o].call(e);return a?s:void 0}(this,m),this.drawables=[],this.mode="mask",this.echoLength=0,this.processFrequencyMs=100}init(){return a(this,void 0,void 0,(function*(){var e;this.enableVideo(),this.model=yield(e=e=>this.processResults(e),a(void 0,void 0,void 0,(function*(){const s=new(yield t.untilExternalGlobalVariableLoaded("https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js","SelfieSegmentation"))({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@0.1/${e}`});return s.setOptions({modelSelection:1}),s.onResults(e),yield s.initialize(),s}))),this.start()}))}processResults(e){var t;const s=e.image,a=e.segmentationMask,{width:o,height:i}=a;null!==(t=this.imageHelper)&&void 0!==t||(this.imageHelper=((e,t)=>{const s=document.body.appendChild(document.createElement("canvas"));s.hidden=!0,s.width=e,s.height=t;const a=s.getContext("2d");return{colorIn:(o,i)=>(a.save(),a.clearRect(0,0,e,t),a.drawImage(o,0,0),a.globalCompositeOperation="source-in",a.fillStyle=i,a.fillRect(0,0,s.width,s.height),a.restore(),a.getImageData(0,0,e,t)),getMasked:(o,i)=>(a.save(),a.clearRect(0,0,e,t),a.drawImage(i,0,0),a.globalCompositeOperation="source-in",a.fillStyle="white",a.fillRect(0,0,s.width,s.height),a.drawImage(o,0,0),a.restore(),a.getImageData(0,0,e,t)),getDataURL(o){a.save(),a.clearRect(0,0,e,t),a.putImageData(o,0,0);const i=s.toDataURL("image/png");return a.restore(),i}}})(o,i));const{drawables:n,mode:r,imageHelper:c,color:l}=this,d="color"===r?c.colorIn(a,l):c.getMasked(s,a);if(this.lastProcessedImage=d,this.echoLength<=0)0===n.length?n.push(this.createDrawable(d)):n[0].update(d);else{for(;n.length>this.echoLength;)n.shift().destroy();n.forEach(((e,t,{length:s})=>e.setTransparency((s-t)/s*100))),n.push(this.createDrawable(d))}}start(){this.processing||(this.processing=!0,this.enableVideo(),this.loop())}stop(){this.processing=!1,this.clearDrawables()}loop(){return a(this,void 0,void 0,(function*(){for(;this.processing;){const e=this.getVideoFrame("canvas"),s=Date.now();e&&(yield this.model.send({image:e}));const a=Date.now()-s;yield t.untilTimePassed(this.processFrequencyMs-a)}}))}clearDrawables(){this.drawables.forEach((e=>e.destroy())),this.drawables=[]}setCostume(e){return a(this,arguments,void 0,(function*({target:e}){this.addCostume(e,this.lastProcessedImage,"add and set")}))}setDisplayMode(e){this.clearDrawables(),this.mode=e}setNumberOfEchos(e){this.echoLength=Math.min(100,Math.max(e,1))}setColor(e){this.color=t.rgbToHex(e)}setFrameRate(e){this.processFrequencyMs=1e3/e}setProcessingState(e){"on"===e?this.start():this.stop()}},(()=>{var a;const o="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(a=h[Symbol.metadata])&&void 0!==a?a:null):void 0;i=[t.block({type:"command",text:"Set selfie image as costume"})],n=[t.block({type:"command",text:e=>`Set mode to ${e}`,arg:{type:"string",options:["color","mask"],defaultValue:"mask"}})],r=[t.block({type:"command",text:e=>`Set echo count to ${e}`,arg:{type:"number",defaultValue:0,options:{items:[0,1,2,4,8,10,25,50,100],acceptsReporters:!0,handler:e=>{const t=parseInt(`${e}`);return isNaN(t)?1:t}}}})],c=[t.block({type:"command",text:e=>`Set fill color to ${e}`,arg:"color"})],l=[t.block((e=>({type:"command",text:e=>`Set processing rate to ${e} fps`,arg:{type:"number",options:[60,30,10,2,1],defaultValue:1e3/e.processFrequencyMs}})))],d=[t.block({type:"command",text:e=>`Turn processing ${e}`,arg:{type:"string",options:["on","off"]}})],s(e,0,i,{kind:"method",name:"setCostume",static:!1,private:!1,access:{has:e=>"setCostume"in e,get:e=>e.setCostume},metadata:o},null,m),s(e,0,n,{kind:"method",name:"setDisplayMode",static:!1,private:!1,access:{has:e=>"setDisplayMode"in e,get:e=>e.setDisplayMode},metadata:o},null,m),s(e,0,r,{kind:"method",name:"setNumberOfEchos",static:!1,private:!1,access:{has:e=>"setNumberOfEchos"in e,get:e=>e.setNumberOfEchos},metadata:o},null,m),s(e,0,c,{kind:"method",name:"setColor",static:!1,private:!1,access:{has:e=>"setColor"in e,get:e=>e.setColor},metadata:o},null,m),s(e,0,l,{kind:"method",name:"setFrameRate",static:!1,private:!1,access:{has:e=>"setFrameRate"in e,get:e=>e.setFrameRate},metadata:o},null,m),s(e,0,d,{kind:"method",name:"setProcessingState",static:!1,private:!1,access:{has:e=>"setProcessingState"in e,get:e=>e.setProcessingState},metadata:o},null,m),o&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})})(),e})();return e.Extension=i,e}({},ExtensionFramework);//# sourceMappingURL=selfieSegmentation.js.map
