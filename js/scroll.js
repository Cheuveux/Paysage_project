document.addEventListener('DOMContentLoaded', function() {
  
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

   // Animation d'apparition du main après chargement
    gsap.set('main', {opacity: 0, y: 40});
    window.addEventListener('load', () => {
        gsap.to('main', {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out"
        });
    });

// Scroll fluide pour le logo mobile
document.querySelectorAll('.header_logo_bigo a').forEach(logo => {
    logo.addEventListener('click', (e) => {
        const href = logo.getAttribute('href');
        if (href === "#") {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: {y: 0},
                duration: 1,
                ease: 'power2.inOut'
            });
        }
        // Sinon, laisse le comportement normal (changement de page)
    });
});
document.querySelectorAll('.header_logo_section a').forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
            scrollTo: {y: 0},
            duration: 1,
            ease: 'power2.inOut'
        });
    });
});

if (window.innerWidth <= 525) {
    // Titres
    gsap.utils.toArray('.header_section-services h1').forEach(h1 => {
        gsap.from(h1, { scrollTrigger: { trigger: h1, start: "top 80%", toggleActions: "play reverse play reverse" }, opacity: 0, y: 40, duration: 1, ease: "power2.out" });
    });
    // Textes
    gsap.utils.toArray('.services_1-text, .services_2-text, .services_3-text').forEach(txt => {
        gsap.from(txt, { scrollTrigger: { trigger: txt, start: "top 85%", toggleActions: "play none none reverse" }, opacity: 0, y: 40, duration: 1, ease: "power2.out" });
    });
    // Images
    gsap.utils.toArray('.services_1-img, .services_2-img, .services_3-img').forEach(img => {
        gsap.from(img, { scrollTrigger: { trigger: img, start: "top 90%", toggleActions: "play none none reverse" }, opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" });
    });
    // Boutons devis
    gsap.utils.toArray('.devis_button').forEach(btn => {
        gsap.from(btn, { scrollTrigger: { trigger: btn, start: "top 95%", toggleActions: "play none none reverse" }, opacity: 0, y: 30, duration: 0.8, ease: "power2.out" });
    });



} else {

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



/*Animation au scroll des éléments de la section services*/



    gsap.utils.toArray('.header_section-services h1').forEach(h1 => {
        gsap.from(h1, {
            scrollTrigger: {
                trigger: h1,
                end : "top -50%",
                toggleActions: "play reverse play reverse"
            },
             opacity: 0,
            y: -20,
            x: -40,
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
        x: 80,
      
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
        x: 20,
      
        duration: 1.5,
        ease: "power3.out"
});

   


gsap.from(".services_3-img", {
     scrollTrigger: {
            trigger: ".services_3-img",
    
            toggleActions: "play reverse play reverse"
            
        },
     
        opacity: 0,
        x: 20,
      
        duration: 1.5,
        ease: "power3.out"
});



}

/*Animation au scroll des éléments de la section apropos*/

gsap.from(
  ".apropos-text p",
  {
    scrollTrigger: {
      trigger: ".apropos-text",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    stagger: 0.18,
    duration: 0.8,
    ease: "power2.out"
  }
);

gsap.from(
  ".apropos-illu > div",
  {
    scrollTrigger: {
      trigger: ".apropos-illu",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 60,
    stagger: 0.25,
    duration: 1,
    ease: "power2.out"
  }
);

});





