
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('navigation');
    const button = document.querySelector('.up-d');

    menu.addEventListener('click', () => {
        nav.classList.remove('invis');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('invis');
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
        el: document.querySelector('.up-d'),
        addEventListener() {
            document.querySelector('.up-d').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
