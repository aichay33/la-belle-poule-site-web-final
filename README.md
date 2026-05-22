# La Belle Poule - Nouvelle application complète

Site Next.js de présentation du projet **La Belle Poule**, future ferme avicole familiale en Gironde.

## Positionnement

La Belle Poule est présentée comme une future ferme d’œufs de poules élevées en plein air, en verger, avec :

- 240 poules pondeuses maximum ;
- un poulailler central ;
- 4 paddocks en rotation ;
- des arbres et des haies ;
- une vente directe à la ferme ;
- une recherche de terrain agricole en Gironde.

## Pages incluses

- `/` : accueil
- `/projet` : présentation du projet et état d’avancement
- `/recherche-terrain` : critères fonciers, types de propositions et modèle de message
- `/systeme-verger` : poulailler central, paddocks en rotation, arbres et haies
- `/vente-directe` : point de vente, retraits, abonnements, accueil familial
- `/dossier-projet` : page bancable pour propriétaires, communes, partenaires et financeurs
- `/comment-aider` : achat de terrain uniquement, mise en relation, conseil
- `/contact` : coordonnées et modèle de message
- `/mentions-legales` : mentions légales simples

Anciennes pages conservées mais réorientées :

- `/polyelevage`
- `/polyculture`
- `/permaculture`
- `/agroforesterie`

## PDF inclus

Le fichier suivant est inclus pour servir de base de dossier de présentation :

- `/public/dossier-la-belle-poule.pdf`

Il peut être téléchargé depuis la page `/dossier-projet`.

## Installation locale

```bash
npm install
npm run dev
```

Puis ouvrir :

```txt
http://localhost:3000
```

## Vérification avant déploiement

```bash
npm run build
```

## Déploiement

Le projet est prévu pour Vercel.

Si GitHub est connecté à Vercel :

```bash
git add .
git commit -m "Nouvelle version complète La Belle Poule"
git push
```

Vercel redéploiera automatiquement selon ta configuration.
