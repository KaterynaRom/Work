
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.UPtop');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        nav.classList.remove('nOnE');
        menu.classList.add('nOnE');
        closeMenu.classList.remove('nOnE');
        main.classList.add('main-blur');
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.add('nOnE');
        menu.classList.remove('nOnE');
        closeMenu.classList.add('nOnE');
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
        el: document.querySelector('.UPtop'),
        addEventListener() {
            document.querySelector('.UPtop').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

