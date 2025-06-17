const hamburger = document.getElementById('drawerHamburger');
const drawer = document.getElementById('drawerMenu');
const leaf = document.getElementById('drawerLeaf');

if (hamburger && drawer && leaf) {
    hamburger.addEventListener('click', () => {
        const isOpen = drawer.style.display === 'flex';
        drawer.style.display = isOpen ? 'none' : 'flex';
        hamburger.classList.toggle('active', !isOpen);

        // Affiche la feuille à la place du hamburger
        if (!isOpen) {
            leaf.style.display = 'block';
            setTimeout(() => leaf.classList.add('visible'), 10);
            hamburger.style.visibility = 'hidden';
        } else {
            leaf.classList.remove('visible');
            setTimeout(() => {
                leaf.style.display = 'none';
                hamburger.style.visibility = 'visible';
            }, 400);
        }
        // Animation GSAP pour les liens du menu
        if (!isOpen) {
            gsap.fromTo(
                '#drawerMenu ul li',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power2.out" }
            );
        }
    });

    // Fermer le menu quand on clique sur la feuille
    leaf.addEventListener('click', () => {
        drawer.style.display = 'none';
        leaf.classList.remove('visible');
        setTimeout(() => {
            leaf.style.display = 'none';
            hamburger.style.visibility = 'visible';
        }, 400);
        hamburger.classList.remove('active');
    });

    // Fermer le menu et scroll fluide quand on clique sur un lien
    drawer.querySelectorAll('a').forEach(link => {
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
            drawer.style.display = 'none';
            leaf.classList.remove('visible');
            setTimeout(() => {
                leaf.style.display = 'none';
                hamburger.style.visibility = 'visible';
            }, 400);
            hamburger.classList.remove('active');
        });
    });
}