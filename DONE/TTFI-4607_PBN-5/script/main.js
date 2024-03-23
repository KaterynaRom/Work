
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    const button = document.querySelector('.up-er');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-fun');
        menu.classList.add('none-fun');
        closeMenu.classList.remove('none-fun');
        main.classList.add('blur');
        logo.classList.add('none-fun');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-fun');
        menu.classList.remove('none-fun');
        closeMenu.classList.add('none-fun');
        main.classList.remove('blur');
        logo.classList.remove('none-fun');
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
        el: document.querySelector('.up-er'),
        addEventListener() {
            document.querySelector('.up-er').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
