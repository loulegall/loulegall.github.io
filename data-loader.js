// Ce fichier est généré automatiquement pour le développement local
// Il contient les données de data.json pour éviter les problèmes CORS

// Fonction pour obtenir la langue actuelle (utilise window.currentLanguage si disponible, sinon localStorage)
function getCurrentLanguage() {
    if (window.currentLanguage) {
        return window.currentLanguage;
    }
    return localStorage.getItem('language') || 'fr';
}

// Données en français
const dataFr = {
  "personal": {
    "name": "Lou Le Gall",
    "title": "Ingénieur Informatique",
    "phone": "+33 6 95 88 07 10",
    "email": "lou.le gall59@gmail.com",
    "linkedin": "https://www.linkedin.com/in/lou-le-gall-9017551a3/",
    "github": "https://github.com/loulegall",
    "cv": "cv.pdf"
  },
  "navigation": {
    "menu": [
      { "text": "À propos", "href": "#about" },
      { "text": "Chiffres clés", "href": "#stats" },
      { "text": "Projets", "href": "#projects" },
      { "text": "Expériences", "href": "#experiences" },
      { "text": "Formations", "href": "#formations" },
      { "text": "Contact", "href": "#contact" },
      { "text": "Télécharger CV", "href": "cv.pdf", "download": true }
    ]
  },
  "quiz": {
    "button": "Testez vos connaissances sur moi !",
    "title": "Quiz sur Lou Le Gall",
    "questions": [
      {
        "question": "Quand Lou a besoin de refaire le monde (ou débugger sa journée), elle va plutôt :",
        "answers": [
          "Dans un bar random trouvé sur Google Maps",
          "À la Cabane, évidemment 🍻",
          "Rester chez elle avec du code",
          "Faire semblant d'être très occupée"
        ],
        "correct": 1
      },
      {
        "question": "Si Lou devait choisir un pays pour y vivre éternellement :",
        "answers": [
          "La France",
          "L'Irlande",
          "La Bretagne (oui, c'est un pays)",
          "N'importe où tant qu'il y a du soleil"
        ],
        "correct": 2
      },
      {
        "question": "La couleur qui représente le mieux Lou :",
        "answers": [
          "Noir (sobre, classique)",
          "Bleu corporate",
          "Vert développeur sérieux",
          "Coucher de soleil ultra saturé 🌅"
        ],
        "correct": 3
      },
      {
        "question": "Face à un bug incompréhensible, la réaction la plus probable de Lou :",
        "answers": [
          "Elle panique (intérieurement)",
          "Elle accuse le framework",
          "Elle respire, puis ouvre la doc",
          "Elle dit : « intéressant… »"
        ],
        "correct": 3
      },
      {
        "question": "Le genre de projet qui motive vraiment Lou :",
        "answers": [
          "Un projet vite fait, pas trop réfléchi",
          "Un projet techniquement complexe mais inutile",
          "Un projet qui a un impact concret",
          "Un projet avec des slides très jolies"
        ],
        "correct": 2
      },
      {
        "question": "Quand Lou dit qu'elle est junior, ça veut surtout dire :",
        "answers": [
          "Qu'elle ne sait rien",
          "Qu'elle apprend vite",
          "Qu'elle pose beaucoup de questions",
          "Les réponses 2 et 3"
        ],
        "correct": 3
      }
    ],
    "messages": {
      "correct": "✅ Bonne réponse !",
      "incorrect": "❌ Mauvaise réponse. La bonne réponse était : {answer}",
      "final": {
        "title": "Quiz terminé !",
        "perfect": "🎉 Parfait ! Vous connaissez très bien Lou !",
        "excellent": "👏 Excellent ! Vous connaissez bien Lou !",
        "good": "👍 Bien joué ! Vous connaissez quelques choses sur Lou.",
        "continue": "💪 Continuez à explorer le site pour mieux connaître Lou !"
      },
      "buttons": {
        "next": "Question suivante",
        "restart": "Recommencer"
      }
    }
  },
  "sections": {
    "about": {
      "title": "À PROPOS",
      "contactInfo": [
        { "icon": "🖥️", "text": "Ingénieur Informatique" },
        { "icon": "📞", "text": "+33 6 95 88 07 10", "link": "tel:+33695880710" },
        { "icon": "✉️", "text": "lou.le gall59@gmail.com", "link": "mailto:lou.le gall59@gmail.com" },
        { "icon": "🔗", "text": "Profil LinkedIn", "link": "https://www.linkedin.com/in/lou-le-gall-9017551a3/" },
        { "icon": "🐱", "text": "Profil GitHub", "link": "https://github.com/loulegall" }
      ]
    },
    "skills": [
      {
        "icon": "⚡",
        "title": "Méthodologies & Gestion",
        "items": [
          "Méthodes Agiles : SCRUM, Kanban",
          "Projet entrepreneurial",
          "Pitching et communication d'entreprise",
          "Business model canvas, Design Thinking",
          "Outils de gestion (Trello, Notion, GitHub, Jira)"
        ]
      },
      {
        "icon": "💻",
        "title": "Développement",
        "items": [
          "Languages : HTML, CSS, Python, JavaScript",
          "Frameworks : React, React Native, Vue.js, Angular",
          "WordPress et Elementor",
          "BackEnd : REST API, CRUD, Java Spring Boot",
          "BDD : MySQL, PostgreSQL, MongoDB"
        ]
      },
      {
        "icon": "☁️",
        "title": "Infrastructure & DevOps",
        "items": [
          "Cloud : OpenStack, Azure, GCP, AWS",
          "Docker, CI/CD, GitLab, GitHub",
          "Ansible",
          "Monitoring : Prometheus, Grafana, Kibana"
        ]
      }
    ],
    "stats": {
      "title": "CHIFFRES CLÉS",
      "items": [
        { "value": 24, "label": "Années sur cette Terre" },
        { "value": 15, "label": "Sports essayés" },
        { "value": 1, "label": "Projet entrepreneurial" },
        { "value": 9, "label": "Pays visités" }
      ]
    },
    "projects": {
      "title": "PROJETS",
      "items": [
        {
          "icon": "📱",
          "title": "Application Mobile React Native",
          "description": "Développement d'une application mobile pour un projet de recherche universitaire en Irlande. Interface intuitive et fonctionnalités avancées pour la collecte de données.",
          "tags": ["React Native", "Mobile", "Recherche"]
        },
        {
          "icon": "🏃",
          "title": "Application Mobile de Sport",
          "description": "Création d'une application mobile de sport. Création de séances, suivie nutritionnelle, et suivi des performances. Intégration d'un agent IA.",
          "tags": ["React Native", "Supabase", "Figma"]
        },
        {
          "icon": "⚙️",
          "title": "Interface SAV",
          "description": "Conception et développement d'une interface complète pour le service après-vente d'une entreprise industrielle. Optimisation des processus et amélioration de l'efficacité.",
          "tags": ["Python", "Django"]
        }
      ]
    },
    "experiences": {
      "title": "EXPÉRIENCES",
      "items": [
        {
          "title": "DÉVELOPPEUSE FULLSTACK",
          "type": "CDI",
          "company": "Sopra Steria, Rennes(France)",
          "date": "Avril 2025 - Aujourd'hui",
          "description": "Projet de developpement frontend, backend et deploiement Cloud."
        },
        {
          "title": "DÉVELOPPEUSE FRONTEND",
          "type": "Stage de fin d'études",
          "company": "UCC (University College Cork), Cork (Irlande)",
          "date": "février 2024 - juillet 2024",
          "description": "Développement d'une application mobile React Native pour un projet de recherche universitaire. Collaboration avec une équipe internationale et mise en œuvre de fonctionnalités complexes pour la collecte et l'analyse de données."
        },
        {
          "title": "DÉVELOPPEUSE",
          "type": "Alternance",
          "company": "NextCog, Montpellier (France)",
          "date": "septembre 2022 - janvier 2024",
          "description": "Autonomie et responsabilité dans la gestion des tâches ainsi que dans l'initiation de nouvelles idées. Développement de solutions innovantes et participation active aux décisions techniques."
        },
        {
          "title": "DÉVELOPPEUSE WEB",
          "type": "Alternance",
          "company": "Demi-Sel, Quimper (France)",
          "date": "septembre 2021 - septembre 2022",
          "description": "Développement agile pour répondre aux demandes des clients en matière de contenu et de fonctionnalité de site web. Gestion de projets multiples et respect des délais."
        },
        {
          "title": "DÉVELOPPEUSE WEB",
          "type": "Stage de fin d'études",
          "company": "Groupe Asten, Brest (France)",
          "date": "avril 2021 - juin 2021",
          "description": "Création d'une interface complète pour le service après-vente de l'entreprise en utilisant Python et le framework Django. Amélioration significative des processus internes."
        }
      ]
    },
    "formations": {
      "title": "FORMATIONS",
      "items": [
        {
          "icon": "🎓",
          "title": "Master 2 - MAE Parcours Entrepreneuriat et Innovation",
          "school": "IGR IAE (École Universitaire de Management)",
          "location": "Rennes (France) - 2024",
          "description": "Gestion de projet, créativité, projets innovants, entrepreneuriat. Formation complète en management et innovation avec focus sur la création d'entreprise."
        },
        {
          "icon": "⚙️",
          "title": "ENSAT - Ingénieur par Apprentissage en Informatique",
          "school": "ENSAT (École Nationale Supérieure des Sciences Appliquées et de Technologie)",
          "location": "Lannion (France) - 2021 à 2024",
          "description": "Développement web, cloud computing, science des données, IA. Formation d'ingénieur en alternance combinant théorie et pratique professionnelle."
        },
        {
          "icon": "📡",
          "title": "DUT - Réseaux et Télécommunications",
          "school": "IUT DIJON",
          "location": "Auxerre (France) - 2019 à 2021",
          "description": "Formation technique complète en réseaux et télécommunications. Fondations solides en infrastructure réseau et systèmes de communication."
        }
      ]
    },
    "contact": {
      "title": "CONTACT",
      "form": {
        "emailLabel": "Email:",
        "messageLabel": "Message:",
        "submitButton": "Envoyer",
        "successMessage": "Message envoyé avec succès !",
        "errorMessage": "Erreur lors de l'envoi. Veuillez réessayer."
      }
    }
  },
  "footer": {
    "text": "Développé avec ❤️ par Lou Le Gall",
    "hosting": "Hébergé par GitHub"
  }
};

