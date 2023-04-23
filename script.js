let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hiro-text',{delay:200, origin:'top'})
sr.reveal('.hiro-img',{delay:300, origin:'top'})
sr.reveal('.icons',{delay:200, origin:'left'})
sr.reveal('.scroll-down',{delay:200, origin:'right'})