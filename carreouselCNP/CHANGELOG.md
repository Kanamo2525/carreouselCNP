# 📝 Changelog - Carrousel CNP

## [2.1.1] - 2025-10-20 - Navigation Arrows Fix

### Fixed
- ✅ **Navigation arrows visibility** - Arrows now fully visible with balanced positioning
  - Body padding adjusted to `2rem 4rem` (optimal balance)
  - Removed wrapper padding (changed from `3rem` to `0`)
  - Button positions: `left: -3.5rem` and `right: -3.5rem`
  - **Problem solved**: Arrows fully visible without being too far from carousel
- 📱 **Responsive adjustments** maintained for all screen sizes
  - Desktop (> 1200px): Full padding and visibility
  - Tablet (768px - 1200px): Adjusted padding and button positions
  - Mobile (< 768px): Optimized for smaller screens

### Technical Details
```css
/* Desktop - Final optimal settings */
body { padding: 2rem 4rem; }
.app-wrapper { padding: 0 0; }
.prev-button { left: -3.5rem; }
.next-button { right: -3.5rem; }

/* Tablet */
@media (max-width: 1200px) {
    body { padding: 2rem 3rem; }
    .prev-button { left: -1.5rem; }
    .next-button { right: -1.5rem; }
}

/* Mobile */
@media (max-width: 768px) {
    body { padding: 1rem 2.5rem; }
    .prev-button { left: -1.25rem; }
    .next-button { right: -1.25rem; }
}
```

### Iteration Process
1. **First attempt**: Body 5rem, wrapper 3rem, arrows -2.5rem → arrows too far outside
2. **Final solution**: Body 4rem, wrapper 0, arrows -3.5rem → optimal balance

---

## [2.1.0] - 2025-10-20 - Illustrations Added

### Added
- ✨ **13 illustrations PNG** intégrées dans le projet
  - 3 illustrations pour les cartes d'introduction
  - 5 illustrations pour le Forum d'écoute (slides 1-5)
  - 3 illustrations pour le Forum d'action (slides 6-8)
  - 2 illustrations pour Le bilan (slides 9-10)
- 📄 **ILLUSTRATIONS.md** : Documentation complète sur les illustrations
  - Mapping des fichiers aux slides
  - Instructions d'intégration HTML/CSS
  - Guide d'optimisation et remplacement

### Changed
- 🎨 **CSS mis à jour** pour le rendu des illustrations
  - `.card-illustration` pour les cartes intro
  - `.slide-illustration` pour les slides détaillés
  - `object-fit: contain` pour préserver les proportions
  - Padding adaptatif selon la taille d'écran
- 🖼️ **HTML mis à jour** dans `index-improved.html`
  - Balises `<img>` ajoutées dans toutes les cartes
  - Balises `<img>` ajoutées dans tous les slides détaillés

### Technical Details
```
Taille totale des illustrations : 236 KB (13 fichiers PNG)
Emplacement : /images/*.png

Structure:
- introduction 1.png, 2.png, 3.png (cartes intro)
- FE 1.png à FE 5.png (Forum d'écoute)
- FA 6.png à FA 8.png (Forum d'action)
- Bilan 9.png, Bilan 10.png (Le bilan)
```

---

## [2.0.0] - 2025-10-20 - Font Update

### Changed
- ✅ **Police remplacée** : Raleway → Rawline
  - Mise à jour de `index.html`
  - Mise à jour de `index-improved.html`
  - Mise à jour de `css/styles.css`
  - Mise à jour de `css/styles-improved.css`
- 🔗 **Source de police** : Google Fonts → CDN Fonts
  - Nouveau CDN : https://fonts.cdnfonts.com/css/rawline
  - Preconnect ajouté pour performance

### Added
- 📄 **FONTS.md** : Documentation complète sur la typographie
  - Détails des variantes de police
  - Hiérarchie typographique
  - Instructions d'auto-hébergement
  - Optimisations de performance

### Technical Details
```
Avant:
<link href="https://fonts.googleapis.com/css2?family=Raleway..." rel="stylesheet">
--font-raleway: 'Raleway', sans-serif;

Après:
<link href="https://fonts.cdnfonts.com/css/rawline" rel="stylesheet">
--font-rawline: 'Rawline', sans-serif;
```

---

## [1.0.0] - 2025-10-20 - Initial Release

### Added
- ✨ **Version originale** du carrousel
  - `index.html` : Interface de base
  - `css/styles.css` : Styles CSS standard
  - `js/carousel.js` : Logique de navigation

- ⭐ **Version améliorée** du carrousel
  - `index-improved.html` : UI/UX moderne
  - `css/styles-improved.css` : Styles avancés
  - `js/carousel-improved.js` : JavaScript enrichi

### Features

#### Version Originale
- 11 slides interactives
- Navigation par flèches
- Support clavier et tactile
- Animations de transition
- Design responsive

#### Version Améliorée
- 📊 Compteur d'étapes
- 📈 Barre de progression animée
- 🔘 Indicateurs de points modernes
- 🎨 Gradients et ombres multiples
- ✨ Animations en cascade
- 🎯 API JavaScript étendue
- 💬 Informations console
- 📱 Responsive optimisé

### Structure
```
11 slides au total:
- 1 slide d'introduction
- 5 slides "Forum d'écoute" (bleu)
- 3 slides "Forum d'action" (cyan)
- 2 slides "Le bilan" (vert)
```

### Documentation
- 📖 **README.md** : Documentation complète
- 📖 **IMPROVEMENTS.md** : Détails des améliorations
- 📖 **SUMMARY.md** : Guide de démarrage rapide
- 📦 **package.json** : Configuration du projet

### Design
- Basé sur spécifications Figma
- Palette de couleurs CNP
- Typographie Raleway (remplacée en v2.0.0)
- Responsive mobile-first

---

## Roadmap Future

### Version 2.1.0 (Planifié)
- [ ] Intégration des vraies illustrations SVG depuis Figma
- [ ] Mode sombre / clair
- [ ] Transitions de slides personnalisées (slide, fade, zoom)
- [ ] Préchargement des slides

### Version 2.2.0 (Planifié)
- [ ] Navigation par miniatures
- [ ] Indicateurs de progression par section
- [ ] Mode plein écran
- [ ] Export PDF du parcours

### Version 3.0.0 (Planifié)
- [ ] Version React/Vue/Svelte
- [ ] API REST pour contenu dynamique
- [ ] Système de traduction i18n
- [ ] Tests automatisés (Jest/Cypress)
- [ ] Accessibilité ARIA complète (WCAG 2.1)

---

## Versions

| Version | Date | Changements Principaux |
|---------|------|------------------------|
| 2.0.0 | 2025-10-20 | Passage à Rawline, documentation typographie |
| 1.0.0 | 2025-10-20 | Version initiale avec 2 variants (original + amélioré) |

---

## Notes de Migration

### De v1.0.0 à v2.0.0

**Aucune action requise !**

Le changement de police est automatique. Les fichiers HTML et CSS ont été mis à jour pour utiliser Rawline depuis CDN Fonts.

#### Si vous avez des personnalisations
1. Vérifiez que vos styles personnalisés n'utilisent pas `--font-raleway`
2. Remplacez par `--font-rawline` si nécessaire
3. Testez dans votre navigateur

#### Performance
- Taille similaire (~45-60 KB pour 3 variantes)
- Temps de chargement comparable
- Pas d'impact sur les performances

---

**Projet maintenu et actif** 🚀
Pour signaler un bug ou suggérer une fonctionnalité, ouvrez une issue.
