
    const openMenu = document.getElementById('open');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('navig');
    const button = document.querySelector('.up-button');

    openMenu.addEventListener('click', () => {
        nav.classList.remove('invisible');
        closeMenu.classList.remove('invisible');
        openMenu.classList.add('invisible');
        document.body.style.overflow = "hidden";
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('invisible');
        closeMenu.classList.add('invisible');
        openMenu.classList.remove('invisible');
        document.body.style.overflow = "auto";
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
        el: document.querySelector('.up-button'),
        addEventListener() {
            document.querySelector('.up-button').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
