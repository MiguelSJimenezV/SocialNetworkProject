(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Lh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Jy;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xy=function(t){const e=up(t);return hp.encodeByteArray(e,!0)},Wo=function(t){return Xy(t).replace(/\./g,"")},dp=function(t){try{return hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=()=>Zy().__FIREBASE_DEFAULTS__,tv=()=>{if(typeof process>"u"||typeof Lh>"u")return;const t=Lh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dp(t[1]);return e&&JSON.parse(e)},ua=()=>{try{return ev()||tv()||nv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fp=t=>{var e,n;return(n=(e=ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pp=t=>{const e=fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mp=()=>{var t;return(t=ua())===null||t===void 0?void 0:t.config},gp=t=>{var e;return(e=ua())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function iv(){var t;const e=(t=ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ov(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function av(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cv(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uv(){return!iv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hv(){try{return typeof indexedDB=="object"}catch{return!1}}function dv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fv,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pv(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wn(s,l,r)}}function pv(t,e){return t.replace(mv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mv=/\{\$([^}]+)}/g;function gv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uh(i)&&Uh(o)){if(!Ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _v(t,e){const n=new yv(t,e);return n.subscribe.bind(n)}class yv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tv(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ev(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ev(t){return t===Ar?void 0:t}function Tv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const bv={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Av=ve.INFO,Rv={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Pv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=Av,this._logHandler=Pv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Sv=(t,e)=>e.some(n=>t instanceof n);let Fh,Bh;function Cv(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kv(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yp=new WeakMap,Fl=new WeakMap,vp=new WeakMap,dl=new WeakMap,Pc=new WeakMap;function xv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yp.set(n,t)}).catch(()=>{}),Pc.set(e,t),e}function Dv(t){if(Fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fl.set(t,e)}let Bl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nv(t){Bl=t(Bl)}function Ov(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return vp.set(r,e.sort?e.sort():[e]),rr(r)}:kv().includes(t)?function(...e){return t.apply(fl(this),e),rr(yp.get(this))}:function(...e){return rr(t.apply(fl(this),e))}}function Vv(t){return typeof t=="function"?Ov(t):(t instanceof IDBTransaction&&Dv(t),Sv(t,Cv())?new Proxy(t,Bl):t)}function rr(t){if(t instanceof IDBRequest)return xv(t);if(dl.has(t))return dl.get(t);const e=Vv(t);return e!==t&&(dl.set(t,e),Pc.set(e,t)),e}const fl=t=>Pc.get(t);function Mv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=rr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rr(o.result),c.oldVersion,c.newVersion,rr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Lv=["get","getKey","getAll","getAllKeys","count"],Uv=["put","add","delete","clear"],pl=new Map;function $h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Uv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Lv.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return pl.set(e,i),i}Nv(t=>({...t,get:(e,n,r)=>$h(e,n)||t.get(e,n,r),has:(e,n)=>!!$h(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $l="@firebase/app",jh="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Rc("@firebase/app"),$v="@firebase/app-compat",jv="@firebase/analytics-compat",qv="@firebase/analytics",Hv="@firebase/app-check-compat",Wv="@firebase/app-check",Kv="@firebase/auth",zv="@firebase/auth-compat",Gv="@firebase/database",Qv="@firebase/database-compat",Yv="@firebase/functions",Jv="@firebase/functions-compat",Xv="@firebase/installations",Zv="@firebase/installations-compat",ew="@firebase/messaging",tw="@firebase/messaging-compat",nw="@firebase/performance",rw="@firebase/performance-compat",sw="@firebase/remote-config",iw="@firebase/remote-config-compat",ow="@firebase/storage",aw="@firebase/storage-compat",lw="@firebase/firestore",cw="@firebase/vertexai-preview",uw="@firebase/firestore-compat",hw="firebase",dw="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="[DEFAULT]",fw={[$l]:"fire-core",[$v]:"fire-core-compat",[qv]:"fire-analytics",[jv]:"fire-analytics-compat",[Wv]:"fire-app-check",[Hv]:"fire-app-check-compat",[Kv]:"fire-auth",[zv]:"fire-auth-compat",[Gv]:"fire-rtdb",[Qv]:"fire-rtdb-compat",[Yv]:"fire-fn",[Jv]:"fire-fn-compat",[Xv]:"fire-iid",[Zv]:"fire-iid-compat",[ew]:"fire-fcm",[tw]:"fire-fcm-compat",[nw]:"fire-perf",[rw]:"fire-perf-compat",[sw]:"fire-rc",[iw]:"fire-rc-compat",[ow]:"fire-gcs",[aw]:"fire-gcs-compat",[lw]:"fire-fst",[uw]:"fire-fst-compat",[cw]:"fire-vertex","fire-js":"fire-js",[hw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,pw=new Map,ql=new Map;function qh(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(ql.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,t);for(const n of zo.values())qh(n,t);for(const n of pw.values())qh(n,t);return!0}function ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new $i("app","Firebase",mw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=dw;function wp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=mp()),!n)throw sr.create("no-options");const i=zo.get(s);if(i){if(Ko(n,i.options)&&Ko(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new Iv(s);for(const c of ql.values())o.addComponent(c);const l=new gw(n,r,o);return zo.set(s,l),l}function Sc(t=jl){const e=zo.get(t);if(!e&&t===jl&&mp())return wp();if(!e)throw sr.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let s=(r=fw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(l.join(" "));return}xr(new ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="firebase-heartbeat-database",yw=1,Ti="firebase-heartbeat-store";let ml=null;function Ep(){return ml||(ml=Mv(_w,yw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),ml}async function vw(t){try{const n=(await Ep()).transaction(Ti),r=await n.objectStore(Ti).get(Tp(t));return await n.done,r}catch(e){if(e instanceof wn)On.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function Hh(t,e){try{const r=(await Ep()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,Tp(t)),await r.done}catch(n){if(n instanceof wn)On.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function Tp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=1024,Ew=30*24*60*60*1e3;class Tw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Ew}),this._storage.overwrite(this._heartbeatsCache))}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wh(),{heartbeatsToSend:r,unsentEntries:s}=Iw(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function Iw(t,e=ww){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hv()?dv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kh(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){xr(new ar("platform-logger",e=>new Fv(e),"PRIVATE")),xr(new ar("heartbeat",e=>new Tw(e),"PRIVATE")),hn($l,jh,t),hn($l,jh,"esm2017"),hn("fire-js","")}Aw("");var zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,Ip;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(b,A,P){for(var E=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)E[Rt-2]=arguments[Rt];return y.prototype[A].apply(b,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,T){T||(T=0);var b=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)b[A]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(A=0;16>A;++A)b[A]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],A=I.g[2];var P=I.g[3],E=y+(P^T&(A^P))+b[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=P+(A^y&(T^A))+b[1]+3905402710&4294967295,P=y+(E<<12&4294967295|E>>>20),E=A+(T^P&(y^T))+b[2]+606105819&4294967295,A=P+(E<<17&4294967295|E>>>15),E=T+(y^A&(P^y))+b[3]+3250441966&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(P^T&(A^P))+b[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=P+(A^y&(T^A))+b[5]+1200080426&4294967295,P=y+(E<<12&4294967295|E>>>20),E=A+(T^P&(y^T))+b[6]+2821735955&4294967295,A=P+(E<<17&4294967295|E>>>15),E=T+(y^A&(P^y))+b[7]+4249261313&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(P^T&(A^P))+b[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=P+(A^y&(T^A))+b[9]+2336552879&4294967295,P=y+(E<<12&4294967295|E>>>20),E=A+(T^P&(y^T))+b[10]+4294925233&4294967295,A=P+(E<<17&4294967295|E>>>15),E=T+(y^A&(P^y))+b[11]+2304563134&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(P^T&(A^P))+b[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=P+(A^y&(T^A))+b[13]+4254626195&4294967295,P=y+(E<<12&4294967295|E>>>20),E=A+(T^P&(y^T))+b[14]+2792965006&4294967295,A=P+(E<<17&4294967295|E>>>15),E=T+(y^A&(P^y))+b[15]+1236535329&4294967295,T=A+(E<<22&4294967295|E>>>10),E=y+(A^P&(T^A))+b[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^A&(y^T))+b[6]+3225465664&4294967295,P=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(P^y))+b[11]+643717713&4294967295,A=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(A^P))+b[0]+3921069994&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(A^P&(T^A))+b[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^A&(y^T))+b[10]+38016083&4294967295,P=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(P^y))+b[15]+3634488961&4294967295,A=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(A^P))+b[4]+3889429448&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(A^P&(T^A))+b[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^A&(y^T))+b[14]+3275163606&4294967295,P=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(P^y))+b[3]+4107603335&4294967295,A=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(A^P))+b[8]+1163531501&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(A^P&(T^A))+b[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^A&(y^T))+b[2]+4243563512&4294967295,P=y+(E<<9&4294967295|E>>>23),E=A+(y^T&(P^y))+b[7]+1735328473&4294967295,A=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(A^P))+b[12]+2368359562&4294967295,T=A+(E<<20&4294967295|E>>>12),E=y+(T^A^P)+b[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^A)+b[8]+2272392833&4294967295,P=y+(E<<11&4294967295|E>>>21),E=A+(P^y^T)+b[11]+1839030562&4294967295,A=P+(E<<16&4294967295|E>>>16),E=T+(A^P^y)+b[14]+4259657740&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(T^A^P)+b[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^A)+b[4]+1272893353&4294967295,P=y+(E<<11&4294967295|E>>>21),E=A+(P^y^T)+b[7]+4139469664&4294967295,A=P+(E<<16&4294967295|E>>>16),E=T+(A^P^y)+b[10]+3200236656&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(T^A^P)+b[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^A)+b[0]+3936430074&4294967295,P=y+(E<<11&4294967295|E>>>21),E=A+(P^y^T)+b[3]+3572445317&4294967295,A=P+(E<<16&4294967295|E>>>16),E=T+(A^P^y)+b[6]+76029189&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(T^A^P)+b[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^A)+b[12]+3873151461&4294967295,P=y+(E<<11&4294967295|E>>>21),E=A+(P^y^T)+b[15]+530742520&4294967295,A=P+(E<<16&4294967295|E>>>16),E=T+(A^P^y)+b[2]+3299628645&4294967295,T=A+(E<<23&4294967295|E>>>9),E=y+(A^(T|~P))+b[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~A))+b[7]+1126891415&4294967295,P=y+(E<<10&4294967295|E>>>22),E=A+(y^(P|~T))+b[14]+2878612391&4294967295,A=P+(E<<15&4294967295|E>>>17),E=T+(P^(A|~y))+b[5]+4237533241&4294967295,T=A+(E<<21&4294967295|E>>>11),E=y+(A^(T|~P))+b[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~A))+b[3]+2399980690&4294967295,P=y+(E<<10&4294967295|E>>>22),E=A+(y^(P|~T))+b[10]+4293915773&4294967295,A=P+(E<<15&4294967295|E>>>17),E=T+(P^(A|~y))+b[1]+2240044497&4294967295,T=A+(E<<21&4294967295|E>>>11),E=y+(A^(T|~P))+b[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~A))+b[15]+4264355552&4294967295,P=y+(E<<10&4294967295|E>>>22),E=A+(y^(P|~T))+b[6]+2734768916&4294967295,A=P+(E<<15&4294967295|E>>>17),E=T+(P^(A|~y))+b[13]+1309151649&4294967295,T=A+(E<<21&4294967295|E>>>11),E=y+(A^(T|~P))+b[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~A))+b[11]+3174756917&4294967295,P=y+(E<<10&4294967295|E>>>22),E=A+(y^(P|~T))+b[2]+718787259&4294967295,A=P+(E<<15&4294967295|E>>>17),E=T+(P^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,b=this.B,A=this.h,P=0;P<y;){if(A==0)for(;P<=T;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<y;)if(b[A++]=I.charCodeAt(P++),A==this.blockSize){s(this,b),A=0;break}}else for(;P<y;)if(b[A++]=I[P++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var b=0;32>b;b+=8)I[T++]=this.g[y]>>>b&255;return I};function i(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],b=!0,A=I.length-1;0<=A;A--){var P=I[A]|0;b&&P==y||(T[A]=P,b=!1)}this.g=T}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(h(-I));for(var y=[],T=1,b=0;I>=T;b++)y[b]=I/T|0,T*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return D(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),b=p,A=0;A<I.length;A+=8){var P=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+P),y);8>P?(P=h(Math.pow(y,P)),b=b.j(P).add(h(E))):(b=b.j(T),b=b.add(h(E)))}return b}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var b=this.i(T);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+D(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,b="";;){var A=$(T,y).g;T=q(T,A.j(y));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=A,C(T))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=q(this,I),N(I)?-1:C(I)?0:1};function D(I){for(var y=I.g.length,T=[],b=0;b<y;b++)T[b]=~I.g[b];return new o(T,~I.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0,A=0;A<=y;A++){var P=b+(this.i(A)&65535)+(I.i(A)&65535),E=(P>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=E>>>16,P&=65535,E&=65535,T[A]=E<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function q(I,y){return I.add(D(y))}t.j=function(I){if(C(this)||C(I))return p;if(N(this))return N(I)?D(this).j(D(I)):D(D(this).j(I));if(N(I))return D(this.j(D(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],b=0;b<2*y;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<I.g.length;A++){var P=this.i(b)>>>16,E=this.i(b)&65535,Rt=I.i(A)>>>16,Ht=I.i(A)&65535;T[2*b+2*A]+=E*Ht,B(T,2*b+2*A),T[2*b+2*A+1]+=P*Ht,B(T,2*b+2*A+1),T[2*b+2*A+1]+=E*Rt,B(T,2*b+2*A+1),T[2*b+2*A+2]+=P*Rt,B(T,2*b+2*A+2)}for(b=0;b<y;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=y;b<2*y;b++)T[b]=0;return new o(T,0)};function B(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function H(I,y){this.g=I,this.h=y}function $(I,y){if(C(y))throw Error("division by zero");if(C(I))return new H(p,p);if(N(I))return y=$(D(I),y),new H(D(y.g),D(y.h));if(N(y))return y=$(I,D(y)),new H(D(y.g),y.h);if(30<I.g.length){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,b=y;0>=b.l(I);)T=le(T),b=le(b);var A=de(T,1),P=de(b,1);for(b=de(b,2),T=de(T,2);!C(b);){var E=P.add(b);0>=E.l(I)&&(A=A.add(T),P=E),b=de(b,1),T=de(T,1)}return y=q(I,A.j(y)),new H(A,y)}for(A=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=h(T),E=P.j(y);N(E)||0<E.l(I);)T-=b,P=h(T),E=P.j(y);C(P)&&(P=m),A=A.add(P),I=q(I,E)}return new H(A,I)}t.A=function(I){return $(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)&I.i(b);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)|I.i(b);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)^I.i(b);return new o(T,this.h^I.h)};function le(I){for(var y=I.g.length+1,T=[],b=0;b<y;b++)T[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(T,I.h)}function de(I,y){var T=y>>5;y%=32;for(var b=I.g.length-T,A=[],P=0;P<b;P++)A[P]=0<y?I.i(P+T)>>>y|I.i(P+T+1)<<32-y:I.i(P+T);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ip=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Sr=o}).apply(typeof zh<"u"?zh:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bp,Ap,si,Rp,xo,Hl,Pp,Sp,Cp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var x=f++;return{value:u(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,x){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return u.prototype[S].apply(g,z)}}function N(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const S=a.length||0,x=g.length||0;a.length=S+x;for(let z=0;z<x;z++)a[S+z]=g[z]}else a.push(g)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var le=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function de(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let x=0;x<T.length;x++)f=T[x],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Mt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Rt{constructor(){this.h=this.g=null}add(u,f){const g=Ht.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ht=new q(()=>new Ge,a=>a.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,_e=!1,Mt=new Rt,Jt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(Wt)}};var Wt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){P(f)}var u=Ht;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}_e=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function sn(a,u){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(le){e:{try{$(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}C(sn,Be);var Ot={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,u,f,g,S){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var z=_(a,u,g,S);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new Q(u,this.src,x,!!g,S),u.fa=f,a.push(u)),u};function xe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),x;(x=0<=S)&&Array.prototype.splice.call(g,S,1),x&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function _(a,u,f,g){for(var S=0;S<a.length;++S){var x=a[S];if(!x.da&&x.listener==u&&x.capture==!!f&&x.ha==g)return S}return-1}var w="closure_lm_"+(1e6*Math.random()|0),k={};function L(a,u,f,g,S){if(Array.isArray(u)){for(var x=0;x<u.length;x++)L(a,u[x],f,g,S);return null}return f=ne(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!!g,S):O(a,u,f,!1,g,S)}function O(a,u,f,g,S,x){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,De=se(a);if(De||(a[w]=De=new Ee(a)),f=De.add(u,f,g,z,x),f.proxy)return f;if(g=F(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Bn||(S=z),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(W(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=j;return a}function G(a,u,f,g,S){if(Array.isArray(u))for(var x=0;x<u.length;x++)G(a,u[x],f,g,S);else g=h(g)?!!g.capture:!!g,f=ne(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(x=a.g[u],f=_(x,f,g,S),-1<f&&(Z(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[u],a.h--)))):a&&(a=se(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_(u,f,g,S)),(f=-1<a?u[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])xe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(W(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=se(u))?(xe(f,a),f.h==0&&(f.src=null,u[w]=null)):Z(a)}}}function W(a){return a in k?k[a]:k[a]="on"+a}function j(a,u){if(a.da)a=!0;else{u=new sn(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&K(a),a=f.call(g,u)}return a}function se(a){return a=a[w],a instanceof Ee?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(u){return a.handleEvent(u)}),a[Y])}function ee(){Fe.call(this),this.i=new Ee(this),this.M=this,this.F=null}C(ee,Fe),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(a,u,f,g){G(this,a,u,f,g)};function ie(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Be(u,a);else if(u instanceof Be)u.target=u.target||a;else{var S=u;u=new Be(g,a),b(u,S)}if(S=!0,f)for(var x=f.length-1;0<=x;x--){var z=u.g=f[x];S=Re(z,g,!0,u)&&S}if(z=u.g=a,S=Re(z,g,!0,u)&&S,S=Re(z,g,!1,u)&&S,f)for(x=0;x<f.length;x++)z=u.g=f[x],S=Re(z,g,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ee.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Re(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,x=0;x<u.length;++x){var z=u[x];if(z&&!z.da&&z.capture==f){var De=z.listener,it=z.ha||z.src;z.fa&&xe(a.i,z),S=De.call(it,g)!==!1&&S}}return S&&!g.defaultPrevented}function Ie(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function ft(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,ft(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class et extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){Fe.call(this),this.h=a,this.g={}}C(st,Fe);var pt=[];function $n(a){de(a.g,function(u,f){this.g.hasOwnProperty(f)&&K(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),$n(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=l.JSON.stringify,Pt=l.JSON.parse,Kt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Gr(){}Gr.prototype.h=null;function Ku(a){return a.h||(a.h=a.i())}function zu(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ja(){Be.call(this,"d")}C(Ja,Be);function Xa(){Be.call(this,"c")}C(Xa,Be);var vr={},Gu=null;function ro(){return Gu=Gu||new ee}vr.La="serverreachability";function Qu(a){Be.call(this,vr.La,a)}C(Qu,Be);function Fs(a){const u=ro();ie(u,new Qu(u))}vr.STAT_EVENT="statevent";function Yu(a,u){Be.call(this,vr.STAT_EVENT,a),this.stat=u}C(Yu,Be);function St(a){const u=ro();ie(u,new Yu(u,a))}vr.Ma="timingevent";function Ju(a,u){Be.call(this,vr.Ma,a),this.size=u}C(Ju,Be);function Bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function Py(a,u,f,g,S,x){a.info(function(){if(a.g)if(x)for(var z="",De=x.split("&"),it=0;it<De.length;it++){var be=De[it].split("=");if(1<be.length){var mt=be[0];be=be[1];var gt=mt.split("_");z=2<=gt.length&&gt[1]=="type"?z+(mt+"="+be+"&"):z+(mt+"=redacted&")}}else z=null;else z=x;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+z})}function Sy(a,u,f,g,S,x,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+x+" "+z})}function Qr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ky(a,f)+(g?" "+g:"")})}function Cy(a,u){a.info(function(){return"TIMEOUT: "+u})}$s.prototype.info=function(){};function ky(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var x=S[0];if(x!="noop"&&x!="stop"&&x!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return zr(f)}catch{return u}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Za;function io(){}C(io,Gr),io.prototype.g=function(){return new XMLHttpRequest},io.prototype.i=function(){return{}},Za=new io;function jn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var eh={},el={};function tl(a,u,f){a.L=1,a.v=co(In(u)),a.m=f,a.P=!0,th(a,null)}function th(a,u){a.F=Date.now(),oo(a),a.A=In(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),mh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Zu,a.g=Nh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new et(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(pt[0]=S.toString()),S=pt);for(var x=0;x<S.length;x++){var z=L(f,S[x],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Fs(),Py(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const u=this.M;u&&bn(a)==3?u.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=bn(this.g);var u=this.g.Ba();const Xr=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Th(this.g)))){this.J||gt!=4||u==7||(u==8||0>=Xr?Fs(3):Fs(2)),nl(this);var f=this.g.Z();this.X=f;t:if(nh(this)){var g=Th(this.g);a="";var S=g.length,x=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),js(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(x&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Sy(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var De,it=this.g;if((De=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(De)){var be=De;break t}}be=null}if(f=be)Qr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,f);else{this.o=!1,this.s=3,St(12),wr(this),js(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<z.length;)if(Xt=xy(this,z),Xt==el){gt==4&&(this.s=4,St(14),f=!1),Qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==eh){this.s=4,St(15),Qr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Qr(this.i,this.l,Xt,null),rl(this,Xt);if(nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||z.length!=0||this.h.h||(this.s=1,St(16),f=!1),this.o=this.o&&f,!f)Qr(this.i,this.l,z,"[Invalid Chunked Response]"),wr(this),js(this);else if(0<z.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),cl(mt),mt.M=!0,St(11))}}else Qr(this.i,this.l,z,null),rl(this,z);gt==4&&wr(this),this.o&&!this.J&&(gt==4?Ch(this.j,this):(this.o=!1,oo(this)))}else Gy(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),wr(this),js(this)}}}catch{}finally{}};function nh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xy(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?el:(f=Number(u.substring(f,g)),isNaN(f)?eh:(g+=1,g+f>u.length?el:(u=u.slice(g,g+f),a.C=g+f,u)))}jn.prototype.cancel=function(){this.J=!0,wr(this)};function oo(a){a.S=Date.now()+a.I,rh(a,a.I)}function rh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(m(a.ba,a),u)}function nl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Cy(this.i,this.A),this.L!=2&&(Fs(),St(17)),wr(this),this.s=2,js(this)):rh(this,this.S-a)};function js(a){a.j.G==0||a.J||Ch(a.j,a)}function wr(a){nl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,$n(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function rl(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||sl(f.h,a))){if(!a.K&&sl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)mo(f),fo(f);else break e;ll(f),St(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Bs(m(f.Za,f),6e3));if(1>=oh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Tr(f,11)}else if((a.K||f.g==a)&&mo(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let be=S[u];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const mt=be[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=be[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const Xr=be[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(g=1.5*Xr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Xt=a.g;if(Xt){const _o=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_o){var x=g.h;x.g||_o.indexOf("spdy")==-1&&_o.indexOf("quic")==-1&&_o.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(il(x,x.h),x.h=null))}if(g.D){const ul=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(g.ya=ul,Me(g.I,g.D,ul))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=Dh(g,g.J?g.ia:null,g.W),z.K){ah(g.h,z);var De=z,it=g.L;it&&(De.I=it),De.B&&(nl(De),oo(De)),g.g=z}else Ph(g);0<f.i.length&&po(f)}else be[0]!="stop"&&be[0]!="close"||Tr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Tr(f,7):al(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Fs(4)}catch{}}var Dy=class{constructor(a,u){this.g=a,this.map=u}};function sh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ih(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oh(a){return a.h?1:a.g?a.g.size:0}function sl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function il(a,u){a.g?a.g.add(u):a.h=u}function ah(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}sh.prototype.cancel=function(){if(this.i=lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return N(a.i)}function Ny(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function Oy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function ch(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Oy(a),g=Ny(a),S=g.length,x=0;x<S;x++)u.call(void 0,g[x],f&&f[x],a)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var x=a[f].substring(0,g);S=a[f].substring(g+1)}else x=a[f];u(x,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,ao(this,a.j),this.o=a.o,this.g=a.g,lo(this,a.s),this.l=a.l;var u=a.i,f=new Ws;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),hh(this,f),this.m=a.m}else a&&(u=String(a).match(uh))?(this.h=!1,ao(this,u[1]||"",!0),this.o=qs(u[2]||""),this.g=qs(u[3]||"",!0),lo(this,u[4]),this.l=qs(u[5]||"",!0),hh(this,u[6]||"",!0),this.m=qs(u[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Er.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Hs(u,dh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Hs(u,dh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Hs(f,f.charAt(0)=="/"?Uy:Ly,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Hs(f,By)),a.join("")};function In(a){return new Er(a)}function ao(a,u,f){a.j=f?qs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function lo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function hh(a,u,f){u instanceof Ws?(a.i=u,$y(a.i,a.h)):(f||(u=Hs(u,Fy)),a.i=new Ws(u,a.h))}function Me(a,u,f){a.i.set(u,f)}function co(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,My),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function My(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dh=/[#\/\?@]/g,Ly=/[#\?:]/g,Uy=/[#\?]/g,Fy=/[#\?@]/g,By=/#/g;function Ws(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&Vy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ws.prototype,t.add=function(a,u){qn(this),this.i=null,a=Yr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function fh(a,u){qn(a),u=Yr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ph(a,u){return qn(a),u=Yr(a,u),a.g.has(u)}t.forEach=function(a,u){qn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let x=0;x<S.length;x++)f.push(u[g])}return f},t.V=function(a){qn(this);let u=[];if(typeof a=="string")ph(this,a)&&(u=u.concat(this.g.get(Yr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return qn(this),this.i=null,a=Yr(this,a),ph(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function mh(a,u,f){fh(a,u),0<f.length&&(a.i=null,a.g.set(Yr(a,u),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const x=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var S=x;z[g]!==""&&(S+="="+encodeURIComponent(String(z[g]))),a.push(S)}}return this.i=a.join("&")};function Yr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function $y(a,u){u&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(fh(this,g),mh(this,S,f))},a)),a.j=u}function jy(a,u){const f=new $s;if(l.Image){const g=new Image;g.onload=v(Hn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(Hn,f,"TestLoadImage: error",!1,u,g),g.onabort=v(Hn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(Hn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function qy(a,u){const f=new $s,g=new AbortController,S=setTimeout(()=>{g.abort(),Hn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(S),x.ok?Hn(f,"TestPingServer: ok",!0,u):Hn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Hn(f,"TestPingServer: error",!1,u)})}function Hn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Hy(){this.g=new Kt}function Wy(a,u,f){const g=f||"";try{ch(a,function(S,x){let z=S;h(S)&&(z=zr(S)),u.push(g+x+"="+encodeURIComponent(z))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Ks(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ks,Gr),Ks.prototype.g=function(){return new uo(this.l,this.j)},Ks.prototype.i=function(a){return function(){return a}}({});function uo(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(uo,ee),t=uo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?zs(this):Gs(this),this.readyState==3&&gh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Qa=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _h(a){let u="";return de(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ol(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_h(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,u,f))}function qe(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(qe,ee);var Ky=/^https?$/i,zy=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Za.g(),this.v=this.o?Ku(this.o):Ku(Za),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){yh(this,x);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zy,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of f)this.g.setRequestHeader(x,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eh(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){yh(this,x)}};function yh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,vh(a),ho(a)}function vh(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ho(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wh(this):this.bb())},t.bb=function(){wh(this)};function wh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)Ie(a.Ea,0,a);else if(ie(a,"readystatechange"),bn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var S=String(a.D).match(uh)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!Ky.test(S?S.toLowerCase():"")}f=g}if(f)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var x=2<bn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",vh(a)}}finally{ho(a)}}}}function ho(a,u){if(a.g){Eh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{f.onreadystatechange=g}catch{}}}function Eh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Pt(u)}};function Th(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Gy(a){const u={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=A(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=u[S]||[];u[S]=x,x.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Ih(a){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sh(a&&a.concurrentRequestLimit),this.Da=new Hy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ih.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){St(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Dh(this,null,this.W),po(this)};function al(a){if(bh(a),a.G==3){var u=a.U++,f=In(a.I);if(Me(f,"SID",a.K),Me(f,"RID",u),Me(f,"TYPE","terminate"),Ys(a,f),u=new jn(a,a.j,u),u.L=2,u.v=co(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),oo(u)}xh(a)}function fo(a){a.g&&(cl(a),a.g.cancel(),a.g=null)}function bh(a){fo(a),a.u&&(l.clearTimeout(a.u),a.u=null),mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function po(a){if(!ih(a.h)&&!a.s){a.s=!0;var u=a.Ga;we||Jt(),_e||(we(),_e=!0),Mt.add(u,a),a.B=0}}function Qy(a,u){return oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(m(a.Ga,a,u),kh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new jn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(S.H=x,x=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Rh(this,S,u),f=In(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),Ys(this,f),x&&(this.O?u="headers="+encodeURIComponent(String(_h(x)))+"&"+u:this.m&&ol(f,this.m,x)),il(this.h,S),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",u),Me(f,"SID","null"),S.T=!0,tl(S,f,null)):tl(S,f,u),this.G=2}}else this.G==3&&(a?Ah(this,a):this.i.length==0||ih(this.h)||Ah(this))};function Ah(a,u){var f;u?f=u.l:f=a.U++;const g=In(a.I);Me(g,"SID",a.K),Me(g,"RID",f),Me(g,"AID",a.T),Ys(a,g),a.m&&a.o&&ol(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Rh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),il(a.h,f),tl(f,g,u)}function Ys(a,u){a.H&&de(a.H,function(f,g){Me(u,g,f)}),a.l&&ch({},function(f,g){Me(u,g,f)})}function Rh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let x=-1;for(;;){const z=["count="+f];x==-1?0<f?(x=S[0].g,z.push("ofs="+x)):x=0:z.push("ofs="+x);let De=!0;for(let it=0;it<f;it++){let be=S[it].g;const mt=S[it].map;if(be-=x,0>be)x=Math.max(0,S[it].g-100),De=!1;else try{Wy(mt,z,"req"+be+"_")}catch{g&&g(mt)}}if(De){g=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Ph(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;we||Jt(),_e||(we(),_e=!0),Mt.add(u,a),a.v=0}}function ll(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(m(a.Fa,a),kh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),fo(this),Sh(this))};function cl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=In(a.qa);Me(u,"RID","rpc"),Me(u,"SID",a.K),Me(u,"AID",a.T),Me(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(u,"TO",a.ja),Me(u,"TYPE","xmlhttp"),Ys(a,u),a.m&&a.o&&ol(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=co(In(u)),f.m=null,f.P=!0,th(f,a)}t.Za=function(){this.C!=null&&(this.C=null,fo(this),ll(this),St(19))};function mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ch(a,u){var f=null;if(a.g==u){mo(a),cl(a),a.g=null;var g=2}else if(sl(a.h,u))f=u.D,ah(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=ro(),ie(g,new Ju(g,f)),po(a)}else Ph(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Qy(a,u)||g==2&&ll(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function kh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Tr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new Er(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ao(g,"https"),co(g),S?jy(g.toString(),f):qy(g.toString(),f)}else St(2);a.G=0,a.l&&a.l.sa(u),xh(a),bh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function xh(a){if(a.G=0,a.ka=[],a.l){const u=lh(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Dh(a,u,f){var g=f instanceof Er?In(f):new Er(f);if(g.g!="")u&&(g.g=u+"."+g.g),lo(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var x=new Er(null);g&&ao(x,g),u&&(x.g=u),S&&lo(x,S),f&&(x.l=f),g=x}return f=a.D,u=a.ya,f&&u&&Me(g,f,u),Me(g,"VER",a.la),Ys(a,g),g}function Nh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new Ks({eb:f})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}t=Oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function go(){}go.prototype.g=function(a,u){return new Lt(a,u)};function Lt(a,u){ee.call(this),this.g=new Ih(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Jr(this)}C(Lt,ee),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){al(this.g)},Lt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=zr(a),a=f);u.i.push(new Dy(u.Ya++,a)),u.G==3&&po(u)},Lt.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,Lt.aa.N.call(this)};function Vh(a){Ja.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Vh,Ja);function Mh(){Xa.call(this),this.status=1}C(Mh,Xa);function Jr(a){this.g=a}C(Jr,Oh),Jr.prototype.ua=function(){ie(this.g,"a")},Jr.prototype.ta=function(a){ie(this.g,new Vh(a))},Jr.prototype.sa=function(a){ie(this.g,new Mh)},Jr.prototype.ra=function(){ie(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,Cp=function(){return new go},Sp=function(){return ro()},Pp=vr,Hl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,xo=so,Xu.COMPLETE="complete",Rp=Xu,zu.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",ee.prototype.listen=ee.prototype.K,si=zu,Ap=Ks,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,bp=qe}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const Gh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Rc("@firebase/firestore");function Js(){return Dr.logLevel}function te(t,...e){if(Dr.logLevel<=ve.DEBUG){const n=e.map(Cc);Dr.debug(`Firestore (${Ds}): ${t}`,...n)}}function Vn(t,...e){if(Dr.logLevel<=ve.ERROR){const n=e.map(Cc);Dr.error(`Firestore (${Ds}): ${t}`,...n)}}function ws(t,...e){if(Dr.logLevel<=ve.WARN){const n=e.map(Cc);Dr.warn(`Firestore (${Ds}): ${t}`,...n)}}function Cc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Oe(t,e){t||ae()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Pw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sw{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new kp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new yt(e)}}class Cw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Cw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new xw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Nw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ze(0,0))}static max(){return new ue(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ii{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Ow=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ii{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return Ow.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Le.fromString(e))}static fromName(e){return new re(Le.fromString(e).popFirst(5))}static empty(){return new re(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Le(e.slice()))}}function Vw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new lr(s,re.empty(),e)}function Mw(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ue.min(),re.empty(),-1)}static max(){return new lr(ue.max(),re.empty(),-1)}}function Lw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Uw)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Bw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kc.oe=-1;function da(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function $w(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yh(this.data.getIterator())}getIteratorFrom(e){return new Yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Np("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const jw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=jw.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dc(t){const e=t.mapValue.fields.__previous_value__;return xc(e)?Dc(e):e}function bi(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xc(t)?4:Ww(t)?9007199254740991:Hw(t)?10:11:ae()}function yn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),l=cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),l=Ke(i.doubleValue);return o===l?Go(o)===Go(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Qh(o)!==Qh(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!yn(o[c],l[c])))return!1;return!0}(t,e);default:return ae()}}function Ri(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Jh(t.timestampValue,e.timestampValue);case 4:return Jh(bi(t),bi(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Nr(i),c=Nr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ae(l[h],c[h]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(Ke(i.latitude),Ke(o.latitude));return l!==0?l:Ae(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xh(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},m=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=m.value)===null||c===void 0?void 0:c.arrayValue,N=Ae(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Xh(v,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===wo.mapValue&&o===wo.mapValue)return 0;if(i===wo.mapValue)return 1;if(o===wo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ae(c[p],d[p]);if(m!==0)return m;const v=Ts(l[c[p]],h[d[p]]);if(v!==0)return v}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Jh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=cr(t),r=cr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Xh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ts(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Is(t){return Wl(t)}function Wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wl(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function Zh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kl(t){return!!t&&"integerValue"in t}function Nc(t){return!!t&&"arrayValue"in t}function ed(t){return!!t&&"nullValue"in t}function td(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Do(t){return!!t&&"mapValue"in t}function Hw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ui(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ww(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Do(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ui(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Do(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Do(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(ui(this.value))}}function Op(t){const e=[];return Br(t.fields,(n,r)=>{const s=new at([n]);if(Do(r)){const i=Op(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,ue.min(),ue.min(),ue.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,ue.min(),ue.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ue.min(),ue.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.position=e,this.inclusive=n}}function nd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{}class Ye extends Vp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gw(e,n,r):n==="array-contains"?new Jw(e,r):n==="in"?new Xw(e,r):n==="not-in"?new Zw(e,r):n==="array-contains-any"?new eE(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Qw(e,r):new Yw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ts(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Vp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new tn(e,n)}matches(e){return Mp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mp(t){return t.op==="and"}function Lp(t){return zw(t)&&Mp(t)}function zw(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function zl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(Lp(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function Up(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Up(o,s.filters[l]),!0):!1}(t,e):void ae()}function Fp(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Fp).join(" ,")+"}"}(t):"Filter"}class Gw extends Ye{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qw extends Ye{constructor(e,n){super(e,"in",n),this.keys=Bp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yw extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Bp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class Jw extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nc(n)&&Ri(n.arrayValue,this.value)}}class Xw extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class Zw extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ri(this.value.arrayValue,n)}}class eE extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function sd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tE(t,e,n,r,s,i,o)}function Oc(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ue=n}return e.ue}function Vc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Up(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rd(t.startAt,e.startAt)&&rd(t.endAt,e.endAt)}function Gl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nE(t,e,n,r,s,i,o,l){return new Ns(t,e,n,r,s,i,o,l)}function fa(t){return new Ns(t)}function id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $p(t){return t.collectionGroup!==null}function hi(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Pi(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Pi(at.keyField(),r))}return e.ce}function dn(t){const e=he(t);return e.le||(e.le=rE(e,hi(t))),e.le}function rE(t,e){if(t.limitType==="F")return sd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pi(s.field,i)});const n=t.endAt?new Qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qo(t.startAt.position,t.startAt.inclusive):null;return sd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ql(t,e){const n=t.filters.concat([e]);return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yl(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return Vc(dn(t),dn(e))&&t.limitType===e.limitType}function jp(t){return`${Oc(dn(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fp(s)).join(", ")}]`),da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function ma(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of hi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=nd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,hi(r),s)||r.endAt&&!function(o,l,c){const h=nd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,hi(r),s))}(t,e)}function sE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qp(t){return(e,n)=>{let r=!1;for(const s of hi(t)){const i=iE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iE(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Ts(c,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Dp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new je(re.comparator);function Mn(){return oE}const Hp=new je(re.comparator);function ii(...t){let e=Hp;for(const n of t)e=e.insert(n.key,n);return e}function Wp(t){let e=Hp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return di()}function Kp(){return di()}function di(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const aE=new je(re.comparator),lE=new ut(re.comparator);function ye(...t){let e=lE;for(const n of t)e=e.add(n);return e}const cE=new ut(Ae);function uE(){return cE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function zp(t){return{integerValue:""+t}}function hE(t,e){return $w(e)?zp(e):Mc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this._=void 0}}function dE(t,e,n){return t instanceof Si?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xc(i)&&(i=Dc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ci?Qp(t,e):t instanceof ki?Yp(t,e):function(s,i){const o=Gp(s,i),l=od(o)+od(s.Pe);return Kl(o)&&Kl(s.Pe)?zp(l):Mc(s.serializer,l)}(t,e)}function fE(t,e,n){return t instanceof Ci?Qp(t,e):t instanceof ki?Yp(t,e):n}function Gp(t,e){return t instanceof Yo?function(r){return Kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Si extends ga{}class Ci extends ga{constructor(e){super(),this.elements=e}}function Qp(t,e){const n=Jp(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends ga{constructor(e){super(),this.elements=e}}function Yp(t,e){let n=Jp(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class Yo extends ga{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function od(t){return Ke(t.integerValue||t.doubleValue)}function Jp(t){return Nc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.field=e,this.transform=n}}function mE(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ci&&s instanceof Ci||r instanceof ki&&s instanceof ki?Es(r.elements,s.elements,yn):r instanceof Yo&&s instanceof Yo?yn(r.Pe,s.Pe):r instanceof Si&&s instanceof Si}(t.transform,e.transform)}class gE{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function No(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function Xp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lc(t.key,zt.none()):new Wi(t.key,t.data,zt.none());{const n=t.data,r=Vt.empty();let s=new ut(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new pr(t.key,r,new Bt(s.toArray()),zt.none())}}function _E(t,e,n){t instanceof Wi?function(s,i,o){const l=s.value.clone(),c=ld(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(s,i,o){if(!No(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ld(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Zp(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fi(t,e,n,r){return t instanceof Wi?function(i,o,l,c){if(!No(i.precondition,o))return l;const h=i.value.clone(),d=cd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(i,o,l,c){if(!No(i.precondition,o))return l;const h=cd(i.fieldTransforms,c,o),d=o.data;return d.setAll(Zp(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return No(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function yE(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Gp(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Es(r,s,(i,o)=>mE(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends _a{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pr extends _a{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ld(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,fE(o,l,n[s]))}return r}function cd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dE(i,o,e))}return r}class Lc extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vE extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_E(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Xp(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>ad(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>ad(n,r))}}class Uc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return aE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Uc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Te;function IE(t){switch(t){default:return ae();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function em(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Qe.OK:return M.OK;case Qe.CANCELLED:return M.CANCELLED;case Qe.UNKNOWN:return M.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return M.INTERNAL;case Qe.UNAVAILABLE:return M.UNAVAILABLE;case Qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Qe.NOT_FOUND:return M.NOT_FOUND;case Qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Qe.ABORTED:return M.ABORTED;case Qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Qe.DATA_LOSS:return M.DATA_LOSS;default:return ae()}}(Te=Qe||(Qe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=new Sr([4294967295,4294967295],0);function ud(t){const e=bE().encode(t),n=new Ip;return n.update(e),new Uint8Array(n.digest())}function hd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class Fc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oi(`Invalid padding: ${n}`);if(r<0)throw new oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Sr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(AE)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ud(e),[r,s]=hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ud(e),[r,s]=hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(ue.min(),s,new je(Ae),Mn(),ye())}}class Ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ki(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class tm{constructor(e,n){this.targetId=e,this.me=n}}class nm{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dd{constructor(){this.fe=0,this.ge=pd(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Ki(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=pd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RE{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=fd(),this.Qe=new je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Gl(i))if(r===0){const o=new re(i.path);this.Ue(n,o,vt.newNoDocument(o,ue.min()))}else Oe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(c){if(c instanceof Np)return ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fc(o,s,i)}catch(c){return ws(c instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Gl(l.target)){const c=new re(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,vt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ya(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=fd(),this.Qe=new je(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new dd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function fd(){return new je(re.comparator)}function pd(){return new je(re.comparator)}const PE={asc:"ASCENDING",desc:"DESCENDING"},SE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CE={and:"AND",or:"OR"};class kE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jl(t,e){return t.useProto3Json||da(e)?e:{value:e}}function Jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xE(t,e){return Jo(t,e.toTimestamp())}function fn(t){return Oe(!!t),ue.fromTimestamp(function(n){const r=cr(n);return new Ze(r.seconds,r.nanos)}(t))}function Bc(t,e){return Xl(t,e).canonicalString()}function Xl(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sm(t){const e=Le.fromString(t);return Oe(cm(e)),e}function Zl(t,e){return Bc(t.databaseId,e.path)}function gl(t,e){const n=sm(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(om(n))}function im(t,e){return Bc(t.databaseId,e)}function DE(t){const e=sm(t);return e.length===4?Le.emptyPath():om(e)}function ec(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function om(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function md(t,e,n){return{name:Zl(t,e),fields:n.value.mapValue.fields}}function NE(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Oe(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):(Oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?M.UNKNOWN:em(h.code);return new X(d,h.message||"")}(o);n=new nm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gl(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):ue.min(),l=new Vt({mapValue:{fields:r.document.fields}}),c=vt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Oo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gl(t,r.document),i=r.readTime?fn(r.readTime):ue.min(),o=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Oo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gl(t,r.document),i=r.removedTargetIds||[];n=new Oo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new TE(s,i),l=r.targetId;n=new tm(l,o)}}return n}function OE(t,e){let n;if(e instanceof Wi)n={update:md(t,e.key,e.value)};else if(e instanceof Lc)n={delete:Zl(t,e.key)};else if(e instanceof pr)n={update:md(t,e.key,e.data),updateMask:qE(e.fieldMask)};else{if(!(e instanceof vE))return ae();n={verify:Zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Si)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function VE(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(ue.min())&&(o=fn(i)),new gE(o,s.transformResults||[])}(n,e))):[]}function ME(t,e){return{documents:[im(t,e.path)]}}function LE(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=im(t,s);const i=function(h){if(h.length!==0)return lm(tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:ts(m.field),direction:BE(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Jl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function UE(t){let e=DE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=am(p);return m instanceof tn&&Lp(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Pi(ns(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,da(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Qo(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Qo(v,m)}(n.endAt)),nE(e,s,o,i,l,"F",c,h)}function FE(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function am(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>am(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function BE(t){return PE[t]}function $E(t){return SE[t]}function jE(t){return CE[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return at.fromServerFormat(t.fieldPath)}function lm(t){return t instanceof Ye?function(n){if(n.op==="=="){if(td(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(ed(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(td(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(ed(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:$E(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>lm(s));return r.length===1?r[0]:{compositeFilter:{op:jE(n.op),filters:r}}}(t):ae()}function qE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.ct=e}}function WE(t){const e=UE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.un=new zE}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(lr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class zE{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bs(0)}static kn(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&fi(r.mutation,s,Bt.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ii();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Mn();const o=di(),l=function(){return di()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof pr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),fi(d.mutation,h,d.mutation.getFieldMask(),Ze.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new QE(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=di();let s=new je((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Bt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Kp();d.forEach(m=>{if(!i.has(m)){const v=Xp(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$p(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Pr());let l=-1,c=i;return o.next(h=>U.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(d=>({batchId:l,changes:Wp(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ii();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,m){return new Ns(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,vt.newInvalidDocument(d)))});let l=ii();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&fi(d.mutation,h,Bt.empty(),Ze.now()),ma(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:WE(s.bundledQuery),readTime:fn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.overlays=new je(re.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EE(n,r));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Tr=new ut(tt.Er),this.dr=new ut(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Le([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Le([])),r=new tt(n,e),s=new tt(n,e+1);let i=ye();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(tt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wE(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ae);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new tt(new re(i),0);let l=new ut(Ae);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.Mr=e,this.docs=function(){return new je(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,l=new re(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Lw(Mw(d),r)<=0||(s.has(d.key)||ma(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n0(this)}getSize(e){return U.resolve(this.size)}}class n0 extends GE{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.persistence=e,this.Nr=new Os(n=>Oc(n),Vc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $c,this.targetCount=0,this.kr=bs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kc(0),this.Kr=!1,this.Kr=!0,this.$r=new ZE,this.referenceDelegate=e(this),this.Ur=new r0(this),this.indexManager=new KE,this.remoteDocumentCache=function(s){return new t0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new HE(n),this.Gr=new JE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new e0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new i0(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class i0 extends Fw{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Jr=new $c,this.Yr=null}static Zr(e){return new jc(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uv()?8:Bw(bt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new o0;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Js()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Js()<=ve.DEBUG&&te("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Js()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):U.resolve())}Yi(e,n){if(id(n))return U.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yl(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,Yl(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return id(n)||s.isEqual(ue.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Js()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.rs(e,o,n,Vw(s,-1)).next(l=>l))})}ts(e,n){let r=new ut(qp(e));return n.forEach((s,i)=>{ma(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Js()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",es(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(Ae),this._s=new Os(i=>Oc(i),Vc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function c0(t,e,n,r){return new l0(t,e,n,r)}async function um(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function u0(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let v=U.resolve();return m.forEach(C=>{v=v.next(()=>d.getEntry(c,C)).next(N=>{const D=h.docVersions.get(C);Oe(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function hm(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function h0(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ht.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(N,D,q){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,v,d)&&l.push(n.Ur.updateTargetData(i,v))});let c=Mn(),h=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(d0(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(ue.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function d0(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function f0(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function p0(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tc(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function gd(t,e,n){const r=he(t);let s=ue.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=he(c),m=p._s.get(d);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,o,dn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ye())).next(l=>(m0(r,sE(e),l),{documents:l,Ts:i})))}function m0(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class _d{constructor(){this.activeTargetIds=uE()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g0{constructor(){this.so=new _d,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _d,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=null;function _l(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class w0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=_l(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ws("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=y0[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=_l();return new Promise((o,l)=>{const c=new bp;c.setWithCredentials(!0),c.listenOnce(Rp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xo.NO_ERROR:const d=c.getResponseJson();te(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case xo.TIMEOUT:te(_t,`RPC '${e}' ${i} timed out`),l(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const p=c.getStatus();if(te(_t,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(q)>=0?q:M.UNKNOWN}(v.status);l(new X(C,v.message))}else l(new X(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X(M.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{te(_t,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(_t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=_l(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cp(),l=Sp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Ap({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,v=!1;const C=new v0({Io:D=>{v?te(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(te(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(_t,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,q,B)=>{D.listen(q,H=>{try{B(H)}catch($){setTimeout(()=>{throw $},0)}})};return N(p,si.EventType.OPEN,()=>{v||(te(_t,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(p,si.EventType.CLOSE,()=>{v||(v=!0,te(_t,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(p,si.EventType.ERROR,D=>{v||(v=!0,ws(_t,`RPC '${e}' stream ${s} transport errored:`,D),C.So(new X(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,si.EventType.MESSAGE,D=>{var q;if(!v){const B=D.data[0];Oe(!!B);const H=B,$=H.error||((q=H[0])===null||q===void 0?void 0:q.error);if($){te(_t,`RPC '${e}' stream ${s} received error:`,$);const le=$.status;let de=function(T){const b=Qe[T];if(b!==void 0)return em(b)}(le),I=$.message;de===void 0&&(de=M.INTERNAL,I="Unknown error status: "+le+" with message "+$.message),v=!0,C.So(new X(de,I)),p.close()}else te(_t,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),N(l,Pp.STAT_EVENT,D=>{D.stat===Hl.PROXY?te(_t,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Hl.NOPROXY&&te(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function yl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new kE(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new dm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E0 extends fm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=NE(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?fn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ec(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Gl(c)?{documents:ME(i,c)}:{query:LE(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rm(i,o.resumeToken);const h=Jl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=Jo(i,o.snapshotVersion.toTimestamp());const h=Jl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=FE(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ec(this.serializer),n.removeTarget=e,this.a_(n)}}class T0 extends fm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VE(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ec(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OE(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Xl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Xl(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class b0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{$r(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await zi(h),h.q_.set("Unknown"),h.L_.delete(4),await wa(h)}(this))})}),this.q_=new b0(r,s)}}async function wa(t){if($r(t))for(const e of t.B_)await e(!0)}async function zi(t){for(const e of t.B_)await e(!1)}function pm(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),zc(n)?Kc(n):Vs(n).r_()&&Wc(n,e))}function Hc(t,e){const n=he(t),r=Vs(n);n.N_.delete(e),r.r_()&&mm(n,e),n.N_.size===0&&(r.r_()?r.o_():$r(n)&&n.q_.set("Unknown"))}function Wc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).A_(e)}function mm(t,e){t.Q_.xe(e),Vs(t).R_(e)}function Kc(t){t.Q_=new RE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.q_.v_()}function zc(t){return $r(t)&&!Vs(t).n_()&&t.N_.size>0}function $r(t){return he(t).L_.size===0}function gm(t){t.Q_=void 0}async function R0(t){t.q_.set("Online")}async function P0(t){t.N_.forEach((e,n)=>{Wc(t,e)})}async function S0(t,e){gm(t),zc(t)?(t.q_.M_(e),Kc(t)):t.q_.set("Unknown")}async function C0(t,e,n){if(t.q_.set("Online"),e instanceof nm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xo(t,r)}else if(e instanceof Oo?t.Q_.Ke(e):e instanceof tm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await hm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),mm(i,c);const p=new nr(d.target,c,h,d.sequenceNumber);Wc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Xo(t,r)}}async function Xo(t,e,n){if(!Hi(e))throw e;t.L_.add(1),await zi(t),t.q_.set("Offline"),n||(n=()=>hm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await wa(t)})}function _m(t,e){return e().catch(n=>Xo(t,n,e))}async function Ea(t){const e=he(t),n=ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;k0(e);)try{const s=await f0(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,x0(e,s)}catch(s){await Xo(e,s)}ym(e)&&vm(e)}function k0(t){return $r(t)&&t.O_.length<10}function x0(t,e){t.O_.push(e);const n=ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ym(t){return $r(t)&&!ur(t).n_()&&t.O_.length>0}function vm(t){ur(t).start()}async function D0(t){ur(t).p_()}async function N0(t){const e=ur(t);for(const n of t.O_)e.m_(n.mutations)}async function O0(t,e,n){const r=t.O_.shift(),s=Uc.from(r,e,n);await _m(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function V0(t,e){e&&ur(t).V_&&await async function(r,s){if(function(o){return IE(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();ur(r).s_(),await _m(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),ym(t)&&vm(t)}async function vd(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=$r(n);n.L_.add(3),await zi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await wa(n)}async function M0(t,e){const n=he(t);e?(n.L_.delete(2),await wa(n)):e||(n.L_.add(2),await zi(n),n.q_.set("Unknown"))}function Vs(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new E0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:R0.bind(null,t),Ro:P0.bind(null,t),mo:S0.bind(null,t),d_:C0.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),zc(t)?Kc(t):t.q_.set("Unknown")):(await t.K_.stop(),gm(t))})),t.K_}function ur(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new T0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:D0.bind(null,t),mo:V0.bind(null,t),f_:N0.bind(null,t),g_:O0.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ea(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Gc(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qc(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Hi(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=ii(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.W_=new je(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new As(e,n,cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class U0{constructor(){this.queries=Ed(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Ed(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new X(M.ABORTED,"Firestore shutting down"))}}function Ed(){return new Os(t=>jp(t),pa)}async function wm(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new L0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qc(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Yc(n)}async function Em(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function F0(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Yc(n)}function B0(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Yc(t){t.Y_.forEach(e=>{e.next()})}var nc,Td;(Td=nc||(nc={})).ea="default",Td.Cache="cache";class Tm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class $0{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=qp(e),this.Ra=new cs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new wd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),v=ma(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?C!==N&&(r.track({type:3,doc:v}),D=!0):this.ga(m,v)||(r.track({type:2,doc:v}),D=!0,(c&&this.Aa(v,c)>0||h&&this.Aa(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(v?(o=o.add(v),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return N(v)-N(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new As(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bm(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Im(r))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return As.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class j0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class q0{constructor(e){this.key=e,this.va=!1}}class H0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Os(l=>jp(l),pa),this.Ma=new Map,this.xa=new Set,this.Oa=new je(re.comparator),this.Na=new Map,this.La=new $c,this.Ba={},this.ka=new Map,this.qa=bs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function W0(t,e,n=!0){const r=km(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Am(r,e,n,!0),s}async function K0(t,e){const n=km(t);await Am(n,e,!0,!1)}async function Am(t,e,n,r){const s=await p0(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await z0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&pm(t.remoteStore,s),l}async function z0(t,e,n,r,s){t.Ka=(p,m,v)=>async function(N,D,q,B){let H=D.view.ma(q);H.ns&&(H=await gd(N.localStore,D.query,!1).then(({documents:I})=>D.view.ma(I,H)));const $=B&&B.targetChanges.get(D.targetId),le=B&&B.targetMismatches.get(D.targetId)!=null,de=D.view.applyChanges(H,N.isPrimaryClient,$,le);return bd(N,D.targetId,de.wa),de.snapshot}(t,p,m,v);const i=await gd(t.localStore,e,!0),o=new $0(e,i.Ts),l=o.ma(i.documents),c=Ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);bd(t,n,h.wa);const d=new j0(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function G0(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!pa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hc(r.remoteStore,s.targetId),rc(r,s.targetId)}).catch(qi)):(rc(r,s.targetId),await tc(r.localStore,s.targetId,!0))}async function Q0(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hc(n.remoteStore,r.targetId))}async function Y0(t,e,n){const r=rT(t);try{const s=await function(o,l){const c=he(o),h=Ze.now(),d=l.reduce((v,C)=>v.add(C.key),ye());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=Mn(),N=ye();return c.cs.getEntries(v,d).next(D=>{C=D,C.forEach((q,B)=>{B.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(D=>{p=D;const q=[];for(const B of l){const H=yE(B,p.get(B.key).overlayedDocument);H!=null&&q.push(new pr(B.key,H,Op(H.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,q,l)}).next(D=>{m=D;const q=D.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(v,D.batchId,q)})}).then(()=>({batchId:m.batchId,changes:Wp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new je(Ae)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Gi(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=Qc(s,"Failed to persist write");n.reject(i)}}async function Rm(t,e){const n=he(t);try{const r=await h0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Oe(o.va):s.removedDocuments.size>0&&(Oe(o.va),o.va=!1))}),await Gi(n,r,e)}catch(r){await qi(r)}}function Id(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&Yc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J0(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(re.comparator);o=o.insert(i,vt.newNoDocument(i,ue.min()));const l=ye().add(i),c=new ya(ue.min(),new Map,new je(Ae),o,l);await Rm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Jc(r)}else await tc(r.localStore,e,!1).then(()=>rc(r,e,n)).catch(qi)}async function X0(t,e){const n=he(t),r=e.batch.batchId;try{const s=await u0(n.localStore,e);Sm(n,r,null),Pm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gi(n,s)}catch(s){await qi(s)}}async function Z0(t,e,n){const r=he(t);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Oe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Sm(r,e,n),Pm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gi(r,s)}catch(s){await qi(s)}}function Pm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Sm(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Cm(t,r)})}function Cm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Hc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jc(t))}function bd(t,e,n){for(const r of n)r instanceof Im?(t.La.addReference(r.key,e),eT(t,r)):r instanceof bm?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Cm(t,r.key)):ae()}function eT(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jc(t))}function Jc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new q0(n)),t.Oa=t.Oa.insert(n,r),pm(t.remoteStore,new nr(dn(fa(n.path)),r,"TargetPurposeLimboResolution",kc.oe))}}async function Gi(t,e,n){const r=he(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=qc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,m=>U.forEach(m.$i,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>U.forEach(m.Ui,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Hi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.os.get(m),C=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,N)}}}(r.localStore,i))}async function tT(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await um(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new X(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gi(n,r.hs)}}function nT(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function km(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J0.bind(null,e),e.Ca.d_=F0.bind(null,e.eventManager),e.Ca.$a=B0.bind(null,e.eventManager),e}function rT(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=X0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z0.bind(null,e),e}class Ad{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return c0(this.persistence,new a0,e.initialUser,this.serializer)}createPersistence(e){return new s0(jc.Zr,this.serializer)}createSharedClientState(e){return new g0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Id(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tT.bind(null,this.syncEngine),await M0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new U0}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=function(i){return new w0(i)}(e.databaseInfo);return function(i,o,l,c){return new I0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new A0(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Id(this.syncEngine,n,0),function(){return yd.D()?new yd:new _0}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new H0(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await zi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{te("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(te("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await um(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aT(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>vd(e.remoteStore,s)),t._onlineComponents=e}function oT(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function aT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!oT(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await vl(t,new Ad)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await vl(t,new Ad);return t._offlineComponents}async function Dm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Rd(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Rd(t,new sT))),t._onlineComponents}function lT(t){return Dm(t).then(e=>e.syncEngine)}async function sc(t){const e=await Dm(t),n=e.eventManager;return n.onListen=W0.bind(null,e.syncEngine),n.onUnlisten=G0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=K0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Q0.bind(null,e.syncEngine),n}function cT(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new xm({next:m=>{o.enqueueAndForget(()=>Em(i,p));const v=m.docs.has(l);!v&&m.fromCache?h.reject(new X(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?h.reject(new X(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Tm(fa(l.path),d,{includeMetadataChanges:!0,_a:!0});return wm(i,p)}(await sc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uT(t,e,n,r){if(e===!0&&r===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sd(t){if(!re.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cd(t){if(re.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ta(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rw;switch(r.type){case"firstParty":return new kw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pd.get(n);r&&(te("ComponentProvider","Removing Datastore"),Pd.delete(n),r.terminate())}(this),Promise.resolve()}}function hT(t,e,n,r={}){var s;const i=(t=Gt(t,Ia))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=yt.MOCK_USER;else{l=_p(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new yt(h)}t._authCredentials=new Pw(new kp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class or extends jr{constructor(e,n,r){super(e,n,fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new re(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Qi(t,e,...n){if(t=$e(t),Om("collection","path",e),t instanceof Ia){const r=Le.fromString(e,...n);return Cd(r),new or(t,null,r)}{if(!(t instanceof Tt||t instanceof or))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Cd(r),new or(t.firestore,null,r)}}function En(t,e,...n){if(t=$e(t),arguments.length===1&&(e=xp.newId()),Om("doc","path",e),t instanceof Ia){const r=Le.fromString(e,...n);return Sd(r),new Tt(t,null,new re(r))}{if(!(t instanceof Tt||t instanceof or))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Sd(r),new Tt(t.firestore,t instanceof or?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new dm(this,"async_queue_retry"),this.Eu=()=>{const n=yl();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=yl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new ir;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Hi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Gc.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ae()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function xd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class hr extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new dT}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mm(this),this._firestoreClient.terminate()}}function Vm(t,e){const n=typeof t=="object"?t:Sc(),r=typeof t=="string"?t:"(default)",s=ha(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pp("firestore");i&&hT(s,...i)}return s}function Xc(t){return t._firestoreClient||Mm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mm(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new qw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Nm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new iT(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(ht.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/^__.*__$/;class pT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}class Lm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Um(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class tu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Zo(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Um(this.wu)&&fT.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class mT{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}Nu(e,n,r,s=!1){return new tu({wu:e,methodName:n,Ou:r,path:at.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ra(t){const e=t._freezeSettings(),n=va(t._databaseId);return new mT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fm(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);ru("Data must be an object, but it was:",o,r);const l=Bm(r,o);let c,h;if(i.merge)c=new Bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ic(e,p,n);if(!o.contains(m))throw new X(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jm(d,m)||d.push(m)}c=new Bt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new pT(new Vt(l),c,h)}class Pa extends Aa{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pa}}class nu extends Aa{_toFieldTransform(e){return new pE(e.path,new Si)}isEqual(e){return e instanceof nu}}function gT(t,e,n,r){const s=t.Nu(1,e,n);ru("Data must be an object, but it was:",s,r);const i=[],o=Vt.empty();Br(r,(c,h)=>{const d=su(e,c,n);h=$e(h);const p=s.Cu(d);if(h instanceof Pa)i.push(d);else{const m=Yi(h,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Bt(i);return new Lm(o,l,s.fieldTransforms)}function _T(t,e,n,r,s,i){const o=t.Nu(1,e,n),l=[ic(e,r,n)],c=[s];if(i.length%2!=0)throw new X(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ic(e,i[m])),c.push(i[m+1]);const h=[],d=Vt.empty();for(let m=l.length-1;m>=0;--m)if(!jm(h,l[m])){const v=l[m];let C=c[m];C=$e(C);const N=o.Cu(v);if(C instanceof Pa)h.push(v);else{const D=Yi(C,N);D!=null&&(h.push(v),d.set(v,D))}}const p=new Bt(h);return new Lm(d,p,o.fieldTransforms)}function yT(t,e,n,r=!1){return Yi(n,t.Nu(r?4:3,e))}function Yi(t,e){if($m(t=$e(t)))return ru("Unsupported field value:",e,t),Bm(t,e);if(t instanceof Aa)return function(r,s){if(!Um(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Yi(l,s.Fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:Jo(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jo(s.serializer,i)}}if(r instanceof Zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rs)return{bytesValue:rm(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Mu("VectorValues must only contain numeric values.");return Mc(l.serializer,c)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ta(r)}`)}(t,e)}function Bm(t,e){const n={};return Dp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Yi(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $m(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Zc||t instanceof Rs||t instanceof Tt||t instanceof Aa||t instanceof eu)}function ru(t,e,n){if(!$m(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ta(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function ic(t,e,n){if((e=$e(e))instanceof ba)return e._internalPath;if(typeof e=="string")return su(t,e);throw Zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const vT=new RegExp("[~\\*/\\[\\]]");function su(t,e,n){if(e.search(vT)>=0)throw Zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ba(...e.split("."))._internalPath}catch{throw Zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(M.INVALID_ARGUMENT,l+t+c)}function jm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wT extends qm{data(){return super.data()}}function Sa(t,e){return typeof e=="string"?su(t,e):e instanceof ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iu{}class Hm extends iu{}function ou(t,e,...n){let r=[];e instanceof iu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof au).length,l=i.filter(c=>c instanceof Ca).length;if(o>1||o>0&&l>0)throw new X(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ca extends Hm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ca(e,n,r)}_apply(e){const n=this._parse(e);return Wm(e._query,n),new jr(e.firestore,e.converter,Ql(e._query,n))}_parse(e){const n=Ra(e.firestore);return function(i,o,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Nd(p,d);const v=[];for(const C of p)v.push(Dd(c,i,C));m={arrayValue:{values:v}}}else m=Dd(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Nd(p,d),m=yT(l,o,p,d==="in"||d==="not-in");return Ye.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function TT(t,e,n){const r=e,s=Sa("where",t);return Ca._create(s,r,n)}class au extends iu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new au(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Wm(o,c),o=Ql(o,c)}(e._query,n),new jr(e.firestore,e.converter,Ql(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lu extends Hm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pi(i,o)}(e._query,this._field,this._direction);return new jr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ns(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function cu(t,e="asc"){const n=e,r=Sa("orderBy",t);return lu._create(r,n)}function Dd(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new X(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$p(e)&&n.indexOf("/")!==-1)throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!re.isDocumentKey(r))throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zh(t,new re(r))}if(n instanceof Tt)return Zh(t,n._key);throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(n)}.`)}function Nd(t,e){if(!Array.isArray(t)||t.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wm(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class IT{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ke(o.doubleValue));return new eu(i)}convertGeoPoint(e){return new Zc(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Oe(cm(r));const s=new Ai(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zm extends qm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vo extends zm{data(e={}){return super.data(e)}}class bT{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vo(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ai(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ai(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:AT(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){t=Gt(t,Tt);const e=Gt(t.firestore,hr);return cT(Xc(e),t._key).then(n=>Ym(e,t,n))}class Gm extends IT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function RT(t,e,n){t=Gt(t,Tt);const r=Gt(t.firestore,hr),s=Km(t.converter,e);return xa(r,[Fm(Ra(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zt.none())])}function ka(t,e,n,...r){t=Gt(t,Tt);const s=Gt(t.firestore,hr),i=Ra(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof ba?_T(i,"updateDoc",t._key,e,n,r):gT(i,"updateDoc",t._key,e),xa(s,[o.toMutation(t._key,zt.exists(!0))])}function PT(t){return xa(Gt(t.firestore,hr),[new Lc(t._key,zt.none())])}function Qm(t,e){const n=Gt(t.firestore,hr),r=En(t),s=Km(t.converter,e);return xa(n,[Fm(Ra(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function uu(t,...e){var n,r,s;t=$e(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xd(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Tt)h=Gt(t.firestore,hr),d=fa(t._key.path),c={next:p=>{e[o]&&e[o](Ym(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,jr);h=Gt(p.firestore,hr),d=p._query;const m=new Gm(h);c={next:v=>{e[o]&&e[o](new bT(h,m,p,v))},error:e[o+1],complete:e[o+2]},ET(t._query)}return function(m,v,C,N){const D=new xm(N),q=new Tm(v,D,C);return m.asyncQueue.enqueueAndForget(async()=>wm(await sc(m),q)),()=>{D.za(),m.asyncQueue.enqueueAndForget(async()=>Em(await sc(m),q))}}(Xc(h),d,l,c)}function xa(t,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>Y0(await lT(r),s,i)),i.promise}(Xc(t),e)}function Ym(t,e,n){const r=n.docs.get(e._key),s=new Gm(t);return new zm(t,s,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}function Jm(){return new nu("serverTimestamp")}(function(e,n=!0){(function(s){Ds=s})(Fr),xr(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new hr(new Sw(r.getProvider("auth-internal")),new Dw(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),hn(Gh,"4.7.2",e),hn(Gh,"4.7.2","esm2017")})();var ST="firebase",CT="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(ST,CT,"app");function hu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kT=Xm,Zm=new $i("auth","Firebase",Xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Rc("@firebase/auth");function xT(t,...e){ea.logLevel<=ve.WARN&&ea.warn(`Auth (${Fr}): ${t}`,...e)}function Mo(t,...e){ea.logLevel<=ve.ERROR&&ea.error(`Auth (${Fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw du(t,...e)}function pn(t,...e){return du(t,...e)}function eg(t,e,n){const r=Object.assign(Object.assign({},kT()),{[e]:n});return new $i("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function du(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zm.create(t,...e)}function oe(t,e,...n){if(!t)throw du(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function Ln(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DT(){return Od()==="http:"||Od()==="https:"}function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DT()||av()||"connection"in navigator)?navigator.onLine:!0}function OT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=sv()||lv()}get(){return NT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new Ji(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,s={}){return ng(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ji(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return ov()||(h.referrerPolicy="no-referrer"),tg.fetch()(rg(t,t.config.apiHost,n,l),h)})}async function ng(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VT),e);try{const s=new UT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw To(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw eg(t,d,h);nn(t,d)}}catch(s){if(s instanceof wn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Xi(t,e,n,r,s={}){const i=await Un(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function rg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fu(t.config,s):`${t.config.apiScheme}://${s}`}function LT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),MT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function Vd(t){return t!==void 0&&t.enterprise!==void 0}class FT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function BT(t,e){return Un(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function sg(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jT(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=pu(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pi(wl(s.auth_time)),issuedAtTime:pi(wl(s.iat)),expirationTime:pi(wl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=dp(n);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Md(t){const e=pu(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&qT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ps(t,sg(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ig(i.providerUserInfo):[],l=KT(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ac(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function WT(t){const e=$e(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ig(t){return t.map(e=>{var{providerId:n}=e,r=hu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e){const n=await ng(t,{},async()=>{const r=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=rg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",tg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GT(t,e){return Un(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Md(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new us;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ac(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jT(this,e)}reload(){return WT(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Ps(this,$T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:$,isAnonymous:le,providerData:de,stsTokenManager:I}=n;oe(H&&I,e,"internal-error");const y=us.fromJSON(this.name,I);oe(typeof H=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),oe(typeof $=="boolean",e,"internal-error"),oe(typeof le=="boolean",e,"internal-error"),Wn(v,e.name),Wn(C,e.name),Wn(N,e.name),Wn(D,e.name),Wn(q,e.name),Wn(B,e.name);const T=new kn({uid:H,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:le,photoURL:C,phoneNumber:v,tenantId:N,stsTokenManager:y,createdAt:q,lastLoginAt:B});return de&&Array.isArray(de)&&(T.providerData=de.map(b=>Object.assign({},b))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new us;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ig(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new us;l.updateFromIdToken(r);const c=new kn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ac(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Map;function xn(t){Ln(t instanceof Function,"Expected a class definition");let e=Ld.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ld.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}og.type="NONE";const Ud=og;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(xn(Ud),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xn(Ud);const o=Lo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=kn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dg(e))return"Blackberry";if(fg(e))return"Webos";if(lg(e))return"Safari";if((e.includes("chrome/")||cg(e))&&!e.includes("edge/"))return"Chrome";if(hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ag(t=bt()){return/firefox\//i.test(t)}function lg(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cg(t=bt()){return/crios\//i.test(t)}function ug(t=bt()){return/iemobile/i.test(t)}function hg(t=bt()){return/android/i.test(t)}function dg(t=bt()){return/blackberry/i.test(t)}function fg(t=bt()){return/webos/i.test(t)}function mu(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QT(t=bt()){var e;return mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YT(){return cv()&&document.documentMode===10}function pg(t=bt()){return mu(t)||hg(t)||fg(t)||dg(t)||/windows phone/i.test(t)||ug(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e=[]){let n;switch(t){case"Browser":n=Fd(bt());break;case"Worker":n=`${Fd(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e={}){return Un(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=6;class eI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new JT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sg(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Dn(this));const n=e?$e(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XT(this),n=new eI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return $e(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=_v(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nI(t){Da=t}function gg(t){return Da.loadJS(t)}function rI(){return Da.recaptchaEnterpriseScript}function sI(){return Da.gapiScript}function iI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oI="recaptcha-enterprise",aI="NO_RECAPTCHA";class lI{constructor(e){this.type=oI,this.auth=qr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{BT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new FT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Vd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(aI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Vd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=rI();c.length!==0&&(c+=l),gg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function $d(t,e,n,r=!1){const s=new lI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $d(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $d(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e){const n=ha(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ko(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function uI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hI(t,e,n){const r=qr(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_g(e),{host:o,port:l}=dI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),fI()}function _g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dI(t){const e=_g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jd(o)}}}function jd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function pI(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t,e){return Xi(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e){return Xi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function _I(t,e){return Xi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends gu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(e,n,"signInWithPassword",mI);case"emailLink":return gI(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(e,r,"signUpPassword",pI);case"emailLink":return _I(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Xi(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="http://localhost";class Vr extends gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:yI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wI(t){const e=ni(ri(t)).link,n=e?ni(ri(e)).deep_link_id:null,r=ni(ri(t)).deep_link_id;return(r?ni(ri(r)).link:null)||r||n||e||t}class _u{constructor(e){var n,r,s,i,o,l;const c=ni(ri(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=vI((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=wI(e);try{return new _u(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_u.parseLink(n);return oe(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Zi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Zi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Zi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return Xi(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=qd(r);return new Mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qd(r);return new Mr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function vg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function TI(t,e,n=!1){const r=await Ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await Ps(t,vg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=pu(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Mr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e,n=!1){if(cn(t.app))return Promise.reject(Dn(t));const r="signIn",s=await vg(t,r,e),i=await Mr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bI(t,e){return wg(qr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t){const e=qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AI(t,e,n){if(cn(t.app))return Promise.reject(Dn(t));const r=qr(t),o=await lc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Eg(t),c}),l=await Mr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function RI(t,e,n){return cn(t.app)?Promise.reject(Dn(t)):bI($e(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Eg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){return Un(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ps(r,PI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function CI(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function kI(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function xI(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=1e3,NI=10;class Ig extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,NI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ig.type="LOCAL";const OI=Ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bg.type="SESSION";const Ag=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await VI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=yu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function LI(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function UI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BI(){return Rg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="firebaseLocalStorageDb",$I=1,sa="firebaseLocalStorage",Sg="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function jI(){const t=indexedDB.deleteDatabase(Pg);return new eo(t).toPromise()}function cc(){const t=indexedDB.open(Pg,$I);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:Sg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await jI(),e(await cc()))})})}async function Hd(t,e,n){const r=Oa(t,!0).put({[Sg]:e,value:n});return new eo(r).toPromise()}async function qI(t,e){const n=Oa(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function Wd(t,e){const n=Oa(t,!0).delete(e);return new eo(n).toPromise()}const HI=800,WI=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(BI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UI(),!this.activeServiceWorker)return;this.sender=new MI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cc();return await Hd(e,ra,"1"),await Wd(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oa(s,!1).getAll();return new eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const KI=Cg;new Ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){return e?xn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GI(t){return wg(t.auth,new vu(t),t.bypassAuthState)}function QI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),II(n,new vu(t),t.bypassAuthState)}async function YI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),TI(n,new vu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return YI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:nn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Ji(2e3,1e4);class as extends kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JI.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="pendingRedirect",Uo=new Map;class ZI extends kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eb(t,e){const n=rb(e),r=nb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tb(t,e){Uo.set(t._key(),e)}function nb(t){return xn(t._redirectPersistence)}function rb(t){return Lo(XI,t.config.apiKey,t.name)}async function sb(t,e,n=!1){if(cn(t.app))return Promise.reject(Dn(t));const r=qr(t),s=zI(r,e),o=await new ZI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=10*60*1e3;class ob{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kd(e))}saveEventToCache(e){this.cachedEventUids.add(Kd(e)),this.lastProcessedEventTime=Date.now()}}function Kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function hb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lb(t);for(const n of e)try{if(db(n))return}catch{}nn(t,"unauthorized-domain")}function db(t){const e=oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ub.test(n))return!1;if(cb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Ji(3e4,6e4);function zd(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pb(t){return new Promise((e,n)=>{var r,s,i;function o(){zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zd(),n(pn(t,"network-request-failed"))},timeout:fb.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=iI("iframefcb");return mn()[l]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},gg(`${sI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function mb(t){return Fo=Fo||pb(t),Fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=new Ji(5e3,15e3),_b="__/auth/iframe",yb="emulator/auth/iframe",vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eb(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fu(e,yb):`https://${t.config.authDomain}/${_b}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=wb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ji(r).slice(1)}`}async function Tb(t){const e=await mb(t),n=mn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:Eb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},gb.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bb=500,Ab=600,Rb="_blank",Pb="http://localhost";class Gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sb(t,e,n,r=bb,s=Ab){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ib),{width:r.toString(),height:s.toString(),top:i,left:o}),h=bt().toLowerCase();n&&(l=cg(h)?Rb:n),ag(h)&&(e=e||Pb,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(QT(h)&&l!=="_self")return Cb(e||"",l),new Gd(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Gd(p)}function Cb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="__/auth/handler",xb="emulator/auth/handler",Db=encodeURIComponent("fac");async function Qd(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof yg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Zi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${Db}=${encodeURIComponent(c)}`:"";return`${Nb(t)}?${ji(l).slice(1)}${h}`}function Nb({config:t}){return t.emulator?fu(t,xb):`https://${t.authDomain}/${kb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="webStorageSupport";class Ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=sb,this._overrideRedirectResult=tb}async _openPopup(e,n,r,s){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qd(e,n,r,oc(),s);return Sb(e,o,yu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qd(e,n,r,oc(),s);return LI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tb(e),r=new ob(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(El,{type:El},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[El];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pg()||lg()||mu()}}const Vb=Ob;var Yd="@firebase/auth",Jd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ub(t){xr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mg(t)},h=new tI(r,s,i,c);return uI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new ar("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(r=>new Mb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Yd,Jd,Lb(t)),hn(Yd,Jd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=5*60,Bb=gp("authIdTokenMaxAge")||Fb;let Xd=null;const $b=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bb)return;const s=n==null?void 0:n.token;Xd!==s&&(Xd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ss(t=Sc()){const e=ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cI(t,{popupRedirectResolver:Vb,persistence:[KI,OI,Ag]}),r=gp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$b(i.toString());kI(n,o,()=>o(n.currentUser)),CI(n,l=>o(l))}}const s=fp("auth");return s&&hI(n,`http://${s}`),n}function jb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ub("Browser");const qb={apiKey:"AIzaSyA4QcTJcYG5F4S22l2oXvwoUb9DDJ3xJkw",authDomain:"mi-red-social-867dc.firebaseapp.com",projectId:"mi-red-social-867dc",storageBucket:"mi-red-social-867dc.appspot.com",messagingSenderId:"206882332446",appId:"1:206882332446:web:3e1e10d96a1b0890f6730f",measurementId:"G-F97SEPYDHP"},Dg=wp(qb),qt=Vm(Dg),Ng=Ss(Dg),Hb=t=>{const e=Qi(qt,"posts"),n=ou(e,cu("createdAt","desc"));return uu(n,async r=>{const s=await Promise.all(r.docs.map(async i=>{const o=i.data();if(!o.createdBy)return console.error("Post data is missing 'createdBy' field:",o),null;try{const l=En(qt,"users",o.createdBy),c=await Ms(l),h=c.exists()?c.data().name:"Usuario desconocido",d=c.exists()?c.data().email:"Email desconocido",p=c.exists()?c.data().photoURL:"Foto desconocida";return{id:i.id,...o,userName:h,userEmail:d,userPhoto:p}}catch(l){return console.error("Error fetching user data:",l),null}}));t(s.filter(i=>i!==null))})},Wb=(t,e)=>{const n=Qi(qt,"posts"),r=ou(n,TT("createdBy","==",t),cu("createdAt","desc"));return uu(r,async s=>{const i=await Promise.all(s.docs.map(async o=>{const l=o.data();if(!l.createdBy)return console.error("Post data is missing 'createdBy' field:",l),null;try{const c=En(qt,"users",l.createdBy),h=await Ms(c),d=h.exists()?h.data().name:"Usuario desconocido",p=h.exists()?h.data().email:"Email desconocido",m=h.exists()?h.data().photoURL:"Foto desconocida";return{id:o.id,...l,userName:d,userEmail:p,userPhoto:m}}catch(c){return console.error("Error fetching user data:",c),null}}));e(i.filter(o=>o!==null))})},Kb=async t=>{const e=Qi(qt,"posts"),n={...t,createdAt:Jm()};return(await Qm(e,n)).id},zb=async(t,e)=>{const n=En(qt,"posts",t);await ka(n,e)},Gb=async t=>{const e=En(qt,"posts",t);await PT(e)},Qb=async(t,e)=>{const n=En(qt,"posts",t),r=await Ms(n);if(r.exists()){const i=r.data().likes||0;await ka(n,{likes:i+1})}else throw new Error("Post not found")},Yb=async(t,e)=>{const n=En(qt,"posts",t),r=await Ms(n);if(r.exists()){const i=r.data().comments||[];i.push(e),await ka(n,{comments:i.filter(Boolean)})}else throw new Error("Post not found")};async function Jb(t){const e=En(qt,`users/${t}`),n=await Ms(e);return{id:n.id,...n.data()}}const Xb=async(t,e)=>{if(!e||!t)throw new Error("ID del usuario o datos del perfil no proporcionados");const n=En(qt,`users/${t}`);if(!(await Ms(n)).exists())throw new Error("El documento del usuario no existe");await ka(n,{displayName:e.displayName,bio:e.bio,career:e.career})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firebasestorage.googleapis.com",Vg="storageBucket",Zb=2*60*1e3,eA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends wn{constructor(e,n,r=0){super(Tl(e),`Firebase Storage: ${n} (${Tl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function Tl(t){return"storage/"+t}function wu(){const t="An unknown error occurred, please check the error payload for server response.";return new We(He.UNKNOWN,t)}function tA(t){return new We(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nA(t){return new We(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(He.UNAUTHENTICATED,t)}function sA(){return new We(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function iA(t){return new We(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oA(){return new We(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aA(){return new We(He.CANCELED,"User canceled the upload/download.")}function lA(t){return new We(He.INVALID_URL,"Invalid URL '"+t+"'.")}function cA(t){return new We(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function uA(){return new We(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Vg+"' property when initializing the app?")}function hA(){return new We(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dA(){return new We(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fA(t){return new We(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uc(t){return new We(He.INVALID_ARGUMENT,t)}function Mg(){return new We(He.APP_DELETED,"The Firebase app was deleted.")}function pA(t){return new We(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mi(t,e){return new We(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xs(t){throw new We(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw cA(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},N=n===Og?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",q=new RegExp(`^https?://${N}/${s}/${D}`,"i"),H=[{regex:l,indices:c,postModify:i},{regex:v,indices:C,postModify:h},{regex:q,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<H.length;$++){const le=H[$],de=le.regex.exec(e);if(de){const I=de[le.indices.bucket];let y=de[le.indices.path];y||(y=""),r=new $t(I,y),le.postModify(r);break}}if(r==null)throw lA(e);return r}}class mA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let h=!1;function d(...D){h||(h=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(v,c())},D)}function m(){i&&clearTimeout(i)}function v(D,...q){if(h){m();return}if(D){m(),d.call(null,D,...q);return}if(c()||o){m(),d.call(null,D,...q);return}r<64&&(r*=2);let H;l===1?(l=2,H=0):H=(r+Math.random())*1e3,p(H)}let C=!1;function N(D){C||(C=!0,m(),!h&&(s!==null?(D||(l=2),clearTimeout(s),p(0)):D||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function _A(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){return t!==void 0}function vA(t){return typeof t=="object"&&!Array.isArray(t)}function Eu(t){return typeof t=="string"||t instanceof String}function Zd(t){return Tu()&&t instanceof Blob}function Tu(){return typeof Blob<"u"}function ef(t,e,n,r){if(r<e)throw uc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw uc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Lg(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Cr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cr||(Cr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r,s,i,o,l,c,h,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,C)=>{this.resolve_=v,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Io(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Cr.NO_ERROR,c=i.getStatus();if(!l||wA(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Cr.ABORT;r(!1,new Io(!1,null,d));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new Io(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());yA(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=wu();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Mg():aA();o(c)}else{const c=oA();o(c)}};this.canceled_?n(!1,new Io(!1,null,!0)):this.backoffId_=gA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_A(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Io{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RA(t,e,n,r,s,i,o=!0){const l=Lg(t.urlParams),c=t.url+l,h=Object.assign({},t.headers);return bA(h,e),TA(h,n),IA(h,i),AA(h,r),new EA(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function SA(...t){const e=PA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tu())return new Blob(t);throw new We(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function CA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){if(typeof atob>"u")throw fA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Il{constructor(e,n){this.data=e,this.contentType=n||null}}function xA(t,e){switch(t){case un.RAW:return new Il(Ug(e));case un.BASE64:case un.BASE64URL:return new Il(Fg(t,e));case un.DATA_URL:return new Il(NA(e),OA(e))}throw wu()}function Ug(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function DA(t){let e;try{e=decodeURIComponent(t)}catch{throw mi(un.DATA_URL,"Malformed data URL.")}return Ug(e)}function Fg(t,e){switch(t){case un.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw mi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw mi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kA(e)}catch(s){throw s.message.includes("polyfill")?s:mi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Bg{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw mi(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=VA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function NA(t){const e=new Bg(t);return e.base64?Fg(un.BASE64,e.rest):DA(e.rest)}function OA(t){return new Bg(t).contentType}function VA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){let r=0,s="";Zd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zd(this.data_)){const r=this.data_,s=CA(r,e,n);return s===null?null:new tr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new tr(r,!0)}}static getBlob(...e){if(Tu()){const n=e.map(r=>r instanceof tr?r.data_:r);return new tr(SA.apply(null,n))}else{const n=e.map(o=>Eu(o)?xA(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new tr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){let e;try{e=JSON.parse(t)}catch{return null}return vA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jg(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t,e){return e}class Ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||UA}}let bo=null;function FA(t){return!Eu(t)||t.length<2?t:jg(t)}function qg(){if(bo)return bo;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(i,o){return FA(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ct("size");return s.xform=r,t.push(s),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),bo=t,bo}function BA(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new $t(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $A(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return BA(r,t),r}function Hg(t,e,n){const r=$g(e);return r===null?null:$A(t,r,n)}function jA(t,e,n,r){const s=$g(e);if(s===null||!Eu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),v=Iu(m,n,r),C=Lg({alt:"media",token:h});return v+C})[0]}function qA(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Wg{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){if(!t)throw wu()}function HA(t,e){function n(r,s){const i=Hg(t,s,e);return Kg(i!==null),i}return n}function WA(t,e){function n(r,s){const i=Hg(t,s,e);return Kg(i!==null),jA(i,s,t.host,t._protocol)}return n}function zg(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=sA():s=rA():n.getStatus()===402?s=nA(t.bucket):n.getStatus()===403?s=iA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function KA(t){const e=zg(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=tA(t.path)),i.serverResponse=s.serverResponse,i}return n}function zA(t,e,n){const r=e.fullServerUrl(),s=Iu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Wg(s,i,WA(t,n),o);return l.errorHandler=KA(e),l}function GA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=GA(null,e)),r}function YA(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let H="";for(let $=0;$<2;$++)H=H+Math.random().toString().slice(2);return H}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const h=QA(e,r,s),d=qA(h,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+c+"--",v=tr.getBlob(p,r,m);if(v===null)throw hA();const C={name:h.fullPath},N=Iu(i,t.host,t._protocol),D="POST",q=t.maxUploadRetryTime,B=new Wg(N,D,HA(t,n),q);return B.urlParams=C,B.headers=o,B.body=v.uploadData(),B.errorHandler=zg(e),B}class JA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XA extends JA{initXhr(){this.xhr_.responseType="text"}}function Gg(){return new XA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lr(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jg(this._location.path)}get storage(){return this._service}get parent(){const e=MA(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new Lr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pA(e)}}function ZA(t,e,n){t._throwIfRoot("uploadBytes");const r=YA(t.storage,t._location,qg(),new tr(e,!0),n);return t.storage.makeRequestWithTokens(r,Gg).then(s=>({metadata:s,ref:t}))}function eR(t){t._throwIfRoot("getDownloadURL");const e=zA(t.storage,t._location,qg());return t.storage.makeRequestWithTokens(e,Gg).then(n=>{if(n===null)throw dA();return n})}function tR(t,e){const n=LA(t._location.path,e),r=new $t(t._location.bucket,n);return new Lr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){return/^[A-Za-z]+:\/\//.test(t)}function rR(t,e){return new Lr(t,e)}function Qg(t,e){if(t instanceof bu){const n=t;if(n._bucket==null)throw uA();const r=new Lr(n,n._bucket);return e!=null?Qg(r,e):r}else return e!==void 0?tR(t,e):t}function sR(t,e){if(e&&nR(e)){if(t instanceof bu)return rR(t,e);throw uc("To use ref(service, url), the first argument must be a Storage instance.")}else return Qg(t,e)}function tf(t,e){const n=e==null?void 0:e[Vg];return n==null?null:$t.makeFromBucketSpec(n,t)}function iR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:_p(s,t.app.options.projectId))}class bu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Og,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Zb,this._maxUploadRetryTime=eA,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=tf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=tf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ef("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ef("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new mA(Mg());{const o=RA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const nf="@firebase/storage",rf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="storage";function oR(t,e,n){return t=$e(t),ZA(t,e,n)}function aR(t){return t=$e(t),eR(t)}function lR(t,e){return t=$e(t),sR(t,e)}function cR(t=Sc(),e){t=$e(t);const r=ha(t,Yg).getImmediate({identifier:e}),s=pp("storage");return s&&uR(r,...s),r}function uR(t,e,n,r={}){iR(t,e,n,r)}function hR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new bu(n,r,s,e,Fr)}function dR(){xr(new ar(Yg,hR,"PUBLIC").setMultipleInstances(!0)),hn(nf,rf,""),hn(nf,rf,"esm2017")}dR();let li={id:null,email:null,displayName:null,bio:null,career:null,photoURL:null},rs=[];xI(Ng,t=>{t?(li={id:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL},Jb(t.uid).then(e=>{li={...li,bio:e.bio,career:e.career},sf()})):(li={id:null,email:null,displayName:null,bio:null,career:null,photoURL:null},sf())});async function fR(t,e,n,r){try{if(!t||!e||!n||!r)throw new Error("Todos los campos son obligatorios.");const i=(await AI(Ng,t,e)).user,o=cR(),l=lR(o,`profileImages/${i.uid}`);await oR(l,r);const c=await aR(l);await SI(i,{displayName:n,photoURL:c});const h=Vm();await RT(En(h,"users",i.uid),{name:n,email:t,photoURL:c}),console.log("Usuario registrado: ",i)}catch(s){throw console.error("[auth.js register] Error al registrar: ",s),s}}async function Jg(t,e){const n=Ss();try{const r=await RI(n,t,e);return console.log("Usuario autenticado: ",r.user),r.user}catch(r){throw console.error("[auth.js login] Error al autenticar: ",r),r}}function Tn(t){return rs.push(t),console.log("Observer agregado. El stack actual es: ",rs),Xg(t),()=>{rs=rs.filter(e=>e!==t),console.log("Observer eliminado. El stack actual es: ",rs)}}function Xg(t){console.log("Notificando a un observer..."),t({...li})}function sf(){rs.forEach(t=>Xg(t))}/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Au(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},fs=[],gn=()=>{},pR=()=>!1,Va=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ru=t=>t.startsWith("onUpdate:"),dt=Object.assign,Pu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mR=Object.prototype.hasOwnProperty,Se=(t,e)=>mR.call(t,e),ce=Array.isArray,ps=t=>Ma(t)==="[object Map]",Zg=t=>Ma(t)==="[object Set]",pe=t=>typeof t=="function",Je=t=>typeof t=="string",gr=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",e_=t=>(Ue(t)||pe(t))&&pe(t.then)&&pe(t.catch),t_=Object.prototype.toString,Ma=t=>t_.call(t),gR=t=>Ma(t).slice(8,-1),n_=t=>Ma(t)==="[object Object]",Su=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gi=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_R=/-(\w)/g,Yt=La(t=>t.replace(_R,(e,n)=>n?n.toUpperCase():"")),yR=/\B([A-Z])/g,Hr=La(t=>t.replace(yR,"-$1").toLowerCase()),Ua=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),bl=La(t=>t?`on${Ua(t)}`:""),dr=(t,e)=>!Object.is(t,e),Bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},r_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let of;const s_=()=>of||(of=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?TR(r):Cu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Ue(t))return t}const vR=/;(?![^(]*\))/g,wR=/:([^]+)/,ER=/\/\*[^]*?\*\//g;function TR(t){const e={};return t.replace(ER,"").split(vR).forEach(n=>{if(n){const r=n.split(wR);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fa(t){let e="";if(Je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Fa(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const IR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bR=Au(IR);function i_(t){return!!t||t===""}const o_=t=>!!(t&&t.__v_isRef===!0),Pe=t=>Je(t)?t:t==null?"":ce(t)||Ue(t)&&(t.toString===t_||!pe(t.toString))?o_(t)?Pe(t.value):JSON.stringify(t,a_,2):String(t),a_=(t,e)=>o_(e)?a_(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Al(r,i)+" =>"]=s,n),{})}:Zg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Al(n))}:gr(e)?Al(e):Ue(e)&&!ce(e)&&!n_(e)?String(e):e,Al=(t,e="")=>{var n;return gr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class AR{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function RR(){return Ft}let Ve;const Rl=new WeakSet;class l_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rl.has(this)&&(Rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||u_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,af(this),h_(this);const e=Ve,n=en;Ve=this,en=!0;try{return this.fn()}finally{d_(this),Ve=e,en=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Du(e);this.deps=this.depsTail=void 0,af(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dc(this)&&this.run()}get dirty(){return dc(this)}}let c_=0,ls;function u_(t){t.flags|=8,t.next=ls,ls=t}function ku(){c_++}function xu(){if(--c_>0)return;let t;for(;ls;){let e=ls,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=ls,ls=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function h_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function d_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Du(r),PR(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(f_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function f_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Di))return;t.globalVersion=Di;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!dc(t)){t.flags&=-3;return}const n=Ve,r=en;Ve=t,en=!0;try{h_(t);const s=t.fn(t._value);(e.version===0||dr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,en=r,d_(t),t.flags&=-3}}function Du(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Du(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function PR(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let en=!0;const p_=[];function _r(){p_.push(en),en=!1}function yr(){const t=p_.pop();en=t===void 0?!0:t}function af(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Di=0;class SR{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!en||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new SR(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,m_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Di++,this.notify(e)}notify(e){ku();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xu()}}}function m_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)m_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const fc=new WeakMap,kr=Symbol(""),pc=Symbol(""),Ni=Symbol("");function At(t,e,n){if(en&&Ve){let r=fc.get(t);r||fc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Nu),s.target=t,s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=fc.get(t);if(!o){Di++;return}const l=c=>{c&&c.trigger()};if(ku(),e==="clear")o.forEach(l);else{const c=ce(t),h=c&&Su(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ni||!gr(m)&&m>=d)&&l(p)})}else switch(n!==void 0&&l(o.get(n)),h&&l(o.get(Ni)),e){case"add":c?h&&l(o.get("length")):(l(o.get(kr)),ps(t)&&l(o.get(pc)));break;case"delete":c||(l(o.get(kr)),ps(t)&&l(o.get(pc)));break;case"set":ps(t)&&l(o.get(kr));break}}xu()}function Zr(t){const e=Ce(t);return e===t?e:(At(e,"iterate",Ni),Qt(t)?e:e.map(wt))}function Ba(t){return At(t=Ce(t),"iterate",Ni),t}const CR={__proto__:null,[Symbol.iterator](){return Pl(this,Symbol.iterator,wt)},concat(...t){return Zr(this).concat(...t.map(e=>ce(e)?Zr(e):e))},entries(){return Pl(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return An(this,"find",t,e,wt,arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sl(this,"includes",t)},indexOf(...t){return Sl(this,"indexOf",t)},join(t){return Zr(this).join(t)},lastIndexOf(...t){return Sl(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return lf(this,"reduce",t,e)},reduceRight(t,...e){return lf(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return Zr(this).toReversed()},toSorted(t){return Zr(this).toSorted(t)},toSpliced(...t){return Zr(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return Pl(this,"values",wt)}};function Pl(t,e,n){const r=Ba(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const kR=Array.prototype;function An(t,e,n,r,s,i){const o=Ba(t),l=o!==t&&!Qt(t),c=o[e];if(c!==kR[e]){const p=c.apply(t,i);return l?wt(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,wt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function lf(t,e,n,r){const s=Ba(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,wt(l),c,t)}),s[e](i,...r)}function Sl(t,e,n){const r=Ce(t);At(r,"iterate",Ni);const s=r[e](...n);return(s===-1||s===!1)&&Lu(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Zs(t,e,n=[]){_r(),ku();const r=Ce(t)[e].apply(t,n);return xu(),yr(),r}const xR=Au("__proto__,__v_isRef,__isVue"),g_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr));function DR(t){gr(t)||(t=String(t));const e=Ce(this);return At(e,"has",t),e.hasOwnProperty(t)}class __{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?WR:E_:i?w_:v_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=CR[n]))return c;if(n==="hasOwnProperty")return DR}const l=Reflect.get(e,n,It(e)?e:r);return(gr(n)?g_.has(n):xR(n))||(s||At(e,"get",n),i)?l:It(l)?o&&Su(n)?l:l.value:Ue(l)?s?I_(l):ja(l):l}}class y_ extends __{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ur(i);if(!Qt(r)&&!Ur(r)&&(i=Ce(i),r=Ce(r)),!ce(e)&&It(i)&&!It(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&Su(n)?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,It(e)?e:s);return e===Ce(s)&&(o?dr(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!gr(n)||!g_.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",ce(e)?"length":kr),Reflect.ownKeys(e)}}class NR extends __{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const OR=new y_,VR=new NR,MR=new y_(!0);const Ou=t=>t,$a=t=>Reflect.getPrototypeOf(t);function Ao(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ce(t),i=Ce(e);n||(dr(e,i)&&At(s,"get",e),At(s,"get",i));const{has:o}=$a(s),l=r?Ou:n?Uu:wt;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function Ro(t,e=!1){const n=this.__v_raw,r=Ce(n),s=Ce(t);return e||(dr(t,s)&&At(r,"has",t),At(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Po(t,e=!1){return t=t.__v_raw,!e&&At(Ce(t),"iterate",kr),Reflect.get(t,"size",t)}function cf(t,e=!1){!e&&!Qt(t)&&!Ur(t)&&(t=Ce(t));const n=Ce(this);return $a(n).has.call(n,t)||(n.add(t),Nn(n,"add",t,t)),this}function uf(t,e,n=!1){!n&&!Qt(e)&&!Ur(e)&&(e=Ce(e));const r=Ce(this),{has:s,get:i}=$a(r);let o=s.call(r,t);o||(t=Ce(t),o=s.call(r,t));const l=i.call(r,t);return r.set(t,e),o?dr(e,l)&&Nn(r,"set",t,e):Nn(r,"add",t,e),this}function hf(t){const e=Ce(this),{has:n,get:r}=$a(e);let s=n.call(e,t);s||(t=Ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Nn(e,"delete",t,void 0),i}function df(){const t=Ce(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function So(t,e){return function(r,s){const i=this,o=i.__v_raw,l=Ce(o),c=e?Ou:t?Uu:wt;return!t&&At(l,"iterate",kr),o.forEach((h,d)=>r.call(s,c(h),c(d),i))}}function Co(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Ou:e?Uu:wt;return!e&&At(i,"iterate",c?pc:kr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function LR(){const t={get(i){return Ao(this,i)},get size(){return Po(this)},has:Ro,add:cf,set:uf,delete:hf,clear:df,forEach:So(!1,!1)},e={get(i){return Ao(this,i,!1,!0)},get size(){return Po(this)},has:Ro,add(i){return cf.call(this,i,!0)},set(i,o){return uf.call(this,i,o,!0)},delete:hf,clear:df,forEach:So(!1,!0)},n={get(i){return Ao(this,i,!0)},get size(){return Po(this,!0)},has(i){return Ro.call(this,i,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:So(!0,!1)},r={get(i){return Ao(this,i,!0,!0)},get size(){return Po(this,!0)},has(i){return Ro.call(this,i,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:So(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Co(i,!1,!1),n[i]=Co(i,!0,!1),e[i]=Co(i,!1,!0),r[i]=Co(i,!0,!0)}),[t,n,e,r]}const[UR,FR,BR,$R]=LR();function Vu(t,e){const n=e?t?$R:BR:t?FR:UR;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const jR={get:Vu(!1,!1)},qR={get:Vu(!1,!0)},HR={get:Vu(!0,!1)};const v_=new WeakMap,w_=new WeakMap,E_=new WeakMap,WR=new WeakMap;function KR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zR(t){return t.__v_skip||!Object.isExtensible(t)?0:KR(gR(t))}function ja(t){return Ur(t)?t:Mu(t,!1,OR,jR,v_)}function T_(t){return Mu(t,!1,MR,qR,w_)}function I_(t){return Mu(t,!0,VR,HR,E_)}function Mu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zR(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ms(t){return Ur(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Ur(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function Lu(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function GR(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&r_(t,"__v_skip",!0),t}const wt=t=>Ue(t)?ja(t):t,Uu=t=>Ue(t)?I_(t):t;function It(t){return t?t.__v_isRef===!0:!1}function b_(t){return A_(t,!1)}function QR(t){return A_(t,!0)}function A_(t,e){return It(t)?t:new YR(t,e)}class YR{constructor(e,n){this.dep=new Nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Ur(e);e=r?e:Ce(e),dr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function gs(t){return It(t)?t.value:t}const JR={get:(t,e,n)=>e==="__v_raw"?t:gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function R_(t){return ms(t)?t:new Proxy(t,JR)}class XR{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return u_(this),!0}get value(){const e=this.dep.track();return f_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ZR(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new XR(r,s,n)}const ko={},ia=new WeakMap;let Rr;function eP(t,e=!1,n=Rr){if(n){let r=ia.get(n);r||ia.set(n,r=[]),r.push(t)}}function tP(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=$=>s?$:Qt($)||s===!1||s===0?Sn($,1):Sn($);let d,p,m,v,C=!1,N=!1;if(It(t)?(p=()=>t.value,C=Qt(t)):ms(t)?(p=()=>h(t),C=!0):ce(t)?(N=!0,C=t.some($=>ms($)||Qt($)),p=()=>t.map($=>{if(It($))return $.value;if(ms($))return h($);if(pe($))return c?c($,2):$()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){_r();try{m()}finally{yr()}}const $=Rr;Rr=d;try{return c?c(t,3,[v]):t(v)}finally{Rr=$}}:p=gn,e&&s){const $=p,le=s===!0?1/0:s;p=()=>Sn($(),le)}const D=RR(),q=()=>{d.stop(),D&&Pu(D.effects,d)};if(i&&e){const $=e;e=(...le)=>{$(...le),q()}}let B=N?new Array(t.length).fill(ko):ko;const H=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const le=d.run();if(s||C||(N?le.some((de,I)=>dr(de,B[I])):dr(le,B))){m&&m();const de=Rr;Rr=d;try{const I=[le,B===ko?void 0:N&&B[0]===ko?[]:B,v];c?c(e,3,I):e(...I),B=le}finally{Rr=de}}}else d.run()};return l&&l(H),d=new l_(p),d.scheduler=o?()=>o(H,!1):H,v=$=>eP($,!1,d),m=d.onStop=()=>{const $=ia.get(d);if($){if(c)c($,4);else for(const le of $)le();ia.delete(d)}},e?r?H(!0):B=d.run():o?o(H.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function Sn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))Sn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Zg(t)||ps(t))t.forEach(r=>{Sn(r,e,n)});else if(n_(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(t,e,n,r){try{return r?t(...r):t()}catch(s){qa(s,e,n)}}function vn(t,e,n,r){if(pe(t)){const s=to(t,e,n,r);return s&&e_(s)&&s.catch(i=>{qa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(vn(t[i],e,n,r));return s}}function qa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){_r(),to(i,null,10,[t,c,h]),yr();return}}nP(t,n,s,r,o)}function nP(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Oi=!1,mc=!1;const xt=[];let an=0;const _s=[];let Gn=null,ss=0;const P_=Promise.resolve();let Fu=null;function S_(t){const e=Fu||P_;return t?e.then(this?t.bind(this):t):e}function rP(t){let e=Oi?an+1:0,n=xt.length;for(;e<n;){const r=e+n>>>1,s=xt[r],i=Vi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bu(t){if(!(t.flags&1)){const e=Vi(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=Vi(n)?xt.push(t):xt.splice(rP(e),0,t),t.flags|=1,C_()}}function C_(){!Oi&&!mc&&(mc=!0,Fu=P_.then(x_))}function sP(t){ce(t)?_s.push(...t):Gn&&t.id===-1?Gn.splice(ss+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),C_()}function ff(t,e,n=Oi?an+1:0){for(;n<xt.length;n++){const r=xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function k_(t){if(_s.length){const e=[...new Set(_s)].sort((n,r)=>Vi(n)-Vi(r));if(_s.length=0,Gn){Gn.push(...e);return}for(Gn=e,ss=0;ss<Gn.length;ss++){const n=Gn[ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,ss=0}}const Vi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function x_(t){mc=!1,Oi=!0;try{for(an=0;an<xt.length;an++){const e=xt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<xt.length;an++){const e=xt[an];e&&(e.flags&=-2)}an=0,xt.length=0,k_(),Oi=!1,Fu=null,(xt.length||_s.length)&&x_()}}let ct=null,D_=null;function oa(t){const e=ct;return ct=t,D_=t&&t.type.__scopeId||null,e}function lt(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Tf(-1);const i=oa(e);let o;try{o=t(...s)}finally{oa(i),r._d&&Tf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dt(t,e){if(ct===null)return t;const n=Ga(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(_r(),vn(c,n,8,[t.el,l,t,e]),yr())}}const iP=Symbol("_vte"),oP=t=>t.__isTeleport;function $u(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$u(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function N_(t,e){return pe(t)?dt({name:t.name},e,{setup:t}):t}function O_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gc(t,e,n,r,s=!1){if(ce(t)){t.forEach((C,N)=>gc(C,e&&(ce(e)?e[N]:e),n,r,s));return}if(ys(r)&&!s)return;const i=r.shapeFlag&4?Ga(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,m=Ce(p),v=p===Ne?()=>!1:C=>Se(m,C);if(h!=null&&h!==c&&(Je(h)?(d[h]=null,v(h)&&(p[h]=null)):It(h)&&(h.value=null)),pe(c))to(c,l,12,[o,d]);else{const C=Je(c),N=It(c);if(C||N){const D=()=>{if(t.f){const q=C?v(c)?p[c]:d[c]:c.value;s?ce(q)&&Pu(q,i):ce(q)?q.includes(i)||q.push(i):C?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,v(c)&&(p[c]=o)):N&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Ut(D,n)):D()}}}const ys=t=>!!t.type.__asyncLoader,V_=t=>t.type.__isKeepAlive;function aP(t,e){M_(t,"a",e)}function lP(t,e){M_(t,"da",e)}function M_(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)V_(s.parent.vnode)&&cP(r,e,n,s),s=s.parent}}function cP(t,e,n,r){const s=Ha(e,t,r,!0);U_(()=>{Pu(r[e],s)},n)}function Ha(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{_r();const l=no(n),c=vn(e,n,t,o);return l(),yr(),c});return r?s.unshift(i):s.push(i),i}}const Fn=t=>(e,n=Et)=>{(!za||t==="sp")&&Ha(t,(...r)=>e(...r),n)},uP=Fn("bm"),L_=Fn("m"),hP=Fn("bu"),dP=Fn("u"),fP=Fn("bum"),U_=Fn("um"),pP=Fn("sp"),mP=Fn("rtg"),gP=Fn("rtc");function _P(t,e=Et){Ha("ec",t,e)}const yP="components";function ze(t,e){return wP(yP,t,!0,e)||t}const vP=Symbol.for("v-ndc");function wP(t,e,n=!0,r=!1){const s=ct||Et;if(s){const i=s.type;{const l=aS(i,!1);if(l&&(l===e||l===Yt(e)||l===Ua(Yt(e))))return i}const o=pf(s[t]||i[t],e)||pf(s.appContext[t],e);return!o&&r?i:o}}function pf(t,e){return t&&(t[e]||t[Yt(e)]||t[Ua(Yt(e))])}function _i(t,e,n,r){let s;const i=n,o=ce(t);if(o||Je(t)){const l=o&&ms(t);let c=!1;l&&(c=!Qt(t),t=Ba(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?wt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function EP(t,e,n={},r,s){if(ct.ce||ct.parent&&ys(ct.parent)&&ct.parent.ce)return fe(),Li(nt,null,[ge("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),fe();const o=i&&F_(i(n)),l=Li(nt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function F_(t){return t.some(e=>Ui(e)?!(e.type===fr||e.type===nt&&!F_(e.children)):!0)?t:null}const _c=t=>t?iy(t)?Ga(t):_c(t.parent):null,yi=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ju(t),$forceUpdate:t=>t.f||(t.f=()=>{Bu(t.update)}),$nextTick:t=>t.n||(t.n=S_.bind(t.proxy)),$watch:t=>jP.bind(t)}),Cl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Se(t,e),TP={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cl(r,e))return o[e]=1,r[e];if(s!==Ne&&Se(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Se(h,e))return o[e]=3,i[e];if(n!==Ne&&Se(n,e))return o[e]=4,n[e];yc&&(o[e]=0)}}const d=yi[e];let p,m;if(d)return e==="$attrs"&&At(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Se(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cl(s,e)?(s[e]=n,!0):r!==Ne&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&Se(t,o)||Cl(e,o)||(l=i[0])&&Se(l,o)||Se(r,o)||Se(yi,o)||Se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mf(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function IP(t){const e=ju(t),n=t.proxy,r=t.ctx;yc=!1,e.beforeCreate&&gf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:C,activated:N,deactivated:D,beforeDestroy:q,beforeUnmount:B,destroyed:H,unmounted:$,render:le,renderTracked:de,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:b,inheritAttrs:A,components:P,directives:E,filters:Rt}=e;if(h&&bP(h,r,null),o)for(const we in o){const _e=o[we];pe(_e)&&(r[we]=_e.bind(n))}if(s){const we=s.call(n,n);Ue(we)&&(t.data=ja(we))}if(yc=!0,i)for(const we in i){const _e=i[we],Mt=pe(_e)?_e.bind(n,n):pe(_e.get)?_e.get.bind(n,n):gn,Jt=!pe(_e)&&pe(_e.set)?_e.set.bind(n):gn,Wt=Zt({get:Mt,set:Jt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Fe=>Wt.value=Fe})}if(l)for(const we in l)B_(l[we],r,n,we);if(c){const we=pe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(_e=>{$o(_e,we[_e])})}d&&gf(d,t,"c");function Ge(we,_e){ce(_e)?_e.forEach(Mt=>we(Mt.bind(n))):_e&&we(_e.bind(n))}if(Ge(uP,p),Ge(L_,m),Ge(hP,v),Ge(dP,C),Ge(aP,N),Ge(lP,D),Ge(_P,y),Ge(gP,de),Ge(mP,I),Ge(fP,B),Ge(U_,$),Ge(pP,T),ce(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>n[_e],set:Mt=>n[_e]=Mt})})}else t.exposed||(t.exposed={});le&&t.render===gn&&(t.render=le),A!=null&&(t.inheritAttrs=A),P&&(t.components=P),E&&(t.directives=E),T&&O_(t)}function bP(t,e,n=gn){ce(t)&&(t=vc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=_n(s.from||r,s.default,!0):i=_n(s.from||r):i=_n(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gf(t,e,n){vn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function B_(t,e,n,r){let s=r.includes(".")?ey(n,r):()=>n[r];if(Je(t)){const i=e[t];pe(i)&&jo(s,i)}else if(pe(t))jo(s,t.bind(n));else if(Ue(t))if(ce(t))t.forEach(i=>B_(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&jo(s,i,t)}}function ju(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>aa(c,h,o,!0)),aa(c,e,o)),Ue(e)&&i.set(e,c),c}function aa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&aa(t,i,n,!0),s&&s.forEach(o=>aa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=AP[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const AP={data:_f,props:yf,emits:yf,methods:ci,computed:ci,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:ci,directives:ci,watch:PP,provide:_f,inject:RP};function _f(t,e){return e?t?function(){return dt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function RP(t,e){return ci(vc(t),vc(e))}function vc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function ci(t,e){return t?dt(Object.create(null),t,e):e}function yf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:dt(Object.create(null),mf(t),mf(e??{})):e}function PP(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function $_(){return{app:null,config:{isNativeTag:pR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SP=0;function CP(t,e){return function(r,s=null){pe(r)||(r=dt({},r)),s!=null&&!Ue(s)&&(s=null);const i=$_(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:SP++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cS,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(h,...p)):pe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||ge(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(v,d):t(v,d,m),c=!0,h._container=d,d.__vue_app__=h,Ga(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(vn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=vs;vs=h;try{return d()}finally{vs=p}}};return h}}let vs=null;function $o(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function _n(t,e,n=!1){const r=Et||ct;if(r||vs){const s=vs?vs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const j_={},q_=()=>Object.create(j_),H_=t=>Object.getPrototypeOf(t)===j_;function kP(t,e,n,r=!1){const s={},i=q_();t.propsDefaults=Object.create(null),W_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:T_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xP(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Wa(t.emitsOptions,m))continue;const v=e[m];if(c)if(Se(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const C=Yt(m);s[C]=wc(c,l,C,v,t,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{W_(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Se(e,p)&&((d=Hr(p))===p||!Se(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=wc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],h=!0)}h&&Nn(t.attrs,"set","")}function W_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(gi(c))continue;const h=e[c];let d;s&&Se(s,d=Yt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Wa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ce(n),h=l||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=wc(s,c,p,h[p],t,!Se(h,p))}}return o}function wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=no(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}const DP=new WeakMap;function K_(t,e,n=!1){const r=n?DP:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[m,v]=K_(p,e,!0);dt(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,fs),fs;if(ce(i))for(let d=0;d<i.length;d++){const p=Yt(i[d]);vf(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=Yt(d);if(vf(p)){const m=i[d],v=o[p]=ce(m)||pe(m)?{type:m}:dt({},m),C=v.type;let N=!1,D=!0;if(ce(C))for(let q=0;q<C.length;++q){const B=C[q],H=pe(B)&&B.name;if(H==="Boolean"){N=!0;break}else H==="String"&&(D=!1)}else N=pe(C)&&C.name==="Boolean";v[0]=N,v[1]=D,(N||Se(v,"default"))&&l.push(p)}}const h=[o,l];return Ue(t)&&r.set(t,h),h}function vf(t){return t[0]!=="$"&&!gi(t)}const z_=t=>t[0]==="_"||t==="$stable",qu=t=>ce(t)?t.map(ln):[ln(t)],NP=(t,e,n)=>{if(e._n)return e;const r=lt((...s)=>qu(e(...s)),n);return r._c=!1,r},G_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(z_(s))continue;const i=t[s];if(pe(i))e[s]=NP(s,i,r);else if(i!=null){const o=qu(i);e[s]=()=>o}}},Q_=(t,e)=>{const n=qu(e);t.slots.default=()=>n},Y_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},OP=(t,e,n)=>{const r=t.slots=q_();if(t.vnode.shapeFlag&32){const s=e._;s?(Y_(r,e,n),n&&r_(r,"_",s,!0)):G_(e,r)}else e&&Q_(t,e)},VP=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Y_(s,e,n):(i=!e.$stable,G_(e,s)),o=e}else e&&(Q_(t,e),o={default:1});if(i)for(const l in s)!z_(l)&&o[l]==null&&delete s[l]},Ut=QP;function MP(t){return LP(t)}function LP(t,e){const n=s_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=gn,insertStaticContent:C}=t,N=(_,w,k,L=null,O=null,F=null,G=void 0,K=null,W=!!w.dynamicChildren)=>{if(_===w)return;_&&!ei(_,w)&&(L=V(_),Fe(_,O,F,!0),_=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:j,ref:se,shapeFlag:Y}=w;switch(j){case Ka:D(_,w,k,L);break;case fr:q(_,w,k,L);break;case Dl:_==null&&B(w,k,L,G);break;case nt:P(_,w,k,L,O,F,G,K,W);break;default:Y&1?le(_,w,k,L,O,F,G,K,W):Y&6?E(_,w,k,L,O,F,G,K,W):(Y&64||Y&128)&&j.process(_,w,k,L,O,F,G,K,W,Z)}se!=null&&O&&gc(se,_&&_.ref,F,w||_,!w)},D=(_,w,k,L)=>{if(_==null)r(w.el=l(w.children),k,L);else{const O=w.el=_.el;w.children!==_.children&&h(O,w.children)}},q=(_,w,k,L)=>{_==null?r(w.el=c(w.children||""),k,L):w.el=_.el},B=(_,w,k,L)=>{[_.el,_.anchor]=C(_.children,w,k,L,_.el,_.anchor)},H=({el:_,anchor:w},k,L)=>{let O;for(;_&&_!==w;)O=m(_),r(_,k,L),_=O;r(w,k,L)},$=({el:_,anchor:w})=>{let k;for(;_&&_!==w;)k=m(_),s(_),_=k;s(w)},le=(_,w,k,L,O,F,G,K,W)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),_==null?de(w,k,L,O,F,G,K,W):T(_,w,O,F,G,K,W)},de=(_,w,k,L,O,F,G,K)=>{let W,j;const{props:se,shapeFlag:Y,transition:ne,dirs:ee}=_;if(W=_.el=o(_.type,F,se&&se.is,se),Y&8?d(W,_.children):Y&16&&y(_.children,W,null,L,O,kl(_,F),G,K),ee&&Ir(_,null,L,"created"),I(W,_,_.scopeId,G,L),se){for(const Re in se)Re!=="value"&&!gi(Re)&&i(W,Re,null,se[Re],F,L);"value"in se&&i(W,"value",null,se.value,F),(j=se.onVnodeBeforeMount)&&on(j,L,_)}ee&&Ir(_,null,L,"beforeMount");const ie=UP(O,ne);ie&&ne.beforeEnter(W),r(W,w,k),((j=se&&se.onVnodeMounted)||ie||ee)&&Ut(()=>{j&&on(j,L,_),ie&&ne.enter(W),ee&&Ir(_,null,L,"mounted")},O)},I=(_,w,k,L,O)=>{if(k&&v(_,k),L)for(let F=0;F<L.length;F++)v(_,L[F]);if(O){let F=O.subTree;if(w===F||ny(F.type)&&(F.ssContent===w||F.ssFallback===w)){const G=O.vnode;I(_,G,G.scopeId,G.slotScopeIds,O.parent)}}},y=(_,w,k,L,O,F,G,K,W=0)=>{for(let j=W;j<_.length;j++){const se=_[j]=K?Qn(_[j]):ln(_[j]);N(null,se,w,k,L,O,F,G,K)}},T=(_,w,k,L,O,F,G)=>{const K=w.el=_.el;let{patchFlag:W,dynamicChildren:j,dirs:se}=w;W|=_.patchFlag&16;const Y=_.props||Ne,ne=w.props||Ne;let ee;if(k&&br(k,!1),(ee=ne.onVnodeBeforeUpdate)&&on(ee,k,w,_),se&&Ir(w,_,k,"beforeUpdate"),k&&br(k,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(K,""),j?b(_.dynamicChildren,j,K,k,L,kl(w,O),F):G||_e(_,w,K,null,k,L,kl(w,O),F,!1),W>0){if(W&16)A(K,Y,ne,k,O);else if(W&2&&Y.class!==ne.class&&i(K,"class",null,ne.class,O),W&4&&i(K,"style",Y.style,ne.style,O),W&8){const ie=w.dynamicProps;for(let Re=0;Re<ie.length;Re++){const Ie=ie[Re],ft=Y[Ie],et=ne[Ie];(et!==ft||Ie==="value")&&i(K,Ie,ft,et,O,k)}}W&1&&_.children!==w.children&&d(K,w.children)}else!G&&j==null&&A(K,Y,ne,k,O);((ee=ne.onVnodeUpdated)||se)&&Ut(()=>{ee&&on(ee,k,w,_),se&&Ir(w,_,k,"updated")},L)},b=(_,w,k,L,O,F,G)=>{for(let K=0;K<w.length;K++){const W=_[K],j=w[K],se=W.el&&(W.type===nt||!ei(W,j)||W.shapeFlag&70)?p(W.el):k;N(W,j,se,null,L,O,F,G,!0)}},A=(_,w,k,L,O)=>{if(w!==k){if(w!==Ne)for(const F in w)!gi(F)&&!(F in k)&&i(_,F,w[F],null,O,L);for(const F in k){if(gi(F))continue;const G=k[F],K=w[F];G!==K&&F!=="value"&&i(_,F,K,G,O,L)}"value"in k&&i(_,"value",w.value,k.value,O)}},P=(_,w,k,L,O,F,G,K,W)=>{const j=w.el=_?_.el:l(""),se=w.anchor=_?_.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ee}=w;ee&&(K=K?K.concat(ee):ee),_==null?(r(j,k,L),r(se,k,L),y(w.children||[],k,se,O,F,G,K,W)):Y>0&&Y&64&&ne&&_.dynamicChildren?(b(_.dynamicChildren,ne,k,O,F,G,K),(w.key!=null||O&&w===O.subTree)&&J_(_,w,!0)):_e(_,w,k,se,O,F,G,K,W)},E=(_,w,k,L,O,F,G,K,W)=>{w.slotScopeIds=K,_==null?w.shapeFlag&512?O.ctx.activate(w,k,L,G,W):Rt(w,k,L,O,F,G,W):Ht(_,w,W)},Rt=(_,w,k,L,O,F,G)=>{const K=_.component=nS(_,L,O);if(V_(_)&&(K.ctx.renderer=Z),rS(K,!1,G),K.asyncDep){if(O&&O.registerDep(K,Ge,G),!_.el){const W=K.subTree=ge(fr);q(null,W,w,k)}}else Ge(K,_,w,k,O,F,G)},Ht=(_,w,k)=>{const L=w.component=_.component;if(zP(_,w,k))if(L.asyncDep&&!L.asyncResolved){we(L,w,k);return}else L.next=w,L.update();else w.el=_.el,L.vnode=w},Ge=(_,w,k,L,O,F,G)=>{const K=()=>{if(_.isMounted){let{next:Y,bu:ne,u:ee,parent:ie,vnode:Re}=_;{const pt=X_(_);if(pt){Y&&(Y.el=Re.el,we(_,Y,G)),pt.asyncDep.then(()=>{_.isUnmounted||K()});return}}let Ie=Y,ft;br(_,!1),Y?(Y.el=Re.el,we(_,Y,G)):Y=Re,ne&&Bo(ne),(ft=Y.props&&Y.props.onVnodeBeforeUpdate)&&on(ft,ie,Y,Re),br(_,!0);const et=xl(_),st=_.subTree;_.subTree=et,N(st,et,p(st.el),V(st),_,O,F),Y.el=et.el,Ie===null&&GP(_,et.el),ee&&Ut(ee,O),(ft=Y.props&&Y.props.onVnodeUpdated)&&Ut(()=>on(ft,ie,Y,Re),O)}else{let Y;const{el:ne,props:ee}=w,{bm:ie,m:Re,parent:Ie,root:ft,type:et}=_,st=ys(w);if(br(_,!1),ie&&Bo(ie),!st&&(Y=ee&&ee.onVnodeBeforeMount)&&on(Y,Ie,w),br(_,!0),ne&&xe){const pt=()=>{_.subTree=xl(_),xe(ne,_.subTree,_,O,null)};st&&et.__asyncHydrate?et.__asyncHydrate(ne,_,pt):pt()}else{ft.ce&&ft.ce._injectChildStyle(et);const pt=_.subTree=xl(_);N(null,pt,k,L,_,O,F),w.el=pt.el}if(Re&&Ut(Re,O),!st&&(Y=ee&&ee.onVnodeMounted)){const pt=w;Ut(()=>on(Y,Ie,pt),O)}(w.shapeFlag&256||Ie&&ys(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&_.a&&Ut(_.a,O),_.isMounted=!0,w=k=L=null}};_.scope.on();const W=_.effect=new l_(K);_.scope.off();const j=_.update=W.run.bind(W),se=_.job=W.runIfDirty.bind(W);se.i=_,se.id=_.uid,W.scheduler=()=>Bu(se),br(_,!0),j()},we=(_,w,k)=>{w.component=_;const L=_.vnode.props;_.vnode=w,_.next=null,xP(_,w.props,L,k),VP(_,w.children,k),_r(),ff(_),yr()},_e=(_,w,k,L,O,F,G,K,W=!1)=>{const j=_&&_.children,se=_?_.shapeFlag:0,Y=w.children,{patchFlag:ne,shapeFlag:ee}=w;if(ne>0){if(ne&128){Jt(j,Y,k,L,O,F,G,K,W);return}else if(ne&256){Mt(j,Y,k,L,O,F,G,K,W);return}}ee&8?(se&16&&Ot(j,O,F),Y!==j&&d(k,Y)):se&16?ee&16?Jt(j,Y,k,L,O,F,G,K,W):Ot(j,O,F,!0):(se&8&&d(k,""),ee&16&&y(Y,k,L,O,F,G,K,W))},Mt=(_,w,k,L,O,F,G,K,W)=>{_=_||fs,w=w||fs;const j=_.length,se=w.length,Y=Math.min(j,se);let ne;for(ne=0;ne<Y;ne++){const ee=w[ne]=W?Qn(w[ne]):ln(w[ne]);N(_[ne],ee,k,null,O,F,G,K,W)}j>se?Ot(_,O,F,!0,!1,Y):y(w,k,L,O,F,G,K,W,Y)},Jt=(_,w,k,L,O,F,G,K,W)=>{let j=0;const se=w.length;let Y=_.length-1,ne=se-1;for(;j<=Y&&j<=ne;){const ee=_[j],ie=w[j]=W?Qn(w[j]):ln(w[j]);if(ei(ee,ie))N(ee,ie,k,null,O,F,G,K,W);else break;j++}for(;j<=Y&&j<=ne;){const ee=_[Y],ie=w[ne]=W?Qn(w[ne]):ln(w[ne]);if(ei(ee,ie))N(ee,ie,k,null,O,F,G,K,W);else break;Y--,ne--}if(j>Y){if(j<=ne){const ee=ne+1,ie=ee<se?w[ee].el:L;for(;j<=ne;)N(null,w[j]=W?Qn(w[j]):ln(w[j]),k,ie,O,F,G,K,W),j++}}else if(j>ne)for(;j<=Y;)Fe(_[j],O,F,!0),j++;else{const ee=j,ie=j,Re=new Map;for(j=ie;j<=ne;j++){const Pt=w[j]=W?Qn(w[j]):ln(w[j]);Pt.key!=null&&Re.set(Pt.key,j)}let Ie,ft=0;const et=ne-ie+1;let st=!1,pt=0;const $n=new Array(et);for(j=0;j<et;j++)$n[j]=0;for(j=ee;j<=Y;j++){const Pt=_[j];if(ft>=et){Fe(Pt,O,F,!0);continue}let Kt;if(Pt.key!=null)Kt=Re.get(Pt.key);else for(Ie=ie;Ie<=ne;Ie++)if($n[Ie-ie]===0&&ei(Pt,w[Ie])){Kt=Ie;break}Kt===void 0?Fe(Pt,O,F,!0):($n[Kt-ie]=j+1,Kt>=pt?pt=Kt:st=!0,N(Pt,w[Kt],k,null,O,F,G,K,W),ft++)}const zr=st?FP($n):fs;for(Ie=zr.length-1,j=et-1;j>=0;j--){const Pt=ie+j,Kt=w[Pt],Gr=Pt+1<se?w[Pt+1].el:L;$n[j]===0?N(null,Kt,k,Gr,O,F,G,K,W):st&&(Ie<0||j!==zr[Ie]?Wt(Kt,k,Gr,2):Ie--)}}},Wt=(_,w,k,L,O=null)=>{const{el:F,type:G,transition:K,children:W,shapeFlag:j}=_;if(j&6){Wt(_.component.subTree,w,k,L);return}if(j&128){_.suspense.move(w,k,L);return}if(j&64){G.move(_,w,k,Z);return}if(G===nt){r(F,w,k);for(let Y=0;Y<W.length;Y++)Wt(W[Y],w,k,L);r(_.anchor,w,k);return}if(G===Dl){H(_,w,k);return}if(L!==2&&j&1&&K)if(L===0)K.beforeEnter(F),r(F,w,k),Ut(()=>K.enter(F),O);else{const{leave:Y,delayLeave:ne,afterLeave:ee}=K,ie=()=>r(F,w,k),Re=()=>{Y(F,()=>{ie(),ee&&ee()})};ne?ne(F,ie,Re):Re()}else r(F,w,k)},Fe=(_,w,k,L=!1,O=!1)=>{const{type:F,props:G,ref:K,children:W,dynamicChildren:j,shapeFlag:se,patchFlag:Y,dirs:ne,cacheIndex:ee}=_;if(Y===-2&&(O=!1),K!=null&&gc(K,null,k,_,!0),ee!=null&&(w.renderCache[ee]=void 0),se&256){w.ctx.deactivate(_);return}const ie=se&1&&ne,Re=!ys(_);let Ie;if(Re&&(Ie=G&&G.onVnodeBeforeUnmount)&&on(Ie,w,_),se&6)sn(_.component,k,L);else{if(se&128){_.suspense.unmount(k,L);return}ie&&Ir(_,null,w,"beforeUnmount"),se&64?_.type.remove(_,w,k,Z,L):j&&!j.hasOnce&&(F!==nt||Y>0&&Y&64)?Ot(j,w,k,!1,!0):(F===nt&&Y&384||!O&&se&16)&&Ot(W,w,k),L&&Be(_)}(Re&&(Ie=G&&G.onVnodeUnmounted)||ie)&&Ut(()=>{Ie&&on(Ie,w,_),ie&&Ir(_,null,w,"unmounted")},k)},Be=_=>{const{type:w,el:k,anchor:L,transition:O}=_;if(w===nt){Bn(k,L);return}if(w===Dl){$(_);return}const F=()=>{s(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:G,delayLeave:K}=O,W=()=>G(k,F);K?K(_.el,F,W):W()}else F()},Bn=(_,w)=>{let k;for(;_!==w;)k=m(_),s(_),_=k;s(w)},sn=(_,w,k)=>{const{bum:L,scope:O,job:F,subTree:G,um:K,m:W,a:j}=_;wf(W),wf(j),L&&Bo(L),O.stop(),F&&(F.flags|=8,Fe(G,_,w,k)),K&&Ut(K,w),Ut(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ot=(_,w,k,L=!1,O=!1,F=0)=>{for(let G=F;G<_.length;G++)Fe(_[G],w,k,L,O)},V=_=>{if(_.shapeFlag&6)return V(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=m(_.anchor||_.el),k=w&&w[iP];return k?m(k):w};let J=!1;const Q=(_,w,k)=>{_==null?w._vnode&&Fe(w._vnode,null,null,!0):N(w._vnode||null,_,w,null,null,null,k),w._vnode=_,J||(J=!0,ff(),k_(),J=!1)},Z={p:N,um:Fe,m:Wt,r:Be,mt:Rt,mc:y,pc:_e,pbc:b,n:V,o:t};let Ee,xe;return{render:Q,hydrate:Ee,createApp:CP(Q,Ee)}}function kl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function UP(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function J_(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Qn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&J_(o,l)),l.type===Ka&&(l.el=o.el)}}function FP(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function X_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:X_(e)}function wf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const BP=Symbol.for("v-scx"),$P=()=>_n(BP);function jo(t,e,n){return Z_(t,e,n)}function Z_(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=dt({},n);let c;if(za)if(i==="sync"){const m=$P();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!e||r)l.once=!0;else{const m=()=>{};return m.stop=gn,m.resume=gn,m.pause=gn,m}const h=Et;l.call=(m,v,C)=>vn(m,h,v,C);let d=!1;i==="post"?l.scheduler=m=>{Ut(m,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(m,v)=>{v?m():Bu(m)}),l.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=tP(t,e,l);return c&&c.push(p),p}function jP(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?ey(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=no(this),l=Z_(s,i.bind(r),n);return o(),l}function ey(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qP=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Yt(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function HP(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&qP(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Je(d)?d.trim():d)),o.number&&(s=n.map(hc)));let l,c=r[l=bl(e)]||r[l=bl(Yt(e))];!c&&i&&(c=r[l=bl(Hr(e))]),c&&vn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,vn(h,t,6,s)}}function ty(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=h=>{const d=ty(h,e,!0);d&&(l=!0,dt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):dt(o,i),Ue(t)&&r.set(t,o),o)}function Wa(t,e){return!t||!Va(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Hr(e))||Se(t,e))}function xl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:C,inheritAttrs:N}=t,D=oa(t);let q,B;try{if(n.shapeFlag&4){const $=s||r,le=$;q=ln(h.call(le,$,d,p,v,m,C)),B=l}else{const $=e;q=ln($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),B=e.props?l:WP(l)}}catch($){vi.length=0,qa($,t,1),q=ge(fr)}let H=q;if(B&&N!==!1){const $=Object.keys(B),{shapeFlag:le}=H;$.length&&le&7&&(i&&$.some(Ru)&&(B=KP(B,i)),H=Cs(H,B,!1,!0))}return n.dirs&&(H=Cs(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&$u(H,n.transition),q=H,oa(D),q}const WP=t=>{let e;for(const n in t)(n==="class"||n==="style"||Va(n))&&((e||(e={}))[n]=t[n]);return e},KP=(t,e)=>{const n={};for(const r in t)(!Ru(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zP(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ef(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Wa(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ef(r,o,h):!0:!!o;return!1}function Ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wa(n,i))return!0}return!1}function GP({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ny=t=>t.__isSuspense;function QP(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):sP(t)}const nt=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),vi=[];let jt=null;function fe(t=!1){vi.push(jt=t?null:[])}function YP(){vi.pop(),jt=vi[vi.length-1]||null}let Mi=1;function Tf(t){Mi+=t,t<0&&jt&&(jt.hasOnce=!0)}function ry(t){return t.dynamicChildren=Mi>0?jt||fs:null,YP(),Mi>0&&jt&&jt.push(t),t}function me(t,e,n,r,s,i){return ry(R(t,e,n,r,s,i,!0))}function Li(t,e,n,r,s){return ry(ge(t,e,n,r,s,!0))}function Ui(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const sy=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||It(t)||pe(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===nt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sy(e),ref:e&&qo(e),scopeId:D_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return l?(Hu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Mi>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const ge=JP;function JP(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vP)&&(t=fr),Ui(t)){const l=Cs(t,e,!0);return n&&Hu(l,n),Mi>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(lS(t)&&(t=t.__vccOpts),e){e=XP(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Fa(l)),Ue(c)&&(Lu(c)&&!ce(c)&&(c=dt({},c)),e.style=Cu(c))}const o=Je(t)?1:ny(t)?128:oP(t)?64:Ue(t)?4:pe(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function XP(t){return t?Lu(t)||H_(t)?dt({},t):t:null}function Cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?ZP(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&sy(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cs(t.ssContent),ssFallback:t.ssFallback&&Cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&$u(d,c.clone(d)),d}function Xe(t=" ",e=0){return ge(Ka,null,t,e)}function la(t="",e=!1){return e?(fe(),Li(fr,null,t)):ge(fr,null,t)}function ln(t){return t==null||typeof t=="boolean"?ge(fr):ce(t)?ge(nt,null,t.slice()):Ui(t)?Qn(t):ge(Ka,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cs(t)}function Hu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!H_(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[Xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function ZP(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fa([e.class,r.class]));else if(s==="style")e.style=Cu([e.style,r.style]);else if(Va(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function on(t,e,n,r=null){vn(t,e,7,[n,r])}const eS=$_();let tS=0;function nS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||eS,i={uid:tS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new AR(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:K_(r,s),emitsOptions:ty(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=HP.bind(null,i),t.ce&&t.ce(i),i}let Et=null,ca,Ec;{const t=s_(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Ec=e("__VUE_SSR_SETTERS__",n=>za=n)}const no=t=>{const e=Et;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},If=()=>{Et&&Et.scope.off(),ca(null)};function iy(t){return t.vnode.shapeFlag&4}let za=!1;function rS(t,e=!1,n=!1){e&&Ec(e);const{props:r,children:s}=t.vnode,i=iy(t);kP(t,r,i,e),OP(t,s,n);const o=i?sS(t,e):void 0;return e&&Ec(!1),o}function sS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,TP);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?oS(t):null,i=no(t);_r();const o=to(r,t,0,[t.props,s]);if(yr(),i(),e_(o)){if(ys(t)||O_(t),o.then(If,If),e)return o.then(l=>{bf(t,l,e)}).catch(l=>{qa(l,t,0)});t.asyncDep=o}else bf(t,o,e)}else oy(t,e)}function bf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=R_(e)),oy(t,n)}let Af;function oy(t,e,n){const r=t.type;if(!t.render){if(!e&&Af&&!r.render){const s=r.template||ju(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=dt(dt({isCustomElement:i,delimiters:l},o),c);r.render=Af(s,h)}}t.render=r.render||gn}{const s=no(t);_r();try{IP(t)}finally{yr(),s()}}}const iS={get(t,e){return At(t,"get",""),t[e]}};function oS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,iS),slots:t.slots,emit:t.emit,expose:e}}function Ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(R_(GR(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function aS(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function lS(t){return pe(t)&&"__vccOpts"in t}const Zt=(t,e)=>ZR(t,e,za);function ay(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!ce(e)?Ui(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ui(n)&&(n=[n]),ge(t,e,n))}const cS="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const Rf=typeof window<"u"&&window.trustedTypes;if(Rf)try{Tc=Rf.createPolicy("vue",{createHTML:t=>t})}catch{}const ly=Tc?t=>Tc.createHTML(t):t=>t,uS="http://www.w3.org/2000/svg",hS="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Pf=Pn&&Pn.createElement("template"),dS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(uS,t):e==="mathml"?Pn.createElementNS(hS,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pf.innerHTML=ly(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Pf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fS=Symbol("_vtc");function pS(t,e,n){const r=t[fS];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Sf=Symbol("_vod"),mS=Symbol("_vsh"),gS=Symbol(""),_S=/(^|;)\s*display\s*:/;function yS(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ho(r,l,"")}else for(const o in e)n[o]==null&&Ho(r,o,"");for(const o in n)o==="display"&&(i=!0),Ho(r,o,n[o])}else if(s){if(e!==n){const o=r[gS];o&&(n+=";"+o),r.cssText=n,i=_S.test(n)}}else e&&t.removeAttribute("style");Sf in t&&(t[Sf]=i?r.display:"",t[mS]&&(r.display="none"))}const Cf=/\s*!important$/;function Ho(t,e,n){if(ce(n))n.forEach(r=>Ho(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vS(t,e);Cf.test(n)?t.setProperty(Hr(r),n.replace(Cf,""),"important"):t[r]=n}}const kf=["Webkit","Moz","ms"],Nl={};function vS(t,e){const n=Nl[e];if(n)return n;let r=Yt(e);if(r!=="filter"&&r in t)return Nl[e]=r;r=Ua(r);for(let s=0;s<kf.length;s++){const i=kf[s]+r;if(i in t)return Nl[e]=i}return e}const xf="http://www.w3.org/1999/xlink";function Df(t,e,n,r,s,i=bR(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n):n==null||i&&!i_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":gr(n)?String(n):n)}function Nf(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ly(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=i_(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function is(t,e,n,r){t.addEventListener(e,n,r)}function wS(t,e,n,r){t.removeEventListener(e,n,r)}const Of=Symbol("_vei");function ES(t,e,n,r,s=null){const i=t[Of]||(t[Of]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=TS(e);if(r){const h=i[e]=AS(r,s);is(t,l,h,c)}else o&&(wS(t,l,o,c),i[e]=void 0)}}const Vf=/(?:Once|Passive|Capture)$/;function TS(t){let e;if(Vf.test(t)){e={};let r;for(;r=t.match(Vf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Ol=0;const IS=Promise.resolve(),bS=()=>Ol||(IS.then(()=>Ol=0),Ol=Date.now());function AS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vn(RS(r,n.value),e,5,[r])};return n.value=t,n.attached=bS(),n}function RS(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,PS=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pS(t,r,o):e==="style"?yS(t,n,r):Va(e)?Ru(e)||ES(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SS(t,e,r,o))?(Nf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Df(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Nf(t,Yt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Df(t,e,r,o))};function SS(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mf(e)&&Je(n)?!1:e in t}const Lf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Bo(e,n):e};function CS(t){t.target.composing=!0}function Uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vl=Symbol("_assign"),Nt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Vl]=Lf(s);const i=r||s.props&&s.props.type==="number";is(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=hc(l)),t[Vl](l)}),n&&is(t,"change",()=>{t.value=t.value.trim()}),e||(is(t,"compositionstart",CS),is(t,"compositionend",Uf),is(t,"change",Uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Vl]=Lf(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?hc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},kS=["ctrl","shift","alt","meta"],xS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kS.some(n=>t[`${n}Key`]&&!e.includes(n))},Wr=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=xS[e[o]];if(l&&l(s,e))return}return t(s,...i)})},DS=dt({patchProp:PS},dS);let Ff;function NS(){return Ff||(Ff=MP(DS))}const OS=(...t)=>{const e=NS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=MS(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,VS(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function VS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function MS(t){return Je(t)?document.querySelector(t):t}const rt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};let Bf=()=>{};const LS={data(){return{posts:[],loggedUser:{id:null,email:null,displayName:null,bio:null,career:null,photoURL:null},showCommentForm:null,newComment:null}},mounted(){Bf=Tn(t=>this.loggedUser=t)},created(){this.unsubscribe=Hb(t=>{this.posts=t})},beforeDestroy(){this.unsubscribe&&this.unsubscribe()},unmounted(){Bf()},methods:{formatDate(t){return!t||!t.seconds?"Fecha desconocida":new Date(t.seconds*1e3).toLocaleDateString()},async likePost(t){try{const e=this.loggedUser.displayName;await Qb(t,e);const n=this.posts.find(r=>r.id===t);n&&(n.likes=(n.likes||0)+1)}catch(e){console.error("Error liking post:",e)}},async submitPost(t){try{if(!Ss().currentUser){alert("Debes estar logueado para comentar.");return}const r={comment:this.newComment,createdBy:this.loggedUser.displayName,createdAt:new Date};await Yb(t,r),console.log("Nuevo comentario creado:",r),this.newComment="",this.showCommentForm=null}catch(e){console.error("Error al crear el comentario:",e),alert("Hubo un problema al crear el comentario.")}}}},US={class:"max-w-7xl mx-auto mt-6 p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg"},FS={key:0,class:"space-y-6"},BS={class:"flex items-start mb-4 w-full"},$S=["src"],jS={class:"w-full"},qS={class:"flex gap-2 mb-3"},HS={class:"font-bold text-xl text-gray-200 bg-slate-600 rounded-2xl px-5 py-2"},WS={class:"text-gray-500 mt-1 px-2 py-2"},KS={class:"text-gray-500 mt-1 px-2 py-2"},zS={key:0,class:"flex flex-wrap gap-2"},GS=["src"],QS={class:"mt-2"},YS={class:"p-5 bg-slate-900 rounded-lg"},JS={class:"text-2xl font-bold text-white mb-2"},XS={class:"text-white mb-4"},ZS={class:"flex items-center justify-end mt-2 text-sm text-gray-600"},eC=["onClick"],tC={class:"mr-4"},nC={class:"items-center mt-4"},rC={class:"mt-2 w-full"},sC=["onSubmit"],iC={key:1,class:"mt-4 p-5"},oC={class:"list-disc list-inside"},aC={class:"font-semibold"},lC={class:"text-gray-500"},cC={key:1,class:"text-gray-200"};function uC(t,e,n,r,s,i){return fe(),me("div",US,[e[4]||(e[4]=R("h1",{class:"text-3xl font-bold text-white mb-8"},"Todas las Publicaciones",-1)),s.posts.length?(fe(),me("div",FS,[(fe(!0),me(nt,null,_i(s.posts,o=>(fe(),me("div",{key:o.id,class:"p-6 bg-white rounded-lg shadow-md w-full"},[R("div",BS,[R("img",{src:o.userPhoto||"https://via.placeholder.com/150",alt:"User Photo",class:"w-24 h-24 rounded-full mr-4 border-2 border-purple-500 object-cover"},null,8,$S),R("div",jS,[R("div",qS,[R("p",HS,Pe(o.userName),1),R("p",WS,Pe(o.userEmail),1),R("p",KS,Pe(i.formatDate(o.createdAt)),1)]),o.images&&o.images.length?(fe(),me("div",zS,[(fe(!0),me(nt,null,_i(o.images,(l,c)=>(fe(),me("img",{key:c,src:l,alt:"Post Image",class:"w-full h-32 object-cover rounded-md border-2 border-gray-300"},null,8,GS))),128))])):la("",!0),R("div",QS,[R("div",YS,[R("h2",JS,Pe(o.title),1),R("p",XS,Pe(o.content),1)])]),R("div",ZS,[R("button",{onClick:l=>i.likePost(o.id),class:"mr-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"}," Like ",8,eC),R("span",tC,Pe(o.likes||0)+" Likes",1)]),R("div",nC,[R("div",rC,[R("form",{onSubmit:Wr(l=>i.submitPost(o.id),["prevent"]),class:"w-full bg-gray-200 py-10 px-5 rounded-xl shadow-2xl"},[e[1]||(e[1]=R("label",{for:"newComment",class:"font-bold text-2xl"},"Comentario",-1)),Dt(R("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.newComment=l),type:"text",placeholder:"Escribre un comentario...",class:"border rounded px-2 py-1 w-full mt-3",id:"newComment"},null,512),[[Nt,s.newComment]]),e[2]||(e[2]=R("button",{type:"submit",class:"mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"}," Submit ",-1))],40,sC)])]),o.comments&&o.comments.length?(fe(),me("div",iC,[e[3]||(e[3]=R("h3",{class:"text-lg font-semibold text-gray-800 mb-3"},"Comentarios:",-1)),R("ul",oC,[(fe(!0),me(nt,null,_i(o.comments,(l,c)=>(fe(),me("li",{key:c,class:"text-white mb-2 p-2 rounded-md list-none bg-slate-800"},[R("span",aC,Pe(l.createdBy)+":",1),Xe(" "+Pe(l.comment)+" - ",1),R("span",lC,Pe(i.formatDate(l.createdAt)),1)]))),128))])])):la("",!0)])])]))),128))])):(fe(),me("div",cC,"No hay publicaciones para mostrar."))])}const hC=rt(LS,[["render",uC]]),dC={name:"BaseHeading1"},fC={class:"text-3xl mb-4 font-bold tracking-tight"};function pC(t,e,n,r,s,i){return fe(),me("h1",fC,[EP(t.$slots,"default")])}const Kr=rt(dC,[["render",pC]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function cy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cy(t.default)}const ke=Object.assign;function Ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const wi=()=>{},rn=Array.isArray,uy=/#/g,gC=/&/g,_C=/\//g,yC=/=/g,vC=/\?/g,hy=/\+/g,wC=/%5B/g,EC=/%5D/g,dy=/%5E/g,TC=/%60/g,fy=/%7B/g,IC=/%7C/g,py=/%7D/g,bC=/%20/g;function Wu(t){return encodeURI(""+t).replace(IC,"|").replace(wC,"[").replace(EC,"]")}function AC(t){return Wu(t).replace(fy,"{").replace(py,"}").replace(dy,"^")}function Ic(t){return Wu(t).replace(hy,"%2B").replace(bC,"+").replace(uy,"%23").replace(gC,"%26").replace(TC,"`").replace(fy,"{").replace(py,"}").replace(dy,"^")}function RC(t){return Ic(t).replace(yC,"%3D")}function PC(t){return Wu(t).replace(uy,"%23").replace(vC,"%3F")}function SC(t){return t==null?"":PC(t).replace(_C,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const CC=/\/$/,kC=t=>t.replace(CC,"");function Ll(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=OC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fi(o)}}function xC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ks(e.matched[r],n.matched[s])&&my(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function my(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NC(t[n],e[n]))return!1;return!0}function NC(t,e){return rn(t)?jf(t,e):rn(e)?jf(e,t):t===e}function jf(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function OC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function VC(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kC(t)}const MC=/^[^#]+#/;function LC(t,e){return t.replace(MC,"#")+e}function UC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qa=()=>({left:window.scrollX,top:window.scrollY});function FC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=UC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qf(t,e){return(history.state?history.state.position-e:-1)+t}const bc=new Map;function BC(t,e){bc.set(t,e)}function $C(t){const e=bc.get(t);return bc.delete(t),e}let jC=()=>location.protocol+"//"+location.host;function gy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),$f(c,"")}return $f(n,t)+r+s}function qC(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=gy(t,location),C=n.value,N=e.value;let D=0;if(m){if(n.value=v,e.value=m,o&&o===C){o=null;return}D=N?m.position-N.position:0}else r(v);s.forEach(q=>{q(n.value,C,{delta:D,type:Bi.pop,direction:D?D>0?Ei.forward:Ei.back:Ei.unknown})})};function c(){o=n.value}function h(m){s.push(m);const v=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Qa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Hf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qa():null}}function HC(t){const{history:e,location:n}=window,r={value:gy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:jC()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function o(c,h){const d=ke({},e.state,Hf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=ke({},s.value,e.state,{forward:c,scroll:Qa()});i(d.current,d,!0);const p=ke({},Hf(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function WC(t){t=VC(t);const e=HC(t),n=qC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:LC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function KC(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),WC(t)}function zC(t){return typeof t=="string"||t&&typeof t=="object"}function _y(t){return typeof t=="string"||typeof t=="symbol"}const yy=Symbol("");var Wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wf||(Wf={}));function xs(t,e){return ke(new Error,{type:t,[yy]:!0},e)}function Rn(t,e){return t instanceof Error&&yy in t&&(e==null||!!(t.type&e))}const Kf="[^/]+?",GC={sensitive:!1,strict:!1,start:!0,end:!0},QC=/[.+*?^${}()[\]/\\]/g;function YC(t,e){const n=ke({},GC,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(QC,"\\$&"),v+=40;else if(m.type===1){const{value:C,repeatable:N,optional:D,regexp:q}=m;i.push({name:C,repeatable:N,optional:D});const B=q||Kf;if(B!==Kf){v+=10;try{new RegExp(`(${B})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+$.message)}}let H=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=D&&h.length<2?`(?:/${H})`:"/"+H),D&&(H+="?"),s+=H,v+=20,D&&(v+=-8),N&&(v+=-20),B===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",C=i[m-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:C,repeatable:N,optional:D}=v,q=C in h?h[C]:"";if(rn(q)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=rn(q)?q.join("/"):q;if(!B)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function JC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=JC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zf(r))return 1;if(zf(s))return-1}return s.length-r.length}function zf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XC={type:0,value:""},ZC=/[a-zA-Z0-9_]/;function e1(t){if(!t)return[[]];if(t==="/")return[[XC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:ZC.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function t1(t,e,n){const r=YC(e1(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function n1(t,e){const n=[],r=new Map;e=Jf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const C=!v,N=Qf(p);N.aliasOf=v&&v.record;const D=Jf(e,p),q=[N];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of $)q.push(Qf(ke({},N,{components:v?v.record.components:N.components,path:le,aliasOf:v?v.record:N})))}let B,H;for(const $ of q){const{path:le}=$;if(m&&le[0]!=="/"){const de=m.record.path,I=de[de.length-1]==="/"?"":"/";$.path=m.record.path+(le&&I+le)}if(B=t1($,m,D),v?v.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),C&&p.name&&!Yf(B)&&o(p.name)),wy(B)&&c(B),N.children){const de=N.children;for(let I=0;I<de.length;I++)i(de[I],B,v&&v.children[I])}v=v||B}return H?()=>{o(H)}:wi}function o(p){if(_y(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=i1(p,n);n.splice(m,0,p),p.record.name&&!Yf(p)&&r.set(p.record.name,p)}function h(p,m){let v,C={},N,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw xs(1,{location:p});D=v.record.name,C=ke(Gf(m.params,v.keys.filter(H=>!H.optional).concat(v.parent?v.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Gf(p.params,v.keys.map(H=>H.name))),N=v.stringify(C)}else if(p.path!=null)N=p.path,v=n.find(H=>H.re.test(N)),v&&(C=v.parse(N),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!v)throw xs(1,{location:p,currentLocation:m});D=v.record.name,C=ke({},m.params,p.params),N=v.stringify(C)}const q=[];let B=v;for(;B;)q.unshift(B.record),B=B.parent;return{name:D,path:N,params:C,matched:q,meta:s1(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Gf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:r1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function r1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function s1(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Jf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function i1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vy(t,e[i])<0?r=i:n=i+1}const s=o1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function o1(t){let e=t;for(;e=e.parent;)if(wy(e)&&vy(t,e)===0)return e}function wy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function a1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hy," "),o=i.indexOf("="),l=Fi(o<0?i:i.slice(0,o)),c=o<0?null:Fi(i.slice(o+1));if(l in e){let h=e[l];rn(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Xf(t){let e="";for(let n in t){const r=t[n];if(n=RC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(i=>i&&Ic(i)):[r&&Ic(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function l1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const c1=Symbol(""),Zf=Symbol(""),Ya=Symbol(""),Ey=Symbol(""),Ac=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(xs(4,{from:n,to:e})):m instanceof Error?c(m):zC(m)?c(xs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Ul(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(cy(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Yn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=mC(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&Yn(v,n,r,o,l,s)()}))}}return i}function ep(t){const e=_n(Ya),n=_n(Ey),r=Zt(()=>{const c=gs(t.to);return e.resolve(c)}),s=Zt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ks.bind(null,d));if(m>-1)return m;const v=tp(c[h-2]);return h>1&&tp(d)===v&&p[p.length-1].path!==v?p.findIndex(ks.bind(null,c[h-2])):m}),i=Zt(()=>s.value>-1&&d1(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&my(n.params,r.value.params));function l(c={}){return h1(c)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(wi):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const u1=N_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ep,setup(t,{slots:e}){const n=ja(ep(t)),{options:r}=_n(Ya),s=Zt(()=>({[np(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[np(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ay("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ty=u1;function h1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function d1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const np=(t,e,n)=>t??e??n,f1=N_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_n(Ac),s=Zt(()=>t.route||r.value),i=_n(Zf,0),o=Zt(()=>{let h=gs(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Zt(()=>s.value.matched[o.value]);$o(Zf,Zt(()=>o.value+1)),$o(c1,l),$o(Ac,s);const c=b_();return jo(()=>[c.value,l.value,t.name],([h,d,p],[m,v,C])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!ks(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return rp(n.default,{Component:m,route:h});const v=p.props[d],C=v?v===!0?h.params:typeof v=="function"?v(h):v:null,D=ay(m,ke({},C,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return rp(n.default,{Component:D,route:h})||D}}});function rp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const p1=f1;function m1(t){const e=n1(t.routes,t),n=t.parseQuery||a1,r=t.stringifyQuery||Xf,s=t.history,i=ti(),o=ti(),l=ti(),c=QR(zn);let h=zn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ml.bind(null,V=>""+V),p=Ml.bind(null,SC),m=Ml.bind(null,Fi);function v(V,J){let Q,Z;return _y(V)?(Q=e.getRecordMatcher(V),Z=J):Z=V,e.addRoute(Z,Q)}function C(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function N(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function q(V,J){if(J=ke({},J||c.value),typeof V=="string"){const w=Ll(n,V,J.path),k=e.resolve({path:w.path},J),L=s.createHref(w.fullPath);return ke(w,k,{params:m(k.params),hash:Fi(w.hash),redirectedFrom:void 0,href:L})}let Q;if(V.path!=null)Q=ke({},V,{path:Ll(n,V.path,J.path).path});else{const w=ke({},V.params);for(const k in w)w[k]==null&&delete w[k];Q=ke({},V,{params:p(w)}),J.params=p(J.params)}const Z=e.resolve(Q,J),Ee=V.hash||"";Z.params=d(m(Z.params));const xe=xC(r,ke({},V,{hash:AC(Ee),path:Z.path})),_=s.createHref(xe);return ke({fullPath:xe,hash:Ee,query:r===Xf?l1(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:_})}function B(V){return typeof V=="string"?Ll(n,V,c.value.path):ke({},V)}function H(V,J){if(h!==V)return xs(8,{from:J,to:V})}function $(V){return I(V)}function le(V){return $(ke(B(V),{replace:!0}))}function de(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Z=typeof Q=="function"?Q(V):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),ke({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function I(V,J){const Q=h=q(V),Z=c.value,Ee=V.state,xe=V.force,_=V.replace===!0,w=de(Q);if(w)return I(ke(B(w),{state:typeof w=="object"?ke({},Ee,w.state):Ee,force:xe,replace:_}),J||Q);const k=Q;k.redirectedFrom=J;let L;return!xe&&DC(r,Z,Q)&&(L=xs(16,{to:k,from:Z}),Wt(Z,Z,!0,!1)),(L?Promise.resolve(L):b(k,Z)).catch(O=>Rn(O)?Rn(O,2)?O:Jt(O):_e(O,k,Z)).then(O=>{if(O){if(Rn(O,2))return I(ke({replace:_},B(O.to),{state:typeof O.to=="object"?ke({},Ee,O.to.state):Ee,force:xe}),J||k)}else O=P(k,Z,!0,_,Ee);return A(k,Z,O),O})}function y(V,J){const Q=H(V,J);return Q?Promise.reject(Q):Promise.resolve()}function T(V){const J=Bn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function b(V,J){let Q;const[Z,Ee,xe]=g1(V,J);Q=Ul(Z.reverse(),"beforeRouteLeave",V,J);for(const w of Z)w.leaveGuards.forEach(k=>{Q.push(Yn(k,V,J))});const _=y.bind(null,V,J);return Q.push(_),Ot(Q).then(()=>{Q=[];for(const w of i.list())Q.push(Yn(w,V,J));return Q.push(_),Ot(Q)}).then(()=>{Q=Ul(Ee,"beforeRouteUpdate",V,J);for(const w of Ee)w.updateGuards.forEach(k=>{Q.push(Yn(k,V,J))});return Q.push(_),Ot(Q)}).then(()=>{Q=[];for(const w of xe)if(w.beforeEnter)if(rn(w.beforeEnter))for(const k of w.beforeEnter)Q.push(Yn(k,V,J));else Q.push(Yn(w.beforeEnter,V,J));return Q.push(_),Ot(Q)}).then(()=>(V.matched.forEach(w=>w.enterCallbacks={}),Q=Ul(xe,"beforeRouteEnter",V,J,T),Q.push(_),Ot(Q))).then(()=>{Q=[];for(const w of o.list())Q.push(Yn(w,V,J));return Q.push(_),Ot(Q)}).catch(w=>Rn(w,8)?w:Promise.reject(w))}function A(V,J,Q){l.list().forEach(Z=>T(()=>Z(V,J,Q)))}function P(V,J,Q,Z,Ee){const xe=H(V,J);if(xe)return xe;const _=J===zn,w=os?history.state:{};Q&&(Z||_?s.replace(V.fullPath,ke({scroll:_&&w&&w.scroll},Ee)):s.push(V.fullPath,Ee)),c.value=V,Wt(V,J,Q,_),Jt()}let E;function Rt(){E||(E=s.listen((V,J,Q)=>{if(!sn.listening)return;const Z=q(V),Ee=de(Z);if(Ee){I(ke(Ee,{replace:!0}),Z).catch(wi);return}h=Z;const xe=c.value;os&&BC(qf(xe.fullPath,Q.delta),Qa()),b(Z,xe).catch(_=>Rn(_,12)?_:Rn(_,2)?(I(_.to,Z).then(w=>{Rn(w,20)&&!Q.delta&&Q.type===Bi.pop&&s.go(-1,!1)}).catch(wi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),_e(_,Z,xe))).then(_=>{_=_||P(Z,xe,!1),_&&(Q.delta&&!Rn(_,8)?s.go(-Q.delta,!1):Q.type===Bi.pop&&Rn(_,20)&&s.go(-1,!1)),A(Z,xe,_)}).catch(wi)}))}let Ht=ti(),Ge=ti(),we;function _e(V,J,Q){Jt(V);const Z=Ge.list();return Z.length?Z.forEach(Ee=>Ee(V,J,Q)):console.error(V),Promise.reject(V)}function Mt(){return we&&c.value!==zn?Promise.resolve():new Promise((V,J)=>{Ht.add([V,J])})}function Jt(V){return we||(we=!V,Rt(),Ht.list().forEach(([J,Q])=>V?Q(V):J()),Ht.reset()),V}function Wt(V,J,Q,Z){const{scrollBehavior:Ee}=t;if(!os||!Ee)return Promise.resolve();const xe=!Q&&$C(qf(V.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return S_().then(()=>Ee(V,J,xe)).then(_=>_&&FC(_)).catch(_=>_e(_,V,J))}const Fe=V=>s.go(V);let Be;const Bn=new Set,sn={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:q,options:t,push:$,replace:le,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ge.add,isReady:Mt,install(V){const J=this;V.component("RouterLink",Ty),V.component("RouterView",p1),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(c)}),os&&!Be&&c.value===zn&&(Be=!0,$(s.location).catch(Ee=>{}));const Q={};for(const Ee in zn)Object.defineProperty(Q,Ee,{get:()=>c.value[Ee],enumerable:!0});V.provide(Ya,J),V.provide(Ey,T_(Q)),V.provide(Ac,c);const Z=V.unmount;Bn.add(V),V.unmount=function(){Bn.delete(V),Bn.size<1&&(h=zn,E&&E(),E=null,c.value=zn,Be=!1,we=!1),Z()}}};function Ot(V){return V.reduce((J,Q)=>J.then(()=>T(Q)),Promise.resolve())}return sn}function g1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>ks(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>ks(h,c))||s.push(c))}return[n,r,s]}function _1(){return _n(Ya)}let sp=()=>{};const y1={data(){return{loggedUser:{id:"",email:"",displayName:"",bio:"",career:"",photoURL:""}}},mounted(){sp=Tn(t=>this.loggedUser=t)},unmounted(){sp()},components:{RouterLink:Ty}},v1={class:"w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},w1={class:"flex justify-center p-6 my-10"},E1={class:"flex flex-col items-center"},T1=["src"],I1={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white"},b1={class:"text-sm text-gray-500 dark:text-gray-400"},A1={class:"text-sm text-gray-500 dark:text-gray-400"},R1={class:"flex mt-4 md:mt-6"};function P1(t,e,n,r,s,i){const o=ze("RouterLink");return fe(),me("div",v1,[R("div",w1,[R("div",E1,[R("img",{class:"w-40 h-40 mb-3 rounded-full shadow-lg object-cover",src:s.loggedUser.photoURL||"https://i.pravatar.cc/300",alt:"Profile image"},null,8,T1),R("h5",I1,Pe(s.loggedUser.displayName||"Usuario no registrado"),1),R("span",b1,Pe(s.loggedUser.email||"No tiene email"),1),R("span",A1,Pe(s.loggedUser.career||"No tiene carrera"),1),R("div",R1,[ge(o,{to:"user-profile",class:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none transition duration-300"},{default:lt(()=>e[0]||(e[0]=[Xe("Mis Posteos")])),_:1}),ge(o,{to:"chat",class:"py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},{default:lt(()=>e[1]||(e[1]=[Xe("Chat")])),_:1})])])])])}const S1=rt(y1,[["render",P1]]),C1={components:{BaseHeading1:Kr,ProfileCard:S1},data(){return{title:"",content:"",images:[],userProfileImage:""}},async mounted(){const e=Ss().currentUser;e&&(this.userProfileImage=e.photoURL||"public/img/default-profile.jpg")},methods:{async submitPost(){try{const e=Ss().currentUser;if(!e){alert("Debes estar logueado para crear una publicación.");return}const n=await Kb({title:this.title,content:this.content,images:this.images,createdBy:e.uid});console.log("Nueva publicación creada con ID:",n),this.title="",this.content="",this.images=[]}catch(t){console.error("Error al crear la publicación:",t),alert("Hubo un problema al crear la publicación.")}},handleFileUpload(t){const e=t.target.files;if(e.length>1){alert("Solo puedes subir hasta 1 imagen.");return}const n=new FileReader;n.onload=r=>{this.images=[r.target.result]},n.readAsDataURL(e[0])}}},k1={class:"w-full max-w-7xl mx-auto flex"},x1={class:"w-1/3"},D1={class:"w-2/3 p-8 bg-white shadow-2xl rounded-lg"};function N1(t,e,n,r,s,i){const o=ze("ProfileCard"),l=ze("BaseHeading1");return fe(),me("div",k1,[R("div",x1,[ge(o)]),R("div",D1,[ge(l,null,{default:lt(()=>e[4]||(e[4]=[Xe("Crear Nueva Publicación")])),_:1}),R("form",{onSubmit:e[3]||(e[3]=Wr((...c)=>i.submitPost&&i.submitPost(...c),["prevent"])),class:"space-y-6"},[R("div",null,[e[5]||(e[5]=R("label",{for:"title",class:"block text-lg font-semibold"},"Título",-1)),Dt(R("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=c=>s.title=c),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[Nt,s.title]])]),R("div",null,[e[6]||(e[6]=R("label",{for:"content",class:"block text-lg font-semibold"},"Contenido",-1)),Dt(R("textarea",{id:"content","onUpdate:modelValue":e[1]||(e[1]=c=>s.content=c),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[Nt,s.content]])]),R("div",null,[e[7]||(e[7]=R("label",{for:"images",class:"block text-lg font-semibold"},"Imágenes",-1)),R("input",{type:"file",id:"images",onChange:e[2]||(e[2]=(...c)=>i.handleFileUpload&&i.handleFileUpload(...c)),class:"mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100",accept:"image/*"},null,32)]),e[8]||(e[8]=R("button",{type:"submit",class:"w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"}," Publicar ",-1))],32)])])}const O1=rt(C1,[["render",N1]]);let ip=()=>{};const V1={name:"Home",components:{AllPosts:hC,CreatePostForm:O1},mounted(){ip=Tn(t=>this.loggedUser=t)},unmounted(){ip()}},M1={class:"max-w-7xl mx-auto my-16 h-1/3"};function L1(t,e,n,r,s,i){const o=ze("CreatePostForm"),l=ze("AllPosts");return fe(),me("div",M1,[ge(o),ge(l)])}const Iy=rt(V1,[["render",L1]]),U1={setup(){const t=b_(null),e=Ss(),n=_1();return L_(()=>{e.onAuthStateChanged(s=>{t.value=s})}),{user:t,logout:async()=>{try{await e.signOut(),n.push("/")}catch(s){console.error("Error al cerrar sesión:",s)}}}}},F1={class:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"},B1={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},$1={class:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"},j1={key:0},q1={class:"text-gray-900 dark:text-white"},H1={key:1},W1={class:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-sticky"},K1={class:"flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},z1={key:0};function G1(t,e,n,r,s,i){const o=ze("router-link");return fe(),me("nav",F1,[R("div",B1,[ge(o,{to:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},{default:lt(()=>e[1]||(e[1]=[R("img",{src:"https://flowbite.com/docs/images/logo.svg",class:"h-8",alt:"Flowbite Logo"},null,-1),R("span",{class:"self-center text-2xl font-extrabold whitespace-nowrap dark:text-white"},"RideHub",-1)])),_:1}),R("div",$1,[r.user?(fe(),me("div",j1,[R("span",q1,Pe(r.user.name),1),R("button",{onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l)),class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"}," Cerrar Sesión ")])):(fe(),me("div",H1,[ge(o,{to:"/login",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:lt(()=>e[2]||(e[2]=[Xe(" Iniciar Sesion ")])),_:1})])),e[3]||(e[3]=R("button",{"data-collapse-toggle":"navbar-sticky",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-sticky","aria-expanded":"false"},[R("span",{class:"sr-only"},"Open main menu"),R("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[R("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})])],-1))]),R("div",W1,[R("ul",K1,[R("li",null,[ge(o,{to:"/",class:"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500","aria-current":"page"},{default:lt(()=>e[4]||(e[4]=[Xe("Inicio")])),_:1})]),r.user?(fe(),me("li",z1,[ge(o,{to:"/chat",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},{default:lt(()=>e[5]||(e[5]=[Xe("Chat Público")])),_:1})])):la("",!0),R("li",null,[ge(o,{to:"/user-profile",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},{default:lt(()=>e[6]||(e[6]=[Xe("Mi Perfil")])),_:1})])])])])])}const Q1=rt(U1,[["render",G1]]),Y1={name:"AppFooter"},J1={class:"w-full flex justify-center items-center h-28 bg-slate-900 text-white"};function X1(t,e,n,r,s,i){return fe(),me("footer",J1,e[0]||(e[0]=[R("p",null,"Copyright © Da Vinci 2024",-1)]))}const Z1=rt(Y1,[["render",X1]]),ek={name:"App",components:{Home:Iy,AppNavbar:Q1,AppFooter:Z1}},tk={class:"bg-gradient-to-b from-purple-500 to-blue-900"},nk={class:"container p-5 mx-auto"};function rk(t,e,n,r,s,i){const o=ze("AppNavbar"),l=ze("router-view"),c=ze("AppFooter");return fe(),me("div",tk,[ge(o),R("main",nk,[ge(l)]),ge(c)])}const sk=rt(ek,[["render",rk]]);async function ik({username:t,text:e}){const n=Qi(qt,"public-chat");await Qm(n,{username:t,text:e,created_at:Jm()})}function ok(t){const e=Qi(qt,"public-chat"),n=ou(e,cu("created_at"));uu(n,r=>{const s=r.docs.map(i=>({id:i.id,username:i.data().username,text:i.data().text}));t(s)})}const ak={name:"MsgForm",data(){return{newMessage:{username:"",text:""}}},mounted(){Tn(t=>{t&&(this.newMessage.username=t.displayName)})},methods:{async handleSubmit(){if(this.newMessage.text.trim()!=="")try{await ik(this.newMessage),this.newMessage.text=""}catch(t){console.error("Error al enviar el mensaje:",t)}}}},lk={class:"grid grid-cols-1 items-center gap-3"},ck={class:"font-bold text-gray-700"};function uk(t,e,n,r,s,i){return fe(),me("form",{onSubmit:e[1]||(e[1]=Wr((...o)=>i.handleSubmit&&i.handleSubmit(...o),["prevent"])),class:"gri p-4"},[R("div",lk,[R("span",ck,Pe(s.newMessage.username),1),Dt(R("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.newMessage.text=o),type:"text",placeholder:"Escribe tu mensaje...",class:"flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[Nt,s.newMessage.text]]),e[2]||(e[2]=R("button",{type:"submit",class:"p-2 bg-blue-500 text-white rounded hover:bg-blue-600"}," Enviar ",-1))])],32)}const hk=rt(ak,[["render",uk]]);let op=()=>{};const dk={name:"Chat",components:{BaseHeading1:Kr,MsgForm:hk},data(){return{messages:[],loggedUser:{displayName:null}}},methods:{scrollToBottom(){this.$nextTick(()=>{const t=this.$refs.chatContainer;t&&(t.scrollTop=t.scrollHeight)})}},async mounted(){op=Tn(t=>this.loggedUser.displayName=t),ok(t=>{console.log(t),this.messages=t,this.scrollToBottom()})},unmounted(){op()}},fk={class:"my-16"},pk={class:"max-w-7xl mx-auto h-screen"},mk={class:"flex gap-5 h-full"},gk={class:"md:w-1/4 mx-auto"},_k={class:"w-full bg-gray-100 p-5 rounded-xl shadow-2xl"},yk={class:"md:w-3/4 mx-auto h-3/4"},vk={class:"h-full bg-white shadow-lg border border-gray-200 rounded-lg flex flex-col"},wk={class:"flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50 h-full",ref:"chatContainer"};function Ek(t,e,n,r,s,i){const o=ze("BaseHeading1"),l=ze("MsgForm");return fe(),me("div",fk,[R("div",pk,[ge(o,{class:"text-white"},{default:lt(()=>e[0]||(e[0]=[Xe("Chat Público")])),_:1}),R("div",mk,[R("div",gk,[R("section",_k,[e[1]||(e[1]=R("h2",{class:"mb-4 text-xl"},"Enviar un mensaje",-1)),ge(l)])]),R("div",yk,[R("section",vk,[e[3]||(e[3]=R("header",{class:"bg-blue-700 text-white p-4 rounded-t-lg"},[R("h2",{class:"text-lg font-bold"},"Chat")],-1)),R("div",wk,[R("ul",null,[(fe(!0),me(nt,null,_i(s.messages,c=>{var h,d;return fe(),me("li",{key:c.id,class:Fa([{"bg-blue-200 self-end text-right":c.username===((h=s.loggedUser)==null?void 0:h.email),"bg-gray-200 self-start text-left":c.username!==((d=s.loggedUser)==null?void 0:d.email)},"p-3 rounded-lg mb-2 max-w-xs"])},[R("div",null,[R("b",null,Pe(c.username),1),e[2]||(e[2]=Xe(" escribió: "))]),R("div",null,Pe(c.text),1)],2)}),128))])],512)])])])])])}const Tk=rt(dk,[["render",Ek]]),Ik={name:"LoginForm",components:{BaseHeading1:Kr},data(){return{email:"",password:""}},methods:{async handleSubmit(){if(!this.email||!this.password){alert("Por favor, completa todos los campos.");return}try{await Jg(this.email,this.password),this.$router.push("/")}catch(t){console.error("Error de autenticación:",t.message),alert("Error de autenticación: "+t.message)}}}},bk={class:"my-16"},Ak={class:"mb-5"},Rk={class:"mb-5"},Pk={id:"helper-text-explanation",class:"mt-2 text-sm text-gray-500 dark:text-gray-400"};function Sk(t,e,n,r,s,i){const o=ze("BaseHeading1"),l=ze("router-link");return fe(),me("div",bk,[R("form",{action:"#",class:"max-w-2xl mx-auto bg-gray-100 p-16 rounded-xl shadow-xl my-44",onSubmit:e[2]||(e[2]=Wr((...c)=>i.handleSubmit&&i.handleSubmit(...c),["prevent"]))},[ge(o,{class:"text-gray-950"},{default:lt(()=>e[3]||(e[3]=[Xe("Ingresar a tu Cuenta")])),_:1}),R("div",Ak,[e[4]||(e[4]=R("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Correo Electrónico ",-1)),Dt(R("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=c=>s.email=c),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"email@example.com",required:""},null,512),[[Nt,s.email]])]),R("div",Rk,[e[5]||(e[5]=R("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Contraseña ",-1)),Dt(R("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=c=>s.password=c),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"•••••••••",required:""},null,512),[[Nt,s.password]])]),e[8]||(e[8]=R("div",{class:"flex items-center mb-5"},[R("input",{id:"remember",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),R("label",{for:"remember",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"}," Remember me ")],-1)),e[9]||(e[9]=R("button",{type:"submit",class:"w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"}," Submit ",-1)),R("p",Pk,[e[7]||(e[7]=Xe(" ¿No tienes una cuenta? ")),ge(l,{to:"/register",class:"font-medium text-blue-600 hover:underline dark:text-blue-500"},{default:lt(()=>e[6]||(e[6]=[Xe(" ¡Regístrate ahora! ")])),_:1})])],32)])}const Ck=rt(Ik,[["render",Sk]]),kk={name:"login",components:{LoginForm:Ck},data(){return{formData:{email:"",password:""},loading:!1}}};function xk(t,e,n,r,s,i){const o=ze("LoginForm");return fe(),Li(o)}const Dk=rt(kk,[["render",xk]]),Nk={name:"RegisterForm",components:{BaseHeading1:Kr},data(){return{name:"",email:"",password:"",confirmPassword:"",profileImage:null}},methods:{handleFileUpload(t){const e=t.target.files[0];this.profileImage=e},async handleSubmit(){if(!this.name||!this.email||!this.password||!this.confirmPassword||!this.profileImage){alert("Por favor, completa todos los campos.");return}if(this.password!==this.confirmPassword){alert("Las contraseñas no coinciden.");return}try{await fR(this.email,this.password,this.name,this.profileImage),Jg(this.email,this.password),this.$router.push("/")}catch(t){console.error("Error al registrar:",t),alert("Hubo un problema al registrar.")}}}},Ok={class:"my-16"},Vk={class:"mb-4"},Mk={class:"mb-4"},Lk={class:"mb-4"},Uk={class:"mb-4"},Fk={class:"mb-4"};function Bk(t,e,n,r,s,i){const o=ze("BaseHeading1");return fe(),me("div",Ok,[R("form",{action:"#",class:"max-w-2xl mx-auto bg-gray-100 p-16 rounded-xl shadow-xl my-44",onSubmit:e[5]||(e[5]=Wr((...l)=>i.handleSubmit&&i.handleSubmit(...l),["prevent"]))},[ge(o,{class:"text-gray-950"},{default:lt(()=>e[6]||(e[6]=[Xe("Regístrate")])),_:1}),R("div",Vk,[e[7]||(e[7]=R("label",{for:"profileImage",class:"block text-sm font-medium text-gray-700"},"Foto de Perfil:",-1)),R("input",{type:"file",id:"profileImage",onChange:e[0]||(e[0]=(...l)=>i.handleFileUpload&&i.handleFileUpload(...l)),accept:"image/*",class:"mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100",required:""},null,32)]),R("div",Mk,[e[8]||(e[8]=R("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Nombre:",-1)),Dt(R("input",{type:"text",id:"name","onUpdate:modelValue":e[1]||(e[1]=l=>s.name=l),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[Nt,s.name]])]),R("div",Lk,[e[9]||(e[9]=R("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email:",-1)),Dt(R("input",{type:"email",id:"email","onUpdate:modelValue":e[2]||(e[2]=l=>s.email=l),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[Nt,s.email]])]),R("div",Uk,[e[10]||(e[10]=R("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Contraseña:",-1)),Dt(R("input",{type:"password",id:"password","onUpdate:modelValue":e[3]||(e[3]=l=>s.password=l),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[Nt,s.password]])]),R("div",Fk,[e[11]||(e[11]=R("label",{for:"confirmPassword",class:"block text-sm font-medium text-gray-700"},"Confirmar Contraseña:",-1)),Dt(R("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":e[4]||(e[4]=l=>s.confirmPassword=l),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[Nt,s.confirmPassword]])]),e[12]||(e[12]=R("button",{type:"submit",class:"w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"}," Registrarse ",-1))],32)])}const $k=rt(Nk,[["render",Bk]]),jk={name:"Register",components:{BaseHeading1:Kr,RegisterForm:$k}};function qk(t,e,n,r,s,i){const o=ze("RegisterForm");return fe(),Li(o)}const Hk=rt(jk,[["render",qk]]);let ap=()=>{};const Wk={name:"MyProfile",components:{BaseHeading1:Kr},data(){return{loggedUser:{id:null,email:null,displayName:null,bio:null,career:null}}},mounted(){ap=Tn(t=>this.loggedUser=t)},unmounted(){ap()}},Kk={class:"flex items-end gap-4"},zk={class:"mb-4"},Gk={class:"mb-3"},Qk={class:"mb-3"},Yk={class:"mb-3"};function Jk(t,e,n,r,s,i){const o=ze("BaseHeading1"),l=ze("router-link");return fe(),me(nt,null,[R("div",Kk,[ge(o,null,{default:lt(()=>e[0]||(e[0]=[Xe("Mi Perfil")])),_:1}),ge(l,{to:"/mi-perfil/editar",class:"mb-4 text-blue-700 underline"},{default:lt(()=>e[1]||(e[1]=[Xe("Editar")])),_:1})]),R("div",zk,Pe(s.loggedUser.bio||"Acá va la biografía del usuario..."),1),R("dl",null,[e[2]||(e[2]=R("dt",{class:"font-bold"},"Email",-1)),R("dd",Gk,Pe(s.loggedUser.email),1),e[3]||(e[3]=R("dt",{class:"font-bold"},"Nombre de Usuario",-1)),R("dd",Qk,Pe(s.loggedUser.displayName||"No especificado..."),1),e[4]||(e[4]=R("dt",{class:"font-bold"},"Carrera",-1)),R("dd",Yk,Pe(s.loggedUser.career||"No especificada..."),1)])],64)}const Xk=rt(Wk,[["render",Jk]]),Zk={data(){return{userPosts:[],loggedUser:null,showEditPopup:!1,editPostData:{id:null,title:"",content:""}}},mounted(){this.unsubscribeFromAuth=Tn(t=>{this.loggedUser=t,this.loggedUser&&this.loggedUser.id&&(this.unsubscribe=Wb(this.loggedUser.id,e=>{this.userPosts=e}))})},unmounted(){this.unsubscribeFromAuth&&this.unsubscribeFromAuth(),this.unsubscribe&&this.unsubscribe()},methods:{formatDate(t){return!t||!t.seconds?"Fecha desconocida":new Date(t.seconds*1e3).toLocaleDateString()},openEditPopup(t){this.editPostData={...t},this.showEditPopup=!0},closeEditPopup(){this.showEditPopup=!1},async updatePost(){try{await zb(this.editPostData.id,{title:this.editPostData.title,content:this.editPostData.content}),this.userPosts=this.userPosts.map(t=>t.id===this.editPostData.id?{...t,...this.editPostData}:t),this.closeEditPopup()}catch(t){console.error("Error actualizando el post:",t)}},async deletePost(t){try{await Gb(t),this.userPosts=this.userPosts.filter(e=>e.id!==t)}catch(e){console.error("Error eliminando el post:",e)}}}},ex={class:"max-w-7xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg"},tx={key:0,class:"space-y-6"},nx={class:"mb-4"},rx={class:"text-2xl font-bold text-gray-800"},sx={class:"text-gray-700"},ix={class:"text-gray-500 text-sm"},ox={class:"text-gray-500 text-sm"},ax={class:"flex space-x-4"},lx=["onClick"],cx=["onClick"],ux={key:1,class:"text-gray-500"},hx={key:2,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},dx={class:"bg-white p-6 rounded-lg shadow-lg w-96"},fx={class:"mb-4"},px={class:"mb-4"},mx={class:"flex justify-end space-x-4"};function gx(t,e,n,r,s,i){return fe(),me("div",ex,[e[8]||(e[8]=R("h1",{class:"text-3xl font-bold text-white mb-8"},"Mis Publicaciones",-1)),s.userPosts.length?(fe(),me("div",tx,[(fe(!0),me(nt,null,_i(s.userPosts,o=>(fe(),me("div",{key:o.id,class:"p-6 bg-white rounded-lg shadow-md"},[R("div",nx,[R("h2",rx,Pe(o.title),1),R("p",sx,Pe(o.content),1),R("p",ix," Publicado el: "+Pe(i.formatDate(o.createdAt)),1),R("p",ox," Likes: "+Pe(o.likes||0)+" | Comentarios: "+Pe(o.comments?o.comments.length:0),1)]),R("div",ax,[R("button",{onClick:l=>i.openEditPopup(o),class:"bg-blue-500 text-white px-4 py-2 rounded"}," Editar ",8,lx),R("button",{onClick:l=>i.deletePost(o.id),class:"bg-red-500 text-white px-4 py-2 rounded"}," Eliminar ",8,cx)])]))),128))])):(fe(),me("div",ux,"No hay posteos para mostrar.")),s.showEditPopup?(fe(),me("div",hx,[R("div",dx,[e[7]||(e[7]=R("h2",{class:"text-2xl font-bold mb-4"},"Editar Publicación",-1)),R("form",{onSubmit:e[3]||(e[3]=Wr((...o)=>i.updatePost&&i.updatePost(...o),["prevent"]))},[R("div",fx,[e[4]||(e[4]=R("label",{class:"block text-gray-700"},"Título",-1)),Dt(R("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.editPostData.title=o),type:"text",class:"w-full px-4 py-2 border rounded-lg",required:""},null,512),[[Nt,s.editPostData.title]])]),R("div",px,[e[5]||(e[5]=R("label",{class:"block text-gray-700"},"Contenido",-1)),Dt(R("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.editPostData.content=o),class:"w-full px-4 py-2 border rounded-lg",required:""},null,512),[[Nt,s.editPostData.content]])]),R("div",mx,[R("button",{onClick:e[2]||(e[2]=(...o)=>i.closeEditPopup&&i.closeEditPopup(...o)),type:"button",class:"bg-gray-500 text-white px-4 py-2 rounded"}," Cancelar "),e[6]||(e[6]=R("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded"}," Guardar ",-1))])],32)])])):la("",!0)])}const _x=rt(Zk,[["render",gx]]);let lp=()=>{};const yx={name:"UserProfile",components:{BaseHeading1:Kr,UserPosts:_x},data(){return{loggedUser:{id:null,email:null,displayName:null,bio:null,career:null,photoURL:null}}},mounted(){lp=Tn(t=>this.loggedUser=t)},unmounted(){lp()}},vx={class:""},wx={class:"max-w-7xl mx-auto mt-16 mb-4 h-1/3 p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg"},Ex={class:"flex items-center justify-between mb-2"},Tx={class:"flex items-center space-x-6"},Ix=["src"],bx={key:1,class:"text-gray-200"},Ax={class:"flex gap-3 mb-2"},Rx={class:"text-2xl font-bold text-white"},Px={class:"text-xl text-gray-200 mt-1"},Sx={class:"text-gray-200 mb-2"},Cx={class:"text-gray-200 mb-2"};function kx(t,e,n,r,s,i){const o=ze("BaseHeading1"),l=ze("router-link"),c=ze("UserPosts");return fe(),me("div",vx,[R("div",wx,[R("div",Ex,[ge(o,{class:"text-white"},{default:lt(()=>e[0]||(e[0]=[Xe("Mi Perfil")])),_:1}),ge(l,{to:"/user-profile/edit",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:lt(()=>e[1]||(e[1]=[Xe("Editar")])),_:1})]),R("div",Tx,[e[6]||(e[6]=R("h3",{class:"sr-only"},"Foto de perfil",-1)),s.loggedUser.photoURL?(fe(),me("img",{key:0,src:s.loggedUser.photoURL,alt:"Foto de perfil",class:"w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"},null,8,Ix)):(fe(),me("span",bx,"Acá va la imagen de perfil del usuario...")),R("div",null,[R("div",Ax,[e[2]||(e[2]=R("h3",{class:"sr-only"},"Nombre de Usuario",-1)),R("p",Rx,Pe(s.loggedUser.displayName||"No especificado..."),1),e[3]||(e[3]=R("h3",{class:"sr-only"},"Correo Electrónico",-1)),R("p",Px,Pe(s.loggedUser.email),1)]),e[4]||(e[4]=R("h3",{class:"sr-only"},"biografía",-1)),R("p",Sx,Pe(s.loggedUser.bio||"El usuario no a definido su biografía"),1),e[5]||(e[5]=R("h3",{class:"sr-only"},"carrera",-1)),R("p",Cx,Pe(s.loggedUser.career||"Carrera no especificada..."),1)])])]),ge(c)])}const xx=rt(yx,[["render",kx]]);let cp=()=>{};const Dx={data(){return{editData:{id:"",displayName:"",bio:"",career:""},saving:!1}},methods:{async handleSubmit(){if(!this.saving){this.saving=!0;try{await Xb(this.editData.id,{displayName:this.editData.displayName,bio:this.editData.bio,career:this.editData.career})}catch(t){console.error("Error al editar el perfil:",t)}this.saving=!1,console.log("Perfil editado con éxito"),this.$router.push("/user-profile")}}},mounted(){cp=Tn(t=>this.editData=t)},unmounted(){cp()}},Nx={class:"max-w-2xl mx-auto my-16 p-6 bg-white shadow-2xl rounded-lg"},Ox={class:"mb-4"},Vx={class:"mb-4"},Mx={class:"mb-4"},Lx={class:"flex justify-end space-x-4"},Ux=["disabled"];function Fx(t,e,n,r,s,i){return fe(),me("div",Nx,[e[7]||(e[7]=R("h1",{class:"text-3xl font-bold text-gray-800 mb-8"},"Editar Perfil",-1)),R("form",{onSubmit:e[3]||(e[3]=Wr((...o)=>i.handleSubmit&&i.handleSubmit(...o),["prevent"]))},[R("div",Ox,[e[4]||(e[4]=R("label",{class:"block text-gray-700"},"Nombre",-1)),Dt(R("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.editData.displayName=o),type:"text",class:"w-full px-4 py-2 border rounded-lg",required:""},null,512),[[Nt,s.editData.displayName]])]),R("div",Vx,[e[5]||(e[5]=R("label",{class:"block text-gray-700"},"Biografía",-1)),Dt(R("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.editData.bio=o),class:"w-full px-4 py-2 border rounded-lg",required:""},null,512),[[Nt,s.editData.bio]])]),R("div",Mx,[e[6]||(e[6]=R("label",{class:"block text-gray-700"},"Carrera",-1)),Dt(R("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.editData.career=o),type:"text",class:"w-full px-4 py-2 border rounded-lg",required:""},null,512),[[Nt,s.editData.career]])]),R("div",Lx,[R("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded",disabled:s.saving},Pe(s.saving?"Guardando...":"Guardar"),9,Ux)])],32)])}const Bx=rt(Dx,[["render",Fx]]),$x=[{path:"/",component:Iy,name:"Home"},{path:"/register",component:Hk,name:"Register"},{path:"/login",component:Dk,name:"Login"},{path:"/post",component:Xk,name:"Post"},{path:"/user-profile",component:xx,meta:{requiresAuth:!0}},{path:"/user-profile/edit",component:Bx,meta:{requiresAuth:!0}},{path:"/chat",component:Tk,meta:{requiresAuth:!0}}],by=m1({routes:$x,history:KC()});let Ay={id:null,email:null};Tn(t=>Ay=t);by.beforeEach((t,e)=>{if(t.meta.requiresAuth&&Ay.id===null)return{path:"/login"}});const Ry=OS(sk);Ry.use(by);Ry.mount("#app");
