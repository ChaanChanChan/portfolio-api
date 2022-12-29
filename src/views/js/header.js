const name = new SplitType('#alexander')
const surname = new SplitType('#romero')
const full = new SplitType('#full')
const dev = new SplitType('#dev')

// ANIMATION CONTROLLS & TIMELINE
gsap.timeline({ defaults: { duration: .2 } })
    .from('.triangle', {
        ease: 'power1',
        y: '250%',
        opacity: 0,
        duration: 1,
        rotation: 90
    })
    .from('#alexander .char', {
        ease: "power1",
        y: '20%',
        opacity: 0,
        stagger: .05,
    }, 1, 1)
    .from('#romero .char', {
        ease: "power1",
        y: '20%',
        opacity: 0,
        stagger: .05
    })
    .from('#full .char', {
        ease: "power1",
        y: '20%',
        opacity: 0,
        stagger: .05
    }, 1.13)
    .from('#dev .char', {
        ease: "power1",
        y: '20%',
        opacity: 0,
        stagger: .05
    }, 1.53)