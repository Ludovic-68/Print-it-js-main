# Print-it ! - Site vitrine d'impression

## Description

Site web statique en HTML, CSS et JavaScript pour une imprimerie fictive "Print it !". Le projet propose une page de présentation commerciale avec une bannière interactive, des sections de présentation, produits, services, contact et devis.

## Structure du projet

- `index.html` : page principale.
- `assets/style.css` : styles visuels, mise en page et présentation du carousel.
- `assets/script.js` : logique du slider de la bannière.
- `assets/images/` : images et icônes utilisées sur le site.

## Fonctionnalités

- bannière principale avec carousel manuel (flèches gauche/droite et points de navigation)
- sections d'information : "Qui sommes-nous ?", "Nos produits", "Pourquoi faire appel à nous ?" et "Contact"
- boutons de contact / devis via `mailto:`
- design simple avec typographie Google Fonts (`Roboto`, `Roboto Slab`)
- mise en page de type one-page avec zones de contenu et visuels attractifs

## Comment afficher le site

1. Ouvrir le fichier `index.html` dans un navigateur web moderne.
2. Aucun serveur, aucune installation nécessaire.
3. Le slider fonctionne grâce au fichier `assets/script.js`.

## Détails techniques

- Le CSS commence par un reset global et définit des variables de couleur :
  - `--primary-color` pour les boutons principaux
  - `--secondary-color` pour les boutons de devis
  - `--third-color` pour les sections en arrière-plan
- Le JavaScript gère un tableau `slides` et met à jour l'image, le texte et la sélection des points.
- Le carousel est contrôlé par les éléments `.arrow_left`, `.arrow_right` et les `div.dot` générés dynamiquement.

## Points d'amélioration

- améliorer la responsivité mobile du site 1
- ajouter une navigation fixe ou des liens d'ancrage pour accéder rapidement aux sections 4
- éventuellement remplacer les liens `mailto:` par un formulaire de contact fonctionnel 6 (ouvrir un compte sur Emailjs)
- renommer `ReadMe.md` en `README.md` si vous voulez une meilleure compatibilité avec GitHub 5
- Rendre les dots actif 2
- Optimisation du code, une seule fonction pour flêche droite et gauche (savoir si l'evenement viens de gauche ou de droite) 3
- +++ SEO Lighthouse
 
## À savoir

- Le projet est prévu comme une maquette / site de démonstration, sans backend.
- Toutes les ressources sont locales, sauf les polices Google Fonts.
- Le fichier `index.html` contient déjà le balisage nécessaire pour la majorité des contenus et la page est prête à être consultée directement.

