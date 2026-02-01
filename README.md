# Portfolio de Lou Le Gall

Site portfolio personnel avec support multilingue (Français/Anglais).

## Fonctionnalités

- 🌐 **Multilingue** : Toggle pour basculer entre Français et Anglais
- 📱 **Responsive** : Design adaptatif pour tous les appareils
- 🎯 **Quiz interactif** : Testez vos connaissances sur Lou
- 📊 **Sections complètes** : À propos, Compétences, Projets, Expériences, Formations, Contact

## Structure du projet

- `index.html` : Structure HTML principale
- `style.css` : Styles CSS avec design moderne
- `script.js` : Scripts JavaScript généraux
- `content-loader.js` : Chargeur de contenu dynamique depuis JSON
- `quiz.js` : Logique du quiz interactif
- `data.json` : Données en français
- `data-en.json` : Données en anglais
- `data-loader.js` : Fallback pour développement local (mode file://)

## Utilisation

### En local (développement)

1. Ouvrez `index.html` directement dans votre navigateur
2. Le système détecte automatiquement le mode `file://` et utilise `data-loader.js`
3. Le toggle de langue fonctionne via `window.switchLanguage()`

### Sur GitHub Pages

1. Poussez le code sur votre dépôt GitHub
2. Activez GitHub Pages dans les paramètres du dépôt
3. Le système charge automatiquement `data.json` ou `data-en.json` selon la langue
4. Le toggle de langue recharge les fichiers JSON appropriés

## Fichiers importants

- `.nojekyll` : Désactive Jekyll sur GitHub Pages pour servir les fichiers statiques
- Les fichiers JSON (`data.json`, `data-en.json`) contiennent tout le contenu du site
- `data-loader.js` est uniquement utilisé en mode local pour éviter les problèmes CORS

## Personnalisation

Pour modifier le contenu du site, éditez les fichiers JSON :
- `data.json` : Contenu en français
- `data-en.json` : Contenu en anglais

Toutes les sections sont modifiables dans ces fichiers JSON.
