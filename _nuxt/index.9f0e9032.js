import{L as f,M as m,r as u,N as v,O as p,z as h,P as y,Q as H,u as d,R as b}from"./entry.967ce13d.js";const j=["base","meta","link","style","script","noscript"];let w;const O=()=>w;function U(e){return typeof e=="function"?e():d(e)}function c(e,n=""){if(e instanceof Promise)return e;const t=U(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(r=>c(r,n));if(typeof t=="object"){let r=!1;const s=Object.fromEntries(Object.entries(t).map(([a,o])=>a==="titleTemplate"||a.startsWith("on")?[a,d(o)]:((typeof o=="function"||b(o))&&(r=!0),[a,c(o,a)])));return r&&j.includes(String(n))&&(s._dynamic=!0),s}return t}const g=typeof window<"u",A="usehead";function i(){return f()&&m(A)||O()}function I(e,n={}){const t=i(),r=u(!1),s=u({});v(()=>{s.value=r.value?{}:c(e)});const a=t.push(s.value,n);return p(s,l=>{a.patch(l)}),f()&&(h(()=>{a.dispose()}),y(()=>{r.value=!0}),H(()=>{r.value=!1})),a}function B(e,n={}){return i().push(e,n)}function P(e,n={}){var r;const t=i();if(t){const s=g||!!((r=t.resolvedOptions)!=null&&r.document);return n.mode==="server"&&s||n.mode==="client"&&!s?void 0:s?I(e,n):B(e,n)}}export{P as u};