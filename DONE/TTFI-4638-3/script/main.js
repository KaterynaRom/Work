
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.extra-button');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('change');
        openMenu.classList.add('change');
        closeMenu.classList.remove('change');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('change');
        openMenu.classList.remove('change');
        closeMenu.classList.add('change');
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
        el: document.querySelector('.extra-button'),
        addEventListener() {
            document.querySelector('.extra-button').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
