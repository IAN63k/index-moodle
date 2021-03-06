
const navbar = document.querySelector('.navbar'),
    helps = document.getElementById('menu-li'),
    itemsMenu = [...document.querySelectorAll('.item')],
    hamburger = document.querySelector('#menu-btn'),
    menu = document.querySelector('.menu'),
    logo = document.querySelector('.uniajc-logo'),
    email = document.querySelector('.email'),
    copyText = document.querySelector('#copy-text'),
    modal = document.querySelector('.modal-window'),
    imgBanner = [...document.querySelectorAll('.slide')];;

let counter = 2;

/** --------------------------------
 -- Transparencia del navBar  --
-------------------------------- */

window.addEventListener('scroll', (event) => {
    if (window.scrollY < 20) {
        navbar.classList.remove('bg-transparent');
        itemsMenu.forEach(i => { i.classList.add('cl-item') })
        logo.src = 'https://i.imgur.com/HoNwVDh.png';
    } else {
        navbar.classList.add('bg-transparent');
        itemsMenu.forEach(i => { i.classList.remove('cl-item') });
        logo.src = 'https://i.imgur.com/LnGfALA.png';
        menu.classList.add('bg-menu');
    }
});

/** --------------------------------
 -- Menu de hamburguesa  --
-------------------------------- */

toggleMenu = () => {
    menu.classList.toggle('show-menu');
    logo.src = 'https://i.imgur.com/LnGfALA.png';
    navbar.classList.add('bg-transparent');
}


/** --------------------------------
 -- Desplazamiento de banners cada X:sg  --
-------------------------------- */

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 3000);

// Video de banner
imgBanner[3].innerHTML = `
    <video autoplay muted loop id="myVideo" width="100%">
        <source src="./src/assets/img/banner/banner-4.mp4" type="video/mp4">
    </video>
`;


/** --------------------------------
 -- TODO: Desplazamiento de la página   --
-------------------------------- */


for (let i = 0; i < itemsMenu.length; i++) {
    itemsMenu[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        if (itemsMenu[i].innerHTML == 'Incio de sesión') {
            // scroll the window to down
            window.scrollTo(0, 500);
        }
        if (itemsMenu[i].innerHTML == 'Inicio') {
            // scroll the window to up
            window.scrollTo(0, 0);
        }
        if (itemsMenu[i].innerHTML == 'Ayudas') {
            // scroll the window to down
            window.scrollTo(0, 900);
        }
        if (itemsMenu[i].innerHTML == 'Contacto') {
            // scroll the window to down
            window.scrollTo(0, 2500);
        }
    });
}


/** --------------------------------
 -- Copiar al portapapeles el correo --
-------------------------------- */

const copy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

