const buttonElement=document.querySelector('button');

const textElement=document.querySelector('.text-area');


buttonElement.addEventListener('click',()=>textElement.textContent="Button has been clicked.");

setTimeout(()=>{
textElement.textContent="";
},2000);