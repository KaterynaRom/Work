
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.upup');
    const head = document.getElementById('head');

    menu.addEventListener('click', () => {
        nav.classList.remove('none-el');
        menu.classList.add('none-el');
        closeMenu.classList.remove('none-el');
        button.style.zIndex = '-1';
        head.style.background = 'rgba(50, 57, 65, 0.9)';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-el');
        menu.classList.remove('none-el');
        closeMenu.classList.add('none-el');
        button.style.zIndex = '1';
        head.style.background = 'none';
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
        el: document.querySelector('.upup'),
        addEventListener() {
            document.querySelector('.upup').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
