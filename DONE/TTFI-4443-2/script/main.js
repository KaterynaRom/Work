
    const openMenu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-btn-w');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('limp');
        openMenu.classList.add('limp');
        closeMenu.classList.remove('limp');
        button.style.zIndex = '-1';
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('limp');
        openMenu.classList.remove('limp');
        closeMenu.classList.add('limp');
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
        el: document.querySelector('.up-btn-w'),
        addEventListener() {
            document.querySelector('.up-btn-w').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
