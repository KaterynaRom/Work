
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.main-Btn');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('nonE');
        menu.classList.add('nonE');
        closeMenu.classList.remove('nonE');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('nonE');
        menu.classList.remove('nonE');
        closeMenu.classList.add('nonE');
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
        el: document.querySelector('.main-Btn'),
        addEventListener() {
            document.querySelector('.main-Btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
