var doodlebot=function(e,t){"use strict";function i(e,t,i,n,r,s){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var a,c=n.kind,d="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?n.static?e:e.prototype:null,l=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),h=!1,f=i.length-1;f>=0;f--){var v={};for(var p in n)v[p]="access"===p?{}:n[p];for(var p in n.access)v.access[p]=n.access[p];v.addInitializer=function(e){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(e||null))};var m=(0,i[f])("accessor"===c?{get:l.get,set:l.set}:l[d],v);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(a=o(m.get))&&(l.get=a),(a=o(m.set))&&(l.set=a),(a=o(m.init))&&r.unshift(a)}else(a=o(m))&&("field"===c?r.unshift(a):l[d]=a)}u&&Object.defineProperty(u,n.name,l),h=!0}function n(e,t,i,n){return new(i||(i=Promise))((function(r,s){function o(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;const r=Object.keys({angry:"a",annoyed:"y",confused:"m",disgust:"d",engaged:"e",fear:"f",happy:"h",love:"o",neutral:"n",sad:"s",sleeping:"l",surprise:"p",wink:"i",worried:"r",wrong:"w"}),s="e",o="x",a="m",c="k",d="q",u="w",l={battery:"f",bumper:"b",humidity:"h",pressure:"p",distance:"d",altimeter:"u",magnometer:"o",temperature:"t",accelerometer:"a",gyroscope:"g",light:"l"},h=Object.fromEntries(Object.entries(l).map((([e,t])=>[t,e]))),f="RPI ipaddr:",v="hname:",p="8765";function m(){}function y(){y.init.call(this)}function g(e){return void 0===e._maxListeners?y.defaultMaxListeners:e._maxListeners}function b(e,t,i,n){var r,s,o,a;if("function"!=typeof i)throw new TypeError('"listener" argument must be a function');if((s=e._events)?(s.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),s=e._events),o=s[t]):(s=e._events=new m,e._eventsCount=0),o){if("function"==typeof o?o=s[t]=n?[i,o]:[o,i]:n?o.unshift(i):o.push(i),!o.warned&&(r=g(e))&&r>0&&o.length>r){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,a=c,"function"==typeof console.warn?console.warn(a):console.log(a)}}else o=s[t]=i,++e._eventsCount;return e}function w(e,t,i){var n=!1;function r(){e.removeListener(t,r),n||(n=!0,i.apply(e,arguments))}return r.listener=i,r}function L(e){var t=this._events;if(t){var i=t[e];if("function"==typeof i)return 1;if(i)return i.length}return 0}function E(e,t){for(var i=new Array(t);t--;)i[t]=e[t];return i}m.prototype=Object.create(null),y.EventEmitter=y,y.usingDomains=!1,y.prototype.domain=void 0,y.prototype._events=void 0,y.prototype._maxListeners=void 0,y.defaultMaxListeners=10,y.init=function(){this.domain=null,y.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new m,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},y.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},y.prototype.getMaxListeners=function(){return g(this)},y.prototype.emit=function(e){var t,i,n,r,s,o,a,c="error"===e;if(o=this._events)c=c&&null==o.error;else if(!c)return!1;if(a=this.domain,c){if(t=arguments[1],!a){if(t instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(i=o[e]))return!1;var u="function"==typeof i;switch(n=arguments.length){case 1:!function(e,t,i){if(t)e.call(i);else for(var n=e.length,r=E(e,n),s=0;s<n;++s)r[s].call(i)}(i,u,this);break;case 2:!function(e,t,i,n){if(t)e.call(i,n);else for(var r=e.length,s=E(e,r),o=0;o<r;++o)s[o].call(i,n)}(i,u,this,arguments[1]);break;case 3:!function(e,t,i,n,r){if(t)e.call(i,n,r);else for(var s=e.length,o=E(e,s),a=0;a<s;++a)o[a].call(i,n,r)}(i,u,this,arguments[1],arguments[2]);break;case 4:!function(e,t,i,n,r,s){if(t)e.call(i,n,r,s);else for(var o=e.length,a=E(e,o),c=0;c<o;++c)a[c].call(i,n,r,s)}(i,u,this,arguments[1],arguments[2],arguments[3]);break;default:for(r=new Array(n-1),s=1;s<n;s++)r[s-1]=arguments[s];!function(e,t,i,n){if(t)e.apply(i,n);else for(var r=e.length,s=E(e,r),o=0;o<r;++o)s[o].apply(i,n)}(i,u,this,r)}return!0},y.prototype.addListener=function(e,t){return b(this,e,t,!1)},y.prototype.on=y.prototype.addListener,y.prototype.prependListener=function(e,t){return b(this,e,t,!0)},y.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,w(this,e,t)),this},y.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,w(this,e,t)),this},y.prototype.removeListener=function(e,t){var i,n,r,s,o;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(i=n[e]))return this;if(i===t||i.listener&&i.listener===t)0==--this._eventsCount?this._events=new m:(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(r=-1,s=i.length;s-- >0;)if(i[s]===t||i[s].listener&&i[s].listener===t){o=i[s].listener,r=s;break}if(r<0)return this;if(1===i.length){if(i[0]=void 0,0==--this._eventsCount)return this._events=new m,this;delete n[e]}else!function(e,t){for(var i=t,n=i+1,r=e.length;n<r;i+=1,n+=1)e[i]=e[n];e.pop()}(i,r);n.removeListener&&this.emit("removeListener",e,o||t)}return this},y.prototype.off=function(e,t){return this.removeListener(e,t)},y.prototype.removeAllListeners=function(e){var t,i;if(!(i=this._events))return this;if(!i.removeListener)return 0===arguments.length?(this._events=new m,this._eventsCount=0):i[e]&&(0==--this._eventsCount?this._events=new m:delete i[e]),this;if(0===arguments.length){for(var n,r=Object.keys(i),s=0;s<r.length;++s)"removeListener"!==(n=r[s])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new m,this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},y.prototype.listeners=function(e){var t,i=this._events;return i&&(t=i[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(t):[]},y.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):L.call(e,t)},y.prototype.listenerCount=L,y.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class k extends y{isEventListenerObject(e){return void 0!==e.handleEvent}addEventListener(e,t){if(t){const i=this.isEventListenerObject(t)?t.handleEvent:t;super.addListener(e,i)}}removeEventListener(e,t){if(t){const i=this.isEventListenerObject(t)?t.handleEvent:t;super.removeListener(e,i)}}dispatchEvent(e,t){const i="string"==typeof e?new CustomEvent(e,{detail:t}):e;return super.emit(i.type,i)}}class C{constructor(e=1){this.concurrent=e,this.queue=[],this.running=0}pump(){return n(this,void 0,void 0,(function*(){if(this.running>=this.concurrent)return;const e=this.queue.shift();if(e){this.running++;try{const t=yield e.fn();e.resolve(t)}catch(t){e.reject(t)}return this.running--,this.pump()}}))}add(e){return new Promise(((t,i)=>(this.queue.push({fn:e,resolve:t,reject:i}),this.pump())))}}class x{constructor(e,t){this.service=e,this.emitter=t,this.queue=new C}getCharacteristic(e){var t;return n(this,void 0,void 0,(function*(){return null!==(t=this.characteristics)&&void 0!==t||(this.characteristics=yield this.service.getCharacteristics()),this.characteristics.find((t=>t.uuid===e))}))}getCharacteristicValue(e){return n(this,void 0,void 0,(function*(){const t=yield this.getCharacteristic(e);if(!t)throw new Error("Unable to locate characteristic");return yield this.queue.add((()=>n(this,void 0,void 0,(function*(){return t.readValue()}))))}))}setCharacteristicValue(e,t){return n(this,void 0,void 0,(function*(){const i=yield this.getCharacteristic(e);if(!i)throw new Error("Unable to locate characteristic");yield this.queue.add((()=>n(this,void 0,void 0,(function*(){return i.writeValueWithoutResponse(t)}))))}))}handleListener(e,t,i){return n(this,void 0,void 0,(function*(){const r=yield this.getCharacteristic(t);r&&(yield this.queue.add((()=>n(this,void 0,void 0,(function*(){return r.startNotifications()})))),this.emitter.on("newListener",(t=>{if(!(t!==e||this.emitter.listenerCount(e)>0))return this.queue.add((()=>n(this,void 0,void 0,(function*(){return r.addEventListener("characteristicvaluechanged",i)}))))})),this.emitter.on("removeListener",(t=>{if(!(t!==e||this.emitter.listenerCount(e)>0))return this.queue.add((()=>n(this,void 0,void 0,(function*(){return r.removeEventListener("characteristicvaluechanged",i)}))))})))}))}}class _ extends k{static create(e){return n(this,void 0,void 0,(function*(){const t=new _(e);return yield t.init(),t}))}constructor(e){super(),this.helper=new x(e,this)}init(){return n(this,void 0,void 0,(function*(){const{tx_uuid:e}=_;yield this.helper.handleListener("receive",e,this.receiveHandler.bind(this)),yield this.helper.handleListener("receiveText",e,this.receiveTextHandler.bind(this))}))}send(e){return n(this,void 0,void 0,(function*(){return this.helper.setCharacteristicValue(_.rx_uuid,e)}))}sendText(e){return n(this,void 0,void 0,(function*(){const t=e.split("").map((e=>e.charCodeAt(0)));return this.helper.setCharacteristicValue(_.rx_uuid,new Uint8Array(t).buffer)}))}receiveHandler(e){const t=e.target.value,i=new Uint8Array(t.buffer);this.dispatchEvent("receive",i)}receiveTextHandler(e){const t=e.target.value,i=new Uint8Array(t.buffer).slice(),n=String.fromCharCode.apply(null,i);this.dispatchEvent("receiveText",n)}}_.uuid="6e400001-b5a3-f393-e0a9-e50e24dcca9e",_.rx_uuid="6e400002-b5a3-f393-e0a9-e50e24dcca9e",_.tx_uuid="6e400003-b5a3-f393-e0a9-e50e24dcca9e";const S=(e,t)=>e.replace(t,"").trim(),P="motor",T="connect",B="disconnect";class j{static tryCreateService(e,t){return n(this,void 0,void 0,(function*(){const i=e.find((e=>e.uuid===t.uuid));return i?yield t.create(i):void 0}))}static requestRobot(e,...t){return n(this,void 0,void 0,(function*(){return yield e.requestDevice({filters:[...null!=t?t:[],{services:[_.uuid]}]})}))}static getServices(e){return n(this,void 0,void 0,(function*(){if(!e||!e.gatt)return null;e.gatt.connected||(yield e.gatt.connect());const t=yield e.gatt.getPrimaryServices();return{uartService:yield j.tryCreateService(t,_)}}))}static tryCreate(e,t,i,...r){return n(this,void 0,void 0,(function*(){const n=yield j.requestRobot(i,...r),s=yield j.getServices(n);if(!s)throw new Error("Unable to connect to doodlebot's UART service");return new j(n,s,e,t)}))}constructor(e,t,i,n){this.device=e,this.services=t,this.ssid=i,this.wifiPassword=n,this.pending={motor:void 0,wifi:void 0,websocket:void 0},this.onMotor=new y,this.onSensor=new y,this.onNetwork=new y,this.disconnectCallbacks=new Set,this.subscriptions=new Array,this.sensorData={bumper:{front:0,back:0},altimeter:0,battery:0,distance:0,humidity:0,temperature:0,pressure:0,gyroscope:{x:0,y:0,z:0},magnometer:{x:0,y:0,z:0},accelerometer:{x:0,y:0,z:0},light:{red:0,green:0,blue:0,alpha:0}},this.sensorState={bumper:!1,altimeter:!1,battery:!1,distance:!1,humidity:!1,temperature:!1,pressure:!1,gyroscope:!1,magnometer:!1,accelerometer:!1,light:!1},this.subscribe(t.uartService,"receiveText",this.receiveTextBLE.bind(this)),this.subscribe(e,"gattserverdisconnected",this.handleBleDisconnect.bind(this)),this.connectToWebsocket({ssid:i,password:n})}subscribe(e,t,i){e.addEventListener(t,i),this.subscriptions.push({target:e,event:t,listener:i})}formCommand(...e){return`(${e.join(",")})`}parseCommand(e){return e.split("(").map((e=>e.replace(")",""))).map((e=>{const[t,...i]=e.split(",");return{command:t,parameters:i}}))}sendBLECommand(e,...t){const{uartService:i}=this.services;return i.sendText(this.formCommand(e,...t))}sendWebsocketCommand(e,...t){return n(this,void 0,void 0,(function*(){yield this.connectToWebsocket(),this.websocket.send(this.formCommand(e,...t))}))}updateSensor(e,t){this.onSensor.emit(e,t),this.sensorData[e]=t}updateNetworkStatus(e,t){const i=S(e,f),n=S(t,v);if("127.0.0.1"===i)return this.onNetwork.emit(B);this.connection={ip:i,hostname:n},this.onNetwork.emit(T,this.connection)}receiveTextBLE(e){for(const{command:t,parameters:i}of this.parseCommand(e.detail))if(t.startsWith(f))this.updateNetworkStatus(t,i[0]);else switch(t){case"ms":this.onMotor.emit(P);break;case l.bumper:{const[e,n]=i.map((e=>Number.parseFloat(e)));this.updateSensor(h[t],{front:e,back:n});break}case l.distance:case l.battery:case l.altimeter:case l.humidity:case l.temperature:case l.pressure:{const e=Number.parseFloat(i[0]);this.updateSensor(h[t],e);break}case l.gyroscope:case l.magnometer:case l.accelerometer:{const[e,n,r]=i.map((e=>Number.parseFloat(e)));this.updateSensor(h[t],{x:e,y:n,z:r});break}case l.light:{const[e,n,r,s]=i.map((e=>Number.parseFloat(e)));this.updateSensor(h[t],{red:e,green:n,blue:r,alpha:s});break}default:throw new Error(`Not implemented: ${t}`)}}onWebsocketMessage(e){}invalidateWifiConnection(){var e;this.connection=void 0,this.pending.wifi=void 0,this.pending.websocket=void 0,null===(e=this.websocket)||void 0===e||e.close(),this.websocket=void 0}handleBleDisconnect(){for(const e of this.disconnectCallbacks)e();for(const{target:e,event:t,listener:i}of this.subscriptions)e.removeEventListener(t,i)}onDisconnect(...e){for(const t of e)this.disconnectCallbacks.add(t)}enableSensor(e){return n(this,void 0,void 0,(function*(){this.sensorState[e]||(yield this.sendBLECommand(s,l[e]),yield new Promise((t=>this.onSensor.once(e,t))),this.sensorState[e]=!0)}))}disableSensor(e){return n(this,void 0,void 0,(function*(){this.sensorState[e]&&(yield this.sendBLECommand(o,l[e]),this.sensorState[e]=!1)}))}getSensorReading(e){return n(this,void 0,void 0,(function*(){return yield this.enableSensor(e),this.sensorData[e]}))}motorCommand(e,...t){return n(this,void 0,void 0,(function*(){const{pending:{motor:i}}=this;switch(e){case"steps":{i&&(yield i);const[e,r]=t;return yield this.untilFinishedPending("motor",new Promise((t=>n(this,void 0,void 0,(function*(){yield this.sendBLECommand(a,e.steps,r.steps,e.stepsPerSecond,r.stepsPerSecond),this.onMotor.once(P,t)})))))}case"arc":{i&&(yield i);const[e,r]=t;return yield this.untilFinishedPending("motor",new Promise((t=>n(this,void 0,void 0,(function*(){yield this.sendBLECommand(a,e,r),this.onMotor.once(P,t)})))))}case"stop":return yield this.untilFinishedPending("motor",new Promise((e=>n(this,void 0,void 0,(function*(){yield this.sendBLECommand(a,"s"),this.onMotor.once(P,e)})))))}}))}lowPowerMode(){return n(this,void 0,void 0,(function*(){yield this.sendBLECommand(d)}))}connectToWifi(e){return n(this,void 0,void 0,(function*(){const{ssid:t,pending:{wifi:i}}=this;e&&e.ssid!==t?(this.invalidateWifiConnection(),this.ssid=e.ssid,this.wifiPassword=e.password):i&&(yield i),this.connection||(yield this.untilFinishedPending("wifi",new Promise((e=>n(this,void 0,void 0,(function*(){yield this.sendBLECommand(c,this.ssid,this.wifiPassword),this.onNetwork.once(T,e)}))))))}))}untilFinishedPending(e,t){return n(this,void 0,void 0,(function*(){this.pending[e]=t,yield t,this.pending[e]=void 0}))}connectToWebsocket(e){return n(this,void 0,void 0,(function*(){yield this.connectToWifi(e);const{pending:{websocket:t}}=this;t&&(yield t),this.websocket||(this.websocket=new WebSocket(`ws://${this.connection.ip}:${p}`),yield this.untilFinishedPending("websocket",new Promise((e=>{const t=()=>{this.websocket.removeEventListener("open",t),e()};this.websocket.addEventListener("open",t),this.websocket.addEventListener("message",this.onWebsocketMessage.bind(this))}))))}))}display(e){return n(this,void 0,void 0,(function*(){if("clear"===e)yield this.sendWebsocketCommand(u,"c")}))}}const O={name:"Doodlebot",description:"Program a doodlebot robot",iconURL:"Replace with the name of your icon image file (which should be placed in the same directory as this file)",insetIconURL:"Replace with the name of your inset icon image file (which should be placed in the same directory as this file)"};let D=(()=>{var e;let s,o,a,c,d,u=t.extension(O,"indicators"),l=[];return e=class extends u{constructor(){super(...arguments),this.doodlebot=void function(e,t,i){for(var n=arguments.length>2,r=0;r<t.length;r++)i=n?t[r].call(e,i):t[r].call(e)}(this,l)}init(e){}connectToBLE(){return n(this,void 0,void 0,(function*(){console.log("Getting BLE device");const{bluetooth:t}=window.navigator;if(!t)return alert("Your browser does not allow / support bluetooth.");try{const e="Bluefruit52";this.doodlebot=yield j.tryCreate("","",t,{namePrefix:e}),yield this.indicateFor({position:"category",msg:"Connected to robot"},1e3)}catch(t){e.ProcessConnectionError(t)}}))}test(){}connect(){this.connectToBLE()}playAnimation(e){}displayText(e){}clearDisplay(){}static ProcessConnectionError(e){console.error(e),"Bluetooth adapter not available."==e.message&&alert("Your device does not support BLE connections."),"User cancelled the requestDevice() chooser."==e.message?alert("You must select a device to connect to. Please try again."):"User cancelled the requestDevice() chooser."!==e.message&&alert("There was a problem connecting your device, please try again or request assistance.")}},(()=>{var n;const h="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(n=u[Symbol.metadata])&&void 0!==n?n:null):void 0;s=[t.buttonBlock("Test Robot")],o=[t.buttonBlock("Connect Robot")],a=[t.block({type:"command",text:e=>`play ${e} animation`,arg:{type:"string",options:r,defaultValue:"happy"}})],c=[t.block({type:"command",text:e=>`display text ${e}`,arg:{type:"string",defaultValue:"Hello!"}})],d=[t.block({type:"command",text:"clear display"})],i(e,null,s,{kind:"method",name:"test",static:!1,private:!1,access:{has:e=>"test"in e,get:e=>e.test},metadata:h},null,l),i(e,null,o,{kind:"method",name:"connect",static:!1,private:!1,access:{has:e=>"connect"in e,get:e=>e.connect},metadata:h},null,l),i(e,null,a,{kind:"method",name:"playAnimation",static:!1,private:!1,access:{has:e=>"playAnimation"in e,get:e=>e.playAnimation},metadata:h},null,l),i(e,null,c,{kind:"method",name:"displayText",static:!1,private:!1,access:{has:e=>"displayText"in e,get:e=>e.displayText},metadata:h},null,l),i(e,null,d,{kind:"method",name:"clearDisplay",static:!1,private:!1,access:{has:e=>"clearDisplay"in e,get:e=>e.clearDisplay},metadata:h},null,l),h&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),e})();return e.Extension=D,Object.defineProperty(e,"__esModule",{value:!0}),e}({},ExtensionFramework);//# sourceMappingURL=doodlebot.js.map
