# 🔤 Fonts - Carrousel CNP

## Police Utilisée

Le projet utilise maintenant la police **Rawline** au lieu de Raleway.

### Rawline
- **Source** : CDN Fonts (https://fonts.cdnfonts.com/css/rawline)
- **Type** : Sans-serif moderne
- **Variantes utilisées** : Regular, Medium, Semibold, Bold, Black
- **Poids disponibles** : 400, 500, 600, 700, 900
- **Italique** : Supporté

## Chargement de la Police

### Dans le HTML
```html
<link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin>
<link href="https://fonts.cdnfonts.com/css/rawline" rel="stylesheet">
```

### Dans le CSS
```css
:root {
    --font-rawline: 'Rawline', sans-serif;
}

body {
    font-family: var(--font-rawline);
}
```

## Utilisation dans le Projet

### Version Améliorée (index-improved.html)
- **Titres principaux (H1)** : Rawline Black (900), uppercase
- **Sous-titres (H2)** : Rawline Regular (400), italic
- **Description en gras** : Rawline Bold (700), italic
- **Description** : Rawline Semibold (600), italic
- **Boutons** : Rawline Bold (700), uppercase

### Version Originale (index.html)
- **Titres** : Rawline Black (900)
- **Texte standard** : Rawline Medium (500)
- **Boutons** : Rawline Bold (700)

## Hiérarchie Typographique

```css
/* Main Title */
.main-title {
    font-family: 'Rawline', sans-serif;
    font-weight: 900; /* Black */
    font-size: 3rem;
    text-transform: uppercase;
}

/* Slide Title */
.slide-title {
    font-family: 'Rawline', sans-serif;
    font-weight: 900; /* Black */
    font-size: 1.875rem;
    text-transform: uppercase;
}

/* Subtitle */
.slide-subtitle {
    font-family: 'Rawline', sans-serif;
    font-weight: 400; /* Regular */
    font-size: 1.25rem;
    font-style: italic;
}

/* Description Bold */
.slide-description-bold {
    font-family: 'Rawline', sans-serif;
    font-weight: 700; /* Bold */
    font-size: 1.25rem;
    font-style: italic;
}

/* Description */
.slide-description {
    font-family: 'Rawline', sans-serif;
    font-weight: 600; /* Semibold */
    font-size: 1.125rem;
    font-style: italic;
}

/* Buttons */
button {
    font-family: 'Rawline', sans-serif;
    font-weight: 700; /* Bold */
    text-transform: uppercase;
}

/* Step Counter */
.step-counter span {
    font-family: 'Rawline', sans-serif;
    font-weight: 700; /* Bold */
    font-size: 0.875rem;
}
```

## Fallback

Si la police Rawline ne peut pas être chargée depuis le CDN, le navigateur utilisera automatiquement la police système sans-serif par défaut :

```css
font-family: 'Rawline', sans-serif;
```

## Alternative : Auto-hébergement

Si vous préférez héberger la police localement :

1. Téléchargez les fichiers Rawline (.woff2, .woff, .ttf)
2. Placez-les dans `/carreouselCNP/assets/fonts/`
3. Ajoutez dans votre CSS :

```css
@font-face {
    font-family: 'Rawline';
    src: url('../assets/fonts/Rawline-Regular.woff2') format('woff2'),
         url('../assets/fonts/Rawline-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Rawline';
    src: url('../assets/fonts/Rawline-Bold.woff2') format('woff2'),
         url('../assets/fonts/Rawline-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Rawline';
    src: url('../assets/fonts/Rawline-Black.woff2') format('woff2'),
         url('../assets/fonts/Rawline-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

/* Add more variants as needed */
```

## Performance

### Optimisations
- Utilisation de `preconnect` pour le CDN
- `font-display: swap` (recommandé pour éviter FOIT)
- Chargement uniquement des variantes nécessaires

### Poids de la Police
- Regular (400) : ~15-20 KB (WOFF2)
- Bold (700) : ~15-20 KB (WOFF2)
- Black (900) : ~15-20 KB (WOFF2)
- **Total estimé** : ~45-60 KB pour 3 variantes

## Compatibilité

✅ Tous les navigateurs modernes supportent Rawline
✅ Fallback automatique vers sans-serif système
✅ Support complet des variantes en gras et italique

## Notes

- Rawline est utilisée dans tout le projet pour cohérence avec le design Figma
- La police se charge depuis CDN Fonts (connexion Internet requise)
- Pour utilisation hors ligne, auto-hébergez les fichiers de police

---

**Police mise à jour avec succès** ✅
Ancienne police : Raleway (Google Fonts)
Nouvelle police : Rawline (CDN Fonts)
