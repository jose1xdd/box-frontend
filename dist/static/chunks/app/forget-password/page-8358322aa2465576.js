(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[744],{3051:function(e,a,t){Promise.resolve().then(t.bind(t,5472))},5472:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return LoginPage}});var n=t(7437),i=t(8962),l=t(243),s=t(1312),o=t(2265);function LoginPage(){let[e,a]=(0,o.useState)({email:""}),[t,r]=(0,o.useState)(!1),[c,d]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1),[x,f]=(0,o.useState)({title:"",message:"",imagen:""});function handleInput(e){let{name:t,value:n}=e.target;a(e=>({...e,[t]:n})),r(!1),d(!1)}function handleModalClose(){m(!1)}function handleSubmit(){if(""===e.email.trim()){r(!0);return}if(!isValidEmail(e.email)){d(!0);return}let a=i.find(a=>a["correo-electronico"]===e.email);a?f({title:"Correo enviado exitosamente",message:"Correo enviado satisfactoriamente, revisa la bandeja de entrada.",imagen:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}):f({title:"Usuario no registrado",message:"No hay ning\xfan usuario registrado, contacta con el administrador.",imagen:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"}),m(!0)}function isValidEmail(e){return e.includes("@")}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.l,{className:"flex flex-col space-y-4",title1:"",title2:"",title3:"Recuperar contrase\xf1a",onSubmit:handleSubmit,description:"",children:[(0,n.jsxs)("div",{className:"my-[10px] flex flex-col gap-4",children:[(0,n.jsx)(s.l.Input,{className:t?"border-red-500":"",label:"",name:"email",placeholder:"Ingresa tu correo...",onChange:handleInput,value:e.email,type:"text"}),t&&(0,n.jsx)("p",{className:"text-red-600",children:"El campo de correo no puede estar vac\xedo"}),c&&(0,n.jsx)("p",{className:"text-red-600",children:"Por favor, ingresa un correo v\xe1lido"})]}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(s.l.SubmitButton,{buttonText:"ENVIAR CORREO",handleButton:handleSubmit}),(0,n.jsx)(s.l.Footer,{description:"",link:"../login",textLink:"Volver a inicio"})]})]}),(0,n.jsx)(l.u,{isOpen:u,onClose:handleModalClose,title:x.title,imagen:x.imagen,children:(0,n.jsx)("p",{children:x.message})})]})}}},function(e){e.O(0,[326,520,971,472,560],function(){return e(e.s=3051)}),_N_E=e.O()}]);