"use strict";var m=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var c=m(function(C,o){
var d=require('@stdlib/assert-is-plain-object/dist'),A=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function y(a,r){return d(r)?(A(r,"thisArg")&&(a.thisArg=r.thisArg),null):new TypeError(x('1Xj2V',r));}o.exports=y
});var b=m(function(L,p){
var O=require('@stdlib/assert-is-collection/dist'),j=require('@stdlib/assert-is-function/dist'),E=require('@stdlib/utils-index-of/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),T=c();function V(a,r,w){var h,s,v,l,u,t,f,i,n,e,g;if(!O(a))throw new TypeError(q('1XjAh',a));if(v={},arguments.length===2)i=r;else{if(f=T(v,r),f)throw f;i=w}if(!j(i))throw new TypeError(q('1Xj3q',i));for(h=v.thisArg,s=0,l=[],t=[],u=a.length,e=0;e<u;e++)n=i.call(h,a[e],e),s+=1,g=E(l,n),g===-1?(l.push(n),t.push([n,1,0])):t[g][1]+=1;for(u=t.length,e=0;e<u;e++)t[e][2]=t[e][1]/s;return t}p.exports=V
});var F=b();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
