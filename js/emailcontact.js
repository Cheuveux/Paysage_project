document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            emailjs.sendForm('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', this)
                .then(function() {
                    alert('Message envoyé avec succès !');
                    form.reset();
                }, function(error) {
                    alert('Erreur lors de l\'envoi du message.\n' + JSON.stringify(error));
                });
        });
    }
});