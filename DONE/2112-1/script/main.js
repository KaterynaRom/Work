
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.UP');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('delete-r');
        menu.classList.add('delete-r');
        closeMenu.classList.remove('delete-r');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('delete-r');
        menu.classList.remove('delete-r');
        closeMenu.classList.add('delete-r');
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
        el: document.querySelector('.UP'),
        addEventListener() {
            document.querySelector('.UP').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

