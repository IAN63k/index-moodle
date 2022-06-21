
const navbar    = document.querySelector('.navbar');
const helps     = document.getElementById('menu-li');
const item      = [...document.querySelectorAll('.item')];
const hamburger = document.querySelector('#menu-btn');
const menu      = document.querySelector('.menu');

let counter = 2;


// Transparencia del navBar

window.addEventListener('scroll', (event) => {
    if (window.scrollY < 20) {
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
    }
});

// Menu de hamburguesa

toggleMenu = () => {
    menu.classList.toggle('show-menu');
    navbar.classList.add('bg-transparent');
}


//  Sliders automatico 

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 8000);


// Desplazamiento de la página

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        if (item[i].innerHTML == 'Incio de sesión') {
            // scroll the window to down
            window.scrollTo(0, 500);
        }
        if (item[i].innerHTML == 'Inicio') {
            // scroll the window to up
            window.scrollTo(0, 0);
        }
        if (item[i].innerHTML == 'Ayudas') {
            // scroll the window to down
            window.scrollTo(0, 900);
        }
        if (item[i].innerHTML == 'Contacto') {
            // scroll the window to down
            window.scrollTo(0, 2500);
        }
    });
}


