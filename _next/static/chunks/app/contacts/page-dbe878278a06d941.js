(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{6912:function(e,a,s){Promise.resolve().then(s.bind(s,259)),Promise.resolve().then(s.t.bind(s,2972,23))},171:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var t=s(7437),l=s(7648);function n(e){let{text:a,submit:s,onClick:n,link:i,className:r}=e,m="w-[250px] p-4 uppercase text-sm text-center bg-[#C0CF9D] transition-all duration-500 rounded-lg shadow-lg hover:bg-[#F8E5A5] ".concat(r);return(0,t.jsxs)(t.Fragment,{children:[!s&&!i&&(0,t.jsx)("button",{type:"button",className:m,onClick:n,children:a}),i&&(0,t.jsx)(l.default,{href:i,className:m,children:a}),s&&(0,t.jsx)("button",{type:"submit",className:m,children:a})]})}},259:function(e,a,s){"use strict";s.d(a,{default:function(){return o}});var t,l,n=s(7437),i=s(2265),r=s(4496),m=s(9501),c=s(171);function o(){let{register:e,handleSubmit:a,formState:{errors:s},clearErrors:t}=(0,m.cI)(),[l,o]=(0,i.useState)(""),[u,d]=(0,i.useState)(""),[x,h]=(0,i.useState)(""),[g,f]=(0,i.useState)(!1),[b,p]=(0,i.useState)(!1),v=async()=>{try{let e=await fetch("/api/sendMail",{method:"POST",headers:{"Content-Type":"application.json"},body:JSON.stringify({to:"belovezhim@gmail.com",subject:"Новое сообщение с сайта",body:"От: ".concat(l," <br /> E-mail: ").concat(u," <br /> ").concat(x)})}),a=await e.json();a.success?(o(""),d(""),h(""),p(!0),setTimeout(()=>p(!1),2e3)):(console.log(a.error),f(!0),setTimeout(()=>f(!1),8e3))}catch(e){console.error("Ошибка отправки сообщения:",e),f(!0),setTimeout(()=>f(!1),2e3)}},j="relative flex gap-2",N="max-w-96 w-full px-2 border border-solid border-gray-300 rounded-xl",w="-bottom-6 left-16 text-sm text-red-600";return(0,n.jsxs)("form",{onSubmit:a(v),className:"relative w-full md:w-[80%] p-4 flex flex-col gap-2 border border-solid rounded-xl text-lg",children:[(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("label",{htmlFor:"name",className:"min-w-12",children:"Имя:"}),(0,n.jsx)("input",{type:"text",id:"name",value:l,...e("name",{required:"Необходимо указать имя",minLength:{value:2,message:"Имя должно содержать 2 и более символов"},maxLength:{value:20,message:"Имя должно содержать не более 20 символов"},pattern:{value:/^[a-zA-Zа-яА-Я0-9- ]+$/,message:"Имя может содержать только буквы, цифры и тире"}}),onChange:e=>{o(e.target.value),t("name")},className:N})]}),s.name&&(0,n.jsx)("p",{className:w,children:s.name.message}),(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("label",{htmlFor:"email",className:"min-w-12",children:"Email:"}),(0,n.jsx)("input",{type:"email",id:"email",value:u,...e("email",{required:"Необходимо указать e-mail",maxLength:{value:320,message:"Email должен содержать не более 320 символов"},pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Неверный формат e-mail"}}),onChange:e=>{d(e.target.value),t("email")},className:N})]}),s.email&&(0,n.jsx)("p",{className:w,children:s.email.message}),(0,n.jsxs)("div",{className:"flex flex-col ".concat(j),children:[(0,n.jsx)("label",{htmlFor:"message",children:"Сообщение:"}),(0,n.jsx)("textarea",{id:"message",value:x,...e("message",{maxLength:{value:500,message:"Текст должен содержать не более 500 символов"},minLength:{value:10,message:"Текст должен содержать 10 и более символов"}}),onChange:e=>{h(e.target.value),t("message")},required:!0,className:"min-h-40 p-2 border border-solid rounded-xl"})]}),s.message&&(0,n.jsx)("p",{className:w,children:s.message.message}),b&&(0,n.jsx)("div",{className:"absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center",children:(0,n.jsx)(r.Z,{severity:"success",className:" text-center",children:"Сообщение отправлено"})}),g&&(0,n.jsx)("div",{className:"absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center",children:(0,n.jsx)(r.Z,{severity:"warning",className:" text-center",children:"Ошибка, пожалуйста, напишите на почту belovezhim@gmail.com"})}),(0,n.jsx)(c.Z,{text:"отправить сообщение",submit:!0})]})}(t=l||(l={})).NameRequired="Необходимо указать имя",t.NameFormat="Имя может содержать только буквы, цифры и тире",t.NameLengthMin="Имя должно содержать 2 и более символов",t.NameLengthMax="Имя должно содержать не более 20 символов",t.EmailRequired="Необходимо указать e-mail",t.EmailFormat="Неверный формат e-mail",t.EmailLength="Email должен содержать не более 320 символов",t.MessageLengthMin="Текст должен содержать 10 и более символов",t.MessageLengthMax="Текст должен содержать не более 500 символов"}},function(e){e.O(0,[972,495,442,971,117,744],function(){return e(e.s=6912)}),_N_E=e.O()}]);