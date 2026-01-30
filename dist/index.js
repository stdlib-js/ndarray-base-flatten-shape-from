"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(y,f){
function c(e,r,t){var a,n,s,i;for(a=e.length,r<0&&(r+=a,r<0&&(r=0)),n=1,i=0,s=0;s<a;s++)s>=r?(n*=e[s],s===a-1&&(t[i]=n,i+=1)):(t[i]=e[s],i+=1);return t}f.exports=c
});var l=u(function(z,o){
var g=require('@stdlib/math-base-special-fast-min/dist'),x=require('@stdlib/array-base-zeros/dist'),p=v();function F(e,r){var t,a,n;return t=e.length,r<0&&(r+=t,r<0&&(r=0)),n=g(t-1,r),a=x(n+1),p(e,n,a),a}o.exports=F
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=l(),h=v();S(q,"assign",h);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
