import{r as i,j as l,a as e,L as n,F as k,Q as h}from"./index.5a85093a.js";import{H as w}from"./HomeBredCurbs.d78b2916.js";import{I as N}from"./index.7a426a8b.js";import{M as R}from"./index.91645ed2.js";import{h as q}from"./house.9786a1f6.js";import{P as I}from"./index.8ede2675.js";import{a as m}from"./axios.74c9240f.js";import"./index.esm.27038d76.js";import"./iconBase.ebd08f81.js";const L=({onAdd:j})=>{const u=()=>{window.history.back()},x=localStorage.getItem("profile"),f=JSON.parse(x),[a,p]=i.exports.useState(!1),[c,g]=i.exports.useState([]);i.exports.useEffect(()=>{m.get(`https://constrobackend17-4.onrender.com/api/get_vendorRequests/${f._id}`).then(t=>{console.log(25,t.data.Result),g(t.data.Result)}).catch(t=>{console.log(t)})},[a]);const v=(t,s,r)=>{t.preventDefault(),console.log("request Accepted",s,r),m.put(`https://constrobackend17-4.onrender.com/api/accept_req/${r}/${s}`).then(o=>{h.success(o.data.message),p(!a)}).catch(o=>{console.log(o)})},b=(t,s,r)=>{t.preventDefault(),console.log("request Cancelled"),console.log("request Cancelled",s,r);const o={providerId:r,receiverId:s};m.post("https://constrobackend17-4.onrender.com/api/cancelVendorBankRequest",o).then(d=>{h.success(d.data.message),p(!a)}).catch(d=>{console.log(d)})};return console.log(51,c),l("div",{children:[e(w,{title:"Request Page "}),l("div",{className:"flex items-center text-slate-400 ",children:[l(n,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:u,children:[e(N,{className:"text-xl font-semibold"}),"Back"]}),e("span",{className:"mx-2",children:" / "}),l(n,{to:"/dashboard",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[e(R,{className:"text-lg font-semibold"}),"Home"]})]}),c==null?void 0:c.map(t=>e(k,{children:e("div",{class:"bg-white shadow rounded-lg w-full mt-3 p-3",children:l("div",{class:"latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50",children:[e("div",{class:"rounded-full md:mb-0 md:mr-4 p-2",children:e("img",{class:"h-[80px] w-[80px] rounded-full",src:q,alt:""})}),l("div",{class:"flex-1 md:px-3 md:text-left",children:[e("h4",{class:"text-xl font-semibold text-color-white md:mt-0",children:t.providerId.firmName}),e("div",{class:"flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start",children:l("span",{class:"card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2",children:[e(I,{class:"text-2xl text-slate-500"}),l("span",{class:"text-lg",children:["\xA0",t.providerId.firmRepresentative," |"," ",t.providerId.representativeDesignation,"\xA0\xA0"]})]})})]}),l("div",{class:"flex flex-row md:flex-row  md:pb-0 justify-center pr-4 md:pr-8 gap-4 mt-5 md:justify-end ",children:[e(n,{class:"btn-link no-underline ",children:e("span",{className:"text-lg text-blue-400 hover:underline",children:"View Profile"})}),e(n,{to:"",class:"btn-link no-underline",children:e("span",{className:"text-lg text-green-400 hover:underline",onClick:s=>{v(s,t.receiverId,t.providerId._id)},children:"Accept"})}),e(n,{to:"",class:"btn-link no-underline",children:e("span",{className:"text-lg text-red-400 hover:underline",onClick:s=>{b(s,t.receiverId,t.providerId._id)},children:"Decline"})})]})]})})}))]})};export{L as default};
