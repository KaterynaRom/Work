
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.uper-top');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-el');
        menu.classList.add('none-el');
        closeMenu.classList.remove('none-el');
        main.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-el');
        menu.classList.remove('none-el');
        closeMenu.classList.add('none-el');
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
        el: document.querySelector('.uper-top'),
        addEventListener() {
            document.querySelector('.uper-top').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();