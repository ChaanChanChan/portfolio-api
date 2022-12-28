//SPLIT THE NAME IN HTML TAGS
const name = new SplitType('#name')

//ANIMATION CONTROLLS
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 3.5,
    duration: 0.01
});

//ON CLICK START
const nameBtn = document.querySelector('#name')

nameBtn.addEventListener('click', () => {
    document.querySelector('.cover').classList.add('blacked')
    setTimeout(() => {
        document.querySelector('#intro').classList.add('inactive')
        document.querySelector('.cover').classList.add('inactive')
        document.querySelector('header').classList.remove('inactive')
    }, 1200)
})