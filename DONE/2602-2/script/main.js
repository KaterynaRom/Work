
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.btn_bot');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('inv-b');
        menu.classList.add('inv-b');
        closeMenu.classList.remove('inv-b');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('inv-b');
        menu.classList.remove('inv-b');
        closeMenu.classList.add('inv-b');
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
        el: document.querySelector('.btn_bot'),
        addEventListener() {
            document.querySelector('.btn_bot').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

