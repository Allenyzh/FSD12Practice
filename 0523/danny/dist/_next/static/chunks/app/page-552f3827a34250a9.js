(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7915:function(e,s,t){Promise.resolve().then(t.bind(t,163))},163:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var a=t(7437);t(594),t(9252);var n=t(2265);t(269);var l=t(6446),o=t(9997),i=function(e){let{role:s,content:t}=e;return(0,a.jsxs)("div",{className:"assistant"===s?"d-flex flex-row ai-chat-box border p-2 m-1 rounded":"d-flex flex-row user-chat-box border p-2 m-1 rounded",children:[(0,a.jsx)("div",{className:"chat-icon px-1",children:"assistant"===s?(0,a.jsx)("i",{className:"bi bi-robot"}):(0,a.jsx)("i",{className:"bi bi-person-circle"})}),(0,a.jsx)(l.U,{remarkPlugins:[o.Z],className:"chat-text mx-1",children:t})]})},r=t(2824),c=t(358),x=t(6712),d=t(8473),u=t(2368),h=function(e){let{message:s,setMessage:t,sendMessage:n,apiUrl:l,setApiUrl:o,apiToken:i,setApiToken:h,model:m,setModel:j,clearChat:p}=e;return(0,a.jsx)("div",{className:"input-area",children:(0,a.jsxs)(r.Z,{fluid:!0,children:[(0,a.jsx)(c.Z,{className:"my-1",children:(0,a.jsx)(x.Z,{children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(u.Z.Control,{as:"textarea",rows:3,value:s,onChange:t,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),n())}}),(0,a.jsxs)("div",{className:"d-flex flex-column",children:[(0,a.jsx)("button",{className:"btn btn-outline-primary m-2",onClick:n,children:(0,a.jsx)("i",{className:"bi bi-send-fill"})}),(0,a.jsx)("button",{className:"btn btn-outline-primary m-2",onClick:p,children:(0,a.jsx)("i",{className:"bi bi-x-octagon"})})]})]})})}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(x.Z,{md:6,className:"my-1",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(d.Z.Text,{children:"API URL"}),(0,a.jsx)(u.Z.Control,{type:"text",list:"api-url-list",value:l,onChange:o}),(0,a.jsxs)("datalist",{id:"api-url-list",children:[(0,a.jsx)("option",{value:"https://api.openai.com/v1/chat/completions"}),(0,a.jsx)("option",{value:"http://localhost:11434/v1/chat/completions"})]})]})}),(0,a.jsx)(x.Z,{md:3,className:"my-1",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(d.Z.Text,{children:"API Token"}),(0,a.jsx)(u.Z.Control,{type:"text",value:i,onChange:h})]})}),(0,a.jsx)(x.Z,{md:3,className:"my-1",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(d.Z.Text,{children:"Model"}),(0,a.jsx)(u.Z.Control,{type:"text",list:"model-list",value:m,onChange:j}),(0,a.jsxs)("datalist",{id:"model-list",children:[(0,a.jsx)("option",{value:"gpt-3.5-turbo"}),(0,a.jsx)("option",{value:"gpt-4-turbo"}),(0,a.jsx)("option",{value:"gpt-4o"}),(0,a.jsx)("option",{value:"gemma:7b"}),(0,a.jsx)("option",{value:"llama3:8b"})]})]})})]})]})})};function m(){let[e,s]=(0,n.useState)(""),[t,l]=(0,n.useState)([]),[o,r]=(0,n.useState)("http://localhost:11434/v1/chat/completions"),[c,x]=(0,n.useState)("iloveyourtoken"),[d,u]=(0,n.useState)("gemma:7b"),m=async()=>{let a={role:"user",content:e};s(""),l([...t,a]),await fetch(o,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify({messages:[...t,a],model:d})}).then(e=>e.json()).then(e=>{l([...t,a,e.choices[0].message]),console.log(t)})};return(0,a.jsxs)("main",{className:"d-flex flex-column h-100",children:[(0,a.jsx)("div",{className:"chat-content-area px-2",children:t.map((e,s)=>(0,a.jsx)(i,{role:e.role,content:e.content},s))}),(0,a.jsx)(h,{message:e,setMessage:e=>s(e.target.value),sendMessage:m,apiUrl:o,setApiUrl:e=>r(e.target.value),apiToken:c,setApiToken:e=>x(e.target.value),model:d,setModel:e=>u(e.target.value),clearChat:()=>{l([])}})]})}},269:function(){}},function(e){e.O(0,[610,51,983,653,971,23,744],function(){return e(e.s=7915)}),_N_E=e.O()}]);