// Données en anglais
const dataEn = {
  "personal": {
    "name": "Lou Le Gall",
    "title": "Computer Engineer",
    "phone": "+33 6 95 88 07 10",
    "email": "lou.le gall59@gmail.com",
    "linkedin": "https://www.linkedin.com/in/lou-le-gall-9017551a3/",
    "github": "https://github.com/loulegall",
    "cv": "cv.pdf"
  },
  "navigation": {
    "menu": [
      { "text": "About", "href": "#about" },
      { "text": "Key Figures", "href": "#stats" },
      { "text": "Projects", "href": "#projects" },
      { "text": "Experience", "href": "#experiences" },
      { "text": "Education", "href": "#formations" },
      { "text": "Contact", "href": "#contact" },
      { "text": "Download CV", "href": "cv.pdf", "download": true }
    ]
  },
  "quiz": {
    "button": "Test your knowledge about me!",
    "title": "Quiz about Lou Le Gall",
    "questions": [
      {
        "question": "In which country did Lou complete her final internship?",
        "answers": ["France", "Ireland", "Spain", "Germany"],
        "correct": 1
      },
      {
        "question": "Which mobile framework did Lou use for her research project?",
        "answers": ["Flutter", "React Native", "Ionic", "Xamarin"],
        "correct": 1
      },
      {
        "question": "How many years of experience does Lou have?",
        "answers": ["2 years", "3 years", "4 years", "5 years"],
        "correct": 2
      },
      {
        "question": "In which city did Lou work at NextCog?",
        "answers": ["Paris", "Lyon", "Montpellier", "Toulouse"],
        "correct": 2
      },
      {
        "question": "Which programming language did Lou use to create the after-sales interface?",
        "answers": ["Java", "Python", "PHP", "Ruby"],
        "correct": 1
      }
    ],
    "messages": {
      "correct": "✅ Correct answer!",
      "incorrect": "❌ Wrong answer. The correct answer was: {answer}",
      "final": {
        "title": "Quiz completed!",
        "perfect": "🎉 Perfect! You know Lou very well!",
        "excellent": "👏 Excellent! You know Lou well!",
        "good": "👍 Well done! You know some things about Lou.",
        "continue": "💪 Keep exploring the site to get to know Lou better!"
      },
      "buttons": {
        "next": "Next question",
        "restart": "Restart"
      }
    }
  },
  "sections": {
    "about": {
      "title": "ABOUT",
      "contactInfo": [
        { "icon": "🖥️", "text": "Computer Engineer" },
        { "icon": "📞", "text": "+33 6 95 88 07 10", "link": "tel:+33695880710" },
        { "icon": "✉️", "text": "lou.le gall59@gmail.com", "link": "mailto:lou.le gall59@gmail.com" },
        { "icon": "🔗", "text": "LinkedIn Profile", "link": "https://www.linkedin.com/in/lou-le-gall-9017551a3/" },
        { "icon": "🐱", "text": "GitHub Profile", "link": "https://github.com/loulegall" }
      ]
    },
    "skills": [
      {
        "icon": "⚡",
        "title": "Methodologies & Management",
        "items": [
          "Agile Methods: SCRUM, Kanban",
          "Group project management (E-health)",
          "Entrepreneurial project",
          "Pitching and corporate communication",
          "Business model canvas, Design Thinking",
          "Project management tools (Trello, Notion, GitHub)"
        ]
      },
      {
        "icon": "💻",
        "title": "Development",
        "items": [
          "Languages: HTML, CSS, Python, JavaScript",
          "Frameworks: React, React Native",
          "WordPress and Elementor",
          "BackEnd: REST API, Database"
        ]
      },
      {
        "icon": "☁️",
        "title": "Infrastructure & DevOps",
        "items": [
          "Cloud: OpenStack, Azure, GCP",
          "Docker, CI/CD",
          "Development of innovative products/services"
        ]
      }
    ],
    "stats": {
      "title": "KEY FIGURES",
      "items": [
        { "value": 4, "label": "Years of experience" },
        { "value": 10, "label": "Projects completed" },
        { "value": 3, "label": "Companies" },
        { "value": 2, "label": "Countries (FR, IE)" }
      ]
    },
    "projects": {
      "title": "PROJECTS",
      "items": [
        {
          "icon": "📱",
          "title": "React Native Mobile Application",
          "description": "Development of a mobile application for a university research project in Ireland. Intuitive interface and advanced features for data collection.",
          "tags": ["React Native", "Mobile", "Research"]
        },
        {
          "icon": "🌐",
          "title": "Agile Web Development",
          "description": "Creation and maintenance of websites for various clients using an agile approach. Rapid adaptation to needs and delivery of customized solutions.",
          "tags": ["HTML/CSS", "JavaScript", "WordPress"]
        },
        {
          "icon": "⚙️",
          "title": "Django After-Sales Interface",
          "description": "Design and development of a complete interface for the after-sales service of an industrial company. Process optimization and efficiency improvement.",
          "tags": ["Python", "Django", "Backend"]
        },
        {
          "icon": "💼",
          "title": "Entrepreneurial Project",
          "description": "Development of an innovative project in the E-health field. Business model canvas, design thinking and presentation pitch.",
          "tags": ["Entrepreneurship", "E-health", "Innovation"]
        }
      ]
    },
    "experiences": {
      "title": "EXPERIENCE",
      "items": [
        {
          "title": "FRONTEND DEVELOPER",
          "type": "Final internship",
          "company": "UCC (University College Cork), Cork (Ireland)",
          "date": "February 2024 - July 2024",
          "description": "Development of a React Native mobile application for a university research project. Collaboration with an international team and implementation of complex features for data collection and analysis."
        },
        {
          "title": "DEVELOPER",
          "type": "Apprenticeship",
          "company": "NextCog, Montpellier (France)",
          "date": "September 2022 - January 2024",
          "description": "Autonomy and responsibility in task management as well as in initiating new ideas. Development of innovative solutions and active participation in technical decisions."
        },
        {
          "title": "WEB DEVELOPER",
          "type": "Apprenticeship",
          "company": "Demi-Sel, Quimper (France)",
          "date": "September 2021 - September 2022",
          "description": "Agile development to meet client demands for website content and functionality. Multiple project management and deadline compliance."
        },
        {
          "title": "WEB DEVELOPER",
          "type": "Final internship",
          "company": "Groupe Asten, Brest (France)",
          "date": "April 2021 - June 2021",
          "description": "Creation of a complete interface for the company's after-sales service using Python and the Django framework. Significant improvement in internal processes."
        }
      ]
    },
    "formations": {
      "title": "EDUCATION",
      "items": [
        {
          "icon": "🎓",
          "title": "Master 2 - MAE Entrepreneurship and Innovation Track",
          "school": "IGR IAE (University School of Management)",
          "location": "Rennes (France) - 2024",
          "description": "Project management, creativity, innovative projects, entrepreneurship. Complete training in management and innovation with focus on business creation."
        },
        {
          "icon": "⚙️",
          "title": "ENSAT - Computer Science Engineering by Apprenticeship",
          "school": "ENSAT (National School of Applied Sciences and Technology)",
          "location": "Lannion (France) - 2021 to 2024",
          "description": "Web development, cloud computing, data science, AI. Engineering training through apprenticeship combining theory and professional practice."
        },
        {
          "icon": "📡",
          "title": "DUT - Networks and Telecommunications",
          "school": "IUT DIJON",
          "location": "Auxerre (France) - 2019 to 2021",
          "description": "Complete technical training in networks and telecommunications. Solid foundations in network infrastructure and communication systems."
        }
      ]
    },
    "contact": {
      "title": "CONTACT",
      "form": {
        "emailLabel": "Email:",
        "messageLabel": "Message:",
        "submitButton": "Send",
        "successMessage": "Message sent successfully!",
        "errorMessage": "Error sending message. Please try again."
      }
    }
  },
  "footer": {
    "text": "Developed with ❤️ by Lou Le Gall",
    "hosting": "Hosted by GitHub"
  }
};

