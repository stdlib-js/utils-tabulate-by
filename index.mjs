// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function o(s,t){return i(t)?(n(t,"thisArg")&&(s.thisArg=t.thisArg),null):new TypeError(e("0li2h",t))}function l(i,n,l){var d,h,m,p,j,f,g,c,a,u,x;if(!s(i))throw new TypeError(e("0liBO",i));if(m={},2===arguments.length)c=n;else{if(g=o(m,n))throw g;c=l}if(!t(c))throw new TypeError(e("0li43",c));for(d=m.thisArg,h=0,p=[],f=[],j=i.length,u=0;u<j;u++)a=c.call(d,i[u],u),h+=1,-1===(x=r(p,a))?(p.push(a),f.push([a,1,0])):f[x][1]+=1;for(j=f.length,u=0;u<j;u++)f[u][2]=f[u][1]/h;return f}export{l as default};
//# sourceMappingURL=index.mjs.map
