
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-btn');

    menu.addEventListener('click', () => {
        nav.classList.remove('hide');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hide');
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
        el: document.querySelector('.up-btn'),
        addEventListener() {
            document.querySelector('.up-btn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
