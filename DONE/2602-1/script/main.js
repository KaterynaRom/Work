
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.nonB');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('hi-dd');
        menu.classList.add('hi-dd');
        closeMenu.classList.remove('hi-dd');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hi-dd');
        menu.classList.remove('hi-dd');
        closeMenu.classList.add('hi-dd');
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
        el: document.querySelector('.nonB'),
        addEventListener() {
            document.querySelector('.nonB').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

