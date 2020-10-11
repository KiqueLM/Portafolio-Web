const hamburger = document.querySelector('.header .nav-bar .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// MUESTRA EL MENU
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

//CIERRA EL MENU AL DAR CLICK EN UNA OPCION Y TE ENVIA A ESA SECCION
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// MUESTRA UN COLOR PARA EL FONDO DEL MENU A CIERTA ALTURA EN LA PAGINA
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 230) {
        header.style.backgroundColor = '#27162c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});