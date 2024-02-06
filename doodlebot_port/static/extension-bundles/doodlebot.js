var doodlebot=function(e,t){"use strict";function n(){}function i(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(i)}function s(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function d(e,t,n){const i=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!i.getElementById(t)){const e=h("style");e.id=t,e.textContent=n,function(e,t){a(e.head||e,t),t.sheet}(i,e)}}function u(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function p(){return f(" ")}function v(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t){e.value=null==t?"":t}function b(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let g;function w(e){g=e}const x=[],k=[];let C=[];const L=[],_=Promise.resolve();let E=!1;function $(e){C.push(e)}const S=new Set;let P=0;function T(){if(0!==P)return;const e=g;do{try{for(;P<x.length;){const e=x[P];P++,w(e),D(e.$$)}}catch(e){throw x.length=0,P=0,e}for(w(null),x.length=0,P=0;k.length;)k.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];S.has(t)||(S.add(t),t())}C.length=0}while(x.length);for(;L.length;)L.pop()();E=!1,S.clear(),w(e)}function D(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const N=new Set;function O(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];C.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),C=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function j(e,t){-1===e.$$.dirty[0]&&(x.push(e),E||(E=!0,_.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,c,a,d,u,h=null,f=[-1]){const p=g;w(e);const v=e.$$={fragment:null,ctx:[],props:u,update:n,not_equal:d,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:t.target||p.$$.root};h&&h(v.root);let m=!1;if(v.ctx=c?c(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n;return v.ctx&&d(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),m&&j(e,t)),n})):[],v.update(),m=!0,r(v.before_update),v.fragment=!!a&&a(v.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);v.fragment&&v.fragment.l(e),e.forEach(l)}else v.fragment&&v.fragment.c();t.intro&&((y=e.$$.fragment)&&y.i&&(N.delete(y),y.i(b))),function(e,t,n){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),$((()=>{const t=e.$$.on_mount.map(i).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),c.forEach($)}(e,t.target,t.anchor),T()}var y,b;w(p)}class M{$$=void 0;$$set=void 0;$destroy(){O(this,1),this.$destroy=n}$on(e,t){if(!s(t))return n;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function U(e,t,n,i,o,r){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,a=i.kind,d="getter"===a?"get":"setter"===a?"set":"value",u=!t&&e?i.static?e:e.prototype:null,l=t||(u?Object.getOwnPropertyDescriptor(u,i.name):{}),h=!1,f=n.length-1;f>=0;f--){var p={};for(var v in i)p[v]="access"===v?{}:i[v];for(var v in i.access)p.access[v]=i.access[v];p.addInitializer=function(e){if(h)throw new TypeError("Cannot add initializers after decoration has completed");r.push(s(e||null))};var m=(0,n[f])("accessor"===a?{get:l.get,set:l.set}:l[d],p);if("accessor"===a){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(c=s(m.get))&&(l.get=c),(c=s(m.set))&&(l.set=c),(c=s(m.init))&&o.unshift(c)}else(c=s(m))&&("field"===a?o.unshift(c):l[d]=c)}u&&Object.defineProperty(u,i.name,l),h=!0}function q(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function c(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((i=i.apply(e,t||[])).next())}))}function A(){}function W(){W.init.call(this)}function R(e){return void 0===e._maxListeners?W.defaultMaxListeners:e._maxListeners}function I(e,t,n,i){var o,r,s,c;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((r=e._events)?(r.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),r=e._events),s=r[t]):(r=e._events=new A,e._eventsCount=0),s){if("function"==typeof s?s=r[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),!s.warned&&(o=R(e))&&o>0&&s.length>o){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,c=a,"function"==typeof console.warn?console.warn(c):console.log(c)}}else s=r[t]=n,++e._eventsCount;return e}function F(e,t,n){var i=!1;function o(){e.removeListener(t,o),i||(i=!0,n.apply(e,arguments))}return o.listener=n,o}function V(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function H(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4"),"function"==typeof SuppressedError&&SuppressedError,A.prototype=Object.create(null),W.EventEmitter=W,W.usingDomains=!1,W.prototype.domain=void 0,W.prototype._events=void 0,W.prototype._maxListeners=void 0,W.defaultMaxListeners=10,W.init=function(){this.domain=null,W.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new A,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},W.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},W.prototype.getMaxListeners=function(){return R(this)},W.prototype.emit=function(e){var t,n,i,o,r,s,c,a="error"===e;if(s=this._events)a=a&&null==s.error;else if(!a)return!1;if(c=this.domain,a){if(t=arguments[1],!c){if(t instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=c,t.domainThrown=!1,c.emit("error",t),!1}if(!(n=s[e]))return!1;var u="function"==typeof n;switch(i=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var i=e.length,o=H(e,i),r=0;r<i;++r)o[r].call(n)}(n,u,this);break;case 2:!function(e,t,n,i){if(t)e.call(n,i);else for(var o=e.length,r=H(e,o),s=0;s<o;++s)r[s].call(n,i)}(n,u,this,arguments[1]);break;case 3:!function(e,t,n,i,o){if(t)e.call(n,i,o);else for(var r=e.length,s=H(e,r),c=0;c<r;++c)s[c].call(n,i,o)}(n,u,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,i,o,r){if(t)e.call(n,i,o,r);else for(var s=e.length,c=H(e,s),a=0;a<s;++a)c[a].call(n,i,o,r)}(n,u,this,arguments[1],arguments[2],arguments[3]);break;default:for(o=new Array(i-1),r=1;r<i;r++)o[r-1]=arguments[r];!function(e,t,n,i){if(t)e.apply(n,i);else for(var o=e.length,r=H(e,o),s=0;s<o;++s)r[s].apply(n,i)}(n,u,this,o)}return!0},W.prototype.addListener=function(e,t){return I(this,e,t,!1)},W.prototype.on=W.prototype.addListener,W.prototype.prependListener=function(e,t){return I(this,e,t,!0)},W.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,F(this,e,t)),this},W.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,F(this,e,t)),this},W.prototype.removeListener=function(e,t){var n,i,o,r,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(n=i[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new A:(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,r=n.length;r-- >0;)if(n[r]===t||n[r].listener&&n[r].listener===t){s=n[r].listener,o=r;break}if(o<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new A,this;delete i[e]}else!function(e,t){for(var n=t,i=n+1,o=e.length;i<o;n+=1,i+=1)e[n]=e[i];e.pop()}(n,o);i.removeListener&&this.emit("removeListener",e,s||t)}return this},W.prototype.off=function(e,t){return this.removeListener(e,t)},W.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new A,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new A:delete n[e]),this;if(0===arguments.length){for(var i,o=Object.keys(n),r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=new A,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},W.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},W.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):V.call(e,t)},W.prototype.listenerCount=V,W.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class z extends W{isEventListenerObject(e){return void 0!==e.handleEvent}addEventListener(e,t){if(t){const n=this.isEventListenerObject(t)?t.handleEvent:t;super.addListener(e,n)}}removeEventListener(e,t){if(t){const n=this.isEventListenerObject(t)?t.handleEvent:t;super.removeListener(e,n)}}dispatchEvent(e,t){const n="string"==typeof e?new CustomEvent(e,{detail:t}):e;return super.emit(n.type,n)}}class Y{constructor(e=1){this.concurrent=e,this.queue=[],this.running=0}pump(){return q(this,void 0,void 0,(function*(){if(this.running>=this.concurrent)return;const e=this.queue.shift();if(e){this.running++;try{const t=yield e.fn();e.resolve(t)}catch(t){e.reject(t)}return this.running--,this.pump()}}))}add(e){return new Promise(((t,n)=>(this.queue.push({fn:e,resolve:t,reject:n}),this.pump())))}}class G{constructor(e,t){this.service=e,this.emitter=t,this.queue=new Y}getCharacteristic(e){var t;return q(this,void 0,void 0,(function*(){return null!==(t=this.characteristics)&&void 0!==t||(this.characteristics=yield this.service.getCharacteristics()),this.characteristics.find((t=>t.uuid===e))}))}getCharacteristicValue(e){return q(this,void 0,void 0,(function*(){const t=yield this.getCharacteristic(e);if(!t)throw new Error("Unable to locate characteristic");return yield this.queue.add((()=>q(this,void 0,void 0,(function*(){return t.readValue()}))))}))}setCharacteristicValue(e,t){return q(this,void 0,void 0,(function*(){const n=yield this.getCharacteristic(e);if(!n)throw new Error("Unable to locate characteristic");yield this.queue.add((()=>q(this,void 0,void 0,(function*(){return n.writeValueWithoutResponse(t)}))))}))}handleListener(e,t,n){return q(this,void 0,void 0,(function*(){const i=yield this.getCharacteristic(t);i&&(yield this.queue.add((()=>q(this,void 0,void 0,(function*(){return i.startNotifications()})))),this.emitter.on("newListener",(t=>{if(!(t!==e||this.emitter.listenerCount(e)>0))return this.queue.add((()=>q(this,void 0,void 0,(function*(){return i.addEventListener("characteristicvaluechanged",n)}))))})),this.emitter.on("removeListener",(t=>{if(!(t!==e||this.emitter.listenerCount(e)>0))return this.queue.add((()=>q(this,void 0,void 0,(function*(){return i.removeEventListener("characteristicvaluechanged",n)}))))})))}))}}class K extends z{static create(e){return q(this,void 0,void 0,(function*(){const t=new K(e);return yield t.init(),t}))}constructor(e){super(),this.helper=new G(e,this)}init(){return q(this,void 0,void 0,(function*(){const{tx_uuid:e}=K;yield this.helper.handleListener("receive",e,this.receiveHandler.bind(this)),yield this.helper.handleListener("receiveText",e,this.receiveTextHandler.bind(this))}))}send(e){return q(this,void 0,void 0,(function*(){return this.helper.setCharacteristicValue(K.rx_uuid,e)}))}sendText(e){return q(this,void 0,void 0,(function*(){console.log("sending text",e);const t=e.split("").map((e=>e.charCodeAt(0)));return this.helper.setCharacteristicValue(K.rx_uuid,new Uint8Array(t).buffer)}))}receiveHandler(e){const t=e.target.value,n=new Uint8Array(t.buffer);this.dispatchEvent("receive",n)}receiveTextHandler(e){const t=e.target.value,n=new Uint8Array(t.buffer).slice(),i=String.fromCharCode.apply(null,n);this.dispatchEvent("receiveText",i)}}K.uuid="6e400001-b5a3-f393-e0a9-e50e24dcca9e",K.rx_uuid="6e400002-b5a3-f393-e0a9-e50e24dcca9e",K.tx_uuid="6e400003-b5a3-f393-e0a9-e50e24dcca9e";const J="e",Q="x",X="m",Z="k",ee="q",te="w",ne={battery:"f",bumper:"b",humidity:"h",pressure:"p",distance:"d",altimeter:"u",magnometer:"o",temperature:"t",accelerometer:"a",gyroscope:"g",light:"l"},ie={clear:"c",sad:"s",happy:"T",child:"H"},oe=Object.keys(ie),re=Object.fromEntries(Object.entries(ne).map((([e,t])=>[t,e]))),se="RPI ipaddr:",ce="hname:",ae="8765",de=(e,t)=>e.replace(t,"").trim(),ue="motor",le="connect",he="disconnect";class fe{static tryCreateService(e,t){return q(this,void 0,void 0,(function*(){const n=e.find((e=>e.uuid===t.uuid));return n?yield t.create(n):void 0}))}static requestRobot(e,...t){return q(this,void 0,void 0,(function*(){return yield e.requestDevice({filters:[...null!=t?t:[],{services:[K.uuid]}]})}))}static getServices(e){return q(this,void 0,void 0,(function*(){if(!e||!e.gatt)return null;e.gatt.connected||(yield e.gatt.connect());const t=yield e.gatt.getPrimaryServices();return{uartService:yield fe.tryCreateService(t,K)}}))}static tryCreate(e,t,n,...i){return q(this,void 0,void 0,(function*(){const o=yield fe.requestRobot(n,...i),r=yield fe.getServices(o);if(!r)throw new Error("Unable to connect to doodlebot's UART service");return new fe(o,r,e,t)}))}constructor(e,t,n,i){this.device=e,this.services=t,this.ssid=n,this.wifiPassword=i,this.pending={motor:void 0,wifi:void 0,websocket:void 0},this.onMotor=new W,this.onSensor=new W,this.onNetwork=new W,this.disconnectCallbacks=new Set,this.subscriptions=new Array,this.sensorData={bumper:{front:0,back:0},altimeter:0,battery:0,distance:0,humidity:0,temperature:0,pressure:0,gyroscope:{x:0,y:0,z:0},magnometer:{x:0,y:0,z:0},accelerometer:{x:0,y:0,z:0},light:{red:0,green:0,blue:0,alpha:0}},this.sensorState={bumper:!1,altimeter:!1,battery:!1,distance:!1,humidity:!1,temperature:!1,pressure:!1,gyroscope:!1,magnometer:!1,accelerometer:!1,light:!1},this.subscribe(t.uartService,"receiveText",this.receiveTextBLE.bind(this)),this.subscribe(e,"gattserverdisconnected",this.handleBleDisconnect.bind(this)),this.connectToWebsocket({ssid:n,password:i})}subscribe(e,t,n){e.addEventListener(t,n),this.subscriptions.push({target:e,event:t,listener:n})}formCommand(...e){return`(${e.join(",")})`}parseCommand(e){return e.split("(").map((e=>e.replace(")",""))).splice(1).map((e=>{const[t,...n]=e.split(",").map((e=>e.trim()));return{command:t,parameters:n}}))}sendBLECommand(e,...t){const{uartService:n}=this.services;return n.sendText(this.formCommand(e,...t))}sendWebsocketCommand(e,...t){return q(this,void 0,void 0,(function*(){yield this.connectToWebsocket(),this.websocket.send(this.formCommand(e,...t))}))}updateSensor(e,t){this.onSensor.emit(e,t),this.sensorData[e]=t}updateNetworkStatus(e,t){const n=de(e,se),i=de(t,ce);if("127.0.0.1"===n)return this.onNetwork.emit(he);this.connection={ip:n,hostname:i},this.onNetwork.emit(le,this.connection)}receiveTextBLE(e){console.log({event:e});for(const{command:t,parameters:n}of this.parseCommand(e.detail))if(t.startsWith(se))this.updateNetworkStatus(t,n[0]);else switch(console.log({command:t,parameters:n}),t){case"ms":this.onMotor.emit(ue);break;case ne.bumper:{const[e,i]=n.map((e=>Number.parseFloat(e)));this.updateSensor(re[t],{front:e,back:i});break}case ne.distance:case ne.battery:case ne.altimeter:case ne.humidity:case ne.temperature:case ne.pressure:{const e=Number.parseFloat(n[0]);this.updateSensor(re[t],e);break}case ne.gyroscope:case ne.magnometer:case ne.accelerometer:{const[e,i,o]=n.map((e=>Number.parseFloat(e)));this.updateSensor(re[t],{x:e,y:i,z:o});break}case ne.light:{const[e,i,o,r]=n.map((e=>Number.parseFloat(e)));this.updateSensor(re[t],{red:e,green:i,blue:o,alpha:r});break}default:throw new Error(`Not implemented: ${t}`)}}onWebsocketMessage(e){}invalidateWifiConnection(){var e;this.connection=void 0,this.pending.wifi=void 0,this.pending.websocket=void 0,null===(e=this.websocket)||void 0===e||e.close(),this.websocket=void 0}handleBleDisconnect(){for(const e of this.disconnectCallbacks)e();for(const{target:e,event:t,listener:n}of this.subscriptions)e.removeEventListener(t,n)}onDisconnect(...e){for(const t of e)this.disconnectCallbacks.add(t)}enableSensor(e){return q(this,void 0,void 0,(function*(){this.sensorState[e]||(yield this.sendBLECommand(J,ne[e]),yield new Promise((t=>this.onSensor.once(e,t))),this.sensorState[e]=!0)}))}disableSensor(e){return q(this,void 0,void 0,(function*(){this.sensorState[e]&&(yield this.sendBLECommand(Q,ne[e]),this.sensorState[e]=!1)}))}getSensorReading(e){return q(this,void 0,void 0,(function*(){return yield this.enableSensor(e),this.sensorData[e]}))}motorCommand(e,...t){return q(this,void 0,void 0,(function*(){const{pending:{motor:n}}=this;switch(e){case"steps":{n&&(yield n);const[e,i]=t;return yield this.untilFinishedPending("motor",new Promise((t=>q(this,void 0,void 0,(function*(){yield this.sendBLECommand(X,e.steps,i.steps,e.stepsPerSecond,i.stepsPerSecond),this.onMotor.once(ue,t)})))))}case"arc":{n&&(yield n);const[e,i]=t;return yield this.untilFinishedPending("motor",new Promise((t=>q(this,void 0,void 0,(function*(){yield this.sendBLECommand(X,e,i),this.onMotor.once(ue,t)})))))}case"stop":return yield this.untilFinishedPending("motor",new Promise((e=>q(this,void 0,void 0,(function*(){yield this.sendBLECommand(X,"s"),this.onMotor.once(ue,e)})))))}}))}lowPowerMode(){return q(this,void 0,void 0,(function*(){yield this.sendBLECommand(ee)}))}connectToWifi(e){return q(this,void 0,void 0,(function*(){const{ssid:t,pending:{wifi:n}}=this;e&&e.ssid!==t?(this.invalidateWifiConnection(),this.ssid=e.ssid,this.wifiPassword=e.password):n&&(yield n),this.connection||(yield this.untilFinishedPending("wifi",new Promise((e=>q(this,void 0,void 0,(function*(){yield this.sendBLECommand(Z,this.ssid,this.wifiPassword),this.onNetwork.once(le,e)}))))))}))}untilFinishedPending(e,t){return q(this,void 0,void 0,(function*(){this.pending[e]=t,yield t,this.pending[e]=void 0}))}connectToWebsocket(e){return q(this,void 0,void 0,(function*(){yield this.connectToWifi(e);const{pending:{websocket:t}}=this;t&&(yield t),this.websocket||(this.websocket=new WebSocket(`ws://${this.connection.ip}:${ae}`),yield this.untilFinishedPending("websocket",new Promise((e=>{const t=()=>{this.websocket.removeEventListener("open",t),e()};this.websocket.addEventListener("open",t),this.websocket.addEventListener("message",this.onWebsocketMessage.bind(this))}))))}))}display(e){return q(this,void 0,void 0,(function*(){const t=ie[e];yield this.sendWebsocketCommand(te,t)}))}getNetworkCredentials(){return{ssid:this.ssid,password:this.wifiPassword}}}function pe(e){d(e,"svelte-n84rd9",".container.svelte-n84rd9{text-align:center;padding:30px}.error.svelte-n84rd9{background-color:red;color:white;padding:4px 8px;text-align:center;border-radius:5px}")}function ve(e){let t,n;return{c(){t=h("div"),n=f(e[1]),m(t,"class","error svelte-n84rd9")},m(e,i){u(e,t,i),a(t,n)},p(e,t){2&t&&function(e,t){t=""+t,e.data!==t&&(e.data=t)}(n,e[1])},d(e){e&&l(t)}}}function me(e){let t;return{c(){t=f("Uh oh! Your browser does not support bluetooth. Here's how to fix that...\n    TBD")},m(e,n){u(e,t,n)},p:n,d(e){e&&l(t)}}}function ye(e){let t;function n(e,t){return e[0].doodlebot?be:ge}function i(e,t){return t===be?function(e){const t=e.slice(),n=t[0].doodlebot.getNetworkCredentials();return t[17]=n,t}(e):e}let o=n(e),r=o(i(e,o));return{c(){r.c(),t=f("")},m(e,n){r.m(e,n),u(e,t,n)},p(e,s){o===(o=n(e))&&r?r.p(i(e,o),s):(r.d(1),r=o(i(e,o)),r&&(r.c(),r.m(t.parentNode,t)))},d(e){e&&l(t),r.d(e)}}}function be(e){let t,n,i,o,r,s,c,d,y,b,g,w,x,k,C,L,_,E;return{c(){t=h("h1"),t.textContent="Connected to doodlebot",n=p(),i=h("div"),o=h("h3"),o.textContent="Update network credentials:",r=f("\n        SSID (Network Name):\n        "),s=h("input"),d=f("\n        Password:\n        "),y=h("input"),g=p(),w=h("button"),x=f("Update"),C=p(),L=h("div"),L.innerHTML="<button>Disconnect</button>",m(s,"type","text"),s.value=c=e[17].ssid,m(y,"type","text"),y.value=b=e[17].password,w.disabled=k=e[17].ssid===e[2]&&e[17].password===e[3]},m(c,l){u(c,t,l),u(c,n,l),u(c,i,l),a(i,o),a(i,r),a(i,s),e[13](s),a(i,d),a(i,y),e[14](y),a(i,g),a(i,w),a(w,x),u(c,C,l),u(c,L,l),_||(E=v(w,"click",e[7]),_=!0)},p(e,t){1&t&&c!==(c=e[17].ssid)&&s.value!==c&&(s.value=c),1&t&&b!==(b=e[17].password)&&y.value!==b&&(y.value=b),13&t&&k!==(k=e[17].ssid===e[2]&&e[17].password===e[3])&&(w.disabled=k)},d(o){o&&(l(t),l(n),l(i),l(C),l(L)),e[13](null),e[14](null),_=!1,E()}}}function ge(e){let t,n,i,o,s,c,d,b,g,w,x,k,C,L,_,E,$,S,P,T,D;return{c(){t=h("h1"),t.textContent="How to connect to doodlebot",n=p(),i=h("div"),o=h("h3"),o.textContent="1. Set network credentials:",s=p(),c=h("p"),d=f("SSID (Network Name):\n          "),b=h("input"),g=p(),w=h("p"),x=f("Password:\n          "),k=h("input"),C=p(),L=h("div"),_=h("h3"),_.textContent="2. Select bluetooth device",E=p(),$=h("button"),S=f("Open Bluetooth Menu"),m(b,"type","text"),m(b,"placeholder","e.g. my_wifi"),m(k,"type","text"),m(k,"placeholder","e.g. 12345"),$.disabled=P=!e[3]||!e[2]},m(r,l){u(r,t,l),u(r,n,l),u(r,i,l),a(i,o),a(i,s),a(i,c),a(c,d),a(c,b),e[9](b),y(b,e[2]),a(i,g),a(i,w),a(w,x),a(w,k),e[11](k),y(k,e[3]),u(r,C,l),u(r,L,l),a(L,_),a(L,E),a(L,$),a($,S),T||(D=[v(b,"input",e[10]),v(k,"input",e[12]),v($,"click",e[6])],T=!0)},p(e,t){4&t&&b.value!==e[2]&&y(b,e[2]),8&t&&k.value!==e[3]&&y(k,e[3]),12&t&&P!==(P=!e[3]||!e[2])&&($.disabled=P)},d(o){o&&(l(t),l(n),l(i),l(C),l(L)),e[9](null),e[11](null),T=!1,r(D)}}}function we(e){let i,o,r=e[1]&&ve(e);let s=function(e,t){return e[5]?ye:me}(e),c=s(e);return{c(){i=h("div"),r&&r.c(),o=p(),c.c(),m(i,"class","container svelte-n84rd9"),b(i,"width","100%"),b(i,"background-color",t.color.ui.white),b(i,"color",t.color.text.primary)},m(e,t){u(e,i,t),r&&r.m(i,null),a(i,o),c.m(i,null)},p(e,[t]){e[1]?r?r.p(e,t):(r=ve(e),r.c(),r.m(i,o)):r&&(r.d(1),r=null),c.p(e,t)},i:n,o:n,d(e){e&&l(i),r&&r.d(),c.d()}}}function xe(e,n,i){var o=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function c(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((i=i.apply(e,t||[])).next())}))};let{extension:r}=n,{close:s}=n;const{bluetooth:c}=window.navigator,a=(e,...n)=>t.reactiveInvoke(i(0,r),e,n);let d,u,l;const h={ssid:null,password:null};return e.$$set=e=>{"extension"in e&&i(0,r=e.extension),"close"in e&&i(8,s=e.close)},[r,d,u,l,h,c,()=>o(void 0,void 0,void 0,(function*(){try{const e=yield fe.tryCreate(u,l,c);a("setDoodlebot",e),s()}catch(e){a("setIndicator","disconnected"),console.error(e),i(1,d="Bluetooth adapter not available."===e.message?"Your device does not support BLE connections.":"User cancelled the requestDevice() chooser."==e.message?"You must select a device to connect to. Please try again.":"User cancelled the requestDevice() chooser."!==e.message?"There was a problem connecting your device, please try again or request assistance.":e.message)}})),()=>r.doodlebot.connectToWebsocket({ssid:u,password:l}),s,function(e){k[e?"unshift":"push"]((()=>{h.ssid=e,i(4,h)}))},function(){u=this.value,i(2,u)},function(e){k[e?"unshift":"push"]((()=>{h.password=e,i(4,h)}))},function(){l=this.value,i(3,l)},function(e){k[e?"unshift":"push"]((()=>{h.ssid=e,i(4,h)}))},function(e){k[e?"unshift":"push"]((()=>{h.password=e,i(4,h)}))}]}const ke={name:"Doodlebot",description:"Program a doodlebot robot",iconURL:"Replace with the name of your icon image file (which should be placed in the same directory as this file)",insetIconURL:"Replace with the name of your inset icon image file (which should be placed in the same directory as this file)",tags:["Made by PRG"]};let Ce=(()=>{var e;let n,i,o,r,s=t.extension(ke,"ui","indicators"),c=[];return e=class extends s{constructor(){super(...arguments),this.doodlebot=void function(e,t,n){for(var i=arguments.length>2,o=0;o<t.length;o++)n=i?t[o].call(e,n):t[o].call(e)}(this,c)}init(e){this.openUI("Connect"),this.setIndicator("disconnected")}setDoodlebot(e){this.doodlebot=e,this.setIndicator("connected")}setIndicator(e){var t;return q(this,void 0,void 0,(function*(){this.indicator&&(null===(t=yield this.indicator)||void 0===t||t.close()),this.indicator="connected"==e?this.indicate({position:"category",msg:"Connected to robot",type:"success",retry:!0}):this.indicate({position:"category",msg:"Not connected to robot",type:"warning",retry:!0})}))}connect(){this.openUI("Connect")}clearDisplay(){var e;return q(this,void 0,void 0,(function*(){yield null===(e=this.doodlebot)||void 0===e?void 0:e.display("clear")}))}setDisplay(e){var t;return q(this,void 0,void 0,(function*(){yield null===(t=this.doodlebot)||void 0===t?void 0:t.display(e)}))}drive(e,t){var n;return q(this,void 0,void 0,(function*(){const i="left"==e||"backward"==e?-t:t,o="right"==e||"backward"==e?-t:t;yield null===(n=this.doodlebot)||void 0===n?void 0:n.motorCommand("steps",{steps:i,stepsPerSecond:100},{steps:o,stepsPerSecond:100})}))}},(()=>{var a;const d="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(a=s[Symbol.metadata])&&void 0!==a?a:null):void 0;n=[t.buttonBlock("Connect Robot")],i=[t.block({type:"command",text:"clear display"})],o=[t.block({type:"command",text:e=>`display ${e}`,arg:{type:"string",options:oe.filter((e=>"clear"!==e)),defaultValue:"happy"}})],r=[t.block({type:"command",text:(e,t)=>`drive ${e} for ${t} steps`,args:[{type:"string",options:["forward","backward","left","right"],defaultValue:"forward"},{type:"number",defaultValue:2e3}]})],U(e,null,n,{kind:"method",name:"connect",static:!1,private:!1,access:{has:e=>"connect"in e,get:e=>e.connect},metadata:d},null,c),U(e,null,i,{kind:"method",name:"clearDisplay",static:!1,private:!1,access:{has:e=>"clearDisplay"in e,get:e=>e.clearDisplay},metadata:d},null,c),U(e,null,o,{kind:"method",name:"setDisplay",static:!1,private:!1,access:{has:e=>"setDisplay"in e,get:e=>e.setDisplay},metadata:d},null,c),U(e,null,r,{kind:"method",name:"drive",static:!1,private:!1,access:{has:e=>"drive"in e,get:e=>e.drive},metadata:d},null,c),d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),e})();return e.Connect=class extends M{constructor(e){super(),B(this,e,xe,we,c,{extension:0,close:8},pe)}},e.Extension=Ce,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=doodlebot.js.map
