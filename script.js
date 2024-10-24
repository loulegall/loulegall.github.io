document.addEventListener('DOMContentLoaded', () => {
    // Animation du titre
    const title = document.querySelector('h1');
    title.classList.add('animate__animated', 'animate__fadeInDown');

    // Animation des compétences
    const skills = document.querySelectorAll('#skills li');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        setTimeout(() => {
            skill.style.transition = 'opacity 0.5s, transform 0.5s';
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Animation des projets au scroll
    const projects = document.querySelectorAll('.project'); // Assurez-vous que ces éléments existent
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target); // Arrête d'observer une fois l'animation jouée
            }
        });
    }, { threshold: 0.1 }); // Vous pouvez ajuster ce seuil

    projects.forEach(project => {
        observer.observe(project);
    });

    // Smooth scroll pour la navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gestion du menu
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('visible');
        menu.classList.toggle('hidden');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    });

    // Animation des éléments de la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');

    const showTimelineItems = () => {
        const scrollY = window.scrollY + window.innerHeight;

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top + window.scrollY;

            if (scrollY > itemTop + 100) {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
                item.style.animation = 'fadeIn 0.5s forwards'; // Ajout de l'animation
            }
        });
    };

    window.addEventListener('scroll', showTimelineItems);
    showTimelineItems(); // Pour afficher les éléments au chargement
});
