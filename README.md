# Gilian-officiel

Bienvenue sur le dépôt de `Gilian-officiel`, une application React moderne conçue pour offrir une expérience utilisateur de qualité.

## Prérequis

- Node.js
- npm

## Installation

1. Clonez ce dépôt :

```bash
git clone git@github.com:jibenight/Gilian-officiel.git
```

2. Naviguez dans le répertoire du projet :

```bash
cd Gilian-officiel
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

---

## Mise en Production

Pour déployer le site sur le serveur en utilisant Parcel v2, suivez ces étapes :

1. **Génération du dossier de production** :

   Avant de mettre en ligne, assurez-vous de générer le dossier de production avec Parcel. Exécutez la commande suivante :

   ```bash
   npm run build
   ```

   Ceci générera un dossier `dist` avec tous les fichiers nécessaires pour la production, optimisés pour une performance maximale.

2. **Upload des fichiers** :

   - Connectez-vous à votre serveur via FTP ou tout autre moyen d'accès à votre serveur.
   - Naviguez jusqu'au dossier où `Gilian-officiel.com` pointe.
   - Supprimez tous les fichiers précédents pour éviter les conflits de fichiers (optionnel mais recommandé pour un déploiement propre).
     ⚠️ Attention: Si un dossier nommé tracks existe déjà sur le serveur (contenant les fichiers musicaux), ne le supprimez surtout pas lors de la mise à jour des fichiers. C'est essentiel pour le bon fonctionnement de l'application.
   - Uploadez le contenu du dossier `dist` dans ce dossier.

3. **Vérification** :

   Après l'upload, ouvrez votre navigateur et allez sur `https://Gilian-officiel.com`. Vérifiez que tout est fonctionnel et s'affiche correctement.

---

## Gestion des pistes audio dans l'application

Dans `Gilian-officiel`, le fichier `TracksData.js` situé dans le dossier `src/components/music-ep` joue un rôle crucial. Il est utilisé pour lister et afficher les pistes audio disponibles dans l'application.

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

## Téléchargement de fichiers audio avec `yt-dlp`

Si vous souhaitez télécharger des fichiers audio à partir de vidéos YouTube, voici les étapes à suivre :

### Installation de `yt-dlp`

Sur macOS avec `Homebrew` :

```bash
brew install yt-dlp
```

### Extraction de l'audio en format MP3 d'une vidéo YouTube

1. Utilisez la commande suivante pour télécharger l'audio de la vidéo :

```bash
yt-dlp --extract-audio --audio-format mp3 -o "chemin/vers/le/dossier/destinataire/nomdufichier.%(ext)s" "URL_DE_LA_VIDEO_YOUTUBE"
```

Par exemple, pour sauvegarder un fichier MP3 nommé `nouvelle-orleans.mp3` dans le dossier `src/assets/tracks` :

```bash
yt-dlp --extract-audio --audio-format mp3 -o "src/assets/tracks/nouvelle-orleans.%(ext)s" "https://www.youtube.com/watch?v=TH7ne94pjJQ"
```

2. Après avoir téléchargé le fichier, transférez-le via FTP dans le dossier `public` du serveur, là où l'URL `gilian-officiel.com` pointe.

3. Dans votre fichier `tracksData.js`, ajoutez ou modifiez le chemin du fichier comme ceci :

```javascript
source: 'https://gilian-officiel.com/tracks/nom-fichier.mp3';
```

Remplacez `nom-fichier.mp3` par le nom exact du fichier audio téléchargé.

---

## Gestion des photos dans l'application

Dans `Gilian-officiel`, le fichier `photoData.js` situé dans le dossier `src/components/shooting` est utilisé pour lister et afficher les photos disponibles dans l'application.

### Structure de `photoData.js`

Le fichier `photoData.js` importe les images nécessaires, puis les organise dans un tableau nommé `photos`.

Chaque objet du tableau représente une photo avec les attributs suivants :

- **figcaption** : La légende associée à la photo.
- **mobile** : L'image destinée aux appareils mobiles.
- **desktop** : L'image destinée aux appareils de bureau.

Voici un exemple d'un objet photo du tableau :

```javascript
{
    figcaption: 'Echo du phoenix',
    mobile: echoDuPhoenix1Mobile,
    desktop: echoDuPhoenix1Desktop,
}
```

Pour ajouter une nouvelle photo à l'application :

1. Importez d'abord les images depuis leurs emplacements respectifs. Assurez-vous d'avoir une version pour les appareils mobiles et une autre pour les appareils de bureau.

```javascript
import nomPhotoMobile from '../../assets/images/photos/mobile/nom-photo-mobile.webp';
import nomPhotoDesktop from '../../assets/images/photos/desktop/nom-photo-desktop.webp';
```

2. Ensuite, ajoutez un nouvel objet à la liste `photos` avec les attributs appropriés (comme montré ci-dessus).

En suivant ces étapes, votre photo sera prête à être utilisée et affichée dans l'application où nécessaire.

## Conversion des images en format `.webp`

Dans `Gilian-officiel`, les images doivent être préparées en deux formats pour une compatibilité optimale sur différents appareils. Nous utilisons le format `.webp` pour bénéficier de sa compression efficace et de sa qualité. Voici comment vous pouvez convertir vos images sous MacOS en utilisant `webp` via Homebrew.

### Pré-requis :

1. Installez Homebrew si ce n'est pas déjà fait :
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Installez le package `webp` :
   ```bash
   brew install webp
   ```

### Procédure de conversion :

Placez toutes vos images originales dans le dossier `/assets/photos/originals`.

Ensuite, utilisez la commande suivante pour convertir vos images :

```bash
# Pour le format desktop :
for file in /assets/photos/originals/*; do
    cwebp -q 80 -resize 1920 0 "$file" -o "/assets/photos/desktop/$(basename "$file" .jpg).webp"
done

# Pour le format mobile :
for file in /assets/photos/originals/*; do
    cwebp -q 80 -resize 480 0 "$file" -o "/assets/photos/mobile/$(basename "$file" .jpg).webp"
done
```

_Note_: Ces commandes supposent que vos images originales sont en `.jpg`. Si elles sont dans un autre format, remplacez `.jpg` par le format approprié.

### Nettoyage du dossier "originals" :

Après avoir converti vos images, vous pouvez vider le dossier `/assets/photos/originals` avec la commande :

```bash
rm /assets/photos/originals/*
```

Maintenant, vos images sont prêtes à être utilisées dans l'application avec les résolutions appropriées pour desktop et mobile.
