
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.buttonUP');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('nnonee');
        menu.classList.add('nnonee');
        closeMenu.classList.remove('nnonee');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('nnonee');
        menu.classList.remove('nnonee');
        closeMenu.classList.add('nnonee');
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
        el: document.querySelector('.buttonUP'),
        addEventListener() {
            document.querySelector('.buttonUP').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

