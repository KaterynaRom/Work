
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.btn-up-top');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('hidd');
        openMenu.classList.add('hidd');
        closeMenu.classList.remove('hidd');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hidd');
        openMenu.classList.remove('hidd');
        closeMenu.classList.add('hidd');
        button.style.zIndex = '1';
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
        el: document.querySelector('.btn-up-top'),
        addEventListener() {
            document.querySelector('.btn-up-top').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
