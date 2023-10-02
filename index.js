// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).tabulateBy=e()}(this,(function(){"use strict";var r=Math.floor;function e(e){return r(e)===e}function t(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=9007199254740991}var n=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function a(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(i):c(i)+r,n&&(r="-"+r)),r}var f=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):f.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(r){return"string"==typeof r}var g=Math.abs,h=String.prototype.toLowerCase,b=String.prototype.toUpperCase,y=String.prototype.replace,d=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,m=/^(\d+)e/,j=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function O(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":g(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=y.call(t,E,"$1e"),t=y.call(t,_,"e"),t=y.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=y.call(t,d,"e+0$1"),t=y.call(t,v,"e-0$1"),r.alternate&&(t=y.call(t,w,"$1."),t=y.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===b.call(r.specifier)?b.call(t):h.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function T(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var x=String.fromCharCode,A=isNaN,k=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,i,o,a,c,f,l;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(p(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){return"string"==typeof r}function $(r){var e,t,n;if(!C(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var B,R=Object.prototype,G=R.toString,L=R.__defineGetter__,X=R.__defineSetter__,Z=R.__lookupGetter__,M=R.__lookupSetter__;B=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var U=B;function W(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(r){return"boolean"==typeof r}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return q&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&J.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=z()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[Q],e=H(r,Q);try{r[Q]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return D.call(r)},er=Boolean,tr=Boolean.prototype.toString;var nr=z();function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function or(r){return Y(r)||ir(r)}function ar(){return new Function("return this;")()}W(or,"isPrimitive",Y),W(or,"isObject",ir);var cr="object"==typeof self?self:null,ur="object"==typeof window?window:null,fr="object"==typeof global?global:null,lr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!Y(r))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ar()}if(lr)return lr;if(cr)return cr;if(ur)return ur;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=sr.document&&sr.document.childNodes,gr=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;W(hr,"REGEXP",br);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};function dr(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,i;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var wr="function"==typeof n||"object"==typeof gr||"function"==typeof pr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function mr(r){return"function"===wr(r)}function jr(r){return"number"==typeof r}var _r=Number,Er=_r.prototype.toString;var Or=z();function Sr(r){return"object"==typeof r&&(r instanceof _r||(Or?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Tr(r){return jr(r)||Sr(r)}function xr(r){return r!=r}function Ar(r){return jr(r)&&xr(r)}function kr(r){return Sr(r)&&xr(r.valueOf())}function Ir(r){return Ar(r)||kr(r)}function Vr(r){return"string"==typeof r}W(Tr,"isPrimitive",jr),W(Tr,"isObject",Sr),W(Ir,"isPrimitive",Ar),W(Ir,"isObject",kr);var Pr=String.prototype.valueOf;var Fr=z();function Nr(r){return"object"==typeof r&&(r instanceof String||(Fr?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===rr(r)))}function Cr(r){return Vr(r)||Nr(r)}W(Cr,"isPrimitive",Vr),W(Cr,"isObject",Nr);var $r=Number.POSITIVE_INFINITY,Br=_r.NEGATIVE_INFINITY;function Rr(r){return r<$r&&r>Br&&e(r)}function Gr(r){return jr(r)&&Rr(r)}function Lr(r){return Sr(r)&&Rr(r.valueOf())}function Xr(r){return Gr(r)||Lr(r)}function Zr(r,e,n){var i,o;if(!t(r)&&!Vr(r))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(i=r.length))return-1;if(3===arguments.length){if(!Gr(n))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=i)return-1;o=n}else(o=i+n)<0&&(o=0)}else o=0;if(Ir(e)){for(;o<i;o++)if(Ir(r[o]))return o}else for(;o<i;o++)if(r[o]===e)return o;return-1}function Mr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}W(Xr,"isPrimitive",Gr),W(Xr,"isObject",Lr);var Ur,Wr=Object,Yr=Object.getPrototypeOf;Ur=mr(Object.getPrototypeOf)?Yr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var qr=Ur;var zr=Object.prototype;function Dr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=Wr(r),qr(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&mr(e.constructor)&&"[object Function]"===rr(e.constructor)&&H(e,"isPrototypeOf")&&mr(e.isPrototypeOf)&&(e===zr||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function Jr(r,e){return Dr(e)?(H(e,"thisArg")&&(r.thisArg=e.thisArg),null):new TypeError(Mr("1Xj2V,FD",e))}return function(r,e,n){var i,o,a,c,u,f,l,s,p,g,h;if(!t(r))throw new TypeError(Mr("1XjAh,O3",r));if(a={},2===arguments.length)s=e;else{if(l=Jr(a,e))throw l;s=n}if(!mr(s))throw new TypeError(Mr("1Xj3q,JV",s));for(i=a.thisArg,o=0,c=[],f=[],u=r.length,g=0;g<u;g++)o+=1,-1===(h=Zr(c,p=s.call(i,r[g],g)))?(c.push(p),f.push([p,1,0])):f[h][1]+=1;for(u=f.length,g=0;g<u;g++)f[g][2]=f[g][1]/o;return f}}));
//# sourceMappingURL=index.js.map
