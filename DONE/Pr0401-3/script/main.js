
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.extraBTn');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('notshow');
        menu.classList.add('notshow');
        closeMenu.classList.remove('notshow');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('notshow');
        menu.classList.remove('notshow');
        closeMenu.classList.add('notshow');
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
        el: document.querySelector('.extraBTn'),
        addEventListener() {
            document.querySelector('.extraBTn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

