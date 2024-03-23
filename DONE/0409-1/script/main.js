
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.but-top');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('hid');
        menu.classList.add('hid');
        closeMenu.classList.remove('hid');
        main.classList.add('main-blur');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hid');
        menu.classList.remove('hid');
        closeMenu.classList.add('hid');
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
        el: document.querySelector('.but-top'),
        addEventListener() {
            document.querySelector('.but-top').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
