import{r as l,j as r,a as t,L as d,F as m,Q as p}from"./index.5a85093a.js";import{H as C}from"./HomeBredCurbs.f5cc8246.js";import{P as A}from"./index.8ede2675.js";import{h as I}from"./house.9786a1f6.js";import{I as q}from"./index.7a426a8b.js";import{M as S}from"./index.91645ed2.js";import{a}from"./axios.74c9240f.js";import"./index.esm.27038d76.js";import"./iconBase.ebd08f81.js";const M=()=>{l.exports.useState("Cancel"),l.exports.useState("bg-black-300");const[x,u]=l.exports.useState([]),[g,v]=l.exports.useState([]),[i,f]=l.exports.useState(!1),b=localStorage.getItem("profile"),s=JSON.parse(b);console.log(17,s),l.exports.useEffect(()=>{a.get("https://constrobackend17-4.onrender.com/api/get_All_Providers?page=1&limit=10").then(e=>{console.log(e.data.Result),u(e.data.Result)}).catch(e=>{console.log(e)}),a.get("https://constrobackend17-4.onrender.com/api/get_All_vendorBankReq").then(e=>{console.log(31,e.data.Result),v(e.data.Result)}).catch(e=>{console.log(e)})},[i]);const R=()=>{window.history.back()},_=(e,n,o,w)=>{const h={providerId:e,ContractorPro_firmName:n,ContractorPro_firmRepresentative:o,ContractorPro_representativeDesignation:w,receiverId:s._id,clientRec_firmName:s.firmName,clientRec_firmRepresentative:s.firmRepresentative,clientRec_representativeDesignation:s.representativeDesignation,who_sendReq:"client_to_contractor"};console.log(h),a.post("https://constrobackend17-4.onrender.com/api/post_vendorBankReq",h).then(c=>{console.log(c.data),f(!i),p.success(c.data.message)}).catch(c=>{console.log(c)})},k=e=>g.some(o=>o.receiverId===(s==null?void 0:s._id)&&o.providerId===e&&o.isAccepted===!1&&o.isActive===!0),N=e=>{const n={receiverId:s._id,providerId:e};a.post("https://constrobackend17-4.onrender.com/api/cancelVendorBankRequest",n).then(o=>{console.log(o.data),f(!i),p.success(o.data.message)}).catch(o=>{console.log(o)})};return r("div",{children:[t(C,{title:"All Contractor Page "}),r("div",{className:"flex items-center text-slate-400 ",children:[r(d,{to:"",className:"flex items-center text-sm hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",onClick:R,children:[t(q,{className:"text-xl font-semibold"}),"Back"]}),t("span",{className:"mx-2",children:" / "}),r(d,{to:"/dashboard",className:"flex items-center text-sm  hover:underline hover:font-semibold hover:text-blue-400 cursor-pointer gap-1",children:[t(S,{className:"text-lg font-semibold"}),"Home"]})]}),x.map(e=>t(m,{children:t("div",{class:" bg-white shadow rounded-lg w-full mt-3",children:r("div",{class:"latest_jobs flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto hover:bg-black-50",children:[t("div",{class:" rounded-full md:mb-0 md:mr-4 p-2",children:t("img",{className:"h-[70px] w-[70px] rounded-full ",src:I,alt:""})}),r("div",{class:"flex-1 md:px-3 md:text-left",children:[t("h4",{className:"text-xl font-semibold text-color-white md:mt-0",children:e.firmName}),t("div",{class:" flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start",children:r("span",{class:"card-subtitle text-slate-400 text-sm font-normal flex items-center md:mr-2",children:[t(A,{className:"text-2xl text-slate-500"}),r("span",{className:"text-lg",children:[" ","\xA0",e.firmRepresentative," |"," ",e.representativeDesignation]})]})})]}),t("div",{class:"flex justify-center mt-2",children:t(d,{to:`/viewProf/${e._id}`,class:"bg-[#00adee] hover:bg-[#6fcaeb] text-white font-bold px-3 py-2 rounded flex items-center",children:"View Profile"})}),t("div",{className:"flex justify-center mt-2 mx-3",children:k(e._id)?t(m,{children:t("button",{className:`text-white font-bold px-4 py-2 rounded flex items-center 
                    bg-danger`,onClick:n=>{N(e._id)},children:"Cancel"})}):t(m,{children:t("button",{className:`text-white font-bold px-4 py-2 rounded flex items-center 
                    bg-[#1fcfcd]`,onClick:n=>{_(e._id,e.firmName,e.firmRepresentative,e.representativeDesignation)},children:"+ Add"})})})]})})}))]})};export{M as default};
