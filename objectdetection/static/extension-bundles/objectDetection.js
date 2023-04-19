var objectDetection=function(e,t){"use strict";function n(e,t,n,a,r,i){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,s=a.kind,l="getter"===s?"get":"setter"===s?"set":"value",p=!t&&e?a.static?e:e.prototype:null,u=t||(p?Object.getOwnPropertyDescriptor(p,a.name):{}),d=!1,m=n.length-1;m>=0;m--){var h={};for(var f in a)h[f]="access"===f?{}:a[f];for(var f in a.access)h.access[f]=a.access[f];h.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");i.push(o(e||null))};var x=(0,n[m])("accessor"===s?{get:u.get,set:u.set}:u[l],h);if("accessor"===s){if(void 0===x)continue;if(null===x||"object"!=typeof x)throw new TypeError("Object expected");(c=o(x.get))&&(u.get=c),(c=o(x.set))&&(u.set=c),(c=o(x.init))&&r.push(c)}else(c=o(x))&&("field"===s?r.push(c):u[l]=c)}p&&Object.defineProperty(p,a.name,u),d=!0}function a(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function c(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))}const r={name:"Object Detection",description:"Detects and identifies the object shown!",iconURL:"Typescript_logo.png",insetIconURL:"typescript-logo.svg"};var i=(()=>{var e;let i,o,c,s=[];return e=class extends(t.extension(r,"toggleVideoBlock","setTransparencyBlock")){constructor(){super(...arguments),this.exampleField=void function(e,t,n){for(var a=arguments.length>2,r=0;r<t.length;r++)n=a?t[r].call(e,n):t[r].call(e)}(this,s)}init(e){this.exampleField=0}exampleReporter(){return++this.exampleField}exampleCommand(e,t){alert(`This is a command! Here's what it received: ${e} and ${t}`)}exampleHat(e,t){return a(this,void 0,void 0,(function*(){return t.stackFrame.isLoop===e}))}},i=[t.block({type:"reporter",text:"This increments an internal field and then reports it's value"})],o=[t.block((e=>({type:t.BlockType.Command,text:(e,t)=>`This is the block's display text with inputs here --\x3e ${e} and here --\x3e ${t}`,args:[t.ArgumentType.String,{type:t.ArgumentType.Number,defaultValue:e.exampleField}]})))],c=[t.block({type:"hat",text:e=>`Should the below block execute: ${e}`,arg:"Boolean"})],n(e,null,i,{kind:"method",name:"exampleReporter",static:!1,private:!1,access:{has:e=>"exampleReporter"in e,get:e=>e.exampleReporter}},null,s),n(e,null,o,{kind:"method",name:"exampleCommand",static:!1,private:!1,access:{has:e=>"exampleCommand"in e,get:e=>e.exampleCommand}},null,s),n(e,null,c,{kind:"method",name:"exampleHat",static:!1,private:!1,access:{has:e=>"exampleHat"in e,get:e=>e.exampleHat}},null,s),e})();return e.Extension=i,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=objectDetection.js.map
