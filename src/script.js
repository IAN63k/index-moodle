
const navbar = document.querySelector('.navbar');
const helps = document.getElementById('menu-li');
const item = [...document.querySelectorAll('.item')];
const hamburger = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.uniajc-logo');
const email = document.querySelector('.email');
const copyText = document.querySelector('#copy-text');

let counter = 2;


// Transparencia del navBar

window.addEventListener('scroll', (event) => {
    if (window.scrollY < 20) {
        navbar.classList.remove('bg-transparent');
        item.forEach(i => { i.classList.add('cl-item') })
        logo.src = 'https://i.imgur.com/HoNwVDh.png';
    } else {
        navbar.classList.add('bg-transparent');
        item.forEach(i => { i.classList.remove('cl-item') });
        logo.src = 'https://i.imgur.com/LnGfALA.png';
        menu.classList.add('bg-menu');
    }
});

// Menu de hamburguesa

toggleMenu = () => {
    menu.classList.toggle('show-menu');
    logo.src = 'https://i.imgur.com/LnGfALA.png';
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


// Copiar al portapapeles el correo.

const copy = (text) => {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

