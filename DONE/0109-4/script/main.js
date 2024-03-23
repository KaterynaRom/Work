
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-p');
    const main = document.getElementById('main');
    const logo = document.getElementById('logo');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-er');
        main.classList.add('main-blur');
        logo.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-er');
        main.classList.remove('main-blur');
        logo.classList.remove('main-blur');
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
        el: document.querySelector('.up-p'),
        addEventListener() {
            document.querySelector('.up-p').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
