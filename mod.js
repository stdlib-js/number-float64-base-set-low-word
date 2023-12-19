// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,i,f,y;if(null==t)return n.call(t);e=t[a],y=a,o=null!=(f=t)&&r.call(f,y);try{t[a]=void 0}catch(r){return n.call(t)}return i=n.call(t),o?t[a]=e:delete t[a],i}:function(t){return n.call(t)},i="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var y,u="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var t,n,r;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(i&&r instanceof Uint32Array||"[object Uint32Array]"===e(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?u:function(){throw new Error("not implemented")};var c=y,l="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var v,A="function"==typeof Float64Array?Float64Array:void 0;v=function(){var t,n,r;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),r=n,t=(l&&r instanceof Float64Array||"[object Float64Array]"===e(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?A:function(){throw new Error("not implemented")};var U=v,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,d="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var t,n,r;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),r=n,t=(w&&r instanceof Uint8Array||"[object Uint8Array]"===e(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")};var h=m,s="function"==typeof Uint16Array;var S="function"==typeof Uint16Array?Uint16Array:null;var F,j="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),r=n,t=(s&&r instanceof Uint16Array||"[object Uint16Array]"===e(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var g,E={uint16:F,uint8:h};(g=new E.uint16(1))[0]=4660;var O=!0===(52===new E.uint8(g.buffer)[0])?0:1,N=new U(1),T=new c(N.buffer);function x(t,n){return N[0]=t,T[O]=n>>>0,N[0]}export{x as default};
//# sourceMappingURL=mod.js.map
