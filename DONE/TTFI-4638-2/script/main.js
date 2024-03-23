
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-btn-ty');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('change-y');
        openMenu.classList.add('change-y');
        closeMenu.classList.remove('change-y');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('change-y');
        openMenu.classList.remove('change-y');
        closeMenu.classList.add('change-y');
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
        el: document.querySelector('.up-btn-ty'),
        addEventListener() {
            document.querySelector('.up-btn-ty').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
