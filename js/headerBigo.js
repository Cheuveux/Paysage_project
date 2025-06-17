const hamburger = document.getElementById('drawerHamburger');
const drawer = document.getElementById('drawerMenu');

if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
        const isOpen = drawer.style.display === 'flex';
        drawer.style.display = isOpen ? 'none' : 'flex';
        hamburger.classList.toggle('active', !isOpen);

         // Animation GSAP uniquement à l'ouverture
        if (!isOpen) {
            gsap.fromTo(
                '#drawerMenu ul li',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power2.out" }
            );
        }
    });
    // Fermer le menu quand on clique sur un lien
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            drawer.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}


// Animation GSAP pour le défilement fluide des liens du menu mobile
document.querySelectorAll('.drawer-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                gsap.to(window, {
                    scrollTo: {
                        y: target,
                        offsetY: 50 // ajuste selon la hauteur de ton header
                    },
                    duration: 1,
                    ease: 'power2.inOut'
                });
            }
        }
        // Sinon, laisse le comportement normal
    });
});