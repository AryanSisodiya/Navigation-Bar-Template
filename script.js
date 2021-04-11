let div = document.getElementById('div');

// Close Burger
let closeBtn = document.getElementById('close-burger-li')
closeBtn.addEventListener('click', () => {
    div.style.animation = 'menu-close 1s ease-in-out';
    setTimeout(() => {
        div.style.display = 'none'
    }, 1000);
    
});

// Open Burger
let openBtn = document.getElementById('open-burger');
openBtn.addEventListener('click', () => {
    div.style.display = 'flex'
    div.style.animation = 'menu-open 1s ease-in-out';
    div.style.right = '0px';
    // div.style.transition = '1s ease-in-out'
    // setTimeout(() => {
    //     div.style.display = 'flex'
    // }, 1000);
})

