
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.top');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('conceal');
        menu.classList.add('conceal');
        closeMenu.classList.remove('conceal');
        main.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('conceal');
        menu.classList.remove('conceal');
        closeMenu.classList.add('conceal');
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
        el: document.querySelector('.top'),
        addEventListener() {
            document.querySelector('.top').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();