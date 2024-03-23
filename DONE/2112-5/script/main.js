
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.BTN');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-ER');
        menu.classList.add('none-ER');
        closeMenu.classList.remove('none-ER');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-ER');
        menu.classList.remove('none-ER');
        closeMenu.classList.add('none-ER');
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
        el: document.querySelector('.BTN'),
        addEventListener() {
            document.querySelector('.BTN').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

