
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-');
    menu.addEventListener('click', () => {
        nav.classList.remove('none-o');
        menu.classList.add('none-o');
        closeMenu.classList.remove('none-o');
    });
    closeMenu.addEventListener('click', () => {
        nav.classList.add('none-o');
        menu.classList.remove('none-o');
        closeMenu.classList.add('none-o');
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
        el: document.querySelector('.up-'),
        addEventListener() {
            document.querySelector('.up-').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

