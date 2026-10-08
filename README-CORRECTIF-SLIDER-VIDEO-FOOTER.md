# Correctif V2.1

Cette version part de `rdc-site-complet-v2-navbar-fixe.zip` et conserve le design existant.

## Modifications

1. Les cartes Réalisations et Patrimoine utilisent un vrai slider horizontal.
   - Réalisations : nouvelle photo depuis la droite, ancienne photo vers la gauche.
   - Patrimoine : mouvement inverse.
   - Premier changement lorsque la carte devient visible, puis rotation automatique toutes les 6 secondes.
2. La Hero de la page d’accueil reste une vidéo HTML5.
   - Fichier attendu : `Video-by-rdcpresidence.mp4` à la racine.
   - Fallback optionnel : `hero.webm`.
3. Le footer injecté sur toutes les pages internes est maintenant le même que celui de la page d’accueil.
4. Le correctif précédent de navbar est conservé : `Écrire au Président` et la recherche restent visibles sur petits écrans.

## Médias à conserver dans le projet

- `Video-by-rdcpresidence.mp4`
- `hero.webm` (optionnel)
- `images/realisation-1.jpg` à `images/realisation-4.jpg`
- `images/patrimoine-1.jpg` à `images/patrimoine-4.jpg`
- `Capture d'écran 2026-09-22 161832.png` pour le footer

Le ZIP ne remplace pas vos médias personnels s’ils sont déjà présents dans votre projet.
