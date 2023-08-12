
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('navigation');
    const button = document.querySelector('.up-section');

    menu.addEventListener('click', () => {
        nav.classList.remove('in-ble');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('in-ble');
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
        el: document.querySelector('.up-section'),
        addEventListener() {
            document.querySelector('.up-section').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
