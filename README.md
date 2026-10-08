# Présidence RDC — version nettoyée

Cette version est reconstruite à partir du ZIP fourni par l'utilisateur.

## Navigation
- Une seule navigation officielle est utilisée sur tout le site.
- Les dropdowns sont ceux de la page d'accueil actuelle.
- Les pages internes chargent exactement cette navigation via `site-shell.js`.
- Le comportement des dropdowns est centralisé dans `rdc.js`.
- Les liens de dropdown pointent directement vers les pages existantes.

## Nettoyage effectué
- Suppression des anciennes variantes de dropdown/navigation.
- Suppression des dossiers dupliqués provenant des itérations précédentes.
- Suppression des captures HTML de navigateur et des README de correctifs accumulés.
- Conservation des pages Actualités, Conseil des ministres, Recherche et Écrire au Président.
- Conservation des pages La Présidence, mais avec la navigation actuelle du site.
- Synchronisation du footer avec celui de l'accueil.

## Test local
Depuis le dossier du site :

```bash
python -m http.server 5500
```

Puis ouvrir `http://localhost:5500`.

Voir `ROUTES.txt` pour les routes principales vérifiées.


## Vérification finale
- Pages HTML conservées : 43
- Pages internes utilisant la navigation partagée : 42
- Anciennes navigations custom restantes : 13
- Liens internes absolus cassés : 0
