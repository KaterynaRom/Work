
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.uper');

    menu.addEventListener('click', () => {
        nav.classList.remove('inv');
    })

    closeMenu.addEventListener('click', () => {
        nav.classList.add('inv');
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
        el: document.querySelector('.uper'),
        addEventListener() {
            document.querySelector('.uper').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
