
const menu = document.getElementById('burger');
const closeMenu = document.getElementById('close');
const nav = document.getElementById('nav');
const button = document.querySelector('.up-1');
const main = document.getElementById('main');

menu.addEventListener('click', () => {
    nav.classList.remove('inv');
    menu.classList.add('inv');
    closeMenu.classList.remove('inv');
    main.classList.add('main-blur');
})

closeMenu.addEventListener('click', () => {
    nav.classList.add('inv');
    menu.classList.remove('inv');
    closeMenu.classList.add('inv');
    main.classList.remove('main-blur');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}

const btnUp = {
    el: document.querySelector('.up-1'),
    addEventListener() {
        document.querySelector('.up-1').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

const acc = document.getElementsByClassName("accord");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.classList.toggle("minus");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