// Fonction pour mettre à jour les données selon la langue
function updateSiteData() {
    const lang = getCurrentLanguage();
    window.siteData = lang === 'en' ? dataEn : dataFr;
    if (document.documentElement) {
        document.documentElement.lang = lang;
    }
}

// Initialiser les données
updateSiteData();

// Exposer une fonction pour changer la langue (utilisée par content-loader.js)
window.switchLanguage = function(newLang) {
    localStorage.setItem('language', newLang);
    window.currentLanguage = newLang;
    updateSiteData();
    if (typeof populateContent === 'function') {
        populateContent();
    }
    if (typeof setupLanguageToggle === 'function') {
        setupLanguageToggle();
    }
};

// Ne pas déclencher automatiquement le remplissage si on est sur un serveur (GitHub Pages)
// content-loader.js s'en chargera
// Cette partie ne s'exécute que si le script est chargé manuellement en mode local
if (window.location.protocol === 'file:') {
    // Déclencher le remplissage du contenu si content-loader.js est déjà chargé
    if (typeof populateContent === 'function') {
        populateContent();
        if (typeof setupLanguageToggle === 'function') {
            setupLanguageToggle();
        }
    } else {
        // Attendre que content-loader.js soit chargé
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof populateContent === 'function') {
                populateContent();
                if (typeof setupLanguageToggle === 'function') {
                    setupLanguageToggle();
                }
            }
        });
    }
}
