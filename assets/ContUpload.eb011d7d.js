import{r as d,j as a,a as e}from"./index.5a85093a.js";import"./index.esm.27038d76.js";import{L as o}from"./index.3c58e7a1.js";import"./iconBase.ebd08f81.js";const b=()=>{const[r,i]=d.exports.useState(null),[n,c]=d.exports.useState(null);return a("div",{className:"shadow-md p-4",children:[e("span",{className:"my-4 text-lg font-semibold text-slate-500",children:"Upload Documents"}),e("div",{className:"row mt-4",children:a("div",{className:"col-lg-12",children:[e("span",{className:"font-semibold",children:"PAN / Aadhar Card"}),a("div",{className:"border-dashed border-2 border-black-200 w-50 p-2 mt-2 flex justify-center",children:[a("label",{htmlFor:"fileInput3",className:"p-4 flex flex-col items-center cursor-pointer",children:[a("span",{className:"text-slate-400 text-6xl mb-2",children:[" ",e(o,{className:"text-slate-400 text-6xl mb-2"})]}),e("span",{className:"text-center text-sm text-slate-400",children:"Drag a file here or browse a file to upload"})]}),e("input",{type:"file",id:"fileInput3",className:"hidden",onChange:s=>{const t=s.target.files[0],l=new FileReader;l.onloadend=()=>{i(l.result)},t?l.readAsDataURL(t):i(null)}})]}),r&&e("div",{className:"mt-3 w-[80px]",children:e("img",{src:r,alt:"Preview",className:"preview-image "})})]})}),a("div",{className:"row mt-4",children:[a("div",{className:"col-lg-12",children:[e("span",{className:"font-semibold",children:"Shop Act License"}),a("div",{className:"border-dashed border-2 border-black-200 w-50 p-2 mt-2 flex justify-center",children:[a("label",{htmlFor:"fileInput4",className:"p-4 flex flex-col items-center cursor-pointer",children:[a("span",{className:"text-slate-400 text-6xl mb-2",children:[" ",e(o,{className:"text-slate-400 text-6xl mb-2"})]}),e("span",{className:"text-center text-sm text-slate-400",children:"Drag a file here or browse a file to upload"})]}),e("input",{type:"file",id:"fileInput4",className:"hidden",onChange:s=>{const t=s.target.files[0],l=new FileReader;l.onloadend=()=>{c(l.result)},t?l.readAsDataURL(t):c(null)}})]}),n&&e("div",{className:"mt-3 w-[80px]",children:e("img",{src:n,alt:"Preview",className:"preview-image "})})]}),e("button",{type:"submit",className:"btn bg-[#00adee] hover:bg-[#6fcaeb] text-white text-lg mt-4",children:"Submit"})]})]})};export{b as default};
