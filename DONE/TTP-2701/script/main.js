
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up');

    menu.addEventListener('click', () => {
        nav.classList.remove('invisible');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('invisible');
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
        el: document.querySelector('.up'),
        addEventListener() {
            document.querySelector('.up').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
