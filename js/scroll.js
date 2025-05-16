gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

// Animation GSAP pour le défilement fluide des liens du menu
document.querySelectorAll('.header_nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        const target = document.querySelector(link.getAttribute('href')); // Récupère la section cible
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target, // Cible la section
                    offsetY: 50 // Décalage pour éviter que le contenu soit masqué par le header
                },
                duration: 1, // Durée de l'animation (en secondes)
                ease: 'power2.inOut' // Courbe d'animation
            });
        }
    });
});

// Animation GSAP pour le défilement fluide du logo dans header_logo_section
document.querySelectorAll('.header_logo_section a').forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        const target = document.querySelector('.header_nav'); // Cible la section d'accueil
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target, // Cible la section
                    offsetY: 50 // Décalage pour éviter que le contenu soit masqué par le header
                },
                duration: 1, // Durée de l'animation (en secondes)
                ease: 'power2.inOut' // Courbe d'animation
            });
        }
    });
});

// Animation GSAP pour les boutons de devis
document.querySelectorAll('.devis_button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            backgroundPosition: "100% 0%", 
            duration: 0.3, // Durée de l'animation
            ease: "power1.inOut"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            backgroundPosition: "0% 0%", // Retour à l'état initial
            duration: 0.5,
            ease: "power1.inOut"
        });
    });
});


/*Animation au scroll des éléments de la sections services*/



    gsap.utils.toArray('.header_section-services h1').forEach(h1 => {
        gsap.from(h1, {
            scrollTrigger: {
                trigger: h1,
                end : "top -50%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 0,
            y: -200,
            x: -400,
            duration: 1.2,
            ease: "power3.out"
        });
    });
    gsap.from(".services_1-text", {
        scrollTrigger: {
            trigger: ".services_1",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0.5,
        x: -300,
    
       
        delay: 1,
        ease: "power3.out"
    });

    gsap.from(".services_1-img", {
        scrollTrigger: {
            trigger: ".services_1",
            toggleActions: "play reverse play reverse"
        
        },
        opacity: 0.5,
        x: 200,
        duration: 1,
        ease: "power3.out"
    });


gsap.from(".header_section-services .services_2", {
    scrollTrigger: {
        trigger: ".services_2",
        start: "top 120%", // quand le haut de .services_1 atteint 80% du viewport
        toggleActions: "play reverse play reverse"
    },
    opacity: 0.5,
    x: 200,
    y: 100,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".services_2-text", {
    scrollTrigger: {
        trigger: ".services_2",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0.5,
    x: -200,
   
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".services_2-img", {
    scrollTrigger: {
        trigger: ".services_2",
        toggleActions: "play reverse play reverse"
     
    },
    opacity: 0.5,
    x: 200,
    duration: 1,
    ease: "power3.out"
});