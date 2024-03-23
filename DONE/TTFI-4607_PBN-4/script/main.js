
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    const button = document.querySelector('.upBTN');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-fix');
        menu.classList.add('none-fix');
        closeMenu.classList.remove('none-fix');
        main.classList.add('blur');
        logo.classList.add('none-fix');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-fix');
        menu.classList.remove('none-fix');
        closeMenu.classList.add('none-fix');
        main.classList.remove('blur');
        logo.classList.remove('none-fix');
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
        el: document.querySelector('.upBTN'),
        addEventListener() {
            document.querySelector('.upBTN').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
