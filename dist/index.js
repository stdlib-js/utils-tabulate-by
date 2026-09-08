"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var q=o(function(C,c){
var d=require('@stdlib/assert-is-plain-object/dist'),A=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function y(a,r){return d(r)?(A(r,"thisArg")&&(a.thisArg=r.thisArg),null):new TypeError(x('1Xj2V',r));}c.exports=y
});var w=o(function(L,b){
var O=require('@stdlib/assert-is-collection/dist'),j=require('@stdlib/assert-is-function/dist'),E=require('@stdlib/utils-index-of/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),T=q();function V(a,r,s){var m,v,l,f,u,t,g,i,n,e,h;if(!O(a))throw new TypeError(p('1XjAh',a));if(l={},arguments.length===2)i=r;else{if(g=T(l,r),g)throw g;i=s}if(!j(i))throw new TypeError(p('1Xj3q',i));for(m=l.thisArg,v=0,f=[],t=[],u=a.length,e=0;e<u;e++)n=i.call(m,a[e],e),v+=1,h=E(f,n),h===-1?(f.push(n),t.push([n,1,0])):t[h][1]+=1;for(u=t.length,e=0;e<u;e++)t[e][2]=t[e][1]/v;return t}b.exports=V
});var F=w();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
