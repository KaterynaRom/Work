
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up1');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('hide-o');
        menu.classList.add('hide-o');
        closeMenu.classList.remove('hide-o');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hide-o');
        menu.classList.remove('hide-o');
        closeMenu.classList.add('hide-o');
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
        el: document.querySelector('.up1'),
        addEventListener() {
            document.querySelector('.up1').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

