
gsap.registerPlugin(ScrollTrigger) 

gsap.to('#section1', {
    scrollTrigger: '#section1', // start animation when ".box" enters the viewport
    x: 500
});