const  menu=document.getElementById('menu');

window.addEventListener('scroll', function(){
    if(pageYOffset >= 150){
        menu.classList.add('menu__paralax');
    }
    else{
        menu.classList.remove('menu__paralax');
    }
});

