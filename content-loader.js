// Chargeur de contenu depuis data.json
// Déclarer siteData dans window pour qu'il soit accessible globalement
if (!window.siteData) {
    window.siteData = null;
}
let siteData = window.siteData;
// Déclarer currentLanguage dans window pour éviter les conflits avec data-loader.js
if (!window.currentLanguage) {
    window.currentLanguage = localStorage.getItem('language') || 'fr';
}
let currentLanguage = window.currentLanguage;

async function loadContent() {
    try {
        console.log('Tentative de chargement des données...');
        
        // Vérifier si on est en mode file:// (local)
        const isLocal = window.location.protocol === 'file:';
        
        if (isLocal) {
            // Pour le développement local, utiliser une approche différente
            console.warn('Mode local détecté. Utilisation d\'une solution alternative...');
            await loadLocalData();
            return;
        }
        
        // Mettre à jour currentLanguage depuis window si disponible
        currentLanguage = window.currentLanguage || localStorage.getItem('language') || 'fr';
        
        // Charger le fichier JSON selon la langue
        const dataFile = currentLanguage === 'en' ? 'data-en.json' : 'data.json';
        const response = await fetch(dataFile, {
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Réponse reçue:', text.substring(0, 100));
        
        siteData = JSON.parse(text);
        window.siteData = siteData; // Rendre disponible globalement
        console.log('Données parsées avec succès:', siteData);
        
        if (!siteData || !siteData.personal) {
            throw new Error('Structure de données invalide');
        }
        
        populateContent();
        setupLanguageToggle();
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        console.error('Détails:', error.message, error.stack);
        
        // Essayer de charger les données localement en dernier recours (uniquement en mode local)
        const isLocal = window.location.protocol === 'file:';
        if ((error.message.includes('Failed to fetch') || error.message.includes('CORS') || error.message.includes('NetworkError')) && isLocal) {
            console.log('Tentative de chargement local...');
            await loadLocalData();
        } else if (isLocal) {
            // En mode local, toujours essayer data-loader.js en dernier recours
            console.log('Tentative de chargement local en dernier recours...');
            await loadLocalData();
        } else {
            // Sur GitHub Pages ou serveur, afficher un message d'erreur
            const errorDiv = document.createElement('div');
            errorDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;padding:20px;z-index:9999;font-family:monospace;';
            errorDiv.innerHTML = `Erreur de chargement des données: ${error.message}. Vérifiez la console pour plus de détails.`;
            document.body.appendChild(errorDiv);
        }
    }
}

// Fonction pour charger les données localement (solution de secours pour mode file://)
async function loadLocalData() {
    console.log('Chargement local via data-loader.js...');
    
    // Mettre à jour currentLanguage depuis window si disponible
    currentLanguage = window.currentLanguage || localStorage.getItem('language') || 'fr';
    window.currentLanguage = currentLanguage;
    
    // Vérifier si data-loader.js est déjà chargé et a défini window.siteData
    if (window.siteData && typeof window.siteData === 'object' && window.siteData.personal) {
        // Si les données sont déjà disponibles, les utiliser directement
        siteData = window.siteData;
        if (document.documentElement) {
            document.documentElement.lang = currentLanguage;
        }
        populateContent();
        setupLanguageToggle();
        return Promise.resolve();
    }
    
    // Sinon, charger le script data-loader.js
    return new Promise((resolve, reject) => {
        // Vérifier si le script est déjà présent dans le DOM
        const existingScript = document.querySelector('script[src="data-loader.js"]');
        if (existingScript) {
            // Le script est déjà chargé, attendre un peu et vérifier les données
            setTimeout(() => {
                if (window.siteData && typeof window.siteData === 'object' && window.siteData.personal) {
                    siteData = window.siteData;
                    if (document.documentElement) {
                        document.documentElement.lang = currentLanguage;
                    }
                    populateContent();
                    setupLanguageToggle();
                    resolve();
                } else {
                    // Réessayer après un délai plus long
                    setTimeout(() => {
                        if (window.siteData && typeof window.siteData === 'object' && window.siteData.personal) {
                            siteData = window.siteData;
                            if (document.documentElement) {
                                document.documentElement.lang = currentLanguage;
                            }
                            populateContent();
                            setupLanguageToggle();
                            resolve();
                        } else {
                            reject(new Error('Données non disponibles dans data-loader.js après chargement'));
                        }
                    }, 500);
                }
            }, 300);
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'data-loader.js';
        script.onload = () => {
            console.log('data-loader.js chargé avec succès');
            // Attendre un peu pour que les données soient disponibles
            setTimeout(() => {
                if (window.siteData && typeof window.siteData === 'object' && window.siteData.personal) {
                    siteData = window.siteData;
                    if (document.documentElement) {
                        document.documentElement.lang = currentLanguage;
                    }
                    populateContent();
                    setupLanguageToggle();
                    resolve();
                } else {
                    reject(new Error('Données non disponibles dans data-loader.js'));
                }
            }, 300);
        };
        script.onerror = () => {
            console.error('Impossible de charger data-loader.js');
            reject(new Error('Impossible de charger data-loader.js'));
        };
        document.head.appendChild(script);
    });
}

// Fonction de secours : charger les données depuis un script inline
function loadInlineData() {
    console.log('Chargement des données depuis data-loader.js...');
    // Charger le script data-loader.js qui contient les données
    const script = document.createElement('script');
    script.src = 'data-loader.js';
    script.onload = () => {
        console.log('data-loader.js chargé');
        if (window.siteData) {
            siteData = window.siteData;
            populateContent();
        }
    };
    script.onerror = () => {
        console.error('Impossible de charger data-loader.js');
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;background:orange;color:black;padding:20px;z-index:9999;font-family:monospace;';
        errorDiv.innerHTML = 'Mode développement local détecté. Pour tester le site, utilisez un serveur local (ex: python -m http.server) ou déployez sur GitHub Pages.';
        document.body.appendChild(errorDiv);
    };
    document.head.appendChild(script);
}

function populateContent() {
    // Utiliser window.siteData pour être sûr d'avoir les bonnes données
    const data = window.siteData || siteData;
    if (!data) {
        console.error('Aucune donnée disponible');
        return;
    }
    siteData = data; // Mettre à jour la variable locale
    console.log('Remplissage du contenu...');

    // Titre de la page
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = `${siteData.personal.name} - Portfolio`;
    }

    // Navigation
    const navMenu = document.querySelector('nav ul');
    if (navMenu && siteData.navigation && siteData.navigation.menu) {
        navMenu.innerHTML = siteData.navigation.menu.map(item => {
            const attrs = item.download ? 'id="downloadCv" class="download-cv" target="_blank" download' : '';
            return `<li><a href="${item.href}" ${attrs}>${item.text}</a></li>`;
        }).join('');
    } else {
        console.warn('Menu de navigation non trouvé ou données manquantes');
    }

    // Bouton Quiz
    const quizButton = document.getElementById('openQuiz');
    if (quizButton && siteData.quiz && siteData.quiz.button) {
        quizButton.textContent = siteData.quiz.button;
    } else {
        console.warn('Bouton quiz non trouvé ou données manquantes');
    }

    // Section À propos
    const aboutTitle = document.querySelector('.about-grid-header h2') || document.querySelector('#about h2');
    if (aboutTitle && siteData.sections && siteData.sections.about && siteData.sections.about.title) {
        aboutTitle.textContent = siteData.sections.about.title;
        console.log('Titre À propos rempli');
    } else {
        console.warn('Titre À propos non trouvé ou données manquantes', {aboutTitle, about: siteData.sections?.about});
    }

    // Informations de contact
    const contactContainer = document.querySelector('.contact-container');
    if (contactContainer && siteData.sections && siteData.sections.about && siteData.sections.about.contactInfo) {
        contactContainer.innerHTML = siteData.sections.about.contactInfo.map(item => {
            const link = item.link ? `<a href="${item.link}" class="contact-link">${item.text}</a>` : item.text;
            return `
                <div class="contact-item">
                    <span class="icon">${item.icon}</span>
                    <p class="p-about">${link}</p>
                </div>
            `;
        }).join('');
        console.log('Informations de contact remplies');
    } else {
        console.warn('Conteneur de contact non trouvé ou données manquantes', {contactContainer, sections: siteData.sections});
    }

    // Compétences
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        if (siteData.sections.skills && Array.isArray(siteData.sections.skills)) {
            skillsContainer.innerHTML = siteData.sections.skills.map(category => `
                <div class="skill-category">
                    <div class="skill-category-header">
                        <h3>${category.title}</h3>
                    </div>
                    <div class="skill-items">
                        ${category.items.map(item => `<div class="skill-item">${item}</div>`).join('')}
                    </div>
                </div>
            `).join('');
        } else {
            console.warn('Données de compétences manquantes ou invalides');
        }
    } else {
        console.warn('Conteneur de compétences non trouvé');
    }

    // Statistiques
    const statsSection = document.querySelector('#stats h2');
    const statsGrid = document.querySelector('.stats-grid');
    if (statsSection && siteData.sections && siteData.sections.stats) {
        statsSection.textContent = siteData.sections.stats.title;
    }
    if (statsGrid && siteData.sections && siteData.sections.stats && siteData.sections.stats.items) {
        statsGrid.innerHTML = siteData.sections.stats.items.map(stat => `
            <div class="stat-card">
                <div class="stat-number" data-target="${stat.value}">0</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
        console.log('Statistiques remplies');
    } else {
        console.warn('Section statistiques non trouvée ou données manquantes', {statsSection, statsGrid, stats: siteData.sections?.stats});
    }

    // Projets
    const projectsSection = document.querySelector('#projects h2');
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsSection && siteData.sections && siteData.sections.projects) {
        projectsSection.textContent = siteData.sections.projects.title;
    }
    if (projectsGrid && siteData.sections && siteData.sections.projects && siteData.sections.projects.items) {
        projectsGrid.innerHTML = siteData.sections.projects.items.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
        console.log('Projets remplis');
    } else {
        console.warn('Section projets non trouvée ou données manquantes', {projectsSection, projectsGrid, projects: siteData.sections?.projects});
    }

    // Expériences
    const experiencesSection = document.querySelector('#experiences h2');
    const timeline = document.querySelector('#experiences .timeline');
    if (experiencesSection && siteData.sections && siteData.sections.experiences) {
        experiencesSection.textContent = siteData.sections.experiences.title;
    }
    if (timeline && siteData.sections && siteData.sections.experiences && siteData.sections.experiences.items) {
        timeline.innerHTML = siteData.sections.experiences.items.map(exp => `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="experience-card">
                    <div class="experience-header">
                        <h3>${exp.title}</h3>
                        <span class="experience-type">${exp.type}</span>
                    </div>
                    <div class="experience-company">${exp.company}</div>
                    <div class="experience-date">${exp.date}</div>
                    <p class="experience-description">${exp.description}</p>
                </div>
            </div>
        `).join('');
        console.log('Expériences remplies');
    } else {
        console.warn('Section expériences non trouvée ou données manquantes', {experiencesSection, timeline, experiences: siteData.sections?.experiences});
    }

    // Formations
    const formationsSection = document.querySelector('#formations h2');
    const formationsGrid = document.querySelector('.formations-grid');
    if (formationsSection && siteData.sections && siteData.sections.formations) {
        formationsSection.textContent = siteData.sections.formations.title;
    }
    if (formationsGrid && siteData.sections && siteData.sections.formations && siteData.sections.formations.items) {
        formationsGrid.innerHTML = siteData.sections.formations.items.map(formation => `
            <div class="formation-card">
                <h3>${formation.title}</h3>
                <div class="formation-school">${formation.school}</div>
                <div class="formation-location">${formation.location}</div>
                <p class="formation-description">${formation.description}</p>
            </div>
        `).join('');
        console.log('Formations remplies');
    } else {
        console.warn('Section formations non trouvée ou données manquantes', {formationsSection, formationsGrid, formations: siteData.sections?.formations});
    }

    // Contact
    const contactSection = document.querySelector('#contact h2');
    const contactForm = document.getElementById('contact-form');
    if (contactSection && siteData.sections && siteData.sections.contact) {
        contactSection.textContent = siteData.sections.contact.title;
    }
    if (contactForm && siteData.sections && siteData.sections.contact && siteData.sections.contact.form) {
        const emailLabel = contactForm.querySelector('label[for="email"]');
        const messageLabel = contactForm.querySelector('label[for="message"]');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (emailLabel) emailLabel.innerHTML = `${siteData.sections.contact.form.emailLabel}<input type="email" name="email" id="email" class="contact-input" required aria-required="true" aria-describedby="emailHelp">`;
        if (messageLabel) messageLabel.innerHTML = `${siteData.sections.contact.form.messageLabel}<textarea name="message" id="message" class="contact-textarea" required aria-required="true" aria-describedby="messageHelp"></textarea>`;
        if (submitButton) submitButton.textContent = siteData.sections.contact.form.submitButton;
        console.log('Formulaire de contact rempli');
    } else {
        console.warn('Section contact non trouvée ou données manquantes', {contactSection, contactForm, contact: siteData.sections?.contact});
    }

    // Footer
    const footerText = document.querySelector('footer .footer-column:nth-child(2)');
    if (footerText && siteData.footer) {
        footerText.innerHTML = `<p>${siteData.footer.text}</p><p>${siteData.footer.hosting}</p>`;
        console.log('Footer rempli');
    } else {
        console.warn('Footer non trouvé ou données manquantes', {footerText, footer: siteData.footer});
    }
    
    // Liens footer
    const footerGithub = document.getElementById('footer-github');
    const footerLinkedin = document.getElementById('footer-linkedin');
    if (footerGithub && siteData.personal && siteData.personal.github) {
        footerGithub.href = siteData.personal.github;
    }
    if (footerLinkedin && siteData.personal && siteData.personal.linkedin) {
        footerLinkedin.href = siteData.personal.linkedin;
    }
    
    console.log('Remplissage terminé');

    // Réinitialiser les animations des statistiques après le chargement
    setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length > 0 && typeof animateCounter === 'function') {
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
        }
    }, 200);
}

function animateCounter(element) {
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
}

// Fonction pour configurer le toggle de langue
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    
    if (!langToggle || !langText) {
        console.warn('Éléments du toggle de langue non trouvés');
        return;
    }
    
    // Mettre à jour currentLanguage depuis window si disponible
    currentLanguage = window.currentLanguage || currentLanguage;
    
    // Mettre à jour le texte du bouton selon la langue actuelle
    langText.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
    
    // Mettre à jour l'attribut lang de la balise html
    if (document.documentElement) {
        document.documentElement.lang = currentLanguage;
    }
    
    // Supprimer les anciens listeners en remplaçant le bouton
    const newLangToggle = langToggle.cloneNode(true);
    langToggle.parentNode.replaceChild(newLangToggle, langToggle);
    
    // Récupérer le nouveau texte après le clonage
    const newLangText = document.getElementById('langText');
    if (newLangText) {
        newLangText.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
    }
    
        newLangToggle.addEventListener('click', async () => {
            // Changer la langue
            currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
            localStorage.setItem('language', currentLanguage);
            
            // Mettre à jour window.currentLanguage pour que data-loader.js puisse l'utiliser
            window.currentLanguage = currentLanguage;
            
            // Mettre à jour l'attribut lang de la balise html
            if (document.documentElement) {
                document.documentElement.lang = currentLanguage;
            }
            
            // Si on est en mode local (file://), utiliser la fonction switchLanguage de data-loader.js
            if (window.location.protocol === 'file:') {
                if (window.switchLanguage) {
                    window.switchLanguage(currentLanguage);
                } else {
                    // Si switchLanguage n'est pas disponible, recharger data-loader.js
                    await loadLocalData();
                }
                const updatedLangText = document.getElementById('langText');
                if (updatedLangText) {
                    updatedLangText.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
                }
            } else {
                // Sur GitHub Pages ou serveur, recharger les données avec la nouvelle langue
                await loadContent();
            }
        });
}

// Charger le contenu au chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
} else {
    // DOM déjà chargé
    loadContent();
}
