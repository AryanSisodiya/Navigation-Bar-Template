let div = document.getElementById('div');

// Close Burger
let closeBtn = document.getElementById('close-burger-li')
closeBtn.addEventListener('click', () => {
    div.style.animation = 'menu-close 2s ease-in-out';

});

// Open Burger
let openBtn = document.getElementById('open-burger');
openBtn.addEventListener('click', () => {
    div.style.animation = 'menu-open 2s ease-in-out';
})

