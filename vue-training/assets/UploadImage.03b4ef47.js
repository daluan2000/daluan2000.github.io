import{d as f,r as o,W as E,bL as g,i as _,f as F,o as v,c as B,a as s,q as n}from"./index.e9159245.js";import{u as D,a as h,b as A,s as C}from"./image.c580cfff.js";const b=""+new URL("upload.0bb6a4ea.svg",import.meta.url).href,w={class:"input-container"},I=s("div",{class:"img-box"},[s("img",{src:b,alt:""}),s("br"),s("span",null,"\u70B9\u51FB\u9009\u62E9\u4E0A\u4F20\u7684\u56FE\u7247\u6587\u4EF6\uFF0C\u6216\u5C06\u56FE\u7247\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904\uFF0C\u4E5F\u53EF\u4EE5\u590D\u5236\u56FE\u7247\u5185\u5BB9\u7136\u540E\u5728\u6B64\u9875\u6309Ctrl+V\u7C98\u8D34\u4E0A\u4F20\uFF08\u5728\u7C98\u8D34\u4E4B\u524D\u8BF7\u4F7F\u7528\u9F20\u6807\u70B9\u51FB\u4E00\u4E0B\u53F3\u4FA7\u533A\u57DF\uFF09")],-1),k={class:"preview"},y=["src"],L=f({__name:"UploadImage",setup(U){const t=o(),i=o(""),l=o(!1),d=D();async function p(u){let e=(await h()).data,a=(await A(u,e)).data;return a.err?(n({type:"error",message:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"}),Promise.reject("")):(await C(a.url,a.id)).data}function r(u){l.value=!0,p(u).then(e=>{i.value=e.url,l.value=!1,d.addImage(e),n({type:"success",message:"\u4E0A\u4F20\u6210\u529F"})},e=>{l.value=!1})}function m(u){var e,a;if(((e=u.clipboardData)==null?void 0:e.items[0].kind)=="file"){let c=(a=u.clipboardData)==null?void 0:a.items[0].getAsFile();r(c)}else n({type:"warning",message:"\u8BF7\u7C98\u8D34\u56FE\u7247\u4E0A\u4F20"});console.log(u)}return E(()=>{t.value.onchange=()=>{var u;(u=t.value.files)!=null&&u.length&&r(t.value.files[0])}}),(u,e)=>{const a=g;return _((v(),B("div",{class:"uploadImg","element-loading-text":"\u56FE\u7247\u4E0A\u4F20\u4E2D...",onPaste:m},[s("div",w,[I,s("input",{type:"file",ref_key:"fileInput",ref:t,accept:"image/*"},null,512)]),s("div",k,[s("img",{src:F(i),alt:""},null,8,y)])],32)),[[a,F(l)]])}}});export{L as default};
