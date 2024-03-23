
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.uper-btn');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('changer');
        openMenu.classList.add('changer');
        closeMenu.classList.remove('changer');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('changer');
        openMenu.classList.remove('changer');
        closeMenu.classList.add('changer');
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
        el: document.querySelector('.uper-btn'),
        addEventListener() {
            document.querySelector('.uper-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
