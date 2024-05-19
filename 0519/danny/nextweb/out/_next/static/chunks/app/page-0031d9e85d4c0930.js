(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1027:function(e,t,a){Promise.resolve().then(a.bind(a,1789))},1789:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}});var r=a(7437);a(594);var n=a(2265),l=a(6800),s=a.n(l);let c=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:i}=c;function d(e,t){let{prefixes:a}=(0,n.useContext)(c);return e||a[t]||t}function f(){let{breakpoints:e}=(0,n.useContext)(c);return e}function u(){let{minBreakpoint:e}=(0,n.useContext)(c);return e}let m=n.forwardRef((e,t)=>{let{bsPrefix:a,fluid:n=!1,as:l="div",className:c,...o}=e,i=d(a,"container");return(0,r.jsx)(l,{ref:t,...o,className:s()(c,n?"".concat(i).concat("string"==typeof n?"-".concat(n):"-fluid"):i)})});m.displayName="Container";let x=n.forwardRef((e,t)=>{let{bsPrefix:a,className:n,as:l="div",...c}=e,o=d(a,"row"),i=f(),m=u(),x="".concat(o,"-cols"),p=[];return i.forEach(e=>{let t;let a=c[e];delete c[e],null!=a&&"object"==typeof a?{cols:t}=a:t=a,null!=t&&p.push("".concat(x).concat(e!==m?"-".concat(e):"","-").concat(t))}),(0,r.jsx)(l,{ref:t,...c,className:s()(n,o,...p)})});x.displayName="Row";let p=n.forwardRef((e,t)=>{let[{className:a,...n},{as:l="div",bsPrefix:c,spans:o}]=function(e){let{as:t,bsPrefix:a,className:r,...n}=e;a=d(a,"col");let l=f(),c=u(),o=[],i=[];return l.forEach(e=>{let t,r,l;let s=n[e];delete n[e],"object"==typeof s&&null!=s?{span:t,offset:r,order:l}=s:t=s;let d=e!==c?"-".concat(e):"";t&&o.push(!0===t?"".concat(a).concat(d):"".concat(a).concat(d,"-").concat(t)),null!=l&&i.push("order".concat(d,"-").concat(l)),null!=r&&i.push("offset".concat(d,"-").concat(r))}),[{...n,className:s()(r,...o,...i)},{as:t,bsPrefix:a,spans:o}]}(e);return(0,r.jsx)(l,{...n,ref:t,className:s()(a,!o.length&&c)})});p.displayName="Col";let y=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l="div",...c}=e;return n=d(n,"card-body"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});y.displayName="CardBody";let N=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l="div",...c}=e;return n=d(n,"card-footer"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});N.displayName="CardFooter";let j=n.createContext(null);j.displayName="CardHeaderContext";let v=n.forwardRef((e,t)=>{let{bsPrefix:a,className:l,as:c="div",...o}=e,i=d(a,"card-header"),f=(0,n.useMemo)(()=>({cardHeaderBsPrefix:i}),[i]);return(0,r.jsx)(j.Provider,{value:f,children:(0,r.jsx)(c,{ref:t,...o,className:s()(l,i)})})});v.displayName="CardHeader";let h=n.forwardRef((e,t)=>{let{bsPrefix:a,className:n,variant:l,as:c="img",...o}=e,i=d(a,"card-img");return(0,r.jsx)(c,{ref:t,className:s()(l?"".concat(i,"-").concat(l):i,n),...o})});h.displayName="CardImg";let b=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l="div",...c}=e;return n=d(n,"card-img-overlay"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});b.displayName="CardImgOverlay";let g=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l="a",...c}=e;return n=d(n,"card-link"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});g.displayName="CardLink";var w=e=>n.forwardRef((t,a)=>(0,r.jsx)("div",{...t,ref:a,className:s()(t.className,e)}));let C=w("h6"),R=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l=C,...c}=e;return n=d(n,"card-subtitle"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});R.displayName="CardSubtitle";let k=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l="p",...c}=e;return n=d(n,"card-text"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});k.displayName="CardText";let O=w("h5"),S=n.forwardRef((e,t)=>{let{className:a,bsPrefix:n,as:l=O,...c}=e;return n=d(n,"card-title"),(0,r.jsx)(l,{ref:t,className:s()(a,n),...c})});S.displayName="CardTitle";let B=n.forwardRef((e,t)=>{let{bsPrefix:a,className:n,bg:l,text:c,border:o,body:i=!1,children:f,as:u="div",...m}=e,x=d(a,"card");return(0,r.jsx)(u,{ref:t,...m,className:s()(n,x,l&&"bg-".concat(l),c&&"text-".concat(c),o&&"border-".concat(o)),children:i?(0,r.jsx)(y,{children:f}):f})});B.displayName="Card";var E=Object.assign(B,{Img:h,Title:S,Subtitle:R,Body:y,Link:g,Text:k,Header:v,Footer:N,ImgOverlay:b});let P=["as","disabled"];function T({tagName:e,disabled:t,href:a,target:r,rel:n,role:l,onClick:s,tabIndex:c=0,type:o}){e||(e=null!=a||null!=r||null!=n?"a":"button");let i={tagName:e};if("button"===e)return[{type:o||"button",disabled:t},i];let d=r=>{var n;if(!t&&("a"!==e||(n=a)&&"#"!==n.trim())||r.preventDefault(),t){r.stopPropagation();return}null==s||s(r)};return"a"===e&&(a||(a="#"),t&&(a=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:c,href:a,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},i]}n.forwardRef((e,t)=>{let{as:a,disabled:n}=e,l=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,P),[s,{tagName:c}]=T(Object.assign({tagName:a,disabled:n},l));return(0,r.jsx)(c,Object.assign({},l,s,{ref:t}))}).displayName="Button";let _=n.forwardRef((e,t)=>{let{as:a,bsPrefix:n,variant:l="primary",size:c,active:o=!1,disabled:i=!1,className:f,...u}=e,m=d(n,"btn"),[x,{tagName:p}]=T({tagName:a,disabled:i,...u});return(0,r.jsx)(p,{...x,...u,ref:t,disabled:i,className:s()(f,m,o&&"active",l&&"".concat(m,"-").concat(l),c&&"".concat(m,"-").concat(c),u.href&&i&&"disabled")})});function I(){let[e,t]=(0,n.useState)([]),[a,l]=(0,n.useState)(!0),[s,c]=(0,n.useState)("scenarios"),o=(0,n.useCallback)(async()=>{l(!0);let e=await fetch(s);t((await e.json()).scenarios),l(!1)},[s]);return(0,n.useEffect)(()=>(o(),()=>{console.log("cleanup")}),[o]),(0,r.jsxs)("main",{className:"",children:[(0,r.jsx)("h1",{children:"Scenarios"}),a?(0,r.jsx)("p",{children:"Loading..."}):(0,r.jsx)(m,{fluid:!0,children:(0,r.jsx)(x,{className:"mx-1",children:e.map(e=>(0,r.jsx)(p,{sm:6,md:4,lg:3,className:"d-flex my-2",children:(0,r.jsxs)(E,{children:[(0,r.jsxs)(E.Body,{children:[(0,r.jsx)(E.Title,{children:e.name}),(0,r.jsx)(E.Text,{children:e.description})]}),(0,r.jsx)(E.Footer,{children:(0,r.jsx)(_,{variant:"primary",children:"Practice"})})]})},e.name))})})]})}_.displayName="Button"},594:function(){},6800:function(e,t){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)r.call(e,a)&&e[a]&&(t=l(t,a));return t}(a)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0!==(a=(function(){return n}).apply(t,[]))&&(e.exports=a)}()}},function(e){e.O(0,[610,971,23,744],function(){return e(e.s=1027)}),_N_E=e.O()}]);