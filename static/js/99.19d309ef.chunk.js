"use strict";(self.webpackChunkcake_project=self.webpackChunkcake_project||[]).push([[99],{2099:(e,t,n)=>{n.d(t,{Mz:()=>a});n(4705);var o=n(9379);function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(t)}var r=e=>Array.isArray(e)?e:[e];function l(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const n=e.map((e=>"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e)).join(", ");throw new TypeError("".concat(t,"[").concat(n,"]"))}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var i="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={s:0,v:void 0,o:null,p:null};const{resultEqualityCheck:o}=t;let c,r=0;function l(){let t=n;const{length:l}=arguments;for(let e=0,n=l;e<n;e++){const n=arguments[e];if("function"===typeof n||"object"===typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const o=e.get(n);void 0===o?(t={s:0,v:void 0,o:null,p:null},e.set(n,t)):t=o}else{let e=t.p;null===e&&(t.p=e=new Map);const o=e.get(n);void 0===o?(t={s:0,v:void 0,o:null,p:null},e.set(n,t)):t=o}}const s=t;let u;if(1===t.s)u=t.v;else if(u=e.apply(null,arguments),r++,o){var a,p,f;const e=null!==(a=null===(p=c)||void 0===p||null===(f=p.deref)||void 0===f?void 0:f.call(p))&&void 0!==a?a:c;null!=e&&o(e,u)&&(u=e,0!==r&&r--);c="object"===typeof u&&null!==u||"function"===typeof u?new i(u):u}return s.s=1,s.v=u,u}return l.clearCache=()=>{n={s:0,v:void 0,o:null,p:null},l.resetResultsCount()},l.resultsCount=()=>r,l.resetResultsCount=()=>{r=0},l}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const u="function"===typeof e?{memoize:e,memoizeOptions:n}:e,a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let i,a=0,p=0,f={},d=t.pop();"object"===typeof d&&(f=d,d=t.pop()),c(d,"createSelector expects an output function after the inputs, but received: [".concat(typeof d,"]"));const y=(0,o.A)((0,o.A)({},u),f),{memoize:v,memoizeOptions:h=[],argsMemoize:m=s,argsMemoizeOptions:g=[],devModeChecks:b={}}=y,w=r(h),j=r(g),k=l(t),z=v((function(){return a++,d.apply(null,arguments)}),...w);const A=m((function(){p++;const e=function(e,t){const n=[],{length:o}=e;for(let c=0;c<o;c++)n.push(e[c].apply(null,t));return n}(k,arguments);return i=z.apply(null,e),i}),...j);return Object.assign(A,{resultFunc:d,memoizedResultFunc:z,dependencies:k,dependencyRecomputations:()=>p,resetDependencyRecomputations:()=>{p=0},lastResult:()=>i,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:v,argsMemoize:m})};return Object.assign(a,{withTypes:()=>a}),a}var a=u(s),p=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received ".concat(typeof e);if("object"!==typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));const n=Object.keys(e),o=t(n.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(((e,t,o)=>(e[n[o]]=t,e)),{})}));return o}),{withTypes:()=>p})}}]);
//# sourceMappingURL=99.19d309ef.chunk.js.map