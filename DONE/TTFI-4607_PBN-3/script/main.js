
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    const button = document.querySelector('.up-button');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none');
        menu.classList.add('none');
        closeMenu.classList.remove('none');
        main.classList.add('blur');
        logo.classList.add('none');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none');
        menu.classList.remove('none');
        closeMenu.classList.add('none');
        main.classList.remove('blur');
        logo.classList.remove('none');
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
        el: document.querySelector('.up-button'),
        addEventListener() {
            document.querySelector('.up-button').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
