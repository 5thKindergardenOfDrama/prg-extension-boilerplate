var selfieSegmentation=function(e,t){"use strict";function s(e,t,s,o,a,n){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var r,c=o.kind,l="getter"===c?"get":"setter"===c?"set":"value",d=!t&&e?o.static?e:e.prototype:null,h=t||(d?Object.getOwnPropertyDescriptor(d,o.name):{}),u=!1,m=s.length-1;m>=0;m--){var p={};for(var g in o)p[g]="access"===g?{}:o[g];for(var g in o.access)p.access[g]=o.access[g];p.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");n.push(i(e||null))};var f=(0,s[m])("accessor"===c?{get:h.get,set:h.set}:h[l],p);if("accessor"===c){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(r=i(f.get))&&(h.get=r),(r=i(f.set))&&(h.set=r),(r=i(f.init))&&a.push(r)}else(r=i(f))&&("field"===c?a.push(r):h[l]=r)}d&&Object.defineProperty(d,o.name,h),u=!0}function o(e,t,s,o){return new(s||(s=Promise))((function(a,n){function i(e){try{c(o.next(e))}catch(e){n(e)}}function r(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,r)}c((o=o.apply(e,t||[])).next())}))}const a={name:"Selfie Detector"};var n=(()=>{var e;let n,i,r,c,l,d,h=[];return e=class extends(t.extension(a,"video","drawable","addCostumes","setTransparencyBlock","toggleVideoBlock")){constructor(){super(...arguments,...["Selfie Detector","selfieSegmentation","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB8CAYAAABE3L+AAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO3dMWsUQRyG8edyZyEqqBgVJHiaUvA76CcQK3sbsbJVv0AquxSKjaWlpBS0thDBwkpFLTQgQRQtTIxnsVdJsnO3c//du3nfH1x1Ozube8JuYLJ7vdFohGlZ6voArH2OLsjRBTm6IEcXNKh7893HD+vARWC7ncOxTAeB+6tnh4/qNqqNDlwFTs/skKwNL4Ha6KnT+6fZHYu1ZCu1ga/pghxdkKMLcnRBji7I0QU5uiBHF+ToghxdkKMLcnRBqVW2HLvAZuD+SzUATkVPEGUTGFLFt8mdB95GThAZ/S/wJ3D/pfoRPUHkNX0J6Afuv1RHoifwH3KCHF2QowtydEGOLsjRBTm6IEcX5OiCHF2QowuKjL6DV9iaeB89QeQq21HgJtVqm01uOXqC6Ojrgfu3hnxNF+ToghxdkKMLcnRBji7I0QU5uiBHF+ToghxdkKMLcvTyJJs6enmS98JFLq1uAdfxenqbBsCbSTaK8hN4Erh/ayjy9D7AtyrPJV/TBTm6IEcX5OiCHF2QowtydEGOLsjRBTm6IEcX5OiCIlfZcq0AJzua+zt5T2I+Bxyf0bFM6wvwuW6DeY5+B7jR0dzPgcsZ4+8BV2ZzKFNbA27XbTDPp/cun2KRO3eXjzxP/tPKPEff6XDu35njt2dyFM0kP7d5jm5BHF2QowtydEGOLsjRBTm6IEcX5OiCHF2Qowty9L0dyxx/eCZH0UzyG5nneWk110OqteUmv9g94G7N+yPgwPj1/6rWEtXtwq/H+2lTH3ia2qjk6LeAXw3HXgKeZcx9DXicMT5Uyaf31Yyxuaf3Q5njQ5Ucve1T68IoObrtw9EFObogRxfk6IIcXZCjC3J0QY4uyNEFlRw959ak3NuSurwlK8nR95Ybvct72ZJKXlrdoHoS9bQPJd4FTmTOvUa1tNv259sDHoxf+yo5+oUO5x6OX11I/twln95VfUtt4OiCHF2QowtydEGOLsjRBTm6IEcX5OiCHF2QowtKRV/J2PeZjLEAy5njVSWfPp1aZdugWrWZ9puRe8BXqlt6m3pB9QjtLh8MvGj6wKvURr3RKKeLLSJf0wU5uiBHF+ToghxdkKMLcnRB/wBIt0+4Irv7NwAAAABJRU5ErkJggg=="]),this.model=void function(e,t,s){for(var o=arguments.length>2,a=0;a<t.length;a++)s=o?t[a].call(e,s):t[a].call(e)}(this,h),this.drawables=[],this.mode="mask",this.echoLength=0,this.processFrequencyMs=100}init(){return o(this,void 0,void 0,(function*(){var e;this.enableVideo(),this.model=yield(e=e=>this.processResults(e),o(void 0,void 0,void 0,(function*(){const s=new(yield t.untilExternalGlobalVariableLoaded("https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js","SelfieSegmentation"))({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@0.1/${e}`});return s.setOptions({modelSelection:1}),s.onResults(e),yield s.initialize(),s}))),this.start()}))}processResults(e){var t;const s=e.image,o=e.segmentationMask,{width:a,height:n}=o;null!==(t=this.imageHelper)&&void 0!==t||(this.imageHelper=((e,t)=>{const s=document.body.appendChild(document.createElement("canvas"));s.hidden=!0,s.width=e,s.height=t;const o=s.getContext("2d");return{colorIn:(a,n)=>(o.save(),o.clearRect(0,0,e,t),o.drawImage(a,0,0),o.globalCompositeOperation="source-in",o.fillStyle=n,o.fillRect(0,0,s.width,s.height),o.restore(),o.getImageData(0,0,e,t)),getMasked:(a,n)=>(o.save(),o.clearRect(0,0,e,t),o.drawImage(n,0,0),o.globalCompositeOperation="source-in",o.fillStyle="white",o.fillRect(0,0,s.width,s.height),o.drawImage(a,0,0),o.restore(),o.getImageData(0,0,e,t)),getDataURL(a){o.save(),o.clearRect(0,0,e,t),o.putImageData(a,0,0);const n=s.toDataURL("image/png");return o.restore(),n}}})(a,n));const{drawables:i,mode:r,imageHelper:c,color:l}=this,d="color"===r?c.colorIn(o,l):c.getMasked(s,o);if(this.lastProcessedImage=d,this.echoLength<=0)0===i.length?i.push(this.createDrawable(d)):i[0].update(d);else{for(;i.length>this.echoLength;)i.shift().destroy();i.forEach(((e,t,{length:s})=>e.setTransparency((s-t)/s*100))),i.push(this.createDrawable(d))}}start(){this.processing||(this.processing=!0,this.enableVideo(),this.loop())}stop(){this.processing=!1,this.clearDrawables()}loop(){return o(this,void 0,void 0,(function*(){for(;this.processing;){const e=this.getVideoFrame("canvas"),s=Date.now();e&&(yield this.model.send({image:e}));const o=Date.now()-s;yield t.untilTimePassed(this.processFrequencyMs-o)}}))}clearDrawables(){this.drawables.forEach((e=>e.destroy())),this.drawables=[]}setCostume({target:e}){return o(this,void 0,void 0,(function*(){this.addCostume(e,this.lastProcessedImage,"add and set")}))}setDisplayMode(e){this.clearDrawables(),this.mode=e}setNumberOfEchos(e){this.echoLength=Math.min(100,Math.max(e,1))}setColor(e){this.color=t.rgbToHex(e)}setFrameRate(e){this.processFrequencyMs=1e3/e}setProcessingState(e){"on"===e?this.start():this.stop()}},u=e,"symbol"==typeof(m="default")&&(m=m.description?"[".concat(m.description,"]"):""),Object.defineProperty(u,"name",{configurable:!0,value:p?"".concat(p," ",m):m}),n=[t.block({type:"command",text:"Set selfie image as costume"})],i=[t.block({type:"command",text:e=>`Set mode to ${e}`,arg:{type:"string",options:["color","mask"],defaultValue:"mask"}})],r=[t.block({type:"command",text:e=>`Set echo count to ${e}`,arg:{type:"number",defaultValue:0,options:{items:[0,1,2,4,8,10,25,50,100],acceptsReporters:!0,handler:e=>{const t=parseInt(`${e}`);return isNaN(t)?1:t}}}})],c=[t.block({type:"command",text:e=>`Set fill color to ${e}`,arg:"color"})],l=[t.block((e=>({type:"command",text:e=>`Set processing rate to ${e} fps`,arg:{type:"number",options:[60,30,10,2,1],defaultValue:1e3/e.processFrequencyMs}})))],d=[t.block({type:"command",text:e=>`Turn processing ${e}`,arg:{type:"string",options:["on","off"]}})],s(e,null,n,{kind:"method",name:"setCostume",static:!1,private:!1,access:{has:e=>"setCostume"in e,get:e=>e.setCostume}},null,h),s(e,null,i,{kind:"method",name:"setDisplayMode",static:!1,private:!1,access:{has:e=>"setDisplayMode"in e,get:e=>e.setDisplayMode}},null,h),s(e,null,r,{kind:"method",name:"setNumberOfEchos",static:!1,private:!1,access:{has:e=>"setNumberOfEchos"in e,get:e=>e.setNumberOfEchos}},null,h),s(e,null,c,{kind:"method",name:"setColor",static:!1,private:!1,access:{has:e=>"setColor"in e,get:e=>e.setColor}},null,h),s(e,null,l,{kind:"method",name:"setFrameRate",static:!1,private:!1,access:{has:e=>"setFrameRate"in e,get:e=>e.setFrameRate}},null,h),s(e,null,d,{kind:"method",name:"setProcessingState",static:!1,private:!1,access:{has:e=>"setProcessingState"in e,get:e=>e.setProcessingState}},null,h),e;var u,m,p})();return e.Extension=n,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=selfieSegmentation.js.map
