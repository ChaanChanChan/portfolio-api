gsap.registerPlugin(ScrollTrigger)

gsap.to('.about-me-who h1', {
    x: -275,
    stagger: .15,
    duration: 2,
    ease: "back.out(1.7)",
    repeat: -1,
    repeatDelay: 5
})

gsap.to('.about-me-triangle', {
    scrollTrigger: {
        trigger: '.about-me-triangle',
        toggleActions: 'restart none none none'
    },
    x: 0,
    opacity: 1,
    rotate: 180,
    ease: 'power3',
    duration: 1.5
})