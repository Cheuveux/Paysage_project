gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

// Animation GSAP pour le défilement fluide des liens du menu
document.querySelectorAll('.header_nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // Si c'est une ancre interne, on empêche le comportement par défaut et on scroll
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                gsap.to(window, {
                    scrollTo: {
                        y: target,
                        offsetY: 50
                    },
                    duration: 1,
                    ease: 'power2.inOut'
                });
            }
        }
        // Sinon (lien externe ou autre page), on laisse le comportement normal
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
  

    gsap.from(".services_1-img", {
        scrollTrigger: {
            trigger: ".services_1-img",
            end : "bottom 10%",
            toggleActions: "play reverse play reverse"
            
        },
     
        opacity: 0,
        x: 200,
      
        duration: 1.5,
        ease: "power3.out"
    });




gsap.from(".services_2-img", {
     scrollTrigger: {
            trigger: ".services_2-img",
            end : "bottom 10%",
            toggleActions: "play reverse play reverse"
            
        },
        opacity: 0,
        x: 200,
      
        duration: 1.5,
        ease: "power3.out"
});

   


gsap.from(".services_3-img", {
     scrollTrigger: {
            trigger: ".services_3-img",
    
            toggleActions: "play reverse play reverse"
            
        },
     
        opacity: 0,
        x: 200,
      
        duration: 1.5,
        ease: "power3.out"
});