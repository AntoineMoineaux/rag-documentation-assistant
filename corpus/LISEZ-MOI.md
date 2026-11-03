# Le corpus, ce qui s'indexe et ce qui sert de correction

⛔ **Deux fichiers, deux rôles, à ne jamais confondre.**

| Fichier | Rôle |
|---|---|
| `manuel-chauffeur-hydrocab-v4.2.pdf` | ⭐ **l'entrée du système.** C'est ce fichier, et lui seul, qui est déposé sur Drive et indexé |
| `documentation-flotte-h2.md` | ⭐ **la clé de correction.** Il a servi à produire le PDF, et il dit où se trouve chaque bonne réponse |

⛔ **Ne jamais indexer le markdown.** Il est propre, structuré, sans en-tête de page et sans sommaire parasite. L'indexer donnerait de bons chiffres sur un corpus qui n'existe pas.

## Le PDF, ce qu'il est

61 pages. Une compilation de **cinq fascicules fusionnés**, comme une entreprise le ferait en rassemblant ses documents existants :

| Fascicule | Chapitres | Pages |
|---|---|---|
| Page de titre et sommaire général | | 2 |
| 1. Manuel du véhicule et du ravitaillement | 1, 2, 11 | 10 |
| 2. Manuel d'exploitation | 3, 4, 5, 15 | 14 |
| 3. Réglementation, conformité et paie | 6, 7, 10 | 12 |
| 4. Guide de la course et du client | 8, 9, 14, 16, 17 | 15 |
| 5. Mémo chauffeur | 12, 13, glossaire, annexe | 8 |

**Ce que la fusion apporte, et qui est tout l'intérêt** :

- **Dix lignes d'en-tête et de pied de page différentes**, parce que chaque fascicule vient d'un document source différent et que personne ne les a harmonisées. Environ **1 700 mots de bruit** ajoutés aux 14 800 mots de contenu, soit **11,5 %** du texte extrait.
- **Un sommaire par fascicule**, qui liste les chapitres et leurs sous-sections. Chaque titre de section existe donc **deux fois** dans le document, dont une fois sans aucune réponse en dessous.
- **La pagination repart à 1 à chaque fascicule.** Un numéro de page ne désigne pas un endroit unique du document, donc ⛔ une page ne peut jamais servir de citation.
- **Les tableaux se coupent** aux sauts de page, sans répétition de leur ligne d'en-tête.
- **L'ordre de lecture n'est pas l'ordre visuel.** Vérifié : sur une page de trois lignes, le pied de page ressort **entre le titre et le paragraphe**.

## Comment il est produit

```
node tools/build_pdf.js <corpus.md> <dossier corpus> <dossier de travail>
```

Markdown vers HTML avec une feuille de style d'impression, puis Chrome en mode sans interface pour chaque fascicule, puis `pdfunite` de Poppler pour la fusion. Aucune dépendance à installer. Le script est reproductible : si le markdown change, le PDF se régénère à l'identique.

## Ce qui a été vérifié le 2026-11-02

- Les **6 motifs des questions sans réponse** sont toujours absents du texte extrait, donc R01 à R06 restent valides.
- Les **14 sections attendues** sont toutes retrouvées.
- La **section piège 2.2** ressort entière avec ses deux faits opposés, 87 % et 70 %, donc A02 reste le piège de découpage prévu.
- Le nombre de pages du fichier fusionné égale la somme des fascicules, 61, donc rien n'a été perdu à la fusion.

⚠️ **Non vérifié** : le comportement du nœud d'extraction de n8n, qui n'utilise pas forcément Poppler. Les constats ci-dessus valent pour `pdftotext`. `[NON VÉRIFIÉ MCP]`

## Note de sécurité

⛔ HYDROCAB est une société fictive, tout est inventé. Aucune donnée d'un employeur ou d'un client réel ne figure dans ce corpus, ce qui est la condition pour que le projet et ses résultats soient publiables.
