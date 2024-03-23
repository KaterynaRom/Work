
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.re-start');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('delEL');
        menu.classList.add('delEL');
        closeMenu.classList.remove('delEL');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('delEL');
        menu.classList.remove('delEL');
        closeMenu.classList.add('delEL');
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
        el: document.querySelector('.re-start'),
        addEventListener() {
            document.querySelector('.re-start').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

