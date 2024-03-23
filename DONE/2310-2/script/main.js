
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.extra-btn');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('display-none');
        menu.classList.add('display-none');
        closeMenu.classList.remove('display-none');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('display-none');
        menu.classList.remove('display-none');
        closeMenu.classList.add('display-none');
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
        el: document.querySelector('.extra-btn'),
        addEventListener() {
            document.querySelector('.extra-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

