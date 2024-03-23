
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-btn-up');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('del');
        openMenu.classList.add('del');
        closeMenu.classList.remove('del');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('del');
        openMenu.classList.remove('del');
        closeMenu.classList.add('del');
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
        el: document.querySelector('.up-btn-up'),
        addEventListener() {
            document.querySelector('.up-btn-up').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
