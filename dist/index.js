"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=u(function(y,f){
function c(a,r,e){var t,n,s,i;for(t=a.length,r<0&&(r+=t,r<0&&(r=0)),n=1,i=0,s=0;s<t;s++)s>=r?(n*=a[s],s===t-1&&(e[i]=n,i+=1)):(e[i]=a[s],i+=1);return e}f.exports=c
});var l=u(function(z,o){
var g=require('@stdlib/math-base-special-fast-min/dist'),x=require('@stdlib/array-base-zeros/dist'),p=v();function F(a,r){var e,t,n;return e=a.length,r<0&&(r+=e,r<0&&(r=0)),n=g(e-1,r),t=x(n+1),p(a,n,t),t}o.exports=F
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=l(),h=v();S(q,"assign",h);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
