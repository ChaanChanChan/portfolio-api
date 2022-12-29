//SPLIT WELCOME MESSAGE
const welcome = new SplitType('#welcome')

//SPLIT TITLE
const name = new SplitType('#alexander')
const surname = new SplitType('#romero')
const full = new SplitType('#full')
const dev = new SplitType('#dev')

//TIMELINE INTRO
gsap.timeline()
    .to('.header-content', {
        display: "none"
    })
    //TRIANGLES
    .from('.triangle-left', {
        y: -400,
        duration: 2,
        opacity: 0,
        ease: "circ.out"
    }, 0)
    .from('.triangle-right', {
        y: 400,
        duration: 2,
        opacity: 0,
        ease: "circ.out"
    }, 0)
    .to('.triangle-left', {
        x: -300,
        rotate: 360,
        duration: 1,
        ease: "circ.out"
    }, 3)
    .to('.triangle-right', {
        x: 300,
        rotate: 360,
        duration: 1,
        ease: "circ.out"
    }, 3)

    //CHARACTERS
    .to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 3.5,
        duration: 0.05,
        ease: "back.out(1.7)"
    }, .5)


//ON CLICK PASS TO HEADER CONTENT FROM INTRO
const welcomeBtn = document.querySelector('#welcome')

welcomeBtn.addEventListener('click', () => {
    gsap.timeline()
        //CHARACTERS OUT
        .to('.char', {
            y: 120,
            stagger: 0.05,
            duration: 0.05,
            ease: "back.out(1.7)"
        })

        //TRIANGLES OUT
        .to('.triangle-left', {
            y: -400,
            duration: 2,
            opacity: 0,
            rotate: 180,
            ease: "back.out(1.7)"
        }, .5)
        .to('.triangle-right', {
            y: 400,
            duration: 2,
            opacity: 0,
            rotate: 180,
            ease: "back.out(1.7)"
        }, .5)

        //INTRO OUT
        .to('.intro', {
            display: "none"
        })

        //HEADER CONTAINER IN
        .to('.header-container', {
            height: "100vh"
        })

        //HEADER CONTENT IN
        .to('.header-content', {
            display: "flex",
            delay: 2
        })

        //CONTENT ANIMATION
        //TRIANGLE
        .from('.triangle', {
            ease: 'power1',
            y: '250%',
            opacity: 0,
            duration: 1,
            rotation: 90
        })
        //CHARACTERS
        .from('#alexander .char', {
            ease: "power1",
            y: '20%',
            opacity: 0,
            stagger: .05,
            duration: .2
        })
        .from('#romero .char', {
            ease: "power1",
            y: '20%',
            opacity: 0,
            stagger: .05,
            duration: .2
        })
        .from('#full .char', {
            ease: "power1",
            y: '20%',
            opacity: 0,
            stagger: .05,
            duration: .2
        })
        .from('#dev .char', {
            ease: "power1",
            y: '20%',
            opacity: 0,
            stagger: .05,
            duration: .2
        })
})