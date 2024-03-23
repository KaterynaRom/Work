
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.lift');

    menu.addEventListener('click', () => {
        nav.classList.remove('hide-element');
        button.style.zIndex = "-1";
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hide-element');
        button.style.zIndex = "1";
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
        el: document.querySelector('.lift'),
        addEventListener() {
            document.querySelector('.lift').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
