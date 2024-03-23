
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up2');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('nonnn');
        menu.classList.add('nonnn');
        closeMenu.classList.remove('nonnn');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('nonnn');
        menu.classList.remove('nonnn');
        closeMenu.classList.add('nonnn');
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
        el: document.querySelector('.up2'),
        addEventListener() {
            document.querySelector('.up2').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

