
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    const button = document.querySelector('.btn-up');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-er');
        menu.classList.add('none-er');
        closeMenu.classList.remove('none-er');
        main.classList.add('main-blur');
        logo.classList.add('none-er');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-er');
        menu.classList.remove('none-er');
        closeMenu.classList.add('none-er');
        main.classList.remove('main-blur');
        logo.classList.remove('none-er');
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
        el: document.querySelector('.btn-up'),
        addEventListener() {
            document.querySelector('.btn-up').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
