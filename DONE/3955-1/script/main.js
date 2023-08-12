
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('navigation');
    const button = document.querySelector('.up-unit');

    menu.addEventListener('click', () => {
        nav.classList.remove('invisible-unit');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('invisible-unit');
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
        el: document.querySelector('.up-unit'),
        addEventListener() {
            document.querySelector('.up-unit').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
