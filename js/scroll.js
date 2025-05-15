

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.from('#section2', {
    x: -500,
    scrollTrigger: {
        trigger: '#section1', // Élément déclencheur
        start: 'top center',  // Début de l'animation (position de l'élément par rapport à la fenêtre)
        end: 'bottom top',    // Fin de l'animation
        scrub: true           // Synchronisation avec le défilement
    }
});