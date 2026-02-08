// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@v0.3.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.2-esm/index.mjs";function n(s,e,t){var n,r,i,a;for(n=s.length,e<0&&(e+=n)<0&&(e=0),r=1,a=0,i=0;i<n;i++)i>=e?(r*=s[i],i===n-1&&(t[a]=r,a+=1)):(t[a]=s[i],a+=1);return t}function r(s,r){var i,a,d;return i=s.length,r<0&&(r+=i)<0&&(r=0),n(s,d=e(i-1,r),a=t(d+1)),a}s(r,"assign",n);export{n as assign,r as default};
//# sourceMappingURL=index.mjs.map
