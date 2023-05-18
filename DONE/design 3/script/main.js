
    const menu = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const button = document.querySelector('.upward');

    menu.addEventListener('click', () => {
        nav.classList.toggle('stealth');
        document.body.classList.toggle('hidden');
    })

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    }

    const btnUp = {
        el: document.querySelector('.upward'),
        addEventListener() {
            document.querySelector('.upward').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
