// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";function o(s,t){return i(t)?(n(t,"thisArg")&&(s.thisArg=t.thisArg),null):new TypeError(e("1Xj2V,FD",t))}function d(i,n,d){var h,l,m,j,p,f,g,c,v,a,u;if(!s(i))throw new TypeError(e("1XjAh,O3",i));if(m={},2===arguments.length)c=n;else{if(g=o(m,n))throw g;c=d}if(!t(c))throw new TypeError(e("1Xj3q,JV",c));for(h=m.thisArg,l=0,j=[],f=[],p=i.length,a=0;a<p;a++)v=c.call(h,i[a],a),l+=1,-1===(u=r(j,v))?(j.push(v),f.push([v,1,0])):f[u][1]+=1;for(p=f.length,a=0;a<p;a++)f[a][2]=f[a][1]/l;return f}export{d as default};
//# sourceMappingURL=index.mjs.map