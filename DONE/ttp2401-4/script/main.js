
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.help-btn');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-del');
        menu.classList.add('none-del');
        closeMenu.classList.remove('none-del');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-del');
        menu.classList.remove('none-del');
        closeMenu.classList.add('none-del');
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
        el: document.querySelector('.help-btn'),
        addEventListener() {
            document.querySelector('.help-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

