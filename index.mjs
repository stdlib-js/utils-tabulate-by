// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var o=i,m=n,l=r;var a=t,d=s,h=e,u=r,p=function(t,s){return o(s)?(m(s,"thisArg")&&(t.thisArg=s.thisArg),null):new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",s))};var g=function(t,s,e){var r,i,n,o,m,l,g,j,f,c,v;if(!a(t))throw new TypeError(u("invalid argument. First argument must be a collection. Value: `%s`.",t));if(n={},2===arguments.length)j=s;else{if(g=p(n,s))throw g;j=e}if(!d(j))throw new TypeError(u("invalid argument. Last argument must be a function. Value: `%s`.",j));for(r=n.thisArg,i=0,o=[],l=[],m=t.length,c=0;c<m;c++)f=j.call(r,t[c],c),i+=1,-1===(v=h(o,f))?(o.push(f),l.push([f,1,0])):l[v][1]+=1;for(m=l.length,c=0;c<m;c++)l[c][2]=l[c][1]/i;return l};export{g as default};
//# sourceMappingURL=index.mjs.map
