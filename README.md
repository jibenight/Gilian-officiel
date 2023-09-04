# react-gilian

Bienvenue sur le dépôt de `react-gilian`, une application React moderne conçue pour offrir une expérience utilisateur de qualité.

## Prérequis

- Node.js
- npm

## Installation

1. Clonez ce dépôt :

```bash
git clone https://github.com/jibenight/react-gilian.git
```

2. Naviguez dans le répertoire du projet :

```bash
cd react-gilian
```

3. Installez les dépendances :

```bash
npm install
```

## Utilisation

Pour lancer l'application, exécutez la commande suivante :

```bash
npm start
```

Cela démarrera simultanément le serveur et le client grâce à `concurrently`.

## Téléchargement de fichiers audio avec yt-dlp

Si vous souhaitez télécharger des fichiers audio à partir de vidéos YouTube, voici comment procéder :

### Installation de yt-dlp

Si vous avez `Homebrew` installé sur macOS :

```bash
brew install yt-dlp
```

### Comment extraire un fichier MP3 à partir d'une vidéo YouTube

```bash
yt-dlp --extract-audio --audio-format mp3 -o "chemin/vers/le/dossier/destinataire/nomdufichier.%(ext)s" "URL_DE_LA_VIDEO_YOUTUBE"
```

Par exemple, pour sauvegarder un fichier MP3 intitulé `nouvelle-orleans.mp3` dans le dossier `src/assets/tracks` :

```bash
yt-dlp --extract-audio --audio-format mp3 -o "src/assets/tracks/nouvelle-orleans.%(ext)s" "https://www.youtube.com/watch?v=TH7ne94pjJQ"
```

## Gestion des pistes audio dans l'application

Dans `react-gilian`, le fichier `TracksData.js` situé dans le dossier `src/components/music-ep` joue un rôle crucial. Il est utilisé pour lister et afficher les pistes audio disponibles dans l'application.

### Structure de `TracksData.js`

Le fichier `TracksData.js` importe les fichiers média nécessaires, tels que les images de couverture et les pistes audio, puis les organise dans un tableau nommé `tracksData`.

Chaque objet du tableau représente une piste audio avec les attributs suivants :

- **title** : Le titre de la piste.
- **source** : L'URL du fichier audio de la piste.
- **coverMobile** : L'image de couverture pour les appareils mobiles.
- **coverDesktop** : L'image de couverture pour les appareils de bureau.
- **youtubeLink** : Le lien vers la vidéo YouTube de la piste (si disponible).

Voici un exemple d'un objet piste du tableau :

```javascript
{
    title: 'Sur le fil',
    source: 'https://gilian-officiel.com/tracks/sur-le-fil.mp3',
    coverMobile: surLeFilMobile,
    coverDesktop: surLeFilDesktop,
    youtubeLink: 'https://www.youtube.com/watch?v=_TBVtWfLBBQ',
}
```

Si vous souhaitez ajouter une nouvelle piste à l'application, assurez-vous d'importer les ressources nécessaires et de les ajouter au tableau `tracksData` dans le format approprié.

---

Avec cette section ajoutée, votre `README` offre maintenant une compréhension claire de la manière dont les pistes audio sont gérées dans votre application.
