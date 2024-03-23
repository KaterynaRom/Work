
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.top-btn');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('hidden-el');
        menu.classList.add('hidden-el');
        closeMenu.classList.remove('hidden-el');
        main.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hidden-el');
        menu.classList.remove('hidden-el');
        closeMenu.classList.add('hidden-el');
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
        el: document.querySelector('.top-btn'),
        addEventListener() {
            document.querySelector('.top-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
