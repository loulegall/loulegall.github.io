# Portfolio de Lou Le Gall

Site portfolio personnel avec support multilingue (Français/Anglais).

## Fonctionnalités

- 🌐 **Multilingue** : Toggle pour basculer entre Français et Anglais
- 📱 **Responsive** : Design adaptatif pour tous les appareils
- 🎯 **Quiz interactif** : Testez vos connaissances sur Lou
- 📊 **Sections complètes** : À propos, Compétences, Projets, Expériences, Formations, Contact

## Structure du projet

```
loulegall.github.io/
├── index.html              # Page principale HTML
├── .nojekyll               # Désactive Jekyll sur GitHub Pages
├── README.md               # Documentation du projet
│
├── css/                    # Styles CSS
│   └── style.css          # Feuille de style principale
│
├── js/                     # Scripts JavaScript
│   ├── content-loader.js   # Chargeur de contenu dynamique depuis JSON
│   ├── script.js          # Scripts généraux (navigation, animations, formulaire)
│   ├── quiz.js            # Logique du quiz interactif
│   └── data-loader.js     # Fallback pour développement local (mode file://)
│
├── data/                   # Données JSON
│   ├── data.json          # Contenu en français
│   └── data-en.json       # Contenu en anglais
│
└── assets/                 # Ressources statiques
    ├── images/            # Images du site
    │   ├── Baymax.png
    │   ├── Baymax.webp
    │   ├── github.png
    │   └── linkedin.png
    └── documents/          # Documents PDF
        └── cv.pdf
```

## Utilisation

### En local (développement)

1. Ouvrez `index.html` directement dans votre navigateur
2. Le système détecte automatiquement le mode `file://` et utilise `js/data-loader.js`
3. Le toggle de langue fonctionne via `window.switchLanguage()`

### Sur GitHub Pages

1. Poussez le code sur votre dépôt GitHub
2. Activez GitHub Pages dans les paramètres du dépôt
3. Le système charge automatiquement `data/data.json` ou `data/data-en.json` selon la langue
4. Le toggle de langue recharge les fichiers JSON appropriés

## Fichiers importants

- `.nojekyll` : Désactive Jekyll sur GitHub Pages pour servir les fichiers statiques
- Les fichiers JSON (`data/data.json`, `data/data-en.json`) contiennent tout le contenu du site
- `js/data-loader.js` est uniquement utilisé en mode local pour éviter les problèmes CORS

## Personnalisation

Pour modifier le contenu du site, éditez les fichiers JSON dans le dossier `data/` :
- `data/data.json` : Contenu en français
- `data/data-en.json` : Contenu en anglais

Toutes les sections sont modifiables dans ces fichiers JSON.

## Organisation des dossiers

- **`css/`** : Tous les fichiers de style
- **`js/`** : Tous les scripts JavaScript
- **`data/`** : Tous les fichiers de données JSON
- **`assets/`** : Toutes les ressources statiques (images, documents, etc.)

Cette organisation facilite la maintenance et la navigation dans le projet.
