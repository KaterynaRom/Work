
    const menu = document.getElementById('burger');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.up3-top');
    menu.addEventListener('click', () => {
        nav.classList.remove('hide3-elem');
        button.style.zIndex = "-1";
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hide3-elem');
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
        el: document.querySelector('.up3-top'),
        addEventListener() {
            document.querySelector('.up3-top').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();