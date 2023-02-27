var ExtensionFramework=function(e){"use strict";class t{constructor(){this.map=new Map,this.pending=null}clearPending(){this.pending=null}setPending(e){this.pending=e}add(e){const r=t.GetIdentifier();return this.map.set(r,e),this.clearPending(),r}insert(e,t){return this.map.set(e,t),this.clearPending(),e}request(){this.clearPending();const e=t.GetIdentifier();return[e,t=>this.setPending({id:e,entry:t})]}tryResolve(){if(!this.pending)return;const{pending:{entry:e,id:t}}=this;return this.map.set(t,e),this.clearPending(),{entry:e,id:t}}getCurrentEntries(){return Array.from(this.map.entries()).filter((([e,t])=>null!==t)).map((([e,{text:t}])=>[t,e]))}getEntry(e){return this.map.get(e)}requiresSave(){this.map.size}saveTo(e){const r=Array.from(this.map.entries()).filter((([e,t])=>null!==t)).map((([e,t])=>({id:e,entry:t})));0!==r.length&&(e[t.SaveKey]=r)}loadFrom(e){e[t.SaveKey]?.forEach((({id:e,entry:t})=>{this.map.set(e,t)}))}purgeStaleIDs(){}}t.SaveKey="internal_customArgumentsSaveData",t.IsIdentifier=e=>e.startsWith(t.IdentifierPrefix),t.GetIdentifier=()=>t.IdentifierPrefix+(new Date).getTime().toString(),t.IdentifierPrefix="__customArg__";const r="customSaveDataPerExtension";const n={Boolean:"Boolean",Button:"button",Command:"command",Conditional:"conditional",Event:"event",Hat:"hat",Loop:"loop",Reporter:"reporter"},a={Angle:"angle",Boolean:"Boolean",Color:"color",Number:"number",String:"string",Matrix:"matrix",Note:"note",Image:"image",Custom:"custom"},o={BackgroundLayer:"background",VideoLayer:"video",PenLayer:"pen",SpriteLayer:"sprite"},s=[o.VideoLayer,o.SpriteLayer,o.BackgroundLayer,o.PenLayer],i={"Аҧсшәа":"ab","العربية":"ar","አማርኛ":"am",Azeri:"az",Bahasa_Indonesia:"id","Беларуская":"be","Български":"bg","Català":"ca","Česky":"cs",Cymraeg:"cy",Dansk:"da",Deutsch:"de",Eesti:"et","Ελληνικά":"el",English:"en","Español":"es","Español_Latinoamericano":"es-419",Euskara:"eu","فارسی":"fa","Français":"fr",Gaeilge:"ga","Gàidhlig":"gd",Galego:"gl","한국어":"ko","עִבְרִית":"he",Hrvatski:"hr",isiZulu:"zu","Íslenska":"is",Italiano:"it","ქართული_ენა":"ka",Kiswahili:"sw","Kreyòl_ayisyen":"ht","کوردیی_ناوەندی":"ckb","Latviešu":"lv","Lietuvių":"lt",Magyar:"hu","Māori":"mi",Nederlands:"nl","日本語":"ja","にほんご":"ja-Hira","Norsk_Bokmål":"nb",Norsk_Nynorsk:"nn","Oʻzbekcha":"uz","ไทย":"th","ភាសាខ្មែរ":"km",Polski:"pl","Português":"pt","Português_Brasileiro":"pt-br",Rapa_Nui:"rap","Română":"ro","Русский":"ru","Српски":"sr","Slovenčina":"sk","Slovenščina":"sl",Suomi:"fi",Svenska:"sv","Tiếng_Việt":"vi","Türkçe":"tr","Українська":"uk","简体中文":"zh-cn","繁體中文":"zh-tw"},c=Object.keys(i);class l{static get RGB_BLACK(){return{r:0,g:0,b:0}}static get RGB_WHITE(){return{r:255,g:255,b:255}}static decimalToHex(e){e<0&&(e+=16777216);let t=Number(e).toString(16);return t=`#${"000000".substr(0,6-t.length)}${t}`,t}static decimalToRgb(e){const t=e>>24&255;return{r:e>>16&255,g:e>>8&255,b:255&e,a:t>0?t:255}}static hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((e,t,r,n)=>t+t+r+r+n+n));const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}static rgbToHex(e){return l.decimalToHex(l.rgbToDecimal(e))}static rgbToDecimal(e){return(e.r<<16)+(e.g<<8)+e.b}static hexToDecimal(e){return l.rgbToDecimal(l.hexToRgb(e))}static hsvToRgb(e){let t=e.h%360;t<0&&(t+=360);const r=Math.max(0,Math.min(e.s,1)),n=Math.max(0,Math.min(e.v,1)),a=Math.floor(t/60),o=t/60-a,s=n*(1-r),i=n*(1-r*o),c=n*(1-r*(1-o));let l,u,m;switch(a){default:case 0:l=n,u=c,m=s;break;case 1:l=i,u=n,m=s;break;case 2:l=s,u=n,m=c;break;case 3:l=s,u=i,m=n;break;case 4:l=c,u=s,m=n;break;case 5:l=n,u=s,m=i}return{r:Math.floor(255*l),g:Math.floor(255*u),b:Math.floor(255*m)}}static rgbToHsv(e){const t=e.r/255,r=e.g/255,n=e.b/255,a=Math.min(Math.min(t,r),n),o=Math.max(Math.max(t,r),n);let s=0,i=0;if(a!==o){s=60*((t===a?3:r===a?5:1)-(t===a?r-n:r===a?n-t:t-r)/(o-a))%360,i=(o-a)/o}return{h:s,s:i,v:o}}static mixRgb(e,t,r){if(r<=0)return e;if(r>=1)return t;const n=1-r;return{r:n*e.r+r*t.r,g:n*e.g+r*t.g,b:n*e.b+r*t.b}}}const u=l;class m{static toNumber(e){if("number"==typeof e)return Number.isNaN(e)?0:e;const t=Number(e);return Number.isNaN(t)?0:t}static toBoolean(e){return"boolean"==typeof e?e:"string"==typeof e?""!==e&&"0"!==e&&"false"!==e.toLowerCase():Boolean(e)}static toString(e){return String(e)}static toRgbColorList(e){const t=m.toRgbColorObject(e);return[t.r,t.g,t.b]}static toRgbColorObject(e){let t;return"string"==typeof e&&"#"===e.substring(0,1)?(t=u.hexToRgb(e),t||(t={r:0,g:0,b:0,a:255})):t=u.decimalToRgb(m.toNumber(e)),t}static isWhiteSpace(e){return null===e||"string"==typeof e&&0===e.trim().length}static compare(e,t){let r=Number(e),n=Number(t);if(0===r&&m.isWhiteSpace(e)?r=NaN:0===n&&m.isWhiteSpace(t)&&(n=NaN),isNaN(r)||isNaN(n)){const r=String(e).toLowerCase(),n=String(t).toLowerCase();return r<n?-1:r>n?1:0}return r===1/0&&n===1/0||r===-1/0&&n===-1/0?0:r-n}static isInt(e){return"number"==typeof e?!!isNaN(e)||e===parseInt(e,10):"boolean"==typeof e||"string"==typeof e&&e.indexOf(".")<0}static get LIST_INVALID(){return"INVALID"}static get LIST_ALL(){return"ALL"}static toListIndex(e,t,r){if("number"!=typeof e){if("all"===e)return r?m.LIST_ALL:m.LIST_INVALID;if("last"===e)return t>0?t:m.LIST_INVALID;if("random"===e||"any"===e)return t>0?1+Math.floor(Math.random()*t):m.LIST_INVALID}return(e=Math.floor(m.toNumber(e)))<1||e>t?m.LIST_INVALID:e}}var p=m;const d=(e,t)=>{switch(e){case a.String:return`${t}`;case a.Number:return parseFloat(t);case a.Boolean:return JSON.parse(t);case a.Note:case a.Angle:return parseInt(t);case a.Matrix:return h(t);case a.Color:return p.toRgbColorObject(t);default:throw new Error(`Method not implemented for value of ${t} and type ${e}`)}},g=e=>1===parseInt(e),h=e=>{if(25!==e.length)return new Array(5).fill(new Array(5).fill(!1));return e.split("").map(g).reduce(((e,t,r)=>{const n=Math.floor(r/5);return 0===r%5?e[n]=[t]:e[n].push(t),e}),new Array(5))},y="OPEN_UI_FROM_EXTENSION",f="REGISTER_BUTTON_CALLBACK_FROM_EXTENSION",E="internal_IsCustomArgument",b="isCustomArgumentHack",T="dropdownState",w="dropdownEntry",I="init",S="open",N="close",O=(e,t)=>e.emit(y,t),_=(e,t,r)=>{e.emit(f,t),e.on(t,r)};class R{constructor(e){this.root=e}get(...e){return`var(--${this.root}-${e.join("-")})`}primary(...e){return this.get("primary",...e)}secondary(...e){return this.get("secondary",...e)}tertiary(...e){return this.get("tertiary",...e)}transparent(...e){return this.get("transparent",...e)}light(...e){return this.get("light",...e)}}const x=new R("ui"),A=new R("text"),k=new R("motion"),D=new R("red"),v=new R("sound"),C=new R("control"),L=new R("data"),M=new R("pen"),P=new R("error"),B=new R("extensions"),$=new R("extensions"),U={ui:{primary:x.primary(),secondary:x.secondary(),tertiary:x.tertiary(),modalOverlay:x.get("modal","overlay"),white:x.get("white"),whiteDim:x.get("white","dim"),whiteTransparent:x.get("white","transparent"),transparent:x.transparent(),blackTransparent:x.get("black","transparent")},text:{primary:A.primary(),primaryTransparent:A.transparent()},motion:{primary:k.primary(),tertiary:k.tertiary(),transparent:k.get("transparent"),lightTansparent:k.light("transparent")},red:{primary:D.primary(),tertiary:D.tertiary()},sound:{primary:v.primary(),tertiary:v.tertiary()},control:{primary:C.primary()},data:{primary:L.primary()},pen:{primary:M.primary(),transparent:M.transparent()},error:{primary:P.primary(),light:P.light(),transparent:P.transparent()},extensions:{primary:B.primary(),tertiary:B.tertiary(),light:B.light(),transparent:B.transparent()},drop:{highlight:$.get("highlight")}};async function F(e,t=100){let r,n=e();for(;!n;)await new Promise((e=>{clearTimeout(r),r=setTimeout(e,t)})),n=e();return clearTimeout(r),n}const j=e=>"string"==typeof e||e instanceof String,G=e=>"[object Function]"===Object.prototype.toString.call(e)||"function"==typeof e||e instanceof Function,H=e=>e!==Object(e),V=e=>e,K=async e=>{const t=new Promise(((t,r)=>{const n=document.createElement("script");n.onload=t,n.onerror=r,n.async=!0,n.src=e,document.body.appendChild(n)}));await t},W=(e,t,...r)=>e.call(t,...r),z=(e,t,r)=>(e[t]=r,e),J=e=>H(e)?e:e.type,q=e=>`internal_${e}`,X=(e,r,n)=>function(o,s){const i=n.map((({name:e,type:r,handler:n})=>{const s=o[e];if(r===a.Custom){return n(j(s)&&t.IsIdentifier(s)?this.customArgumentManager.getEntry(s).value:s)}return d(r,n(s))}));return r.call(e,...i,s)};const Z=e=>{const t="args";return"arg"in e&&e.arg?[e.arg]:t in e&&(e[t]?.length??0)>0?e.args:[]},Q=(e,t)=>{const r=e.map(J),n=me(e);return t??(t=r.map(((e,t)=>se(t)))),Y(r,n,t),r.map(((e,r)=>({type:e,name:t[r],handler:n[r]})))},Y=(...e)=>{const{size:t}=e.reduce(((e,{length:t})=>e.add(t)),new Set);if(1!==t)throw new Error("Zip failed because collections weren't equal length")},ee=e=>G(e),te=(e,t,r)=>e,re=e=>H(e)?`${e}`:{...e,value:`${e.value}`},ne=(e,t)=>`${e}_${t}`,ae=(e,t,r)=>{if(!r||0===r.length)return t;if(ue(t,r.length),!(e=>!j(e))(t))return te(t);const n=t,a=r.map(((e,t)=>`[${se(t)}]`));return te(n(...a))},oe=(e,t,r)=>{if(t&&0!==t.length)return Object.fromEntries(t.map(((t,n)=>{const a={};if(a.type=J(t),H(t))return a;const{defaultValue:o,options:s}=t;return ce(a,e,n,o),le(a,s,r),a})).reduce(((e,t,r)=>e.set(se(r),t)),new Map))},se=e=>`${e}`,ie=e=>`${e}`,ce=(e,t,r,n)=>{void 0!==n&&(e.defaultValue=((e,t,r)=>j(e)?te(e):e)(n))},le=(e,t,r)=>t?e.menu=((e,t)=>{const r=t.indexOf(e),n=r>=0?r:t.push(e)-1;return`${ie(n)}`})(t,r):null,ue=(e,t)=>!0,me=e=>e.map((e=>{if(H(e))return V;const{options:t}=e;return(e=>e&&"handler"in e)(t)?t.handler:V})),pe={isSimpleStatic:e=>Array.isArray(e),isSimpleDynamic:e=>G(e),isStaticWithReporters:e=>"items"in e,isDynamicWithReporters:e=>"getItems"in e},de=(e,t)=>({acceptReporters:t,items:e.map((e=>e)).map(re)}),ge=async(e,t)=>{const r="blocklyDropDownContent",n=document.getElementsByClassName(r);if(1!==n.length)return console.error(`Uh oh! Expected 1 element with class '${r}', but found ${n.length}`);const[a]=n,o=await F((()=>a.children[0]));new e({target:a,anchor:o,props:t}),he(o)},he=e=>{[["goog-menuitem goog-option",e=>{e.margin="auto",e.paddingLeft=e.paddingRight="0px"}],["goog-menuitem-content",e=>e.textAlign="center"]].forEach((([t,r])=>{const n=e.getElementsByClassName(t);console.assert(1===n.length,`Incorrect number of elements found with class: ${t}`),r(n[0].style)}))},ye={DrowpdownOpen:S,DropdownClose:N,Init:I};class fe{internal_init(){this.init({runtime:this.runtime,videoFeed:this.runtime.ioDevices?.video})}constructor(e,t,r,n){this.runtime=e,this.name=t,this.id=r,this.blockIconURI=n}}const Ee=e=>{return function(e){return class extends e{constructor(){super(...arguments),this.blockMap=new Map,this.menus=[]}pushBlock(e,t,r){if(this.blockMap.has(e))throw new Error(`Attempt to push block with opcode ${e}, but it was already set. This is assumed to be a mistake.`);this.blockMap.set(e,{definition:t,operation:r})}getInfo(){if(!this.info){const{id:e,name:t,blockIconURI:r}=this,n=Array.from(this.blockMap.entries()).map((e=>this.convertToInfo(e)));this.info={id:e,blocks:n,name:t,blockIconURI:r,menus:this.collectMenus()}}return this.info}convertToInfo(e){const[t,r]=e,{definition:a,operation:o}=r,s=ee(a)?W(a,this,this):a,{type:i,text:c}=s,l=Z(s),{id:u,runtime:m,menus:p}=this,d={opcode:t,text:ae(t,c,l),blockType:i,arguments:oe(t,l,p)};if(i===n.Button){const e=ne(u,t);_(m,e,o.bind(this)),d.func=e}else this[q(t)]=X(this,o,Q(l));return d}collectMenus(){const{isSimpleStatic:e,isSimpleDynamic:t,isStaticWithReporters:r,isDynamicWithReporters:n}=pe;return Object.fromEntries(this.menus.map(((a,o)=>{if(e(a))return de(a,!1);if(t(a))return this.registerDynamicMenu(a,!1,o);if(r(a))return de(a.items,!0);if(n(a))return this.registerDynamicMenu(a.getItems,!0,o);throw new Error("Unable to process menu")})).reduce(((e,t,r)=>e.set(ie(r),t)),new Map))}registerDynamicMenu(e,t,r){const n=`internal_dynamic_${r}`;return this[n]=()=>e().map((e=>e)).map(re),{acceptReporters:t,items:n}}}}(function(e){return class extends e{constructor(){super(...arguments),this.saveDataHandler=void 0}save(e,t){const{saveDataHandler:n,id:a,argumentManager:o}=this,s=n?.hooks.onSave(this)??{};if(o?.saveTo(s),0===Object.keys(s).length)return;const i=e[r];i?i[a]=s:e[r]={[a]:s},t.add(a)}load(e){if(!e)return;const{saveDataHandler:n,id:a}=this,o=r in e?e[r][a]:null;o&&(n?.hooks.onLoad(this,o),(this.argumentManager??(this.argumentManager=new t)).loadFrom(o))}}}(function(e){return class extends e{constructor(){super(...arguments),this.makeCustomArgument=({component:e,initial:r,acceptReportersHandler:n})=>{this.argumentManager??(this.argumentManager=new t);const o=this.argumentManager.add(r),s=()=>[{text:E,value:JSON.stringify({component:e,id:o})}];return{type:a.Custom,defaultValue:o,options:void 0===n?s:{acceptsReports:!0,getItems:s,handler:n}}},this.argumentManager=null}get customArgumentManager(){return this.argumentManager}[b](e){if(1!==e.length)return!1;const t=e[0];if("object"!=typeof t)return!1;const{text:r}=t;return r===E}processCustomArgumentHack(e,[{value:t}],r){const{id:n,customArgumentManager:a}=this,{component:o,id:s}=JSON.parse(t);switch(e[T]){case ye.Init:return a.getCurrentEntries();case ye.DropdownClose:{const e=a.tryResolve();return e?[[e.entry.text,e.id]]:a.getCurrentEntries()}case ye.DrowpdownOpen:{const t=e[w],i=t?.value??s,c=a.getEntry(i),[l,u]=a.request();return ge(r(n,o),{setter:u,current:c,extension:this}),[["Apply",l]]}}throw new Error("Error during processing -- Context:"+ye)}}}((o=e,class extends o{openUI(e,t){const{id:r,name:n,runtime:a}=this;O(a,{id:r,name:n,component:e.replace(".svelte",""),label:t})}}))));var o},be=new Map;class Te extends(Ee(fe)){constructor(e){super(...arguments)}}const we=e=>`__block_${e}`;const Ie=new RegExp("^[a-z0-9]+$","i"),Se=new RegExp("[^a-z0-9]+","gi"),Ne=["prg","prg".split("").reverse().join("")],Oe=new RegExp(`${Ne[0]}([0-9]+)${Ne[1]}`,"g"),_e=(e,t,r)=>e.replaceAll(t,r),Re=(e,t,r,n,a)=>{if(e.name=t,!r)return;e.options.name=r;const o=n[r];if(!o)return;const s=o.acceptReporters;if(s!==(e.options.acceptsReporters??!1))throw new Error(`The new options provided for the legacy block '${a}' for legacy argument '${t}' ${s?"should":"should NOT"} accept reporters`);const i=o.items;if(!i||0===i.length)return;const c=Array.isArray(e.options)?e.options:G(e.options)?e.options():e.options.items?e.options.items:e.options.getItems(),l=e=>H(e)?{text:`${e}`,value:e}:e,u=e=>JSON.stringify(e),m=i.map(l).map(u),p=c.map(l).map(u);for(const e of m)if(!p.includes(e))throw new Error(`Mismatch in old and new menus for block ${a}: arg ${t}. Old entry: ${e}, new entries: [${p.join(", ")}]`)};function xe(e){return function(t,r){const n=t.name,a=q(n);return r.addInitializer((function(){this.pushBlock(n,e,t)})),function(){return this[a].call(this,...arguments)}}}const Ae="__registerMenuDetials";const ke=(e,t)=>{if(j(e))throw new Error("Block was unexpectedly a string: "+e);if(!t.has(e.opcode))throw new Error(`Could not find legacy opcode ${e} within currently defined blocks`);return!0},De=e=>{if(typeof e.legacy.menu!=typeof e.modern.menu)throw new Error("Menus don't match");return e};function ve(e,t){return class extends e{constructor(){super(...arguments),this.__isLegacy=!0,this.orderArgumentNamesByBlock=new Map,this.getArgNames=e=>{const{opcode:t}=e;if(!this.orderArgumentNamesByBlock.has(t)){const{orderedNames:r}=Be(e);this.orderArgumentNamesByBlock.set(t,r)}return this.orderArgumentNamesByBlock.get(t)}}getInfo(){if(!this.validatedInfo){const{getInfo:e}=Te.prototype,t=e.call(this);this.validatedInfo=this.validateAndAttach(t)}return this.validatedInfo}validateAndAttach({id:e,blocks:r,menus:n,...a}){const{id:o,blocks:s,menus:i}=t,c=[...r];if(e!==o)throw new Error(`ID mismatch! Legacy id: ${o} vs. current id: ${e}`);const l=c.reduce(((e,{opcode:t,...r},n)=>e.set(t,{...r,index:n})),new Map),u=this,m=s.map((e=>ke(e,l)?e:void 0)).filter(Boolean).map((e=>{const{opcode:t,arguments:r}=e,{index:a,arguments:o}=l.get(t),s=this.getArgNames(e),c=this[q(t)];this[t]=((...[e,t])=>c.call(u,(e=>s.reduce(((t,r,n)=>z(t,n,e[r])),{}))(e),t)).bind(u);const m=s.map(((e,t)=>({legacy:r[e],modern:o[t]}))).map(De).map((({legacy:{menu:e},modern:{menu:t}})=>({legacyName:e,modernName:t}))).filter((e=>e.legacyName&&e.modernName)).map((({legacyName:e,modernName:t})=>({legacyName:e,modernName:t,legacy:i[e],modern:n[t]}))).map((({legacy:e,modern:t,legacyName:r,modernName:n})=>{if(!Fe(e)&&!Fe(e.items))return{type:"static",legacy:r,modern:n};return{type:"dynamic",legacy:Fe(e)?e:e.items,modern:Fe(t)?t:t.items}}));return{menuUpdates:m,replaceAt:{index:a,block:e}}}));return m.forEach((({replaceAt:{index:e,block:t}})=>c[e]=t)),m.map((({menuUpdates:e})=>e)).flat().forEach((({type:e,legacy:t,modern:r})=>{switch(e){case"static":return void(n[t]=r);case"dynamic":return void(this[t]=()=>u[r]())}})),{id:e,blocks:c,menus:n,...a}}}}const Ce=(e,t)=>{const r=e.args?e.args:e.arg?[e.arg]:[];Object.entries(t).forEach((([e,{handler:t,getItems:n}])=>{const a=r[parseInt(e)];Le(a,"handler",t),Le(a,"getItems",n)}))},Le=(e,t,r)=>{e[t]=r},Me=e=>{if(j(e))throw new Error(`Block defined as string, unexpected! ${e}`);return e},Pe=e=>Array.from(e.blocks.map(Me).reduce(((t,r)=>((e,t,r)=>{const{opcode:n,arguments:a,blockType:o}=t,{text:s,orderedNames:i}=Be(t),c=Object.entries(a).map((([e,{menu:t,...n}])=>({options:je(r,t),name:e,menu:t,...n}))).sort((({name:e},{name:t})=>i.indexOf(e)<i.indexOf(t)?-1:1)).map((({name:e,...t})=>t)),{length:l}=c,u=l>=2?{args:c}:1===l?{arg:c[0]}:{};return e.set(n,{type:o,text:s,...u})})(t,r,e)),new Map).entries()),Be=({arguments:e,text:t})=>{const r=Object.keys(e).map((e=>({name:e,template:`[${e}]`}))).sort((({template:e},{template:r})=>t.indexOf(e)<t.indexOf(r)?-1:1)),n="Error: This should have been overridden by legacy support";return 0===r.length?{orderedNames:null,text:n}:{orderedNames:r.map((({name:e})=>e)),text:()=>n}},$e={getItems:()=>"Error: This should have been filled in."},Ue={handler:()=>"Error: This should have been filled in."},Fe=e=>j(e),je=(e,t)=>{const r=t?e.menus[t]:void 0;if(!r)return;if(Fe(r))return $e.getItems;const{items:n,acceptReporters:a}=r;return Fe(n)?a?{acceptsReporters:a,...Ue,...$e}:$e.getItems:a?{acceptsReporters:a,items:[...n],...Ue}:[...n]};return e.ArgumentType=a,e.BlockType=n,e.Branch={Exit:0,Enter:1,First:1,Second:2,Third:3,Fourth:4,Fifth:5,Sixth:6,Seventh:7},e.CustomArgumentManager=t,e.DecoratedExtension=class extends Te{constructor(){super(...arguments),this.version="decorated"}},e.Extension=class extends Te{constructor(){super(...arguments),this.version="generic"}internal_init(){super.internal_init();const e=this.defineBlocks(),t=this;for(const r in e){const n=e[r],a=r in this?we(r):r,{operation:o,text:s,arg:i,args:c,type:l}=G(n)?n.call(this,this):n;this.pushBlock(a,{text:s,arg:i,args:c,type:l},o);const u=q(a);this[a]=function(){return t[u].call(t,...arguments)}}}},e.ExtensionBase=fe,e.ExtensionCommon=Te,e.FrameworkID="ExtensionFramework",e.Language=i,e.LanguageKeys=c,e.LayerGroups=s,e.RuntimeEvent={ScriptGlowOn:"SCRIPT_GLOW_ON",ScriptGlowOff:"SCRIPT_GLOW_OFF",BlockGlowOn:"BLOCK_GLOW_ON",BlockGlowOff:"BLOCK_GLOW_OFF",HasCloudDataUpdate:"HAS_CLOUD_DATA_UPDATE",TurboModeOn:"TURBO_MODE_ON",TurboModeOff:"TURBO_MODE_OFF",RecordingOn:"RECORDING_ON",RecordingOff:"RECORDING_OFF",ProjectStart:"PROJECT_START",ProjectRunStart:"PROJECT_RUN_START",ProjectRunStop:"PROJECT_RUN_STOP",ProjectStopAll:"PROJECT_STOP_ALL",StopForTarget:"STOP_FOR_TARGET",VisualReport:"VISUAL_REPORT",ProjectLoaded:"PROJECT_LOADED",ProjectChanged:"PROJECT_CHANGED",ToolboxExtensionsNeedUpdate:"TOOLBOX_EXTENSIONS_NEED_UPDATE",TargetsUpdate:"TARGETS_UPDATE",MonitorsUpdate:"MONITORS_UPDATE",BlockDragUpdate:"BLOCK_DRAG_UPDATE",BlockDragEnd:"BLOCK_DRAG_END",ExtensionAdded:"EXTENSION_ADDED",ExtensionFieldAdded:"EXTENSION_FIELD_ADDED",PeripheralListUpdate:"PERIPHERAL_LIST_UPDATE",PeripheralConnected:"PERIPHERAL_CONNECTED",PeripheralDisconnected:"PERIPHERAL_DISCONNECTED",PeripheralRequestError:"PERIPHERAL_REQUEST_ERROR",PeripheralConnectionLostError:"PERIPHERAL_CONNECTION_LOST_ERROR",PeripheralScanTimeout:"PERIPHERAL_SCAN_TIMEOUT",MicListening:"MIC_LISTENING",BlocksInfoUpdate:"BLOCKSINFO_UPDATE",RuntimeStarted:"RUNTIME_STARTED",RuntimeDisposed:"RUNTIME_DISPOSED",BlocksNeedUpdate:"BLOCKS_NEED_UPDATE"},e.SaveDataHandler=class{constructor(e){this.hooks=e}},e.ScratchBlocksConstants={OutputShapeHexagonal:1,OutputShapeRound:2,OutputShapeSquare:3},e.StageLayering=o,e.TargetType={Sprite:"sprite",Stage:"stage"},e.VariableType={Scalar:"",List:"list",BrooadcastMessage:"broadcast_msg"},e.activeClass=!0,e.block=xe,e.buttonBlock=function(e){return xe({text:e,type:n.Button})},e.castToType=d,e.closeDropdownState=N,e.color=U,e.copyTo=({target:e,source:t})=>{for(const r in t)r in e&&(e[r]=t[r])},e.customArgumentCheck=b,e.customArgumentFlag=E,e.decode=e=>[...[...e.matchAll(Oe)].reduce(((e,t)=>{const[r,n]=t;return e.set(r,String.fromCharCode(n))}),new Map)].reduce(((e,[t,r])=>_e(e,t,r)),`${e}`),e.dropdownEntryFlag=w,e.dropdownStateFlag=T,e.encode=e=>{const t=[...e.matchAll(Se)].reduce(((e,t)=>(t[0].split("").forEach((t=>e.add(t))),e)),new Set);return[...t].map((e=>({char:e,code:e.charCodeAt(0)}))).reduce(((e,{char:t,code:r})=>_e(e,t,`${Ne[0]}${r}${Ne[1]}`)),`${e}`)},e.extension=function(e){return t=>{"undefined"==typeof window&&global?.[Ae]?.(e)}},e.extensionsMap=be,e.extractLegacySupportFromOldGetInfo=e=>{const{blocks:t,menus:r}=e,n=t.filter((e=>!j(e))).map((e=>[e.opcode,t=>((e,t,r,n)=>{const a=t;if(t.name=e,"arg"in a){const[t,{menu:o}]=Object.entries(r.arguments)[0];Re(a.arg,t,o,n,e)}else if("args"in a){const t=Object.entries(r.arguments);for(let r=0;r<t.length;r++){const[o,{menu:s}]=t[r];Re(a.args[r],o,s,n,e)}}return t})(e.opcode,t,e,r)])).reduce(((e,[t,r])=>(e[t]=r,e)),{});return n.tsIgnore=n,n.legacyBlocksForTests=t.reduce(((e,t)=>(e[t.opcode]=t,e)),{}),n},e.fetchWithTimeout=async function(e,t){const{timeout:r}=t,n=new AbortController,a=setTimeout((()=>n.abort()),r),o=await fetch(e,{...t,signal:n.signal});return clearTimeout(a),o},e.getAlternativeOpcodeName=we,e.getTextFromMenuItem=e=>"object"==typeof e?e.text:e,e.getValueFromMenuItem=e=>"object"==typeof e?e.value:e,e.identity=V,e.initDropdownState=I,e.isDynamicMenu=Fe,e.isFunction=G,e.isPrimitive=H,e.isString=j,e.isValidID=e=>Ie.test(e),e.legacy=(e,t)=>({for(){const t=Pe(e),r=t.reduce(((e,[t,r])=>(e[t]=({operation:e,argumentMethods:t})=>(t&&Ce(r,t),{...r,operation:e}),e)),{});return{legacyExtension:()=>(t,r)=>{class n extends(ve(t,e)){constructor(){super(...arguments),this.originalClassName=r.name}}return n},legacyDefinition:r,legacyBlock:t.reduce(((e,[t,r])=>(e[t]=({argumentMethods:e})=>(e&&Ce(r,e),xe(r)),e)),{}),ReservedNames:{get Menus(){throw new Error("This property is not meant to be accessed, and is instead solely for documentation purposes.")},get Blocks(){throw new Error("This property is not meant to be accessed, and is instead solely for documentation purposes.")}}}}}),e.loadExternalScript=(e,t,r)=>{const n=document.createElement("script");n.onload=t,n.onerror=r??(()=>{throw new Error(`Error loading endpoint: ${e}`)}),n.src=e,n.async=!0,document.body.appendChild(n)},e.mockFormatMessage=e=>"",e.openDropdownState=S,e.openUI=O,e.openUIEvent=y,e.parseText=Be,e.px=e=>`${e}px`,e.reactiveInvoke=(e,t,r)=>e[t](...r),e.reactiveSet=(e,t,r)=>{e[t]=r},e.registerButtonCallback=_,e.registerButtonCallbackEvent=f,e.registerExtensionDefinitionCallback=e=>global[Ae]=t=>{e(t),delete global[Ae]},e.renderToDropdown=ge,e.set=z,e.splitOnCapitals=e=>e.split(/(?=[A-Z])/),e.tryCastToArgumentType=(e,t,r)=>{try{return d(e,t)}catch{return r(t)}},e.typesafeCall=W,e.untilCondition=async function(e,t=100){let r;for(;!e();)await new Promise((e=>{clearTimeout(r),r=setTimeout(e,t)}));clearTimeout(r)},e.untilExternalGlobalVariableLoaded=async(e,t)=>(window[t]||await K(e),window[t]),e.untilExternalScriptLoaded=K,e.untilObject=F,e.untilReady=async function(e,t=100){let r;for(;!e.ready;)await new Promise((e=>{clearTimeout(r),r=setTimeout(e,t)}));clearTimeout(r)},Object.defineProperty(e,"__esModule",{value:!0}),e}({});//# sourceMappingURL=ExtensionFramework.js.map
