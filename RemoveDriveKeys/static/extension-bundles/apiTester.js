var apiTester=function(t,e){"use strict";function n(){}function o(t){return t()}function r(){return Object.create(null)}function u(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e){t.value=null==e?"":e}let m;function A(t){m=t}const y=[],$=[],x=[],v=[],b=Promise.resolve();let w=!1;function E(t){x.push(t)}const k=new Set;let B=0;function T(){const t=m;do{for(;B<y.length;){const t=y[B];B++,A(t),O(t.$$)}for(A(null),y.length=0,B=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];k.has(e)||(k.add(e),e())}x.length=0}while(y.length);for(;v.length;)v.pop()();w=!1,k.clear(),A(t)}function O(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;function H(t,e){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,b.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,i,s,l,f,d,p=[-1]){const g=m;A(t);const h=t.$$={fragment:null,ctx:[],props:f,update:n,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:r(),dirty:p,skip_bound:!1,root:e.target||g.$$.root};d&&d(h.root);let y=!1;if(h.ctx=i?i(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&l(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),y&&H(t,e)),n})):[],h.update(),y=!0,u(h.before_update),h.fragment=!!s&&s(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();e.intro&&(($=t.$$.fragment)&&$.i&&(j.delete($),$.i(x))),function(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||E((()=>{const e=t.$$.on_mount.map(o).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):u(e),t.$$.on_mount=[]})),s.forEach(E)}(t,e.target,e.anchor,e.customElement),T()}var $,x;A(g)}class L{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(u(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=n}$on(t,e){if(!c(e))return n;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class C extends e.Extension{internal_getCodeGenArgs(){return{id:"apiTester",name:"A",blockIconURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB8CAYAAABE3L+AAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO3dMWsUQRyG8edyZyEqqBgVJHiaUvA76CcQK3sbsbJVv0AquxSKjaWlpBS0thDBwkpFLTQgQRQtTIxnsVdJsnO3c//du3nfH1x1Ozube8JuYLJ7vdFohGlZ6voArH2OLsjRBTm6IEcXNKh7893HD+vARWC7ncOxTAeB+6tnh4/qNqqNDlwFTs/skKwNL4Ha6KnT+6fZHYu1ZCu1ga/pghxdkKMLcnRBji7I0QU5uiBHF+ToghxdkKMLcnRBqVW2HLvAZuD+SzUATkVPEGUTGFLFt8mdB95GThAZ/S/wJ3D/pfoRPUHkNX0J6Afuv1RHoifwH3KCHF2QowtydEGOLsjRBTm6IEcX5OiCHF2QowuKjL6DV9iaeB89QeQq21HgJtVqm01uOXqC6Ojrgfu3hnxNF+ToghxdkKMLcnRBji7I0QU5uiBHF+ToghxdkKMLcvTyJJs6enmS98JFLq1uAdfxenqbBsCbSTaK8hN4Erh/ayjy9D7AtyrPJV/TBTm6IEcX5OiCHF2QowtydEGOLsjRBTm6IEcX5OiCIlfZcq0AJzua+zt5T2I+Bxyf0bFM6wvwuW6DeY5+B7jR0dzPgcsZ4+8BV2ZzKFNbA27XbTDPp/cun2KRO3eXjzxP/tPKPEff6XDu35njt2dyFM0kP7d5jm5BHF2QowtydEGOLsjRBTm6IEcX5OiCHF2Qowty9L0dyxx/eCZH0UzyG5nneWk110OqteUmv9g94G7N+yPgwPj1/6rWEtXtwq/H+2lTH3ia2qjk6LeAXw3HXgKeZcx9DXicMT5Uyaf31Yyxuaf3Q5njQ5Ucve1T68IoObrtw9EFObogRxfk6IIcXZCjC3J0QY4uyNEFlRw959ak3NuSurwlK8nR95Ybvct72ZJKXlrdoHoS9bQPJd4FTmTOvUa1tNv259sDHoxf+yo5+oUO5x6OX11I/twln95VfUtt4OiCHF2QowtydEGOLsjRBTm6IEcX5OiCHF2QowtKRV/J2PeZjLEAy5njVSWfPp1aZdugWrWZ9puRe8BXqlt6m3pB9QjtLh8MvGj6wKvURr3RKKeLLSJf0wU5uiBHF+ToghxdkKMLcnRB/wBIt0+4Irv7NwAAAABJRU5ErkJggg=="}}init(t){}defineBlocks(){return{fireRequest:{text:t=>"Do it "+t,type:e.BlockType.Command,arg:this.makeCustomArgument({component:"CustomArgument",initial:{value:{url:"",entries:{}},text:"click"}}),operation:async({url:t,entries:e})=>{console.log(t),console.log(e);const n=await fetch(t,{...e});if(console.log(n),!n.ok)return console.error(n);if(200!==n.status)return console.error(n.body);const o=await n.json();console.log(o)}}}}}function K(t,e,n){const o=t.slice();return o[12]=e[n],o[13]=e,o[14]=n,o}function F(t){let e,n,o,r,c,i,p;function m(){t[8].call(o,t[14])}function A(){t[9].call(c,t[14])}return{c(){e=f("div"),n=d("Key: "),o=f("input"),r=d("; Value: "),c=f("input")},m(u,a){l(u,e,a),s(e,n),s(e,o),h(o,t[0][t[14]]),s(e,r),s(e,c),h(c,t[1][t[14]]),i||(p=[g(o,"input",m),g(c,"input",A)],i=!0)},p(e,n){t=e,1&n&&o.value!==t[0][t[14]]&&h(o,t[0][t[14]]),2&n&&c.value!==t[1][t[14]]&&h(c,t[1][t[14]])},d(t){t&&a(e),i=!1,u(p)}}}function Q(t){let e,o,r,c,i,m,A,y,$,x,v,b,w=Array.from(new Array(t[3])),E=[];for(let e=0;e<w.length;e+=1)E[e]=F(K(t,w,e));return{c(){e=f("div"),o=d("Url: "),r=f("input"),c=p(),i=f("br"),m=p();for(let t=0;t<E.length;t+=1)E[t].c();A=p(),y=f("button"),y.textContent="+",$=p(),x=f("button"),x.textContent="-"},m(n,u){l(n,e,u),s(e,o),s(e,r),h(r,t[2]),s(e,c),s(e,i),s(e,m);for(let t=0;t<E.length;t+=1)E[t].m(e,null);s(e,A),s(e,y),s(e,$),s(e,x),v||(b=[g(r,"input",t[7]),g(y,"click",t[10]),g(x,"click",t[11])],v=!0)},p(t,[n]){if(4&n&&r.value!==t[2]&&h(r,t[2]),11&n){let o;for(w=Array.from(new Array(t[3])),o=0;o<w.length;o+=1){const r=K(t,w,o);E[o]?E[o].p(r,n):(E[o]=F(r),E[o].c(),E[o].m(e,A))}for(;o<E.length;o+=1)E[o].d(1);E.length=w.length}},i:n,o:n,d(t){t&&a(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,t),v=!1,u(b)}}}function _(t,e,n){let{setter:o}=e,{current:r}=e,{extension:u}=e,c=1,i=["method"],s=["GET"],l="https://prg-key-server.netlify.app/.netlify/functions/ai-blocks-drive";return t.$$set=t=>{"setter"in t&&n(4,o=t.setter),"current"in t&&n(5,r=t.current),"extension"in t&&n(6,u=t.extension)},t.$$.update=()=>{23&t.$$.dirty&&o({value:{url:l,entries:i.reduce(((t,e,n)=>(t[e]=s[n],t)),{})},text:"blah blah"})},[i,s,l,c,o,r,u,function(){l=this.value,n(2,l)},function(t){i[t]=this.value,n(0,i)},function(t){s[t]=this.value,n(1,s)},()=>{n(0,i=[...i,"key"]),n(1,s=[...s,"value"]),n(3,c++,c)},()=>{i.pop(),s.pop(),n(3,c--,c)}]}return t.CustomArgument=class extends L{constructor(t){super(),R(this,t,_,Q,i,{setter:4,current:5,extension:6})}},t.Extension=C,Object.defineProperty(t,"__esModule",{value:!0}),t}({},ExtensionFramework);//# sourceMappingURL=apiTester.js.map
