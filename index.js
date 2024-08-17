const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        links.forEach(l => {
            l.classList.remove('active');
        });
        this.classList.add('active');
    });
});

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const aside = document.querySelector('aside');
const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () =>{
    aside.style.display = 'block';
});

closeBtn.addEventListener('click', () =>
{
    aside.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});




