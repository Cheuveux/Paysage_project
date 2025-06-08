const hamburger = document.getElementById('drawerHamburger');
const drawer = document.getElementById('drawerMenu');

if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
        const isOpen = drawer.style.display === 'flex';
        drawer.style.display = isOpen ? 'none' : 'flex';
        hamburger.classList.toggle('active', !isOpen);
    });
    // Fermer le menu quand on clique sur un lien
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            drawer.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}