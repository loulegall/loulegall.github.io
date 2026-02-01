document.addEventListener('DOMContentLoaded', () => {
    // Animation des éléments au scroll
    const animatedElements = document.querySelectorAll('.project-card, .stat-card, .experience-card, .formation-card, .about-grid, .quiz-button');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Animation des statistiques (compteur)
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Gestion du menu
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('visible');
            menu.classList.toggle('hidden');
        });
    }

    if (closeMenu && menu) {
        closeMenu.addEventListener('click', () => {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
        });
    }

    // Smooth scroll pour la navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Fermer le menu après le clic
                    if (menu) {
                        menu.classList.remove('visible');
                        menu.classList.add('hidden');
                    }
                }
            }
        });
    });

    // Telechargement du CV (attendre que le menu soit chargé dynamiquement)
    setTimeout(() => {
        const downloadCvLink = document.getElementById('downloadCv');
        if (downloadCvLink) {
            downloadCvLink.addEventListener('click', function(event) {
                event.preventDefault();
                const link = document.createElement('a');
                link.href = 'cv.pdf';
                link.download = 'cv.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    }, 500);


    // Animation du titre au scroll
    window.addEventListener("scroll", function() {
        const title = document.querySelector('.main-title');
        if (title) {
            const scrollPosition = window.scrollY;
            const rotationAngle = scrollPosition * 0.5;
            
            title.style.background = `linear-gradient(${90 + rotationAngle}deg, #ff0080, #ff8c00, #ffe100)`;
            title.style.webkitBackgroundClip = 'text';
            title.style.backgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
        }
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(async response => {
                // Charger les messages depuis data.json
                let successMsg = 'Message envoyé avec succès !';
                let errorMsg = 'Erreur lors de l\'envoi. Veuillez réessayer.';
                
                try {
                    const dataResponse = await fetch('data.json');
                    const data = await dataResponse.json();
                    successMsg = data.sections.contact.form.successMessage;
                    errorMsg = data.sections.contact.form.errorMessage;
                } catch (e) {
                    // Utiliser les messages par défaut
                }
                
                if (response.ok) {
                    formResponse.textContent = successMsg;
                    formResponse.style.color = '#4caf50';
                    contactForm.reset();
                } else {
                    formResponse.textContent = errorMsg;
                    formResponse.style.color = '#f44336';
                }
            })
            .catch(async error => {
                let errorMsg = 'Erreur lors de l\'envoi. Veuillez réessayer.';
                try {
                    const dataResponse = await fetch('data.json');
                    const data = await dataResponse.json();
                    errorMsg = data.sections.contact.form.errorMessage;
                } catch (e) {
                    // Utiliser le message par défaut
                }
                formResponse.textContent = errorMsg;
                formResponse.style.color = '#f44336';
            });
        });
    }
});
