# Anniversaire & Déclaration

Ce site est une application unique pour souhaiter un joyeux anniversaire et faire une déclaration d'amour.

## Structure
- `index.html` : Contenu principal (6 actes).
- `css/style.css` : Design et animations.
- `js/main.js` : Logique de navigation, effets et audio.
- `assets/` : Dossier pour la musique (`assets/audio/musique-fond.mp3`) et icônes.

## Comment personnaliser
1. **Texte :** Modifie le contenu directement dans les sections `<section>` du fichier `index.html`.
2. **Couleurs :** Modifie les variables `:root` dans `css/style.css`.
3. **Musique :** Place ton fichier MP3 dans `assets/audio/musique-fond.mp3`.

## Lancer le site
Ouvre simplement le fichier `index.html` dans ton navigateur.
Pour un environnement plus proche du réel (pour tester l'audio), utilise un serveur local basique, par exemple avec Python :
`python3 -m http.server 8000`
Puis accède à `http://localhost:8000`
