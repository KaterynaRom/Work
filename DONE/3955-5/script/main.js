
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('navigation');
    const button = document.querySelector('.up-block');

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
        el: document.querySelector('.up-block'),
        addEventListener() {
            document.querySelector('.up-block').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
