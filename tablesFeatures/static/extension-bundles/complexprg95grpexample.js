var complexprg95grpexample=function(e,t){"use strict";function n(){}function o(e){return e()}function r(){return Object.create(null)}function l(e){e.forEach(o)}function a(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function c(e,t,n){const o=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!o.getElementById(t)){const e=d("style");e.id=t,e.textContent=n,function(e,t){s(e.head||e,t),t.sheet}(o,e)}}function u(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function g(){return f(" ")}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){t=""+t,e.data!==t&&(e.data=t)}function v(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let x;function b(e){x=e}const A=[],k=[];let T=[];const w=[],C=Promise.resolve();let _=!1;function N(e){T.push(e)}const E=new Set;let S=0;function B(){if(0!==S)return;const e=x;do{try{for(;S<A.length;){const e=A[S];S++,b(e),I(e.$$)}}catch(e){throw A.length=0,S=0,e}for(b(null),A.length=0,S=0;k.length;)k.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];E.has(t)||(E.add(t),t())}T.length=0}while(A.length);for(;w.length;)w.pop()();_=!1,E.clear(),b(e)}function I(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const O=new Set;function R(e){return void 0!==e?.length?e:Array.from(e)}function j(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];T.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),T=t}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(A.push(e),_||(_=!0,C.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,i,s,c,u,p=null,d=[-1]){const f=x;b(e);const g=e.$$={fragment:null,ctx:[],props:u,update:n,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:r(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};p&&p(g.root);let h=!1;if(g.ctx=i?i(e,t.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&c(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),h&&U(e,t)),n})):[],g.update(),h=!0,l(g.before_update),g.fragment=!!s&&s(g.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);g.fragment&&g.fragment.l(e),e.forEach(m)}else g.fragment&&g.fragment.c();t.intro&&((y=e.$$.fragment)&&y.i&&(O.delete(y),y.i($))),function(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),N((()=>{const t=e.$$.on_mount.map(o).filter(a);e.$$.on_destroy?e.$$.on_destroy.push(...t):l(t),e.$$.on_mount=[]})),i.forEach(N)}(e,t.target,t.anchor),B()}var y,$;b(f)}class M{$$=void 0;$$set=void 0;$destroy(){j(this,1),this.$destroy=n}$on(e,t){if(!a(t))return n;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function P(e){c(e,"svelte-o54gka",".container.svelte-o54gka{width:360px;padding:10px}button.svelte-o54gka{border-radius:10px;font-size:40px}")}function H(e,t,n){const o=e.slice();return o[6]=t[n],o}function L(e,t,n){const o=e.slice();return o[9]=t[n][0],o[10]=t[n][1],o}function z(e){let t,n,o,r,l,a=e[10]+"",i=e[9]+"",c=e[10]>1?"s":"";return{c(){t=d("li"),n=f(a),o=g(),r=f(i),l=f(c)},m(e,a){u(e,t,a),s(t,n),s(t,o),s(t,r),s(t,l)},p(e,t){2&t&&a!==(a=e[10]+"")&&$(n,a),2&t&&i!==(i=e[9]+"")&&$(r,i),2&t&&c!==(c=e[10]>1?"s":"")&&$(l,c)},d(e){e&&m(t)}}}function V(e){let t,n,o,r,l,a,i=e[6].text+"";function c(){return e[4](e[6])}return{c(){t=d("button"),n=d("span"),n.textContent="+",o=f(i),r=g(),v(n,"font-size","20px"),y(t,"class","svelte-o54gka")},m(e,i){u(e,t,i),s(t,n),s(t,o),s(t,r),l||(a=h(t,"click",c),l=!0)},p(t,n){e=t,1&n&&i!==(i=e[6].text+"")&&$(o,i)},d(e){e&&m(t),l=!1,a()}}}function F(e){let o,r,l,a,i=R([...e[1]]),c=[];for(let t=0;t<i.length;t+=1)c[t]=z(L(e,i,t));let f=R(e[0].animals),h=[];for(let t=0;t<f.length;t+=1)h[t]=V(H(e,f,t));return{c(){o=d("div"),r=d("ul");for(let e=0;e<c.length;e+=1)c[e].c();l=g(),a=d("center");for(let e=0;e<h.length;e+=1)h[e].c();y(o,"class","svelte-o54gka"),function(e,t,n){e.classList.toggle(t,!!n)}(o,"container",G),v(o,"background-color",t.color.ui.white)},m(e,t){u(e,o,t),s(o,r);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(r,null);s(o,l),s(o,a);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(a,null)},p(e,[t]){if(2&t){let n;for(i=R([...e[1]]),n=0;n<i.length;n+=1){const o=L(e,i,n);c[n]?c[n].p(o,t):(c[n]=z(o),c[n].c(),c[n].m(r,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=i.length}if(5&t){let n;for(f=R(e[0].animals),n=0;n<f.length;n+=1){const o=H(e,f,n);h[n]?h[n].p(o,t):(h[n]=V(o),h[n].c(),h[n].m(a,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=f.length}},i:n,o:n,d(e){e&&m(o),p(c,e),p(h,e)}}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const G=!0;function X(e,n,o){let{extension:r}=n,{close:l}=n;const a=(e,...n)=>t.reactiveInvoke(o(0,r),e,n);let i;return e.$$set=e=>{"extension"in e&&o(0,r=e.extension),"close"in e&&o(3,l=e.close)},e.$$.update=()=>{1&e.$$.dirty&&(e=>{o(1,i=new Map);for(const e of a("getAnimalCollectionEmojis"))i.set(e,i.has(e)?i.get(e)+1:1)})()},[r,i,a,l,e=>a("addAnimalToCollection",e.value)]}function q(e,t,n,o,r,l){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var i,s=o.kind,c="getter"===s?"get":"setter"===s?"set":"value",u=!t&&e?o.static?e:e.prototype:null,m=t||(u?Object.getOwnPropertyDescriptor(u,o.name):{}),p=!1,d=n.length-1;d>=0;d--){var f={};for(var g in o)f[g]="access"===g?{}:o[g];for(var g in o.access)f.access[g]=o.access[g];f.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");l.push(a(e||null))};var h=(0,n[d])("accessor"===s?{get:m.get,set:m.set}:m[c],f);if("accessor"===s){if(void 0===h)continue;if(null===h||"object"!=typeof h)throw new TypeError("Object expected");(i=a(h.get))&&(m.get=i),(i=a(h.set))&&(m.set=i),(i=a(h.init))&&r.unshift(i)}else(i=a(h))&&("field"===s?r.unshift(i):m[c]=i)}u&&Object.defineProperty(u,o.name,m),p=!0}"function"==typeof SuppressedError&&SuppressedError;const W={0:"leopard",1:"tiger",2:"gorilla",3:"monkey",4:"pig"},Y={0:"🐆",1:"🐅",2:"🦍",3:"🐒",4:"🐖"};let J=(()=>{var e;let n,o,r,l,a,i,s,c,u,m,p,d,f,g,h=t.extension({name:"Realistic Typescript-Based Extension",description:"Demonstrating how typescript can be used to write a realistic extension",iconURL:"Typescript_logo.png",insetIconURL:"typescript-logo.svg",tags:["PRG Internal"]},"ui","customSaveData","customArguments"),y=[];return e=class extends h{constructor(){super(...arguments),this.lhsOptions=void function(e,t,n){for(var o=arguments.length>2,r=0;r<t.length;r++)n=o?t[r].call(e,n):t[r].call(e)}(this,y),this.collection=[2],this.state=0,this.saveDataHandler=new t.SaveDataHandler({Extension:e,onSave:({collection:e,state:t})=>({collection:e,state:t}),onLoad:(e,n)=>t.copyTo({target:e,source:n})})}getAnimalCollectionEmojis(){return this.collection.map((e=>Y[e]))}addAnimalToCollection(e){return this.collection.push(e)}init(){this.lhsOptions=[3,4,5],this.animals=Object.entries(Y).map((([e,t])=>({value:parseInt(e),text:t}))),this.getAnimalCollection=()=>this.collection.map((e=>({text:Y[e],value:e})))}getID(){return this.id}getColorChannel(e,t){return e[t]}add(e,t){return e+t}sumMatrix(e,t){switch(t){case 0:return e.map((e=>e.reduce(((e,t)=>e+Number(t)),0))).join("\n");case 1:const t=[0,0,0,0,0];return e.forEach((e=>e.forEach(((e,n)=>{t[n]+=Number(e)})))),t.join(" ");case 2:return e.map((e=>e.reduce(((e,t)=>e+Number(t)),0))).reduce(((e,t)=>e+t),0).toString()}}selectNote(e){return e}selectAngle(e){return e}increment(){return++this.state}animalName(e){return W[e]}animalHabit(e){switch(e){case 0:return"Africa and Asia";case 1:return"Asia";case 2:return"Africa";case 3:return"Africa, Asia, and South America";case 4:return"Almost everywhere (except Antartica)"}}addAnimalToCollectionAndAlert(e){this.addAnimalToCollection(e),this.openUI("Alert")}chooseBetweenAnimals(e){return W[e]}showAnimalCollectionUI(){this.openUI("Animals","Here's your animal collection")}multiplyUsingThis(e,t,n){return e*t}multiplyUsingSelf(e,t,n){return e*t}},(()=>{var $;const v="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==($=h[Symbol.metadata])&&void 0!==$?$:null):void 0;n=[t.block({type:t.BlockType.Reporter,text:"My Extension ID is"})],o=[t.block({type:t.BlockType.Reporter,args:[t.ArgumentType.Color,{type:t.ArgumentType.String,options:[{value:"r",text:"red"},{value:"g",text:"green"},{value:"b",text:"blue"}]}],text:(e,t)=>`Report ${t} of ${e}`})],r=[t.block((e=>({type:t.BlockType.Reporter,args:[{type:t.ArgumentType.Number,defaultValue:3,options:e.lhsOptions},{type:t.ArgumentType.Number}],text:(e,t)=>`Add ${e} to ${t}`})))],l=[t.block({type:"reporter",args:[t.ArgumentType.Matrix,{type:t.ArgumentType.Number,options:[{value:0,text:"rows"},{value:1,text:"columns"},{value:2,text:"rows and columns"}]}],text:(e,t)=>`Sum ${t} of ${e}`})],a=[t.block({type:t.BlockType.Reporter,arg:t.ArgumentType.Note,text:e=>`Pick note ${e}`})],i=[t.block({type:t.BlockType.Reporter,arg:t.ArgumentType.Angle,text:e=>`Pick angle ${e}`})],s=[t.block({type:t.BlockType.Reporter,text:"Increment"})],c=[t.block((e=>({type:t.BlockType.Reporter,text:e=>`This is a ${e}`,arg:{type:t.ArgumentType.Number,options:{items:e.animals,acceptsReporters:!0,handler:e=>{switch(e){case"0":case"1":case"2":case"3":case"4":return e;default:return alert(`You silly goose! ${e} is not an animal.`),0}}}}})))],u=[t.block((e=>({type:t.BlockType.Reporter,arg:{type:t.ArgumentType.Number,options:e.animals},text:e=>`Where does the ${e} live?`})))],m=[t.block((e=>({type:t.BlockType.Command,arg:e.makeCustomArgument({component:te,initial:{value:0,text:W[0]}}),text:e=>`Add ${e} to collection`})))],p=[t.block((e=>({type:t.BlockType.Reporter,arg:{type:t.ArgumentType.Number,options:e.getAnimalCollection},text:e=>`Animals in collection: ${e}`})))],d=[t.buttonBlock("Show Animal Collection")],f=[t.block((function(){return{type:t.BlockType.Reporter,args:[{type:t.ArgumentType.Number,defaultValue:3,options:this.lhsOptions},t.ArgumentType.Number],text:(e,t)=>`${e} X ${t}`}}))],g=[t.block((e=>({type:t.BlockType.Reporter,text:(e,t)=>`${e} X ${t}`,args:[{type:t.ArgumentType.Number,defaultValue:3,options:e.lhsOptions},t.ArgumentType.Number]})))],q(e,null,n,{kind:"method",name:"getID",static:!1,private:!1,access:{has:e=>"getID"in e,get:e=>e.getID},metadata:v},null,y),q(e,null,o,{kind:"method",name:"getColorChannel",static:!1,private:!1,access:{has:e=>"getColorChannel"in e,get:e=>e.getColorChannel},metadata:v},null,y),q(e,null,r,{kind:"method",name:"add",static:!1,private:!1,access:{has:e=>"add"in e,get:e=>e.add},metadata:v},null,y),q(e,null,l,{kind:"method",name:"sumMatrix",static:!1,private:!1,access:{has:e=>"sumMatrix"in e,get:e=>e.sumMatrix},metadata:v},null,y),q(e,null,a,{kind:"method",name:"selectNote",static:!1,private:!1,access:{has:e=>"selectNote"in e,get:e=>e.selectNote},metadata:v},null,y),q(e,null,i,{kind:"method",name:"selectAngle",static:!1,private:!1,access:{has:e=>"selectAngle"in e,get:e=>e.selectAngle},metadata:v},null,y),q(e,null,s,{kind:"method",name:"increment",static:!1,private:!1,access:{has:e=>"increment"in e,get:e=>e.increment},metadata:v},null,y),q(e,null,c,{kind:"method",name:"animalName",static:!1,private:!1,access:{has:e=>"animalName"in e,get:e=>e.animalName},metadata:v},null,y),q(e,null,u,{kind:"method",name:"animalHabit",static:!1,private:!1,access:{has:e=>"animalHabit"in e,get:e=>e.animalHabit},metadata:v},null,y),q(e,null,m,{kind:"method",name:"addAnimalToCollectionAndAlert",static:!1,private:!1,access:{has:e=>"addAnimalToCollectionAndAlert"in e,get:e=>e.addAnimalToCollectionAndAlert},metadata:v},null,y),q(e,null,p,{kind:"method",name:"chooseBetweenAnimals",static:!1,private:!1,access:{has:e=>"chooseBetweenAnimals"in e,get:e=>e.chooseBetweenAnimals},metadata:v},null,y),q(e,null,d,{kind:"method",name:"showAnimalCollectionUI",static:!1,private:!1,access:{has:e=>"showAnimalCollectionUI"in e,get:e=>e.showAnimalCollectionUI},metadata:v},null,y),q(e,null,f,{kind:"method",name:"multiplyUsingThis",static:!1,private:!1,access:{has:e=>"multiplyUsingThis"in e,get:e=>e.multiplyUsingThis},metadata:v},null,y),q(e,null,g,{kind:"method",name:"multiplyUsingSelf",static:!1,private:!1,access:{has:e=>"multiplyUsingSelf"in e,get:e=>e.multiplyUsingSelf},metadata:v},null,y),v&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:v})})(),e})();function K(e,t,n){const o=e.slice();return o[6]=t[n],o}function Q(e){let t,n,o;function r(){return e[5](e[6])}return{c(){t=d("button"),t.textContent=`${Y[e[6]]} `},m(e,l){u(e,t,l),n||(o=h(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&m(t),n=!1,o()}}}function Z(e){let t,o=R(Object.keys(Y)),r=[];for(let t=0;t<o.length;t+=1)r[t]=Q(K(e,o,t));return{c(){t=d("div");for(let e=0;e<r.length;e+=1)r[e].c()},m(e,n){u(e,t,n);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null)},p(e,[n]){if(1&n){let l;for(o=R(Object.keys(Y)),l=0;l<o.length;l+=1){const a=K(e,o,l);r[l]?r[l].p(a,n):(r[l]=Q(a),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=o.length}},i:n,o:n,d(e){e&&m(t),p(r,e)}}}function ee(e,t,n){let o,{setter:r}=t,{current:l}=t,{extension:a}=t,i=l.value;return e.$$set=e=>{"setter"in e&&n(1,r=e.setter),"current"in e&&n(2,l=e.current),"extension"in e&&n(3,a=e.extension)},e.$$.update=()=>{1&e.$$.dirty&&n(4,o=W[i]),19&e.$$.dirty&&r({value:i,text:o})},[i,r,l,a,o,e=>n(0,i=parseInt(e))]}var te=class extends M{constructor(e){super(),D(this,e,ee,Z,i,{setter:1,current:2,extension:3})}};function ne(e){let t;return{c(){t=d("div"),t.innerHTML='<img src="https://y.yarn.co/e1c7becd-fc72-40cb-8866-2afac14e2712_text.gif" alt="Gif of &#39;Its done&#39; clip from the movie Dune"/>',v(t,"width","400px;")},m(e,n){u(e,t,n)},p:n,i:n,o:n,d(e){e&&m(t)}}}return e.Alert=class extends M{constructor(e){super(),D(this,e,null,ne,i,{})}},e.AnimalArgument=te,e.Animals=class extends M{constructor(e){super(),D(this,e,X,F,i,{extension:0,close:3},P)}},e.Extension=J,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=complexprg95grpexample.js.map
