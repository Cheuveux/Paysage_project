// Animation GSAP pour les item du nav

document.querySelectorAll('.header_nav li').forEach(li => {
    li.addEventListener('mouseenter', () => {
        gsap.to(li.querySelector('a'), {
            y: -8,
            fontWeight:"900",
            fontSize:"1.6rem",
            color: "#A8C686", // vert clair
            duration: 0.3,
            ease: "power2.out"
        });
    });
    li.addEventListener('mouseleave', () => {
        gsap.to(li.querySelector('a'), {
            fontSize:"1rem",
            y: 0,
            color: "#E0E0D5", // couleur d'origine
            duration: 0.3,
            ease: "power2.out"
        });
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
         gsap.to(button, {
            borderWidth: "4px",
            borderColor: "#6C8350", // vert du background
            duration: 0.3,
            ease: "power1.inOut"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            backgroundPosition: "0% 0%", // Retour à l'état initial
            duration: 0.1,
            ease: "power1.inOut"
        });
         gsap.to(button, {
            borderWidth: "0px",
            borderColor: "transparent",
            duration: 0.1,
            ease: "power1.inOut"
        });
    });
});
