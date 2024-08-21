const links = document.querySelectorAll('.menu-main a');

links.forEach(link => {
    link.addEventListener('click', function(event){
        links.forEach(l => {
            l.classList.remove('active');  
        });
        this.classList.add('active');
    });   
});


const menu = document.querySelector('header .left span');
const aside = document.querySelector('aside');
const close = document.querySelector('.close');

menu.addEventListener('click', function(event){
aside.style.display = 'block';
});

close.addEventListener('click', function(event){
    aside.style.display = 'none';
});

const toggler = document.querySelector('.toggler');
const togglerLight = document.querySelector('.toggler span:nth-child(1)');
const togglerDark = document.querySelector('.toggler span:nth-child(2)');

toggler.addEventListener('click', function(event){
    document.body.classList.toggle('theme');
    togglerLight.classList.toggle('active');
    togglerDark.classList.toggle('active');
});
   