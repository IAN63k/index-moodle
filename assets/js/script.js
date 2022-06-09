

const helps = document.getElementById('menu-li');
const item = helps.getElementsByClassName('item');

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        if (item[i].classList.contains('active')) {
            if (i = 2) {
                // scroll the window to down
                window.scrollTo(0, 500);     
            }
            console.log('active');
            
        }
    });

}


    