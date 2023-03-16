var extensionProbe=function(e,t){"use strict";function n(){}function o(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(o)}function r(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,a;function u(e,t){e.appendChild(t)}function d(e,t,n){const o=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!o.getElementById(t)){const e=g("style");e.id=t,e.textContent=n,function(e,t){u(e.head||e,t),t.sheet}(o,e)}}function f(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function m(){return h(" ")}function y(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t,n,o){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function b(e,t,n){e.classList[n?"add":"remove"](t)}function v(e){a=e}function w(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const k=[],E=[],I=[],j=[],_=Promise.resolve();let O=!1;function N(e){I.push(e)}const C=new Set;let R=0;function S(){if(0!==R)return;const e=a;do{try{for(;R<k.length;){const e=k[R];R++,v(e),T(e.$$)}}catch(e){throw k.length=0,R=0,e}for(v(null),k.length=0,R=0;E.length;)E.pop()();for(let e=0;e<I.length;e+=1){const t=I[e];C.has(t)||(C.add(t),t())}I.length=0}while(k.length);for(;j.length;)j.pop()();O=!1,C.clear(),v(e)}function T(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const A=new Set;let D;function B(e,t){e&&e.i&&(A.delete(e),e.i(t))}function P(e,t,n,o){if(e&&e.o){if(A.has(e))return;A.add(e),D.c.push((()=>{A.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}function L(e){e&&e.c()}function M(e,t,n,i){const{fragment:c,after_update:l}=e.$$;c&&c.m(t,n),i||N((()=>{const t=e.$$.on_mount.map(o).filter(r);e.$$.on_destroy?e.$$.on_destroy.push(...t):s(t),e.$$.on_mount=[]})),l.forEach(N)}function z(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(k.push(e),O||(O=!0,_.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,o,r,c,l,u,d=[-1]){const f=a;v(e);const g=e.$$={fragment:null,ctx:[],props:l,update:n,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:i(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};u&&u(g.root);let h=!1;if(g.ctx=o?o(e,t.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return g.ctx&&c(g.ctx[t],g.ctx[t]=i)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](i),h&&U(e,t)),n})):[],g.update(),h=!0,s(g.before_update),g.fragment=!!r&&r(g.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);g.fragment&&g.fragment.l(e),e.forEach(p)}else g.fragment&&g.fragment.c();t.intro&&B(e.$$.fragment),M(e,t.target,t.anchor,t.customElement),S()}v(f)}class F{$destroy(){z(this,1),this.$destroy=n}$on(e,t){if(!r(t))return n;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function J(e,t,n,o,i,s){function r(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,l=o.kind,a="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?o.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,o.name):{}),f=!1,p=n.length-1;p>=0;p--){var g={};for(var h in o)g[h]="access"===h?{}:o[h];for(var h in o.access)g.access[h]=o.access[h];g.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");s.push(r(e||null))};var m=(0,n[p])("accessor"===l?{get:d.get,set:d.set}:d[a],g);if("accessor"===l){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(c=r(m.get))&&(d.get=c),(c=r(m.set))&&(d.set=c),(c=r(m.init))&&i.push(c)}else(c=r(m))&&("field"===l?i.push(c):d[a]=c)}u&&Object.defineProperty(u,o.name,d),f=!0}const G="legacy.ts",H="legacyFullSupport",Y="legacyIncrementalSupport",K="GenericExample",Q=`export default class ${K} extends Extension<..., ...> { ... }`,V=["// generic extension\n"+Q,"vs","// configurable extension extension\nexport default class ConfigurableExample extends extension({...}) { ... }"].join("\n\n"),{legacyExtension:W,legacyDefinition:X,legacyBlock:Z,ReservedNames:ee}={legacyExtension:"legacyExtension",legacyDefinition:"legacyDefinition",legacyBlock:"legacyBlock",ReservedNames:"ReservedNames"},te={legacyExtension:W,legacyDefinition:X,ReservedNames:ee},ne=e=>`const { ${Object.values(te).join(", ")} } = ${e}<${K}>();`,oe={[W]:{description:"A decorator to apply to your extension in order to give it legacy support",snippet:["@legacyExtension()",Q].join("\n")},[X]:{description:"A utility function to assist in defining legacy blocks within your extension",snippet:"defineBlocks() {\n  // Assuming that the legacy extension defined a block with the name 'exampleLegacyBlock'\n  return {\n    exampleLegacyBlock: legacyBlock.exampleLegacyBlock({\n      operation: (x: number) => { ... },\n      argumentMethods: {  \n        ...\n        // See jsdoc documentation\n      }\n    })\n  }\n}"},[ee]:{description:"This member should not be used, but instead you can hover over it to identify names that have been 'reserved' by the legacy extension. \nThe names included within the 'blocks' property correspond to blocks your extension will have to define. \nYour class will be prohibited from defining members with the same name as any of these reserved names."}};var ie=(()=>{var e;let n,o,i=[];return e=class extends(t.extension({name:"Extension Probe",description:"(INTERNAL) Use this extension to probe the info of other estensions"},"ui")){constructor(){super(...arguments,...["Extension Probe","extensionProbe","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB8CAYAAABE3L+AAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO3dMWsUQRyG8edyZyEqqBgVJHiaUvA76CcQK3sbsbJVv0AquxSKjaWlpBS0thDBwkpFLTQgQRQtTIxnsVdJsnO3c//du3nfH1x1Ozube8JuYLJ7vdFohGlZ6voArH2OLsjRBTm6IEcXNKh7893HD+vARWC7ncOxTAeB+6tnh4/qNqqNDlwFTs/skKwNL4Ha6KnT+6fZHYu1ZCu1ga/pghxdkKMLcnRBji7I0QU5uiBHF+ToghxdkKMLcnRBqVW2HLvAZuD+SzUATkVPEGUTGFLFt8mdB95GThAZ/S/wJ3D/pfoRPUHkNX0J6Afuv1RHoifwH3KCHF2QowtydEGOLsjRBTm6IEcX5OiCHF2QowuKjL6DV9iaeB89QeQq21HgJtVqm01uOXqC6Ojrgfu3hnxNF+ToghxdkKMLcnRBji7I0QU5uiBHF+ToghxdkKMLcvTyJJs6enmS98JFLq1uAdfxenqbBsCbSTaK8hN4Erh/ayjy9D7AtyrPJV/TBTm6IEcX5OiCHF2QowtydEGOLsjRBTm6IEcX5OiCIlfZcq0AJzua+zt5T2I+Bxyf0bFM6wvwuW6DeY5+B7jR0dzPgcsZ4+8BV2ZzKFNbA27XbTDPp/cun2KRO3eXjzxP/tPKPEff6XDu35njt2dyFM0kP7d5jm5BHF2QowtydEGOLsjRBTm6IEcX5OiCHF2Qowty9L0dyxx/eCZH0UzyG5nneWk110OqteUmv9g94G7N+yPgwPj1/6rWEtXtwq/H+2lTH3ia2qjk6LeAXw3HXgKeZcx9DXicMT5Uyaf31Yyxuaf3Q5njQ5Ucve1T68IoObrtw9EFObogRxfk6IIcXZCjC3J0QY4uyNEFlRw959ak3NuSurwlK8nR95Ybvct72ZJKXlrdoHoS9bQPJd4FTmTOvUa1tNv259sDHoxf+yo5+oUO5x6OX11I/twln95VfUtt4OiCHF2QowtydEGOLsjRBTm6IEcX5OiCHF2QowtKRV/J2PeZjLEAy5njVSWfPp1aZdugWrWZ9puRe8BXqlt6m3pB9QjtLh8MvGj6wKvURr3RKKeLLSJf0wU5uiBHF+ToghxdkKMLcnRB/wBIt0+4Irv7NwAAAABJRU5ErkJggg=="]),this.extensionManager=void function(e,t,n){for(var o=arguments.length>2,i=0;i<t.length;i++)n=o?t[i].call(e,n):t[i].call(e)}(this,i),this.addedExtensions=[],this.defaultOption="Add an extension to probe it"}init({runtime:e,extensionManager:n}){this.extensionManager=n,e.addListener(t.RuntimeEvent.ExtensionAdded,(({name:e,id:t})=>{t!==this.id&&this.addedExtensions.push({text:e,value:t})}))}displayInfo(e){const t=this.getExtensionInfo(e);this.currentInfo=t,this.openUI("Info",`Info for ${t.name}`)}legacyProbe(e){const t=this.getExtensionInfo(e);t&&(ce(G,re(t)),this.openUI("Instructions","How to use legacy.ts"))}getExtension(e){if(e!==this.defaultOption)return this.extensionManager.getExtensionInstance(e);alert("You must load an extension and then select it's ID in order to probe it.")}getExtensionInfo(e){const t=this.getExtension(e);return t?se(t):void 0}getIDs(){return this.addedExtensions.length>0?this.addedExtensions:[this.defaultOption]}},n=[t.block((e=>({type:"command",text:e=>`Show info for ${e}`,arg:{type:t.ArgumentType.String,options:e.getIDs}})))],o=[t.block((e=>({type:"command",text:e=>`Get legacy support for ${e}`,arg:{type:t.ArgumentType.String,options:e.getIDs}})))],J(e,null,n,{kind:"method",name:"displayInfo",static:!1,private:!1,access:{has:e=>"displayInfo"in e,get:e=>e.displayInfo}},null,i),J(e,null,o,{kind:"method",name:"legacyProbe",static:!1,private:!1,access:{has:e=>"legacyProbe"in e,get:e=>e.legacyProbe}},null,i),e})();const se=e=>{const n=e.getInfo();return["blockIconURI","menuIconURI"].filter((e=>e in n)).forEach((e=>delete n[e])),n.blocks=n.blocks.map((e=>t.isString(e)?void 0:"blockType"in e?e:{...e,blockType:"command"})).filter(Boolean),n.menus&&(n.menus=Object.entries(n.menus).reduce(((e,[n,o])=>{if(!t.isString(o)){const e="acceptReporters";e in o||(o[e]=!1)}return e[n]=o,e}),{})),n},re=e=>{const t="legacy",n="info",o="export const",i=`import { ${t} } from "$common";`,s=`${o} ${n} = ${JSON.stringify(e,null,2)} as const;`,r=JSON.stringify({incrementalDevelopment:!0});return[i,s,[`${o} ${H} = ${t}(${n}).for;`,`${o} ${Y} = ${t}(${n}, ${r}).for;`].join("\n")].join("\n")},ce=(e,t)=>{const n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)};function le(e){d(e,"svelte-1mfppcc","button.svelte-1mfppcc{margin-top:0px}")}function ae(e){let t,o,i,s;return{c(){t=g("center"),o=g("button"),o.textContent="Copy Snippet",$(o,"class","svelte-1mfppcc")},m(n,r){f(n,t,r),u(t,o),i||(s=y(o,"click",e[4]),i=!0)},p:n,d(e){e&&p(t),i=!1,s()}}}function ue(e){let t,o,i,s;return{c(){t=g("center"),o=g("button"),o.textContent="Copy Snippet",$(o,"class","svelte-1mfppcc")},m(n,r){f(n,t,r),u(t,o),i||(s=y(o,"click",e[5]),i=!0)},p:n,d(e){e&&p(t),i=!1,s()}}}function de(e){let t,o,i,r,c,a,d,x,b,v,w,k,E="top"===e[1]&&ae(e),I=!0===e[1]&&ue(e);return{c(){var n,s;t=g("link"),o=g("script"),r=m(),E&&E.c(),c=m(),a=g("pre"),d=g("code"),x=h(e[0]),b=m(),I&&I.c(),v=h(""),$(t,"rel","stylesheet"),$(t,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs2015.min.css"),n=o.src,s=i="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js",l||(l=document.createElement("a")),l.href=s,n!==l.href&&$(o,"src","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"),$(d,"class","language-typescript")},m(n,i){u(document.head,t),u(document.head,o),f(n,r,i),E&&E.m(n,i),f(n,c,i),f(n,a,i),u(a,d),u(d,x),f(n,b,i),I&&I.m(n,i),f(n,v,i),w||(k=[y(t,"load",e[3]),y(o,"load",e[3])],w=!0)},p(e,[t]){"top"===e[1]?E?E.p(e,t):(E=ae(e),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),1&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(x,e[0]),!0===e[1]?I?I.p(e,t):(I=ue(e),I.c(),I.m(v.parentNode,v)):I&&(I.d(1),I=null)},i:n,o:n,d(e){p(t),p(o),e&&p(r),E&&E.d(e),e&&p(c),e&&p(a),e&&p(b),I&&I.d(e),e&&p(v),w=!1,s(k)}}}function fe(e,t,n){let{code:o}=t,{copyable:i=!0}=t;const s=e=>navigator.clipboard.writeText(e),r=()=>window.hljs?.highlightAll();w(r);return e.$$set=e=>{"code"in e&&n(0,o=e.code),"copyable"in e&&n(1,i=e.copyable)},[o,i,s,r,()=>s(o),()=>s(o)]}class pe extends F{constructor(e){super(),q(this,e,fe,de,c,{code:0,copyable:1},le)}}function ge(e){d(e,"svelte-qmu6lz",".container.svelte-qmu6lz{padding:30px;height:80vh;width:80vw;overflow:scroll}")}function he(e){let n,o,i;return o=new pe({props:{code:JSON.stringify(e[0].currentInfo??"ERROR: No info",null,4)}}),{c(){n=g("div"),L(o.$$.fragment),$(n,"class","svelte-qmu6lz"),b(n,"container",e[1]),x(n,"background-color",t.color.ui.white),x(n,"color",t.color.text.primary)},m(e,t){f(e,n,t),M(o,n,null),i=!0},p(e,[t]){const n={};1&t&&(n.code=JSON.stringify(e[0].currentInfo??"ERROR: No info",null,4)),o.$set(n)},i(e){i||(B(o.$$.fragment,e),i=!0)},o(e){P(o.$$.fragment,e),i=!1},d(e){e&&p(n),z(o)}}}function me(e,n,o){let{extension:i}=n,{close:s}=n;const r=t.activeClass;return e.$$set=e=>{"extension"in e&&o(0,i=e.extension),"close"in e&&o(2,s=e.close)},[i,r,s]}function ye(e){d(e,"svelte-7ob0w7",".container.svelte-7ob0w7{padding:30px;height:80vh;width:80vw;overflow:scroll}.codelike.svelte-7ob0w7{background-color:black;color:rgb(210, 134, 80);padding:3px;font-family:monospace}")}function $e(e,t,n){const o=e.slice();return o[4]=t[n][0],o[5]=t[n][1].description,o[6]=t[n][1].snippet,o}function xe(e){let t,o,i,s,r,c,l,a,d,y=e[4]+"",$=e[5]+"",x=e[6]&&function(e){let t,o;return t=new pe({props:{code:e[6]}}),{c(){L(t.$$.fragment)},m(e,n){M(t,e,n),o=!0},p:n,i(e){o||(B(t.$$.fragment,e),o=!0)},o(e){P(t.$$.fragment,e),o=!1},d(e){z(t,e)}}}(e);return{c(){t=g("li"),o=g("strong"),i=h(y),s=h(":"),r=m(),c=h($),l=m(),x&&x.c(),a=m()},m(e,n){f(e,t,n),u(t,o),u(o,i),u(o,s),u(t,r),u(t,c),u(t,l),x&&x.m(t,null),u(t,a),d=!0},p(e,t){e[6]&&x.p(e,t)},i(e){d||(B(x),d=!0)},o(e){P(x),d=!1},d(e){e&&p(t),x&&x.d()}}}function be(e){let n,o,i,r,c,l,a,d,y,v,w,k,E,I,j,_,O,N,C,R,S,T,A,U,q,F,J,K,Q,W,X,Z,ee,te,ie,se,re,ce,le,ae,ue,de;E=new pe({props:{code:e[1]}}),O=new pe({props:{code:V,copyable:!1}}),F=new pe({props:{code:ne(Y)}});let fe=Object.entries(oe),ge=[];for(let t=0;t<fe.length;t+=1)ge[t]=xe($e(e,fe,t));const he=e=>P(ge[e],1,1,(()=>{ge[e]=null}));return ce=new pe({props:{code:ne(H)}}),{c(){n=g("div"),o=g("h3"),o.textContent="Next Steps",i=h("\n  Once you've downloaded the "),r=g("span"),r.textContent=`${G}`,c=h(" file:\n  "),l=g("ol"),a=g("li"),a.innerHTML='Move the download into your extension folder so you can use it in your extension&#39;s <span class="codelike svelte-7ob0w7">index.ts</span> file.',d=m(),y=g("li"),v=h("Import the following functions into your "),w=g("span"),w.textContent="index.ts",k=h(" file from the downloaded legacy file:\n          "),L(E.$$.fragment),I=h("\n      The remaining instructions vary depending on if you're extending the generic Extension base class vs using the onfigurable"),j=g("span"),j.textContent="extension()",_=h(" factory function.\n      "),L(O.$$.fragment),N=m(),C=g("h3"),C.textContent="Generic Extension",R=m(),S=g("ol"),T=g("li"),A=h("Extract the necessary properties from "),U=h(Y),q=m(),L(F.$$.fragment),J=m(),K=g("li"),Q=h("Utilize the elements like so:\n        "),W=g("ul");for(let e=0;e<ge.length;e+=1)ge[e].c();X=m(),Z=g("li"),ee=h("Once you've implemented all legacy blocks, you can finally replace the usage of "),te=h(Y),ie=h(" with "),se=h(H),re=h(". \n        If this does not cause type errors, it means you've succesfully implemented all legacy blocks. \n        If you do get errors, there are likely some blocks you still need to implement, or perhaps you have a member that uses a Reserved Name. \n        "),L(ce.$$.fragment),le=m(),ae=g("h3"),ae.textContent="Configurable Extension",ue=h("\n  TODO"),$(r,"class","codelike svelte-7ob0w7"),$(w,"class","codelike svelte-7ob0w7"),$(j,"class","codelike svelte-7ob0w7"),$(n,"class","svelte-7ob0w7"),b(n,"container",e[0]),x(n,"background-color",t.color.ui.white),x(n,"color",t.color.text.primary)},m(e,t){f(e,n,t),u(n,o),u(n,i),u(n,r),u(n,c),u(n,l),u(l,a),u(l,d),u(l,y),u(y,v),u(y,w),u(y,k),M(E,y,null),u(l,I),u(l,j),u(l,_),M(O,l,null),u(n,N),u(n,C),u(n,R),u(n,S),u(S,T),u(T,A),u(T,U),u(T,q),M(F,T,null),u(S,J),u(S,K),u(K,Q),u(K,W);for(let e=0;e<ge.length;e+=1)ge[e].m(W,null);u(S,X),u(S,Z),u(Z,ee),u(Z,te),u(Z,ie),u(Z,se),u(Z,re),M(ce,Z,null),u(n,le),u(n,ae),u(n,ue),de=!0},p(e,[t]){if(0&t){let n;for(fe=Object.entries(oe),n=0;n<fe.length;n+=1){const o=$e(e,fe,n);ge[n]?(ge[n].p(o,t),B(ge[n],1)):(ge[n]=xe(o),ge[n].c(),B(ge[n],1),ge[n].m(W,null))}for(D={r:0,c:[],p:D},n=fe.length;n<ge.length;n+=1)he(n);D.r||s(D.c),D=D.p}},i(e){if(!de){B(E.$$.fragment,e),B(O.$$.fragment,e),B(F.$$.fragment,e);for(let e=0;e<fe.length;e+=1)B(ge[e]);B(ce.$$.fragment,e),de=!0}},o(e){P(E.$$.fragment,e),P(O.$$.fragment,e),P(F.$$.fragment,e),ge=ge.filter(Boolean);for(let e=0;e<ge.length;e+=1)P(ge[e]);P(ce.$$.fragment,e),de=!1},d(e){e&&p(n),z(E),z(O),z(F),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(ge,e),z(ce)}}}function ve(e,n,o){let{extension:i}=n,{close:s}=n;const r=t.activeClass,c=`import { ${H}, ${Y} } from "./${G.replace(".ts","")}";`;return e.$$set=e=>{"extension"in e&&o(2,i=e.extension),"close"in e&&o(3,s=e.close)},[r,c,i,s]}return e.Extension=ie,e.Info=class extends F{constructor(e){super(),q(this,e,me,he,c,{extension:0,close:2},ge)}},e.Instructions=class extends F{constructor(e){super(),q(this,e,ve,be,c,{extension:2,close:3},ye)}},Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=extensionProbe.js.map
