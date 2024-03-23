
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.btn-upper');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('del-el');
        menu.classList.add('del-el');
        closeMenu.classList.remove('del-el');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('del-el');
        menu.classList.remove('del-el');
        closeMenu.classList.add('del-el');
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
        el: document.querySelector('.btn-upper'),
        addEventListener() {
            document.querySelector('.btn-upper').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

