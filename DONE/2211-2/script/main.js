
    const openMenu = document.getElementById('open');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.To-up');
    const head = document.getElementById('head');

    openMenu.addEventListener('click', () => {
        nav.style.display = "flex";
        closeMenu.style.display = "flex";
        openMenu.style.display = "none";
        head.style.background = "#2A1B2E"
    })

    closeMenu.addEventListener('click', () => {
        nav.style.display = "none";
        closeMenu.style.display = "none";
        openMenu.style.display = "flex";
        head.style.background = "none"
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
        el: document.querySelector('.To-up'),
        addEventListener() {
            document.querySelector('.To-up').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

    const acc = document.getElementsByClassName("anchor-span");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.classList.toggle("minus");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
