
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-top-b');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-b');
        menu.classList.add('none-b');
        closeMenu.classList.remove('none-b');
        main.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-b');
        menu.classList.remove('none-b');
        closeMenu.classList.add('none-b');
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
        el: document.querySelector('.up-top-b'),
        addEventListener() {
            document.querySelector('.up-top-b').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

