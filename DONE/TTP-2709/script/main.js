
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.uphill');

    menu.addEventListener('click', () => {
        nav.classList.remove('none');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('none');
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
        el: document.querySelector('.uphill'),
        addEventListener() {
            document.querySelector('.uphill').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
