import{d as x,r as d,a as g,E as V,o as A,c as y,b as E,e as a,w as o,f as e,n as N,g as F,l as f,h as k,k as B,m as D,q as n,aM as q}from"./index.8cffe86b.js";import{E as P,a as v}from"./el-form-item.6d23a79b.js";import{E as R}from"./el-input.41cef1a9.js";const U={class:"content"},I=E("img",{src:"https://pic.imgdb.cn/item/63cfe987588a5d166ce1b2ba.jpg",alt:""},null,-1),S=x({__name:"Register",setup(L){const i=D(),_=d(""),m=d(),u=g({userName:"",account:"",password:"",rePassword:"",captchaAnswer:""}),w=g({userName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0",trigger:"change"},{min:3,max:10,message:"\u957F\u5EA6\u5E94\u57283\u523010\u5B57\u7B26\u4E4B\u95F4",trigger:"change"}],account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"change"},{min:3,max:20,message:"\u957F\u5EA6\u5E94\u57283\u523020\u5B57\u7B26\u4E4B\u95F4",trigger:"change"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"change"},{min:6,max:20,message:"\u957F\u5EA6\u5E94\u57286\u523020\u5B57\u7B26\u4E4B\u95F4",trigger:"change"}],rePassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:"change"},{min:6,max:20,message:"\u957F\u5EA6\u5E94\u57286\u523020\u5B57\u7B26\u4E4B\u95F4",trigger:"change"}],captchaAnswer:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"change"}]});function h(){var c;(c=m.value)==null||c.validate((r,l)=>{r?u.password!=u.rePassword?n({type:"error",message:"\u5BC6\u7801\u548C\u786E\u8BA4\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF01\uFF01"}):q(u.account,u.password,u.userName).then(t=>{t.data.account?(n({type:"success",message:"\u6CE8\u518C\u6210\u529F"}),i.push({name:"Login"})):n({type:"error",message:"\u8BE5\u8D26\u53F7\u5DF2\u5B58\u5728"})}):n({type:"error",message:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u4FE1\u606F\uFF01\uFF01"})})}function C(){i.push({name:"Login"})}return(c,r)=>{const l=R,t=P,p=V,b=v;return A(),y("div",{class:"register",style:N({background:e(_)})},[E("div",U,[a(b,{ref_key:"registFormRef",ref:m,model:e(u),rules:e(w),size:"large"},{default:o(()=>[a(t,{label:"",prop:"userName"},{default:o(()=>[a(l,{modelValue:e(u).userName,"onUpdate:modelValue":r[0]||(r[0]=s=>e(u).userName=s),placeholder:"\u6635\u79F0","prefix-icon":e(F),clearable:""},null,8,["modelValue","prefix-icon"])]),_:1}),a(t,{label:"",prop:"account"},{default:o(()=>[a(l,{modelValue:e(u).account,"onUpdate:modelValue":r[1]||(r[1]=s=>e(u).account=s),placeholder:"\u8D26\u53F7","prefix-icon":e(F),clearable:""},null,8,["modelValue","prefix-icon"])]),_:1}),a(t,{label:"",prop:"password"},{default:o(()=>[a(l,{type:"password",modelValue:e(u).password,"onUpdate:modelValue":r[2]||(r[2]=s=>e(u).password=s),placeholder:"\u5BC6\u7801","prefix-icon":e(f),clearable:""},null,8,["modelValue","prefix-icon"])]),_:1}),a(t,{label:"",prop:"rePassword"},{default:o(()=>[a(l,{type:"password",modelValue:e(u).rePassword,"onUpdate:modelValue":r[3]||(r[3]=s=>e(u).rePassword=s),placeholder:"\u786E\u8BA4\u5BC6\u7801","prefix-icon":e(f),clearable:""},null,8,["modelValue","prefix-icon"])]),_:1}),a(t,{label:"",prop:"captchaAnswer"},{default:o(()=>[a(l,{modelValue:e(u).captchaAnswer,"onUpdate:modelValue":r[4]||(r[4]=s=>e(u).captchaAnswer=s),placeholder:"\u9A8C\u8BC1\u7801","prefix-icon":e(k),class:"captcha",clearable:""},null,8,["modelValue","prefix-icon"]),I]),_:1}),a(p,{type:"success",onClick:h},{default:o(()=>[B("\u63D0\u4EA4\u6CE8\u518C")]),_:1}),a(p,{type:"primary",onClick:C},{default:o(()=>[B("\u8FD4\u56DE\u767B\u9646\u9875\u9762")]),_:1})]),_:1},8,["model","rules"])])],4)}}});export{S as default};
