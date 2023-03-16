var complexprg95grpexample=function(e,t){"use strict";function n(){}function o(e){return e()}function r(){return Object.create(null)}function l(e){e.forEach(o)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t){e.appendChild(t)}function a(e,t,n){const o=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!o.getElementById(t)){const e=d("style");e.id=t,e.textContent=n,function(e,t){c(e.head||e,t),t.sheet}(o,e)}}function u(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function h(){return g(" ")}function f(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $(e,t,n,o){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let A;function b(e){A=e}const v=[],k=[],T=[],w=[],C=Promise.resolve();let N=!1;function _(e){T.push(e)}const E=new Set;let B=0;function I(){if(0!==B)return;const e=A;do{try{for(;B<v.length;){const e=v[B];B++,b(e),R(e.$$)}}catch(e){throw v.length=0,B=0,e}for(b(null),v.length=0,B=0;k.length;)k.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];E.has(t)||(E.add(t),t())}T.length=0}while(v.length);for(;w.length;)w.pop()();N=!1,E.clear(),b(e)}function R(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const O=new Set;function U(e,t){-1===e.$$.dirty[0]&&(v.push(e),N||(N=!0,C.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function j(e,t,s,c,a,u,m,d=[-1]){const g=A;b(e);const h=e.$$={fragment:null,ctx:[],props:u,update:n,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:r(),dirty:d,skip_bound:!1,root:t.target||g.$$.root};m&&m(h.root);let f=!1;if(h.ctx=s?s(e,t.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),f&&U(e,t)),n})):[],h.update(),f=!0,l(h.before_update),h.fragment=!!c&&c(h.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);h.fragment&&h.fragment.l(e),e.forEach(p)}else h.fragment&&h.fragment.c();t.intro&&((y=e.$$.fragment)&&y.i&&(O.delete(y),y.i(x))),function(e,t,n,r){const{fragment:s,after_update:c}=e.$$;s&&s.m(t,n),r||_((()=>{const t=e.$$.on_mount.map(o).filter(i);e.$$.on_destroy?e.$$.on_destroy.push(...t):l(t),e.$$.on_mount=[]})),c.forEach(_)}(e,t.target,t.anchor,t.customElement),I()}var y,x;b(g)}class S{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=n}$on(e,t){if(!i(t))return n;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function D(e){let t;return{c(){t=d("div"),t.innerHTML='<img src="https://y.yarn.co/e1c7becd-fc72-40cb-8866-2afac14e2712_text.gif" alt="Gif of &#39;Its done&#39; clip from the movie Dune"/>',$(t,"width","400px;")},m(e,n){u(e,t,n)},p:n,i:n,o:n,d(e){e&&p(t)}}}function M(e,t,n,o,r,l){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,c=o.kind,a="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?o.static?e:e.prototype:null,p=t||(u?Object.getOwnPropertyDescriptor(u,o.name):{}),m=!1,d=n.length-1;d>=0;d--){var g={};for(var h in o)g[h]="access"===h?{}:o[h];for(var h in o.access)g.access[h]=o.access[h];g.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");l.push(i(e||null))};var f=(0,n[d])("accessor"===c?{get:p.get,set:p.set}:p[a],g);if("accessor"===c){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(s=i(f.get))&&(p.get=s),(s=i(f.set))&&(p.set=s),(s=i(f.init))&&r.push(s)}else(s=i(f))&&("field"===c?r.push(s):p[a]=s)}u&&Object.defineProperty(u,o.name,p),m=!0}const H={0:"leopard",1:"tiger",2:"gorilla",3:"monkey",4:"pig"},P={0:"🐆",1:"🐅",2:"🦍",3:"🐒",4:"🐖"};var L=(()=>{var e;let n,o,r,l,i,s,c,a,u,p,m,d,g,h,f=[];return e=class e extends(t.extension({name:"Realistic Typescript-Based Extension",description:"Demonstrating how typescript can be used to write a realistic extension",iconURL:"Typescript_logo.png",insetIconURL:"typescript-logo.svg"},"ui","customSaveData","customArguments")){constructor(){super(...arguments,...["Realistic Typescript-Based Extension","complexprg95grpexample","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c3R5bGU+LnN0MHtmaWxsOiMwMDdhY2N9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCAyMDBWMGg0MDB2NDAwSDAiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNODcuNyAyMDAuN1YyMTdoNTJ2MTQ4aDM2LjlWMjE3aDUydi0xNmMwLTkgMC0xNi4zLS40LTE2LjUgMC0uMy0zMS43LS40LTcwLjItLjRsLTcwIC4zdjE2LjRsLS4zLS4xek0zMjEuNCAxODRjMTAuMiAyLjQgMTggNyAyNSAxNC4zIDMuNyA0IDkuMiAxMSA5LjYgMTIuOCAwIC42LTE3LjMgMTIuMy0yNy44IDE4LjgtLjQuMy0yLTEuNC0zLjYtNC01LjItNy40LTEwLjUtMTAuNi0xOC44LTExLjItMTItLjgtMjAgNS41LTIwIDE2IDAgMy4yLjYgNSAxLjggNy42IDIuNyA1LjUgNy43IDguOCAyMy4yIDE1LjYgMjguNiAxMi4zIDQxIDIwLjQgNDguNSAzMiA4LjUgMTMgMTAuNCAzMy40IDQuNyA0OC43LTYuNCAxNi43LTIyIDI4LTQ0LjMgMzEuNy03IDEuMi0yMyAxLTMwLjUtLjMtMTYtMy0zMS4zLTExLTQwLjctMjEuMy0zLjctNC0xMC44LTE0LjctMTAuNC0xNS40bDMuOC0yLjQgMTUtOC43IDExLjMtNi42IDIuNiAzLjVjMy4zIDUuMiAxMC43IDEyLjIgMTUgMTQuNiAxMyA2LjcgMzAuNCA1LjggMzktMiAzLjctMy40IDUuMy03IDUuMy0xMiAwLTQuNi0uNy02LjctMy0xMC4yLTMuMi00LjQtOS42LTgtMjcuNi0xNi0yMC43LTguOC0yOS41LTE0LjQtMzcuNy0yMy00LjctNS4yLTktMTMuMy0xMS0yMC0xLjUtNS44LTItMjAtLjYtMjUuNyA0LjMtMjAgMTkuNC0zNCA0MS0zOCA3LTEuNCAyMy41LS44IDMwLjQgMWwtLjIuMnoiLz48L3N2Zz4="]),this.lhsOptions=void function(e,t,n){for(var o=arguments.length>2,r=0;r<t.length;r++)n=o?t[r].call(e,n):t[r].call(e)}(this,f),this.collection=[2],this.state=0,this.saveDataHandler=new t.SaveDataHandler({Extension:e,onSave:({collection:e,state:t})=>({collection:e,state:t}),onLoad:(e,n)=>t.copyTo({target:e,source:n})})}getAnimalCollectionEmojis(){return this.collection.map((e=>P[e]))}addAnimalToCollection(e){return this.collection.push(e)}init(){this.lhsOptions=[3,4,5],this.animals=Object.entries(P).map((([e,t])=>({value:parseInt(e),text:t}))),this.getAnimalCollection=()=>this.collection.map((e=>({text:P[e],value:e})))}getID(){return this.id}getColorChannel(e,t){return e[t]}add(e,t){return e+t}sumMatrix(e,t){switch(t){case 0:return e.map((e=>e.reduce(((e,t)=>e+Number(t)),0))).join("\n");case 1:const t=[0,0,0,0,0];return e.forEach((e=>e.forEach(((e,n)=>{t[n]+=Number(e)})))),t.join(" ");case 2:return e.map((e=>e.reduce(((e,t)=>e+Number(t)),0))).reduce(((e,t)=>e+t),0).toString()}}selectNote(e){return e}selectAngle(e){return e}increment(){return++this.state}animalName(e){return H[e]}animalHabit(e){switch(e){case 0:return"Africa and Asia";case 1:return"Asia";case 2:return"Africa";case 3:return"Africa, Asia, and South America";case 4:return"Almost everywhere (except Antartica)"}}addAnimalToCollectionAndAlert(e){this.addAnimalToCollection(e),this.openUI("Alert")}chooseBetweenAnimals(e){return H[e]}showAnimalCollectionUI(){this.openUI("Animals","Here's your animal collection")}multiplyUsingThis(e,t,n){return e*t}multiplyUsingSelf(e,t,n){return e*t}},n=[t.block({type:t.BlockType.Reporter,text:"My Extension ID is"})],o=[t.block({type:t.BlockType.Reporter,args:[t.ArgumentType.Color,{type:t.ArgumentType.String,options:[{value:"r",text:"red"},{value:"g",text:"green"},{value:"b",text:"blue"}]}],text:(e,t)=>`Report ${t} of ${e}`})],r=[t.block((e=>({type:t.BlockType.Reporter,args:[{type:t.ArgumentType.Number,defaultValue:3,options:e.lhsOptions},{type:t.ArgumentType.Number}],text:(e,t)=>`Add ${e} to ${t}`})))],l=[t.block({type:"reporter",args:[t.ArgumentType.Matrix,{type:t.ArgumentType.Number,options:[{value:0,text:"rows"},{value:1,text:"columns"},{value:2,text:"rows and columns"}]}],text:(e,t)=>`Sum ${t} of ${e}`})],i=[t.block({type:t.BlockType.Reporter,arg:t.ArgumentType.Note,text:e=>`Pick note ${e}`})],s=[t.block({type:t.BlockType.Reporter,arg:t.ArgumentType.Angle,text:e=>`Pick angle ${e}`})],c=[t.block({type:t.BlockType.Reporter,text:"Increment"})],a=[t.block((e=>({type:t.BlockType.Reporter,text:e=>`This is a ${e}`,arg:{type:t.ArgumentType.Number,options:{items:e.animals,acceptsReporters:!0,handler:e=>{switch(e){case"0":case"1":case"2":case"3":case"4":return e;default:return alert(`You silly goose! ${e} is not an animal.`),0}}}}})))],u=[t.block((e=>({type:t.BlockType.Reporter,arg:{type:t.ArgumentType.Number,options:e.animals},text:e=>`Where does the ${e} live?`})))],p=[t.block((e=>({type:t.BlockType.Command,arg:e.makeCustomArgument({component:"AnimalArgument",initial:{value:0,text:H[0]}}),text:e=>`Add ${e} to collection`})))],m=[t.block((e=>({type:t.BlockType.Reporter,arg:{type:t.ArgumentType.Number,options:e.getAnimalCollection},text:e=>`Animals in collection: ${e}`})))],d=[t.buttonBlock("Show Animal Collection")],g=[t.block((function(){return{type:t.BlockType.Reporter,args:[{type:t.ArgumentType.Number,defaultValue:3,options:this.lhsOptions},t.ArgumentType.Number],text:(e,t)=>`${e} X ${t}`}}))],h=[t.block((e=>({type:t.BlockType.Reporter,text:(e,t)=>`${e} X ${t}`,args:[{type:t.ArgumentType.Number,defaultValue:3,options:e.lhsOptions},t.ArgumentType.Number]})))],M(e,null,n,{kind:"method",name:"getID",static:!1,private:!1,access:{has:e=>"getID"in e,get:e=>e.getID}},null,f),M(e,null,o,{kind:"method",name:"getColorChannel",static:!1,private:!1,access:{has:e=>"getColorChannel"in e,get:e=>e.getColorChannel}},null,f),M(e,null,r,{kind:"method",name:"add",static:!1,private:!1,access:{has:e=>"add"in e,get:e=>e.add}},null,f),M(e,null,l,{kind:"method",name:"sumMatrix",static:!1,private:!1,access:{has:e=>"sumMatrix"in e,get:e=>e.sumMatrix}},null,f),M(e,null,i,{kind:"method",name:"selectNote",static:!1,private:!1,access:{has:e=>"selectNote"in e,get:e=>e.selectNote}},null,f),M(e,null,s,{kind:"method",name:"selectAngle",static:!1,private:!1,access:{has:e=>"selectAngle"in e,get:e=>e.selectAngle}},null,f),M(e,null,c,{kind:"method",name:"increment",static:!1,private:!1,access:{has:e=>"increment"in e,get:e=>e.increment}},null,f),M(e,null,a,{kind:"method",name:"animalName",static:!1,private:!1,access:{has:e=>"animalName"in e,get:e=>e.animalName}},null,f),M(e,null,u,{kind:"method",name:"animalHabit",static:!1,private:!1,access:{has:e=>"animalHabit"in e,get:e=>e.animalHabit}},null,f),M(e,null,p,{kind:"method",name:"addAnimalToCollectionAndAlert",static:!1,private:!1,access:{has:e=>"addAnimalToCollectionAndAlert"in e,get:e=>e.addAnimalToCollectionAndAlert}},null,f),M(e,null,m,{kind:"method",name:"chooseBetweenAnimals",static:!1,private:!1,access:{has:e=>"chooseBetweenAnimals"in e,get:e=>e.chooseBetweenAnimals}},null,f),M(e,null,d,{kind:"method",name:"showAnimalCollectionUI",static:!1,private:!1,access:{has:e=>"showAnimalCollectionUI"in e,get:e=>e.showAnimalCollectionUI}},null,f),M(e,null,g,{kind:"method",name:"multiplyUsingThis",static:!1,private:!1,access:{has:e=>"multiplyUsingThis"in e,get:e=>e.multiplyUsingThis}},null,f),M(e,null,h,{kind:"method",name:"multiplyUsingSelf",static:!1,private:!1,access:{has:e=>"multiplyUsingSelf"in e,get:e=>e.multiplyUsingSelf}},null,f),e})();function z(e,t,n){const o=e.slice();return o[6]=t[n],o}function V(e){let t,n,o,r,l=P[e[6]]+"";function i(){return e[5](e[6])}return{c(){t=d("button"),n=g(l)},m(e,l){u(e,t,l),c(t,n),o||(r=f(t,"click",i),o=!0)},p(t,n){e=t},d(e){e&&p(t),o=!1,r()}}}function F(e){let t,o,r,l,i,s=Object.keys(P),a=[];for(let t=0;t<s.length;t+=1)a[t]=V(z(e,s,t));return{c(){t=d("div");for(let e=0;e<a.length;e+=1)a[e].c();o=h(),r=d("center"),l=d("p"),i=g(e[1])},m(e,n){u(e,t,n);for(let e=0;e<a.length;e+=1)a[e].m(t,null);c(t,o),c(t,r),c(r,l),c(l,i)},p(e,[n]){if(1&n){let r;for(s=Object.keys(P),r=0;r<s.length;r+=1){const l=z(e,s,r);a[r]?a[r].p(l,n):(a[r]=V(l),a[r].c(),a[r].m(t,o))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}2&n&&x(i,e[1])},i:n,o:n,d(e){e&&p(t),m(a,e)}}}function X(e,t,n){let o,{setter:r}=t,{current:l}=t,{extension:i}=t,s=l.value;return e.$$set=e=>{"setter"in e&&n(2,r=e.setter),"current"in e&&n(3,l=e.current),"extension"in e&&n(4,i=e.extension)},e.$$.update=()=>{1&e.$$.dirty&&n(1,o=H[s]),7&e.$$.dirty&&r({value:s,text:o})},[s,o,r,l,i,e=>n(0,s=parseInt(e))]}function q(e){a(e,"svelte-o54gka",".container.svelte-o54gka{width:360px;padding:10px}button.svelte-o54gka{border-radius:10px;font-size:40px}")}function G(e,t,n){const o=e.slice();return o[6]=t[n],o}function W(e,t,n){const o=e.slice();return o[9]=t[n][0],o[10]=t[n][1],o}function Y(e){let t,n,o,r,l,i=e[10]+"",s=e[9]+"",a=e[10]>1?"s":"";return{c(){t=d("li"),n=g(i),o=h(),r=g(s),l=g(a)},m(e,i){u(e,t,i),c(t,n),c(t,o),c(t,r),c(t,l)},p(e,t){2&t&&i!==(i=e[10]+"")&&x(n,i),2&t&&s!==(s=e[9]+"")&&x(r,s),2&t&&a!==(a=e[10]>1?"s":"")&&x(l,a)},d(e){e&&p(t)}}}function J(e){let t,n,o,r,l,i,s=e[6].text+"";function a(){return e[4](e[6])}return{c(){t=d("button"),n=d("span"),n.textContent="+",o=g(s),r=h(),$(n,"font-size","20px"),y(t,"class","svelte-o54gka")},m(e,s){u(e,t,s),c(t,n),c(t,o),c(t,r),l||(i=f(t,"click",a),l=!0)},p(t,n){e=t,1&n&&s!==(s=e[6].text+"")&&x(o,s)},d(e){e&&p(t),l=!1,i()}}}function K(e){let o,r,l,i,s=[...e[1]],a=[];for(let t=0;t<s.length;t+=1)a[t]=Y(W(e,s,t));let g=e[0].animals,f=[];for(let t=0;t<g.length;t+=1)f[t]=J(G(e,g,t));return{c(){o=d("div"),r=d("ul");for(let e=0;e<a.length;e+=1)a[e].c();l=h(),i=d("center");for(let e=0;e<f.length;e+=1)f[e].c();y(o,"class","svelte-o54gka"),function(e,t,n){e.classList[n?"add":"remove"](t)}(o,"container",Q),$(o,"background-color",t.color.ui.white)},m(e,t){u(e,o,t),c(o,r);for(let e=0;e<a.length;e+=1)a[e].m(r,null);c(o,l),c(o,i);for(let e=0;e<f.length;e+=1)f[e].m(i,null)},p(e,[t]){if(2&t){let n;for(s=[...e[1]],n=0;n<s.length;n+=1){const o=W(e,s,n);a[n]?a[n].p(o,t):(a[n]=Y(o),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=s.length}if(5&t){let n;for(g=e[0].animals,n=0;n<g.length;n+=1){const o=G(e,g,n);f[n]?f[n].p(o,t):(f[n]=J(o),f[n].c(),f[n].m(i,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=g.length}},i:n,o:n,d(e){e&&p(o),m(a,e),m(f,e)}}}const Q=!0;function Z(e,n,o){let{extension:r}=n,{close:l}=n;const i=(e,...n)=>t.reactiveInvoke(o(0,r),e,n);let s;return e.$$set=e=>{"extension"in e&&o(0,r=e.extension),"close"in e&&o(3,l=e.close)},e.$$.update=()=>{1&e.$$.dirty&&(e=>{o(1,s=new Map);for(const e of i("getAnimalCollectionEmojis"))s.set(e,s.has(e)?s.get(e)+1:1)})()},[r,s,i,l,e=>i("addAnimalToCollection",e.value)]}return e.Alert=class extends S{constructor(e){super(),j(this,e,null,D,s,{})}},e.AnimalArgument=class extends S{constructor(e){super(),j(this,e,X,F,s,{setter:2,current:3,extension:4})}},e.Animals=class extends S{constructor(e){super(),j(this,e,Z,K,s,{extension:0,close:3},q)}},e.Extension=L,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=complexprg95grpexample.js.map
