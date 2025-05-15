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
            backgroundPosition: "100% 0%", // Simule un remplissage de haut en bas
            duration: 0.5, // Durée de l'animation
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