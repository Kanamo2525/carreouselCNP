# Carrousel @move² - CNP

Un carrousel web interactif basé sur les spécifications Figma pour présenter le parcours @move² avec ses différentes phases : Le forum d'écoute, Le forum d'action, et Le bilan.

## Structure du Projet

```
carreouselCNP/
├── index.html          # Page principale
├── css/
│   └── styles.css      # Styles CSS personnalisés
├── js/
│   └── carousel.js     # Logique du carrousel
├── assets/             # Ressources supplémentaires
├── images/             # Images et illustrations
└── README.md           # Documentation
```

## Fonctionnalités

### Navigation
- **Boutons fléchés** : Navigation gauche/droite avec des boutons visuels
- **Clavier** : Utilisation des touches flèches ← et →
- **Touch/Swipe** : Support tactile pour mobile et tablette
- **Points de progression** : Indicateurs visuels en bas de chaque slide

### Slides Incluses

1. **Slide Introduction** : Vue d'ensemble avec 3 cartes principales
   - Le forum d'écoute (5 étapes)
   - Le forum d'action (3 étapes)
   - Le bilan (2 étapes)

2. **Le Forum d'Écoute** (5 slides)
   - Recueil des idées
   - Synthèse des idées
   - Validation des synthèses
   - Volontariat
   - Les pistes d'engagement

3. **Le Forum d'Action** (3 slides)
   - Passage à l'action
   - Choix des actions
   - Plan d'actions

4. **Le Bilan** (2 slides)
   - Mesurez vos résultats
   - REX (Retour d'expérience)

**Total : 11 slides**

## Utilisation

### Démarrage Rapide

1. Ouvrez simplement `index.html` dans votre navigateur web
2. Aucune installation ou serveur requis pour la version de base

### Navigation

- Cliquez sur les flèches gauche/droite pour naviguer
- Utilisez les touches du clavier ← et →
- Sur mobile : glissez vers la gauche ou la droite
- Cliquez sur "Découvrir les étapes" pour passer à la première étape

## Personnalisation

### Couleurs

Les couleurs sont définies dans `css/styles.css` via des variables CSS :

```css
:root {
    --color-blue: #002364;    /* Forum d'écoute */
    --color-cyan: #39A8E5;    /* Forum d'action */
    --color-green: #00B4AA;   /* Le bilan */
    --color-bg-light: #F0F5F9;
    --color-white: #ffffff;
}
```

### Police

Le projet utilise **Rawline** de CDN Fonts (chargée automatiquement).
Voir [FONTS.md](FONTS.md) pour plus de détails sur la typographie.

### Animations

Les animations de transition sont configurables via la variable `--transition-speed` :

```css
:root {
    --transition-speed: 0.5s;
}
```

### Auto-play (Optionnel)

Pour activer le défilement automatique, décommentez dans `js/carousel.js` :

```javascript
// Ligne ~174
carousel.startAutoPlay(5000); // 5 secondes entre chaque slide
```

## API JavaScript

Le carrousel expose une API publique accessible via `window.carousel` :

```javascript
// Obtenir le slide actuel
carousel.getCurrentSlide();

// Nombre total de slides
carousel.getTotalSlides();

// Naviguer vers un slide spécifique
carousel.goToSlide(3);

// Navigation
carousel.nextSlide();
carousel.previousSlide();

// Auto-play
carousel.startAutoPlay(5000);
carousel.stopAutoPlay();
```

## Responsive Design

Le carrousel s'adapte automatiquement aux différentes tailles d'écran :

- **Desktop** (> 1200px) : Layout complet avec 3 cartes côte à côte
- **Tablet** (768px - 1200px) : Layout adapté avec slides verticales
- **Mobile** (< 768px) : Layout optimisé avec cartes empilées

## Compatibilité Navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Opera (dernières versions)

## Ajout d'Illustrations

Pour remplacer les espaces réservés par de vraies illustrations :

1. Placez vos images dans le dossier `images/`
2. Mettez à jour les éléments `.illustration-placeholder` dans `index.html`
3. Ou utilisez CSS pour définir des images de fond :

```css
.slide-right .illustration-placeholder {
    background-image: url('../images/votre-image.png');
    background-size: cover;
    background-position: center;
}
```

## Améliorations Futures

- [ ] Intégration des vraies illustrations SVG depuis Figma
- [ ] Animation de transition entre slides (slide, fade, etc.)
- [ ] Mode plein écran
- [ ] Navigation par section (Forum d'écoute, Action, Bilan)
- [ ] Indicateurs de progression par section
- [ ] Version avec framework (React, Vue, etc.)
- [ ] Accessibilité ARIA améliorée
- [ ] Tests unitaires

## Licence

Ce projet a été créé pour CNP basé sur les spécifications Figma.

## Support

Pour toute question ou problème, consultez la documentation ou contactez l'équipe de développement.
