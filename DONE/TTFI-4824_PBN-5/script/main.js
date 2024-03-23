
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.extraup-btn');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('notsee');
        openMenu.classList.add('notsee');
        closeMenu.classList.remove('notsee');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('notsee');
        openMenu.classList.remove('notsee');
        closeMenu.classList.add('notsee');
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
        el: document.querySelector('.extraup-btn'),
        addEventListener() {
            document.querySelector('.extraup-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
