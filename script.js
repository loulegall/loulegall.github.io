document.addEventListener('DOMContentLoaded', () => {
    // Animation du titre
    const title = document.querySelector('h1');
    title.classList.add('animate__animated', 'animate__fadeInDown');

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

    // Telechargement du CV
    document.getElementById('downloadCv').addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut
        const link = document.createElement('a');
        link.href = 'cv.pdf'; // Chemin vers le fichier
        link.download = 'cv.pdf'; // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

    window.addEventListener("scroll", function() {
        const title = document.querySelector('.main-title');
        const scrollPosition = window.scrollY;
    
        // Multiplie par un facteur plus grand pour augmenter la sensibilité de la rotation
        const rotationAngle = scrollPosition * 1; // Plus le facteur est grand, plus la rotation est rapide
    
        // Modifie le dégradé avec un angle dynamique
        title.style.background = `linear-gradient(${90 + rotationAngle}deg, #ff0080, #ff8c00, #ffe100)`;
    
        // Réapplique les styles pour Safari et les navigateurs compatibles
        title.style.webkitBackgroundClip = 'text';
        title.style.backgroundClip = 'text';
        title.style.webkitTextFillColor = 'transparent';
    }); 
      
});
