
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.main-btn');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('delete-this');
        menu.classList.add('delete-this');
        closeMenu.classList.remove('delete-this');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('delete-this');
        menu.classList.remove('delete-this');
        closeMenu.classList.add('delete-this');
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
        el: document.querySelector('.main-btn'),
        addEventListener() {
            document.querySelector('.main-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

