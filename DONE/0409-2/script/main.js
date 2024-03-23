
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.butt-top');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-v');
        menu.classList.add('none-v');
        closeMenu.classList.remove('none-v');
        main.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-v');
        menu.classList.remove('none-v');
        closeMenu.classList.add('none-v');
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
        el: document.querySelector('.butt-top'),
        addEventListener() {
            document.querySelector('.butt-top').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
