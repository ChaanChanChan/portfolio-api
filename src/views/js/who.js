gsap.registerPlugin(ScrollTrigger)

//TIMELINE OPENING ABOUT ME
gsap.timeline({
    scrollTrigger: {
        trigger: '.about-me-text',
        star: 'bottom center',
        end: 'center center',
        markers: 'true',
        scrub: 3,
        toggleActions: 'restart none none reset'
    }
})
    .from('.about-me-title', {
        y: -100,
        opacity: 0,
        ease: 'power3',
        duration: 1.2
    })
    .from('.about-me-triangle', {
        x: 200,
        opacity: 0,
        rotate: 300,
        ease: 'power3',
        duration: 1.2
    })
    .from('.about-me-who', {
        y: -100,
        opacity: 0,
        ease: 'power3',
        duration: 1.2
    })
    .from('.about-me-text', {
        x: 100,
        opacity: 0,
        ease: 'power3',
        duration: 1.2
    })



//WHO AM I ANIMATION
gsap.to('.about-me-who h1', {
    x: -275,
    stagger: .15,
    duration: 2,
    ease: "back.out(1.7)",
    repeat: -1,
    repeatDelay: 5
})
gsap.to('.about-me-text-mobile h1', {
    x: -210,
    stagger: .15,
    duration: 2,
    ease: "back.out(1.7)",
    repeat: -1,
    repeatDelay: 3.5
})