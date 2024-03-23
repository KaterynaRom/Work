
    const openMenu = document.getElementById('open');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up-bTn');

    openMenu.addEventListener('click', () => {
        nav.style.display = "flex";
        closeMenu.style.display = "flex";
        openMenu.style.display = "none";
    })

    closeMenu.addEventListener('click', () => {
        nav.style.display = "none";
        closeMenu.style.display = "none";
        openMenu.style.display = "flex";
    });

    window.onscroll = function() {scrollFunction();};

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    }

    const btnUp = {
        el: document.querySelector('.up-bTn'),
        addEventListener() {
            document.querySelector('.up-bTn').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

