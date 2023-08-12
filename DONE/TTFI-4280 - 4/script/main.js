
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-e');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('change-e');
        openMenu.classList.add('change-e');
        closeMenu.classList.remove('change-e');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('change-e');
        openMenu.classList.remove('change-e');
        closeMenu.classList.add('change-e');
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
        el: document.querySelector('.up-e'),
        addEventListener() {
            document.querySelector('.up-e').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
