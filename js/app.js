const hamburguer = document.querySelector('#hamburguesa');
const menu = document.querySelector('.lista-ul');
const tamanomenu = document.querySelector('.menu-navegacion');
const logomenu = document.querySelector('.logo-menu');
const marginTopMenu = document.querySelectorAll('.margin-top-menu');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("show");
});


window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY
    if(scroll>20){
        tamanomenu.style.height = '70px';
        logomenu.style.maxWidth = '70px';
        tamanomenu.style.backgroundColor= 'rgb(255, 192, 203)';
        menu.classList.add('lista-ul-scroll');
    }else{
        tamanomenu.style.height = '100px';
        tamanomenu.style.backgroundColor= 'rgba(255, 192, 203, 0.767)';
        logomenu.style.maxWidth = '100px';
        menu.classList.remove('lista-ul-scroll');
    }
})

/* window.addEventListener('scroll', ()=>{
    marginTopMenu.forEach(marginTopMenuUnico =>{
        let scroll = window.scrollY
        if(scroll>20){
            marginTopMenuUnico.style.paddingTop = '0';
        }else{
            marginTopMenuUnico.style.paddingTop = '40px';
        }
    })  
}) */