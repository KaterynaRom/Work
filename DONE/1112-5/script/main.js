
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.uppb');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('hidden-er');
        menu.classList.add('hidden-er');
        closeMenu.classList.remove('hidden-er');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hidden-er');
        menu.classList.remove('hidden-er');
        closeMenu.classList.add('hidden-er');
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
        el: document.querySelector('.uppb'),
        addEventListener() {
            document.querySelector('.uppb').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

