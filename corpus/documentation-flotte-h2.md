# Manuel du chauffeur, flotte de taxis à hydrogène HYDROCAB

> ⚠️ **DOCUMENT SYNTHÉTIQUE.** Cette documentation a été rédigée de toutes pièces pour servir de corpus de test à un système de recherche documentaire. **HYDROCAB est une société fictive.** Les procédures, seuils, numéros, tarifs et noms de personnes sont inventés. Les caractéristiques véhicule sont plausibles mais ne doivent pas être prises pour des spécifications constructeur réelles.
>
> Aucune donnée d'un employeur ou d'un client réel ne figure dans ce document.

**Version 4.2, en vigueur depuis le 1er septembre 2026.** Remplace la version 4.1 de mars 2026.
Diffusion : tous les chauffeurs titulaires et remplaçants, pôle exploitation, atelier.

---

# Sommaire

- Chapitre 1. Le véhicule
- Chapitre 2. Le ravitaillement en hydrogène
- Chapitre 3. Prise de poste et fin de poste
- Chapitre 4. Pannes et incidents
- Chapitre 5. Maintenance et entretiens
- Chapitre 6. Réglementation du transport de personnes
- Chapitre 7. Documents du chauffeur et conformité
- Chapitre 8. Prise en charge et conduite de la course
- Chapitre 9. Tarifs, paiement et litiges
- Chapitre 10. Temps de travail, frais et paie
- Chapitre 11. Conditions dégradées
- Chapitre 12. Contacts, escalade et rappels
- Chapitre 13. Questions fréquentes
- Chapitre 14. Gares, aéroports et sites particuliers
- Chapitre 15. Terminal embarqué et gestion des courses
- Chapitre 16. Sécurité personnelle et travail de nuit
- Chapitre 17. Environnement et discours client
- Glossaire
- Annexe. Historique des versions

---

# Chapitre 1. Le véhicule

## 1.1 Composition de la flotte

La flotte HYDROCAB compte 94 véhicules au 1er septembre 2026, répartis en trois sous-parcs.

| Sous-parc | Modèle | Nombre | Mise en service | Affectation |
|---|---|---|---|---|
| H2-A | Toyota Mirai deuxième génération, finition Lounge | 61 | 2024 et 2025 | courses longues, gares, aéroports |
| H2-B | Toyota Mirai deuxième génération, finition Pure | 24 | 2023 | courses urbaines, maraude |
| H2-C | Toyota Mirai première génération | 9 | 2021 | réserve et remplacement |

Les trois sous-parcs ne sont pas interchangeables pour les courses aéroport. **Seuls les véhicules H2-A sont autorisés aux courses aéroport**, en raison du volume de coffre et de l'autonomie exigés. Un chauffeur affecté sur un H2-B ou un H2-C ne doit pas accepter une course aéroport sans accord du pôle exploitation.

## 1.2 Groupe motopropulseur

Le véhicule n'a pas de moteur thermique et ne consomme ni essence ni gazole. Une pile à combustible transforme l'hydrogène stocké à bord en électricité, qui alimente un moteur électrique. Le seul rejet est de la vapeur d'eau.

| Caractéristique | H2-A et H2-B | H2-C |
|---|---|---|
| Puissance du moteur électrique | 134 kW, soit 182 ch | 113 kW, soit 154 ch |
| Puissance de la pile à combustible | 128 kW | 114 kW |
| Transmission | roues arrière | roues avant |
| Nombre de réservoirs d'hydrogène | 3 | 2 |
| Capacité totale en hydrogène | 5,6 kg | 4,6 kg |
| Pression de service des réservoirs | 700 bar | 700 bar |
| Autonomie annoncée | environ 650 km | environ 500 km |
| Autonomie retenue par l'exploitation | **520 km** | **400 km** |

⚠️ **L'autonomie retenue par l'exploitation est volontairement inférieure à l'autonomie annoncée.** Elle intègre la climatisation, le trafic urbain, les trajets à vide et une réserve de sécurité. **C'est cette valeur, et non celle du constructeur, qui sert à planifier une tournée.**

## 1.3 La batterie de traction

Le véhicule embarque aussi une petite batterie, qui n'est pas rechargeable sur une borne électrique. Elle se recharge seule, par la pile à combustible et par la récupération au freinage. **Un chauffeur ne doit jamais chercher une borne de recharge électrique pour ce véhicule.** C'est une erreur fréquente chez les nouveaux arrivants.

La batterie sert à trois choses : fournir un surcroît de puissance à l'accélération, stocker l'énergie récupérée au freinage, et alimenter les équipements à l'arrêt moteur coupé.

## 1.4 Les voyants du tableau de bord

Quatre voyants sont propres à la technologie hydrogène et ne figurent pas sur un véhicule classique.

| Voyant | Couleur | Signification | Ce que fait le chauffeur |
|---|---|---|---|
| Pile à combustible | orange fixe | anomalie non bloquante de la pile | finir la course en cours, puis appeler l'atelier. Ne pas prendre de nouvelle course |
| Pile à combustible | rouge clignotant | anomalie bloquante | ⛔ **s'arrêter dès que possible en sécurité, couper le contact, sortir du véhicule, appeler le 01 84 77 20 10** |
| Détection d'hydrogène | rouge | fuite détectée par un capteur de l'habitacle ou du coffre | ⛔ **arrêt immédiat, contact coupé, évacuation du véhicule et des passagers, personne ne fume, appel au 01 84 77 20 10** |
| Niveau d'hydrogène bas | orange | réservoirs sous 15 % | rejoindre une station sans accepter de nouvelle course |

⛔ **Un voyant rouge ne se traite jamais en roulant jusqu'au dépôt.** Deux incidents de 2025 ont été causés par des chauffeurs qui ont voulu « rentrer quand même ».

## 1.5 Jauge d'hydrogène et seuils d'exploitation

La jauge s'affiche en pourcentage et non en kilogrammes. Les seuils suivants sont des règles d'exploitation, pas des limites techniques du véhicule.

| Niveau affiché | Statut | Règle |
|---|---|---|
| 100 % à 40 % | normal | toutes courses acceptées |
| 39 % à 25 % | vigilance | courses acceptées si la destination est à moins de 60 km, et si une station figure sur le trajet retour |
| 24 % à 15 % | réserve | ⛔ **plus aucune nouvelle course.** Trajet direct vers une station |
| sous 15 % | critique | ⛔ **trajet direct vers la station la plus proche, signalement au pôle exploitation avant de partir** |

**Réponse à la question la plus fréquente.** Un chauffeur dont la jauge affiche 12 % ne finit pas sa journée. Il ne prend aucune course, il prévient l'exploitation, et il va à la station la plus proche. Sous 15 %, l'autonomie restante est d'environ 60 à 80 km sur un H2-A, et elle chute très vite en circulation dense et par temps froid.

## 1.6 Panne sèche d'hydrogène

Un véhicule à l'arrêt faute d'hydrogène **ne se dépanne pas sur place**. Il n'existe pas de jerrican d'hydrogène, et aucun véhicule d'assistance de la flotte ne transporte d'hydrogène. Le véhicule doit être remorqué jusqu'à une station.

Procédure : appeler le pôle exploitation au 01 84 77 20 10, qui déclenche le remorquage. Le délai moyen constaté est de 90 minutes en Île-de-France et de 3 heures en dehors. Le chauffeur reste avec le véhicule. Les passagers sont réaffectés à un autre véhicule de la flotte par l'exploitation, et la course leur est offerte.

⚠️ **Une panne sèche est retenue comme faute d'exploitation**, sauf si le chauffeur avait signalé son niveau critique avant de partir et avait reçu l'instruction de continuer.

## 1.7 Coffre et bagages

Les réservoirs d'hydrogène réduisent le volume de coffre par rapport à une berline classique de même gabarit.

| Sous-parc | Volume de coffre | Capacité pratique |
|---|---|---|
| H2-A | 321 litres | 2 grandes valises, ou 1 grande et 2 cabines |
| H2-B | 321 litres | identique, mais sans bac de rangement |
| H2-C | 361 litres | 2 grandes valises et 1 cabine |

Le coffre ne se charge jamais au-delà du niveau de la plage arrière. **Il ne faut jamais poser de bagage sur la trappe d'accès aux réservoirs**, signalée par une étiquette jaune au fond du coffre.

Pour une course aéroport à 4 passagers avec bagages, le véhicule est insuffisant. Le chauffeur refuse la course et la renvoie à l'exploitation, qui dispose de deux monospaces thermiques de secours.

---

# Chapitre 2. Le ravitaillement en hydrogène

## 2.1 Principe et durée

Le ravitaillement ressemble à un plein de carburant classique et non à une recharge électrique. **Un plein complet prend de 3 à 5 minutes** sur une station en bon état de fonctionnement, pour un véhicule dont les réservoirs ne sont pas déjà chauds.

L'hydrogène est délivré à 700 bar. Le pistolet se verrouille sur le véhicule et le remplissage est piloté par la station, qui dialogue avec le véhicule par infrarouge. **Le chauffeur ne peut ni accélérer ni interrompre manuellement le débit.**

## 2.2 Le phénomène de remplissage partiel

C'est la difficulté la plus mal comprise de la flotte, et la première cause d'appels au pôle exploitation.

Quand on remplit des réservoirs d'hydrogène, le gaz s'échauffe. La station surveille la température et réduit puis coupe le débit si elle atteint sa limite. **Conséquence : un véhicule dont les réservoirs sont déjà chauds ne se remplit pas à 100 %.** Il s'arrête souvent entre 80 % et 90 %.

Trois situations provoquent ce cas :

1. **Deux pleins rapprochés.** Un véhicule ravitaillé moins de 2 heures après un plein précédent plafonnera autour de 85 %.
2. **Forte chaleur.** Au-delà de 30 degrés ambiants, le plafond descend de 5 à 10 points.
3. **Station en fin de cycle.** Une station qui vient de servir plusieurs véhicules d'affilée a sa réserve tampon dépressurisée et délivre moins.

⭐ **Ce n'est pas une panne, et ce n'est pas une anomalie à signaler.** Un plein qui s'arrête à 87 % est un plein normal dans ces conditions. Le chauffeur note le pourcentage atteint sur sa fiche de poste et repart.

⚠️ **En revanche, un plein qui s'arrête sous 70 % sur une station froide et un véhicule froid est une anomalie.** Elle se signale à l'exploitation avec le nom de la station, l'heure et le pourcentage atteint.

## 2.3 Stations autorisées

Seules les stations de la liste suivante sont autorisées. Elles sont conventionnées et la facturation est automatique par la carte flotte.

| Station | Adresse | Horaires | Particularité |
|---|---|---|---|
| Paris Alésia | 14e arrondissement | 6 h à 23 h, 7 jours | la plus utilisée, file d'attente fréquente entre 13 h et 15 h |
| Orly Fret | zone fret d'Orly | 24 h sur 24 | badge d'accès zone nécessaire |
| Roissy Cargo | zone cargo de Roissy | 5 h à 1 h | badge d'accès zone nécessaire |
| Les Loges-en-Josas | Yvelines | 7 h à 21 h, fermée le dimanche | deux pistes, rarement saturée |
| Créteil Pompadour | Val-de-Marne | 6 h à 22 h, 7 jours | une seule piste |
| Gennevilliers Port | Hauts-de-Seine | 7 h à 20 h, fermée samedi et dimanche | réservée aux poids lourds de 11 h à 14 h |

⛔ **Une station hors liste ne se utilise pas**, même en cas de besoin, sauf accord explicite du pôle exploitation par téléphone. Le paiement n'y serait pas pris en charge et le chauffeur en ferait l'avance sans garantie de remboursement.

## 2.4 Procédure de ravitaillement

1. Couper le contact et descendre du véhicule. ⛔ **Aucun passager ne reste à bord pendant le ravitaillement.**
2. Vérifier qu'aucune cigarette ni flamme n'est présente dans un rayon de 10 mètres.
3. Passer la carte flotte sur le lecteur de la borne.
4. Ouvrir la trappe de remplissage, située à l'arrière droit du véhicule.
5. Emboîter le pistolet et attendre le verrouillage. Un déclic net confirme le verrouillage.
6. Lancer le remplissage depuis l'écran de la borne.
7. Attendre la fin complète du cycle. ⛔ **Ne jamais tenter de retirer le pistolet avant son déverrouillage automatique.**
8. Refermer la trappe, reprendre la carte, relever le pourcentage atteint.
9. Noter sur la fiche de poste : station, heure, pourcentage de départ, pourcentage d'arrivée.

En cas de gel du pistolet sur le véhicule, phénomène qui arrive par températures négatives, attendre 2 à 3 minutes sans forcer. Le dégivrage est automatique. **Forcer casse le raccord, et la réparation immobilise le véhicule 4 jours.**

## 2.5 Station en panne

Si la station affiche un défaut ou si le remplissage échoue deux fois de suite :

1. Ne pas réessayer une troisième fois.
2. Appeler le pôle exploitation, qui vérifie l'état des autres stations en temps réel.
3. Partir vers la station de repli indiquée, **en tenant compte du niveau restant**.

Si le niveau est sous 15 % et que la station de repli est à plus de 50 km, le chauffeur ne part pas. Il reste sur place et attend l'instruction. ⚠️ **Mieux vaut un véhicule immobilisé sur une station qu'un véhicule en panne sèche sur le périphérique.**

## 2.6 Carte flotte

Chaque véhicule a sa propre carte flotte, qui reste dans le véhicule et non sur le chauffeur. La carte ne sert qu'à l'hydrogène et au lavage conventionné. Elle ne permet aucun autre achat.

En cas de perte ou de vol, appeler immédiatement le pôle exploitation pour blocage. Un chauffeur qui constate une perte en fin de poste et ne la signale qu'au poste suivant engage sa responsabilité sur les opérations intermédiaires.

⛔ **Le code de la carte ne se note jamais dans le véhicule**, ni sur la carte, ni dans la boîte à gants, ni sur la fiche de poste.

---

# Chapitre 3. Prise de poste et fin de poste

## 3.1 Les sept contrôles de prise de poste

Ces contrôles sont obligatoires et prennent environ 8 minutes. Ils se font avant la première course, véhicule à l'arrêt.

1. **Niveau d'hydrogène.** Noter le pourcentage. Sous 40 %, prévoir la station avant la première course longue.
2. **Voyants.** Contact mis, vérifier qu'aucun des quatre voyants hydrogène n'est allumé après l'auto-test.
3. **Pneumatiques.** Contrôle visuel des quatre pneus et de la pression si le véhicule a plus de 15 jours sans contrôle. Pression de référence : 2,5 bar à l'avant, 2,4 bar à l'arrière, à froid.
4. **Propreté.** Habitacle, vitres, absence d'objet oublié par le chauffeur précédent. Un objet trouvé se dépose au pôle exploitation le jour même.
5. **Documents de bord.** Carte grise, attestation d'assurance, carte flotte, carnet de bord, grille tarifaire affichée.
6. **Équipements taxi.** Lumineux, compteur horokilométrique, terminal de paiement, chargeur passager.
7. **Fiche de poste.** Relever le kilométrage et signer la prise en charge.

⚠️ **Un contrôle qui révèle une anomalie bloquante interdit la prise de poste.** Sont bloquants : un voyant hydrogène allumé, un pneu entaillé ou sous 2,0 bar, un défaut de compteur, une attestation d'assurance expirée.

## 3.2 Ce qui n'est pas bloquant

Pour éviter les immobilisations inutiles, les éléments suivants se signalent mais n'empêchent pas la prise de poste : une rayure de carrosserie, un chargeur passager hors service, un essuie-glace à remplacer sous 7 jours, un niveau de lave-glace bas, un éclairage d'habitacle défaillant, une tache de siège.

Le chauffeur les note sur la fiche de poste. **Trois signalements du même défaut sur trois postes consécutifs rendent le défaut bloquant**, parce que cela signifie que personne ne l'a traité.

## 3.3 Fin de poste

1. Ravitailler si le niveau est sous 50 %. ⭐ **La règle de la flotte est de rendre le véhicule au-dessus de 50 %**, pour que le chauffeur suivant puisse partir sans détour.
2. Vider les poubelles et faire un contrôle visuel de l'habitacle.
3. Relever le kilométrage de fin.
4. Clôturer la fiche de poste et y porter les anomalies du jour.
5. Remettre la carte flotte dans son logement.
6. Verrouiller le véhicule et déposer la clé au tableau du dépôt.

⛔ **Un véhicule rendu sous 25 % sans justification écrite est une faute d'exploitation**, parce qu'il empêche le poste suivant de démarrer.

## 3.4 Changement de véhicule en cours de poste

Un chauffeur peut changer de véhicule en cours de poste sur décision de l'exploitation, par exemple après une anomalie. Dans ce cas, deux fiches de poste sont ouvertes, une par véhicule, et le motif du changement est écrit sur les deux.

La carte flotte **ne suit jamais le chauffeur**. Elle reste dans le véhicule qu'elle concerne. Un ravitaillement payé avec la carte d'un autre véhicule crée un écart de facturation que l'exploitation doit corriger à la main.

## 3.5 Prise de poste hors dépôt

Pour les postes qui démarrent à une gare ou à un aéroport, le véhicule est pris sur place. La procédure est la même, aux trois différences près :

1. Le relevé contradictoire se fait avec le chauffeur sortant, ou par photo si le relais est différé.
2. Le délai de tolérance est de 15 minutes. Au-delà, le chauffeur entrant prévient l'exploitation.
3. Les documents de bord se vérifient avec une attention particulière, parce que les véhicules en relais sur site passent moins souvent au dépôt.

---

# Chapitre 4. Pannes et incidents

## 4.1 Les trois niveaux de gravité

Toute anomalie se classe dans un des trois niveaux suivants. **Le niveau détermine le délai d'appel et le droit de continuer à rouler.** En cas de doute entre deux niveaux, le chauffeur retient toujours le plus grave.

| Niveau | Nom | Droit de rouler | Délai d'appel |
|---|---|---|---|
| 1 | signalement | oui, poste normal | fin de poste, sur la fiche |
| 2 | dégradé | finir la course en cours seulement | dans les 15 minutes |
| 3 | arrêt immédiat | ⛔ non | immédiat, avant tout autre geste |

Exemples de niveau 1 : rayure, chargeur passager mort, essuie-glace usé, odeur de tabac laissée par un passager, tache de siège, éclairage d'habitacle défaillant.

Exemples de niveau 2 : voyant orange de pile à combustible, bruit nouveau au freinage, pneu entre 2,0 et 2,3 bar, climatisation hors service par forte chaleur, compteur qui affiche une incohérence, terminal de paiement hors service.

Exemples de niveau 3 : voyant rouge de pile à combustible, voyant de détection d'hydrogène, odeur ou sifflement suspect à l'arrière, fumée, choc avec un tiers, pneu sous 2,0 bar ou entaillé, direction ou freinage anormal.

## 4.2 Voyant orange de pile à combustible

Le voyant orange fixe signale une anomalie non bloquante. Le véhicule roule, mais son comportement peut être dégradé : puissance réduite, consommation d'hydrogène augmentée, climatisation moins efficace.

Conduite à tenir :

1. **Terminer la course en cours.** Le passager n'est pas débarqué en route pour un voyant orange.
2. Après dépose, appeler le pôle exploitation au 01 84 77 20 10.
3. ⛔ **Ne pas accepter de nouvelle course** avant l'accord de l'exploitation.
4. Se rendre au dépôt ou à l'atelier selon l'instruction reçue.
5. Noter l'heure d'apparition du voyant et le kilométrage sur la fiche de poste.

⚠️ **Un voyant orange qui s'éteint seul se signale quand même.** L'atelier a besoin de l'horodatage pour lire les codes défaut, qui restent en mémoire même après extinction du voyant. Trois voyants orange fugaces sur le même véhicule en un mois déclenchent une immobilisation préventive.

## 4.3 Voyant rouge de pile à combustible

Le voyant rouge clignotant signale une anomalie bloquante de la pile à combustible. **Le véhicule peut se mettre en sécurité et perdre sa motricité sans préavis.**

Conduite à tenir, dans cet ordre :

1. **Mettre les feux de détresse** et chercher immédiatement un endroit sûr pour s'arrêter.
2. S'arrêter, serrer le frein de stationnement, **couper le contact**.
3. Faire descendre les passagers et les éloigner du véhicule, du côté opposé à la circulation.
4. Sortir du véhicule et s'éloigner.
5. Appeler le 01 84 77 20 10.
6. Si l'arrêt a lieu sur une voie rapide ou le périphérique, appeler aussi le 112 et se placer derrière une glissière.

⛔ **On ne roule pas jusqu'au dépôt avec un voyant rouge, même si le dépôt est à 2 kilomètres.** Deux incidents de 2025 sont venus de là : un véhicule immobilisé en plein tunnel et un véhicule arrêté sur une voie de bus à l'heure de pointe. Dans les deux cas le chauffeur avait voulu « rentrer quand même ».

⛔ **On ne tente pas de redémarrer** un véhicule qui s'est mis en sécurité. Un redémarrage réussi n'autorise pas à repartir : le défaut est toujours là.

## 4.4 Détection de fuite d'hydrogène

C'est la situation la plus grave du manuel. Le véhicule porte des capteurs d'hydrogène dans l'habitacle et dans le compartiment arrière. Le voyant rouge de détection s'allume, souvent accompagné d'une alarme sonore.

⭐ **Pourquoi la procédure est différente de celle d'un incendie classique.** L'hydrogène est plus léger que l'air : il monte et se disperse très vite en extérieur, mais il s'accumule sous un plafond en intérieur. **On n'arrête donc jamais un véhicule suspect dans un parking souterrain, un tunnel ou un lavage couvert.** Si le voyant s'allume alors que le véhicule est en souterrain, la consigne est de sortir à l'air libre avant de s'arrêter, à allure réduite.

Conduite à tenir en extérieur :

1. Arrêt immédiat en sécurité, feux de détresse.
2. **Couper le contact.**
3. Évacuer tout le monde, se placer à **au moins 25 mètres**, en amont du vent si possible.
4. ⛔ **Personne ne fume, personne n'utilise de briquet, personne ne rallume le contact.**
5. Appeler le 112, puis le 01 84 77 20 10.
6. Empêcher toute personne d'approcher du véhicule jusqu'à l'arrivée des secours.

⛔ **On n'ouvre jamais le capot ni la trappe arrière.** ⛔ **On ne cherche jamais à localiser la fuite.** L'hydrogène est incolore et inodore : un chauffeur ne peut ni la voir ni la sentir, et une flamme d'hydrogène est presque invisible en plein jour.

⚠️ Un sifflement aigu à l'arrière du véhicule, même sans voyant allumé, se traite comme une détection de fuite.

## 4.5 Accident de la circulation

1. Sécuriser : feux de détresse, gilet, triangle si la configuration le permet.
2. Vérifier l'état des personnes avant tout autre geste. Appeler le 112 au moindre doute.
3. ⛔ **Avec un véhicule à hydrogène, prévenir explicitement les secours** en disant « véhicule à hydrogène, réservoirs sous haute pression ». Les pompiers adaptent leur périmètre. **Ne pas l'oublier est la seule spécificité de cette flotte en cas d'accident.**
4. Appeler le 01 84 77 20 10.
5. Remplir le constat. Photographier les deux véhicules, les plaques, les dégâts et la scène d'ensemble.
6. Ne reconnaître aucune responsabilité et ne rien signer d'autre que le constat.
7. Transmettre le constat et les photos au pôle exploitation **le jour même**.

Après un choc arrière, même léger, le véhicule est immobilisé par principe et part en contrôle atelier. Les réservoirs se trouvent à l'arrière, et leur contrôle n'est pas visuel.

## 4.6 Le véhicule ne démarre pas

Trois causes expliquent la quasi-totalité des cas.

| Symptôme | Cause probable | Ce que fait le chauffeur |
|---|---|---|
| Rien ne s'allume, pas de tableau de bord | batterie de servitude 12 V à plat | appeler l'exploitation, ne pas tenter de câbles sans accord |
| Tableau de bord allumé, refus de démarrage, message de niveau | hydrogène épuisé | ⛔ voir la procédure de panne sèche, le véhicule est remorqué |
| Tableau de bord allumé, voyant pile allumé, refus de démarrage | défaut de pile à combustible | appeler l'exploitation, véhicule immobilisé |

⚠️ **La batterie 12 V se décharge surtout à l'arrêt prolongé avec équipements allumés**, typiquement une attente de 2 heures en gare avec climatisation, lumineux et terminal actifs. La consigne est de couper la climatisation au-delà de 20 minutes d'attente et de faire tourner le véhicule 10 minutes toutes les 2 heures d'attente.

## 4.7 Crevaison

Les véhicules de la flotte **n'ont pas de roue de secours**, l'emplacement étant occupé par les équipements hydrogène sur les H2-A et H2-B. Ils embarquent un kit de réparation provisoire.

Le kit se pose uniquement si trois conditions sont réunies : la perforation est sur la bande de roulement et non sur le flanc, elle mesure moins de 4 millimètres, et le pneu n'a pas roulé à plat.

Après pose du kit : vitesse limitée à **80 km/h**, distance maximale **80 kilomètres**, et trajet direct vers l'atelier. ⛔ **Aucune course avec passager après pose d'un kit.** Le passager est réaffecté par l'exploitation.

Si les conditions ne sont pas réunies, le véhicule est remorqué.

## 4.8 Panne du compteur ou du terminal de paiement

Le compteur horokilométrique est un équipement réglementaire. **Un compteur en panne interdit de prendre une course.** Le véhicule rentre au dépôt à vide.

Le terminal de paiement en panne n'interdit pas de rouler, mais le chauffeur doit en informer le client **avant la prise en charge** et proposer les moyens restants. Si le client ne peut payer qu'en carte, la course est refusée et renvoyée à l'exploitation. ⛔ **Il est interdit de demander à un client d'aller retirer des espèces.**

Une course déjà effectuée avec un terminal défaillant se régularise par lien de paiement envoyé par l'exploitation. Le chauffeur relève le nom, le téléphone et le montant, et ne garde aucune coordonnée bancaire manuscrite.

## 4.9 Immobilisation et remorquage

L'immobilisation est décidée par le pôle exploitation, jamais par le chauffeur seul, sauf en niveau 3 où l'arrêt est immédiat et l'immobilisation automatique.

Le remorquage d'un véhicule à hydrogène demande un transporteur habilité. **Tous les dépanneurs ne le sont pas**, ce qui explique les délais.

| Zone | Délai moyen constaté |
|---|---|
| Paris intra-muros | 60 minutes |
| petite couronne | 90 minutes |
| grande couronne | 2 heures |
| hors Île-de-France | 3 heures et plus |

Pendant l'attente, le chauffeur reste avec le véhicule, sauf en niveau 3 où il reste à distance. Il ne quitte les lieux qu'après remise au dépanneur et récupération de ses effets, de la carte flotte et des documents de bord.

## 4.10 Que dire aux passagers

Les passagers d'un taxi à hydrogène posent souvent des questions, et une partie d'entre elles portent sur le risque. La consigne est de répondre simplement, sans dramatiser et sans promettre.

Ce qui se dit : le véhicule est homologué, les réservoirs sont contrôlés périodiquement, l'hydrogène se disperse vers le haut au lieu de s'accumuler au sol, et le seul rejet du véhicule est de la vapeur d'eau.

Ce qui ne se dit pas : aucun chiffre de sécurité inventé, aucune comparaison avec un autre carburant, aucune opinion sur un incident relayé par la presse.

En cas d'incident réel avec passagers à bord, le chauffeur annonce ce qu'il fait et pourquoi, en une phrase : « Je m'arrête, je coupe le contact, nous descendons et nous nous éloignons, c'est la procédure. » ⛔ **Il ne commente ni la cause ni la gravité**, qu'il ne connaît pas.

## 4.11 Le rapport d'incident

Tout incident de niveau 2 ou 3 donne lieu à un rapport, à remettre **dans les 24 heures**.

Le rapport contient : date et heure, lieu précis, véhicule et kilométrage, niveau retenu, description factuelle, présence de passagers, personnes prévenues et heure d'appel, suites immédiates.

⛔ **Le rapport ne contient aucune interprétation de cause.** « Le voyant rouge s'est allumé à 14 h 10 au niveau de la porte de Bagnolet » est un fait. « La pile a lâché à cause de la chaleur » est une hypothèse, et elle n'a pas sa place dans le rapport.

⭐ **Un rapport remis en retard pénalise le chauffeur même quand il n'a commis aucune faute**, parce que l'assurance et l'atelier travaillent dessus.

---

# Chapitre 5. Maintenance et entretiens

## 5.1 Le plan d'entretien

| Échéance | Intervention | Immobilisation |
|---|---|---|
| tous les 15 000 km ou 12 mois | entretien courant, filtres, contrôles | une demi-journée |
| tous les 30 000 km | entretien courant plus contrôle de la pile et des capteurs | une journée |
| tous les 60 000 km | entretien majeur, remplacement des filtres de pile | deux jours |
| tous les 12 mois | contrôle d'étanchéité du circuit hydrogène | une demi-journée |
| tous les 48 mois | inspection réglementaire des réservoirs | trois jours |

L'échéance qui tombe la première s'applique. Le kilométrage et la date se suivent tous les deux.

## 5.2 Ce que le chauffeur contrôle lui-même

Le chauffeur n'intervient jamais sur le circuit hydrogène, la pile ou la haute tension. **Son périmètre est strictement le suivant** : pression et état des pneus, niveau de lave-glace, propreté des vitres et des optiques, fonctionnement des feux, état des essuie-glaces, propreté de l'habitacle, et fonctionnement des équipements taxi.

⛔ **Tout le reste est atelier**, y compris le remplacement d'une ampoule et le complément de liquide de frein.

## 5.3 Les filtres à air de la pile

La pile à combustible consomme de l'air ambiant, qui est filtré avant d'entrer. Un filtre colmaté réduit la puissance et augmente la consommation d'hydrogène.

Les signes d'un filtre en fin de vie sont une perte de reprise, une consommation anormale et parfois un voyant orange de pile. ⚠️ **Un véhicule qui consomme soudainement 15 % de plus sans changement de conditions est très probablement un cas de filtre**, et cela se signale en niveau 1 avec le relevé de consommation.

Les filtres se remplacent tous les 60 000 km, et plus tôt pour les véhicules affectés aux zones de chantier ou aux tunnels.

## 5.4 Pneumatiques

| Point | Valeur |
|---|---|
| Pression avant, à froid | 2,5 bar |
| Pression arrière, à froid | 2,4 bar |
| Pression minimale tolérée | 2,3 bar |
| Pression bloquante | sous 2,0 bar |
| Profondeur de sculpture, remplacement | 3 mm |
| Profondeur de sculpture, limite légale | 1,6 mm |

⭐ **La flotte remplace à 3 mm et non à 1,6 mm.** Le véhicule est lourd, propulsé par les roues arrière sur les H2-A et H2-B, et son couple immédiat use l'arrière plus vite que l'avant. Un pneu arrière dure en moyenne 28 000 km contre 42 000 km à l'avant.

Le contrôle de pression se fait à froid, c'est-à-dire avant de rouler ou après plus de 2 heures d'arrêt. **Une pression relevée à chaud est faussée vers le haut de 0,2 à 0,3 bar**, et ne sert donc pas à décider d'un gonflage.

## 5.5 Freins et récupération au freinage

Le véhicule freine d'abord par récupération d'énergie, et ne sollicite les freins mécaniques qu'au-delà. Deux conséquences pratiques.

Les plaquettes durent beaucoup plus longtemps que sur un véhicule thermique, souvent plus de 80 000 km. **Mais les disques rouillent** faute d'être assez utilisés, surtout sur les véhicules de maraude urbaine. L'atelier préconise un freinage appuyé volontaire une fois par poste, sur route dégagée, pour décaper les disques.

Un bruit de frottement métallique au freinage à froid qui disparaît après quelques freinages est normal sur ces véhicules. **Un bruit qui persiste à chaud est un niveau 2.**

## 5.6 Lavage

Le lavage est pris en charge sur les stations conventionnées de la liste du chapitre 2, avec la carte flotte du véhicule.

⛔ **Le lavage haute pression est interdit sur la trappe de remplissage, le dessous arrière du véhicule et les grilles d'entrée d'air de la pile.** ⛔ **Les tunnels de lavage couverts avec séchage par air chaud sont interdits sur toute la flotte**, à cause du risque d'accumulation en milieu fermé si une fuite existait.

Le lavage attendu est d'un extérieur par semaine et d'un intérieur complet par semaine, plus un passage intérieur rapide entre deux postes. Un véhicule présenté sale à une course aéroport est un motif de réclamation client fréquent.

## 5.7 Contrôle technique

Les véhicules de la flotte sont soumis au contrôle technique **tous les 12 mois**, comme tout véhicule affecté au transport de personnes à titre onéreux, et non tous les 2 ans.

Le contrôle est organisé par le pôle exploitation. Le chauffeur n'a aucune démarche à faire, hors conduite du véhicule au centre si on le lui demande. ⛔ **Un véhicule dont le contrôle technique est expiré ne prend pas de poste**, et c'est un contrôle de prise de poste bloquant.

## 5.8 Les réservoirs d'hydrogène et leur date limite

C'est la particularité la plus mal connue des chauffeurs. **Les réservoirs d'hydrogène ont une date limite d'utilisation**, inscrite sur une étiquette dans le compartiment arrière. Passée cette date, le véhicule ne peut plus être ravitaillé légalement, quelle que soit son état par ailleurs.

Les réservoirs de la flotte ont une durée de vie de 15 ans à compter de leur date de fabrication. L'inspection réglementaire a lieu tous les 48 mois.

Le chauffeur n'a rien à vérifier là-dessus, mais il doit savoir que **c'est cette date, et non le kilométrage, qui décide la fin de vie du véhicule**. Les neuf H2-C du sous-parc de réserve arrivent à échéance en 2036.

## 5.9 Prise de rendez-vous atelier

Le chauffeur ne prend jamais rendez-vous directement. Il signale, et l'exploitation planifie. **Un chauffeur qui amène un véhicule à l'atelier sans rendez-vous repart avec.**

L'atelier est ouvert du lundi au vendredi de 7 h à 19 h, et le samedi de 8 h à 13 h pour les urgences uniquement. Aucune intervention le dimanche hors niveau 3.

## 5.10 Véhicule de remplacement

Un chauffeur dont le véhicule est immobilisé reçoit un véhicule de remplacement si la flotte en dispose, par ordre de priorité : chauffeur titulaire en poste, chauffeur titulaire en prise de poste, remplaçant.

Les neuf H2-C servent de réserve. ⚠️ **Un H2-C a 400 km d'autonomie retenue et n'est pas autorisé aux courses aéroport**, ce qui change la planification de la journée. Le chauffeur qui reçoit un H2-C doit le signaler à l'exploitation avant d'accepter la première course.

Si aucun véhicule n'est disponible, le poste est annulé et compté comme poste travaillé, l'indisponibilité n'étant pas imputable au chauffeur.

---

# Chapitre 6. Réglementation du transport de personnes

> ⚠️ Ce chapitre est la transcription interne des règles applicables à la flotte. **En cas de divergence, le texte officiel et l'autorité compétente prévalent sur ce manuel.** Un chauffeur qui constate une divergence le signale au pôle exploitation.

## 6.1 Carte professionnelle

La carte professionnelle de conducteur de taxi est **personnelle, nominative et obligatoire**. Elle doit être présente dans le véhicule et visible du passager pendant toute la durée du service.

| Point | Règle de la flotte |
|---|---|
| Validité | 5 ans, renouvellement à la charge du chauffeur |
| Délai d'alerte | le chauffeur prévient l'exploitation **90 jours** avant expiration |
| Carte expirée | ⛔ interdiction absolue de prendre un poste |
| Carte oubliée au domicile | ⛔ interdiction de prendre un poste, aucune tolérance |
| Perte ou vol | déclaration et signalement le jour même |

⛔ **Rouler avec une carte expirée engage le chauffeur personnellement**, pas seulement la société. C'est le seul manquement du manuel qui expose à une sanction administrative individuelle.

## 6.2 Autorisation de stationnement

L'autorisation de stationnement, appelée licence, est attachée au véhicule et détenue par la société. Elle autorise la prise en charge sur la voie publique et dans les zones réservées de la commune de rattachement.

Un chauffeur ne peut pas prendre en charge un client en maraude ou à une station de taxi **en dehors de la zone de rattachement de l'autorisation**. En dehors de cette zone, il ne peut travailler que sur réservation préalable, et il doit en apporter la preuve en cas de contrôle.

⚠️ **C'est la confusion la plus sanctionnée lors des contrôles.** Un retour à vide depuis une commune hors zone est autorisé ; charger un client au passage parce qu'il fait signe ne l'est pas.

## 6.3 Le compteur horokilométrique

Le compteur est un instrument de mesure réglementé, vérifié périodiquement et scellé. **Toute intervention dessus est interdite**, y compris le simple décollement d'un scellé.

| Situation | Obligation |
|---|---|
| Course en zone, prise en charge sur voie publique | compteur en marche obligatoire |
| Course sur réservation avec prix annoncé à l'avance | prix forfaitaire autorisé, compteur en marche pour contrôle |
| Trajet à vide, retour au dépôt | compteur à l'arrêt, position libre |
| Attente demandée par le client | compteur en marche, tarif d'attente |

⛔ **Un scellé rompu ou un compteur qui affiche une incohérence rend le véhicule indisponible immédiatement.** C'est un niveau 2 avec interdiction de prendre une course, et non un simple signalement.

## 6.4 Affichage obligatoire

Les éléments suivants doivent être présents et lisibles. Leur absence est un contrôle de prise de poste bloquant.

1. Le lumineux sur le toit, en état de fonctionnement, indiquant la disponibilité.
2. La grille tarifaire complète, affichée à l'intérieur et lisible du passager.
3. Le numéro de l'autorisation de stationnement, apposé sur le véhicule.
4. La carte professionnelle du conducteur, visible du passager.
5. L'information sur les moyens de paiement acceptés.
6. L'affichette d'information sur le traitement des réclamations.

## 6.5 Maraude, stationnement et réservation

Trois modes d'exercice, avec des règles distinctes.

**La maraude** est la circulation en quête de clients sur la voie publique, dans la zone de l'autorisation. Le lumineux indique la disponibilité. La prise en charge est immédiate et le compteur démarre à la prise en charge.

**Le stationnement** se fait aux emplacements réservés aux taxis, dans la zone de l'autorisation. L'ordre d'arrivée se respecte. ⛔ **Il est interdit de refuser une course courte à une station**, et c'est le deuxième motif de réclamation client de la flotte.

**La réservation** est la course commandée à l'avance, par l'exploitation ou une plateforme. Elle est autorisée partout, zone ou hors zone. Le chauffeur doit pouvoir produire la preuve de réservation.

## 6.6 Temps de conduite et repos

| Règle | Valeur |
|---|---|
| Amplitude maximale d'un poste | 11 heures |
| Conduite effective maximale par poste | 9 heures |
| Pause obligatoire | 30 minutes consécutives après 4 h 30 de conduite |
| Repos quotidien entre deux postes | 11 heures consécutives minimum |
| Repos hebdomadaire | 35 heures consécutives minimum |

⛔ **Le dépassement d'amplitude n'est jamais compensé par une prime.** Un chauffeur qui atteint son amplitude refuse la course suivante, même en pleine demande, et même si l'exploitation la propose. ⭐ **L'exploitation ne peut pas autoriser un dépassement**, et une instruction en ce sens se refuse et se signale.

## 6.7 Carnet de bord

Le carnet de bord est tenu par poste et par véhicule. Il contient les heures de début et de fin, le kilométrage de début et de fin, les pauses, les ravitaillements, les courses et les anomalies.

Il se tient **au fil du poste et non à la fin**. Un carnet rempli de mémoire en fin de journée est inexact, et il perd toute valeur en cas de contrôle ou de litige client.

Le carnet reste dans le véhicule. Il est relevé par l'exploitation chaque semaine et archivé 5 ans.

## 6.8 Contrôle de police ou de la DGCCRF

Conduite à tenir :

1. Rester courtois, rester dans le véhicule si on ne demande pas d'en sortir.
2. Présenter les documents demandés : permis, carte professionnelle, carte grise, attestation d'assurance, autorisation de stationnement, carnet de bord.
3. Laisser contrôler le compteur et les scellés.
4. ⛔ **Ne jamais discuter le fond d'une infraction relevée sur place.** Les observations se font par écrit, après.
5. Appeler le pôle exploitation dès la fin du contrôle, même si tout est conforme.
6. Transmettre toute pièce remise, procès-verbal ou avertissement, le jour même.

⚠️ Un chauffeur qui ne signale pas un contrôle est en faute, **même quand le contrôle n'a rien relevé**. L'exploitation a besoin de la fréquence et des lieux de contrôle.

## 6.9 Voies réservées et avantages des véhicules à hydrogène

Les véhicules de la flotte bénéficient des mêmes droits de circulation que les taxis thermiques, plus les avantages liés aux véhicules à émissions nulles là où la collectivité en accorde.

Ce qui est acquis et constant : accès aux voies réservées aux taxis, accès aux stations de taxi, circulation autorisée en zone à faibles émissions sans restriction de niveau.

⚠️ Ce qui varie selon la commune et la période : gratuité ou réduction de stationnement, accès à certaines voies de bus, dérogations en cas de circulation différenciée. ⛔ **Le chauffeur ne présume jamais d'un droit local.** En cas de doute, il applique la règle la plus restrictive et interroge l'exploitation.

## 6.10 Circulation différenciée et épisodes de pollution

En cas de mesure de circulation différenciée, les véhicules de la flotte sont autorisés à circuler, étant à émissions nulles à l'échappement.

⭐ **Deux conséquences d'exploitation.** La demande explose sur ces journées, parce qu'une partie du parc concurrent est immobilisée. Et les stations saturent, parce que tous les véhicules à hydrogène d'Île-de-France roulent en même temps.

Consigne sur ces journées : ravitailler avant la prise de poste et non pendant, viser un départ à 100 %, et privilégier Les Loges-en-Josas ou Créteil Pompadour plutôt que Paris Alésia, qui sature la première.

---

# Chapitre 7. Documents du chauffeur et conformité

## 7.1 La liste des documents obligatoires

Un chauffeur de la flotte doit détenir en permanence les six documents suivants, à jour.

| Document | Validité | Qui le suit |
|---|---|---|
| Permis de conduire catégorie B | permanent, sous réserve de validité du solde de points | chauffeur |
| Carte professionnelle de conducteur de taxi | 5 ans | chauffeur, alerte à 90 jours |
| Certificat d'aptitude physique, visite médicale | 5 ans, puis 2 ans après 60 ans, 1 an après 76 ans | chauffeur, alerte à 90 jours |
| Attestation de formation continue | 5 ans | exploitation, qui convoque |
| Attestation de premiers secours, PSC1 | permanente | chauffeur, à l'embauche |
| Extrait de casier judiciaire, bulletin numéro 3 | demandé à l'embauche et tous les 3 ans | exploitation |

⛔ **Ces six documents conditionnent le droit d'exercer.** Il n'existe aucune tolérance, aucun délai de grâce et aucune dérogation interne. Un document expiré interdit la prise de poste le jour même de l'expiration, pas le lendemain.

## 7.2 Les échéances et qui les suit

Le partage est strict et il est la cause de la plupart des mauvaises surprises.

**Ce que suit le chauffeur**, et dont il est seul responsable : le permis, la carte professionnelle, la visite médicale. ⚠️ **L'exploitation envoie un rappel à 90, 60 et 30 jours, mais ce rappel est un service et non une obligation.** L'absence de rappel n'excuse jamais une expiration.

**Ce que suit l'exploitation** : la formation continue, le casier judiciaire, et tous les documents du véhicule.

⭐ **La règle à retenir en une phrase** : tout ce qui est attaché à la personne du chauffeur est suivi par le chauffeur, tout ce qui est attaché au véhicule ou organisé par la société est suivi par la société.

## 7.3 Visite médicale

La visite médicale d'aptitude se passe devant un médecin agréé par la préfecture, et non chez le médecin traitant. **Une visite passée chez un médecin non agréé est nulle**, et c'est une erreur commise plusieurs fois par an dans la flotte.

La périodicité dépend de l'âge : tous les 5 ans jusqu'à 60 ans, tous les 2 ans de 60 à 76 ans, tous les ans au-delà de 76 ans.

La prise de rendez-vous est à la charge du chauffeur, et les délais atteignent couramment 2 mois en Île-de-France. ⚠️ **C'est pour cette raison que l'alerte est posée à 90 jours et non à 30.** Un chauffeur qui s'en occupe à 30 jours a une forte probabilité de se retrouver inapte administrativement alors qu'il est parfaitement apte médicalement.

Le coût de la visite est avancé par le chauffeur et remboursé sur présentation du justificatif, dans la limite du tarif de la consultation agréée.

## 7.4 Formation continue

La formation continue obligatoire est de **14 heures tous les 5 ans**. Elle est organisée et payée par la société, sur temps de travail.

L'exploitation convoque le chauffeur. ⛔ **Une convocation à la formation continue ne se refuse pas et ne se reporte qu'une fois**, sur motif écrit. Un second report entraîne la suspension des postes jusqu'à régularisation, parce que la société ne peut pas faire rouler un chauffeur dont l'attestation va expirer.

## 7.5 Permis de conduire, suspension et retrait de points

Le chauffeur informe l'exploitation **dans les 48 heures** de tout événement affectant son permis : retrait de points portant le solde à 4 ou moins, suspension, rétention, annulation, ou convocation pour un stage de récupération de points.

⛔ **Une suspension de permis, même de 24 heures, interdit immédiatement la conduite.** Un chauffeur qui prend un poste sous suspension commet une faute grave, et l'assurance de la société ne couvre pas le sinistre.

Les infractions commises pendant le service restent à la charge du chauffeur, amende et points. ⭐ **La société ne conteste jamais une infraction à la place du chauffeur** et ne paie aucune amende de circulation, à la seule exception des amendes de stationnement liées à une instruction écrite de l'exploitation.

## 7.6 Attestation d'assurance

L'attestation d'assurance est un document du véhicule et non du chauffeur. Elle est renouvelée par la société et doit être présente dans le véhicule.

Le chauffeur vérifie sa présence et sa date lors du contrôle de prise de poste. ⛔ **Une attestation expirée est un contrôle bloquant**, même si la société affirme que le contrat est à jour : c'est le document qui fait foi en cas de contrôle, pas la parole de l'exploitation.

## 7.7 Que se passe-t-il quand un document expire

| Document expiré | Conséquence immédiate | Conséquence sur la paie |
|---|---|---|
| Carte professionnelle | interdiction de poste | postes non travaillés non payés |
| Visite médicale | interdiction de poste | postes non travaillés non payés |
| Permis suspendu | interdiction de conduire | selon la convention, voir le pôle social |
| Formation continue | suspension des postes | postes maintenus 15 jours, le temps de la session |
| Attestation d'assurance du véhicule | véhicule indisponible | poste réaffecté sur un autre véhicule, payé |
| Contrôle technique du véhicule | véhicule indisponible | poste réaffecté sur un autre véhicule, payé |

⭐ **La logique du tableau** : quand le manquement vient du chauffeur, le poste n'est pas payé ; quand il vient du véhicule ou de la société, le chauffeur est réaffecté et payé.

## 7.8 Les documents du véhicule

Six documents doivent se trouver dans le véhicule en permanence : la carte grise, l'attestation d'assurance, l'autorisation de stationnement, le certificat de contrôle technique, le carnet de bord, et la notice de sécurité hydrogène.

⭐ **La notice de sécurité hydrogène est propre à cette flotte.** C'est un document de deux pages, rangé dans la pochette du pare-soleil conducteur, destiné aux secours. Elle indique l'emplacement des réservoirs, celui du coupe-circuit et la procédure de mise en sécurité. ⛔ **Elle ne sort jamais du véhicule** et sa disparition se signale immédiatement.

## 7.9 Transmission et conservation

Tout document remis à l'exploitation est transmis en copie lisible, par le canal interne. ⛔ **Aucune pièce d'identité, aucun document médical et aucune donnée bancaire ne se transmettent par messagerie personnelle**, ni par message instantané, ni par photo envoyée à un collègue.

Les originaux restent chez le chauffeur, hors documents du véhicule qui restent dans le véhicule.

La société conserve les copies le temps du contrat plus 5 ans. Un chauffeur peut demander la liste des documents détenus à son sujet et en obtenir copie.

---

# Chapitre 8. Prise en charge et conduite de la course

## 8.1 Ce qui peut se refuser et ce qui ne peut pas

C'est le chapitre le plus consulté du manuel et celui où les erreurs coûtent le plus cher en réclamations.

**Ce qui ne peut jamais se refuser :**

1. Une course courte, à une station ou en maraude. ⛔ Le refus de course courte est le deuxième motif de réclamation de la flotte.
2. Une personne accompagnée d'un chien guide ou d'assistance.
3. Une personne en situation de handicap, sauf impossibilité matérielle avérée liée au véhicule.
4. Un paiement par carte, les moyens affichés devant tous être acceptés.
5. Une course en raison de l'origine, de l'apparence, de l'âge, du sexe, de la religion ou de l'orientation du client.

**Ce qui peut se refuser**, en l'expliquant calmement et en prévenant l'exploitation :

1. Une course dont la destination est hors zone **si la prise en charge est en maraude ou en station**, le véhicule n'étant pas autorisé à charger hors zone au retour. Voir le point 6.2.
2. Un nombre de passagers supérieur au nombre de places assises équipées de ceinture.
3. Un volume de bagages que le coffre ne peut pas recevoir en sécurité. Voir le point 1.7.
4. Un client manifestement agressif ou menaçant.
5. Un client dont l'état fait courir un risque de souillure sans protection disponible.
6. Un animal autre qu'un chien guide, si le chauffeur le décide.

⚠️ **Tout refus se déclare à l'exploitation dans l'heure**, avec le lieu, l'heure et le motif. Un refus non déclaré est traité comme un refus injustifié si le client réclame.

## 8.2 Accessibilité et personnes à mobilité réduite

Les véhicules de la flotte sont des berlines et **ne sont pas aménagés pour le transport en fauteuil roulant non pliable**. C'est une limite matérielle du parc, pas un choix de service.

| Situation | Conduite à tenir |
|---|---|
| Fauteuil pliable, personne pouvant s'asseoir | course acceptée, le chauffeur plie et charge le fauteuil, et aide la personne à s'installer si elle le demande |
| Fauteuil non pliable | course refusée pour impossibilité matérielle, ⛔ **et le chauffeur appelle l'exploitation devant le client** pour faire envoyer un véhicule adapté |
| Déambulateur, canne, béquilles | course acceptée sans réserve |
| Personne malvoyante avec chien guide | course acceptée, ⛔ **le chien voyage dans l'habitacle, jamais dans le coffre** |
| Personne nécessitant un accompagnement médical | course acceptée si l'accompagnant est présent, refus sinon avec appel à l'exploitation |

⭐ **La formule à utiliser en cas d'impossibilité matérielle** : « Mon véhicule ne peut pas recevoir votre fauteuil en sécurité, j'appelle tout de suite pour qu'un véhicule adapté vienne vous chercher. » ⛔ **Jamais « je ne prends pas les fauteuils ».**

## 8.3 Animaux

Le chien guide ou d'assistance est accepté de droit, gratuitement, dans l'habitacle, et son refus est une discrimination.

Les autres animaux sont à l'appréciation du chauffeur. S'il accepte, l'animal voyage en cage ou sur une protection de siège, jamais libre sur la banquette. Le supplément animal du point 9.2 s'applique, sauf pour les chiens guides.

## 8.4 Bagages

Le chauffeur charge et décharge les bagages. ⛔ **Il ne soulève pas un bagage de plus de 25 kilos seul** et demande l'aide du client au-delà.

Rappels issus du point 1.7 : 2 grandes valises ou 1 grande et 2 cabines sur H2-A et H2-B, 2 grandes et 1 cabine sur H2-C, jamais de bagage au-dessus de la plage arrière, jamais de bagage sur la trappe d'accès aux réservoirs signalée en jaune.

Les objets suivants sont refusés : bidons de carburant même vides, bouteilles de gaz, produits inflammables, objets dépassant du coffre fermé. ⚠️ **Un vélo ne se transporte pas sur ces véhicules**, même démonté, faute de volume.

## 8.5 Enfants et dispositifs de retenue

Le véhicule embarque un réhausseur de série, rangé dans le coffre, adapté aux enfants de 15 à 36 kilos.

| Âge ou poids | Dispositif | Disponibilité |
|---|---|---|
| moins de 15 kg | siège coque ou siège enfant | ⛔ **non fourni**, apporté par le client |
| 15 à 36 kg | réhausseur | fourni, dans le coffre |
| plus de 36 kg ou plus de 1,35 m | ceinture seule | sans objet |

⛔ **Un enfant de moins de 15 kilos sans siège apporté par le client fait refuser la course**, et le chauffeur appelle l'exploitation. Il ne transporte jamais un nourrisson sur les genoux d'un adulte.

## 8.6 Nombre de passagers

Quatre passagers maximum, le chauffeur non compris, et une ceinture par passager. ⛔ **Aucun passager à l'avant si le coffre est plein et que des bagages sont au sol côté passager.**

Un cinquième passager se refuse sans discussion, y compris pour un enfant et y compris pour un trajet très court.

## 8.7 Client en état d'ébriété, agressif ou menaçant

Le chauffeur n'a pas à subir une agression. **Sa sécurité passe avant la course.**

| Niveau | Conduite à tenir |
|---|---|
| Client éméché mais calme | course acceptée, protection de siège posée, vitres entrouvertes, ⭐ supplément de nettoyage prévenu à l'avance |
| Client qui insulte ou menace verbalement | arrêt de la course au premier endroit sûr, descente demandée, appel à l'exploitation |
| Client qui menace physiquement, ou refuse de descendre | ⛔ **appel au 17, portes verrouillées, le chauffeur reste dans le véhicule, moteur en marche** |
| Agression physique | 17 puis 112 si blessure, puis exploitation, dépôt de plainte accompagné par la société |

⛔ **Le chauffeur ne débarque jamais un client sur une voie rapide, un tunnel, un pont ou une bretelle**, quel que soit son comportement. Il roule jusqu'au premier endroit sûr.

## 8.8 Objets oubliés

Tout objet trouvé est **déposé au pôle exploitation le jour même**, enregistré avec la date, l'heure, le lieu et la description.

⛔ **Le chauffeur ne contacte jamais directement le client** à partir d'un objet trouvé, même quand l'objet contient un téléphone ou des papiers. C'est l'exploitation qui prend contact. Cette règle protège le chauffeur d'une accusation de fouille.

⛔ **Un objet n'est jamais conservé à domicile « pour le rendre plus vite »**, et un objet remis à un collègue sans passer par l'exploitation est traité comme non restitué.

Les objets sont conservés 3 mois, puis remis aux objets trouvés de la préfecture de police.

## 8.9 Clients non francophones

Une part notable des courses gares et aéroports se fait sans langue commune. Trois réflexes.

Montrer plutôt que dire : le compteur, la grille tarifaire, le terminal de paiement, l'écran de navigation avec la destination affichée.

Faire confirmer la destination avant de démarrer, en la faisant pointer sur l'écran ou en la faisant écrire. ⭐ **Une destination mal comprise est la première cause de litige sur ces courses.**

Ne jamais improviser un prix à l'oral dans une langue approximative. Si le client veut un prix à l'avance, l'exploitation l'établit et l'envoie par écrit.

---

# Chapitre 9. Tarifs, paiement et litiges

## 9.1 Structure tarifaire

> ⚠️ Les montants de ce chapitre sont **fictifs** et servent uniquement d'exemple cohérent. Les tarifs réels sont ceux de la grille affichée dans le véhicule, qui seule fait foi.

| Élément | Montant |
|---|---|
| Prise en charge | 3,10 euros |
| Tarif kilométrique de jour, zone, course simple | 1,18 euro par km |
| Tarif kilométrique de nuit, dimanche et jours fériés | 1,76 euro par km |
| Tarif kilométrique retour à vide autorisé | 2,36 euros par km |
| Tarif horaire d'attente ou de marche lente | 42,00 euros par heure |
| Course minimale | 8,30 euros |

La plage de nuit court de 19 h à 7 h. Le dimanche et les jours fériés sont au tarif de nuit toute la journée.

⭐ **La course minimale s'applique même si le compteur affiche moins.** Un trajet de 600 mètres facturé 4,20 euros au compteur se règle 8,30 euros, et le chauffeur l'explique au client avant la fin de la course et non après.

## 9.2 Les suppléments

| Supplément | Montant | Condition |
|---|---|---|
| Quatrième passager adulte | 5,50 euros | à partir du quatrième, enfants de moins de 10 ans non comptés |
| Bagage en soute au-delà du premier | 2,00 euros par bagage | valises, pas les sacs à main ni les cabines portés en habitacle |
| Animal hors chien guide | 4,00 euros | ⛔ jamais pour un chien guide ou d'assistance |
| Réservation à l'avance | 7,00 euros | réservation de plus de 30 minutes à l'avance |
| Réservation immédiate | 4,00 euros | réservation de moins de 30 minutes |
| Nettoyage exceptionnel | 60,00 euros | souillure nécessitant une immobilisation, ⚠️ voir le point 9.6 |

⛔ **Tout supplément s'annonce avant la prise en charge**, jamais à la dépose. Un supplément non annoncé est systématiquement annulé en cas de réclamation, et le chauffeur en porte la charge.

## 9.3 Course forfaitaire

Une course peut se faire à prix forfaitaire si et seulement si le prix a été annoncé et accepté avant le départ, et que la course est une réservation.

Le compteur reste en marche pendant une course forfaitaire, pour contrôle, mais c'est le forfait annoncé qui est facturé, **même si le compteur affiche davantage**. ⛔ **Un chauffeur ne réajuste jamais un forfait à la hausse en cours de route**, y compris en cas d'embouteillage imprévu.

Si le compteur affiche nettement moins que le forfait, le chauffeur facture le montant le plus bas. ⭐ C'est une règle de la flotte, plus favorable au client que l'usage.

## 9.4 Moyens de paiement

Les quatre moyens suivants sont acceptés et affichés : espèces, carte bancaire, paiement sans contact par téléphone, et bon de transport d'entreprise cliente.

⛔ **Le refus de la carte bancaire est interdit**, quel que soit le montant, et constitue un motif de réclamation retenu. Un terminal en panne se traite selon le point 4.8.

Le chauffeur rend la monnaie. Il dispose d'un fonds de caisse de 40 euros en début de poste. ⛔ **Il ne demande jamais au client de faire l'appoint** et n'arrondit jamais à son avantage.

## 9.5 Reçu

Un reçu est remis **systématiquement et sans que le client le demande**. Il mentionne la date, les heures de début et de fin, les lieux de départ et d'arrivée, le détail du prix et des suppléments, l'identification du véhicule et le nom de la société.

⛔ **Un reçu ne se remplit jamais à blanc ni par avance**, et ne se modifie jamais à la demande du client. Une demande de reçu à montant majoré se refuse et se signale à l'exploitation.

## 9.6 Client qui ne paie pas

1. Rester calme, ne pas bloquer le client dans le véhicule, ne pas le retenir physiquement.
2. Noter immédiatement le signalement, le lieu, l'heure, et photographier le compteur.
3. Appeler l'exploitation. **Appeler le 17 si le client est encore présent et refuse ouvertement de payer.**
4. Établir un rapport dans les 24 heures, comme pour un incident de niveau 2.

⛔ **Le chauffeur n'avance jamais la somme et ne la prend jamais sur son fonds de caisse.** La course impayée est portée par la société dès lors que le rapport a été établi dans le délai.

Pour une souillure, le supplément de nettoyage de 60 euros n'est facturable au client que s'il a été annoncé avant la prise en charge. ⚠️ **Sans annonce préalable, l'immobilisation est à la charge de la société**, et c'est la raison de la consigne d'annonce du point 8.7.

## 9.7 Réclamation client

Toute réclamation arrive au pôle exploitation, jamais au chauffeur directement. Le chauffeur est invité à donner sa version par écrit, sous 48 heures.

⭐ **La version du chauffeur est systématiquement demandée avant toute conclusion**, et l'absence de réponse sous 48 heures est le seul cas où la réclamation est traitée sans lui.

Les trois motifs les plus fréquents de la flotte, dans l'ordre : itinéraire contesté, refus de course courte, supplément non annoncé.

⭐ **Les trois se prévenaient de la même façon** : annoncer avant de démarrer. L'itinéraire, le prix prévisible et les suppléments se disent à la prise en charge, pas à l'arrivée.

## 9.8 Pourboires

Le pourboire est libre, jamais sollicité, jamais réclamé, et jamais mentionné sur le reçu. ⛔ **Un terminal de paiement ne se présente jamais avec un montant pré-rempli supérieur à la course.**

---

# Chapitre 10. Temps de travail, frais et paie

## 10.1 Organisation des postes

| Poste | Horaires | Amplitude | Particularité |
|---|---|---|---|
| Matin | 5 h à 14 h | 9 heures | prise au dépôt, forte demande gares de 6 h à 9 h |
| Journée | 9 h à 19 h | 10 heures | prise au dépôt |
| Soir | 14 h à 1 h | 11 heures | ⚠️ amplitude maximale, aucune extension possible |
| Nuit | 21 h à 6 h | 9 heures | prise au dépôt, majoration de nuit |
| Relais gare | 7 h à 16 h ou 16 h à 1 h | 9 heures | prise du véhicule sur site, voir le point 3.5 |

Les postes du soir et de nuit ouvrent droit à la majoration conventionnelle. Un poste qui chevauche la plage de nuit, de 19 h à 7 h, ouvre droit à la majoration **pour les seules heures effectuées dans cette plage**.

## 10.2 Planning et échanges de postes

Le planning est publié le **jeudi pour la semaine suivante**, qui court du lundi au dimanche.

Un échange de poste entre deux chauffeurs est possible sous trois conditions cumulatives : les deux chauffeurs sont d'accord par écrit, l'échange ne crée pour aucun des deux un dépassement d'amplitude ou un repos quotidien inférieur à 11 heures, et l'exploitation le valide.

⛔ **Un échange non validé est nul.** Le chauffeur initialement planifié reste responsable du poste, et une absence consécutive à un échange non validé est traitée comme une absence injustifiée.

## 10.3 Absences, retards et arrêts de travail

| Situation | Délai de prévenance | Canal |
|---|---|---|
| Retard prévisible | dès que connu, au plus tard 1 heure avant | téléphone au 01 84 77 20 20 |
| Absence pour maladie | avant l'heure de prise de poste | téléphone, puis arrêt sous 48 heures |
| Absence imprévue, autre motif | avant l'heure de prise de poste | téléphone, jamais par message |
| Congé | demande 4 semaines à l'avance | formulaire interne |

⛔ **Une absence annoncée par SMS ou par message instantané n'est pas considérée comme annoncée.** La règle existe parce qu'un poste non pourvu doit être remplacé dans l'heure, ce qui demande un appel et une confirmation de personne à personne.

## 10.4 Frais remboursés

| Frais | Condition | Plafond |
|---|---|---|
| Hydrogène | carte flotte uniquement, station de la liste | sans plafond |
| Lavage | station conventionnée, carte flotte | 1 extérieur et 1 intérieur par semaine |
| Péage en course | justificatif et numéro de course | sans plafond |
| Parking en course, attente client | justificatif, maximum 2 heures | 12 euros par course |
| Visite médicale d'aptitude | justificatif et médecin agréé | tarif de la consultation agréée |
| Renouvellement de carte professionnelle | justificatif | montant du droit |
| Repas, poste de plus de 9 heures | justificatif daté dans la plage du poste | 12,50 euros |

## 10.5 Frais non remboursés

⛔ **Ne sont jamais remboursés** : les amendes de circulation, les amendes de stationnement hors instruction écrite de l'exploitation, l'hydrogène payé en dehors des stations de la liste sans accord téléphonique préalable, les lavages hors conventionnement, les boissons et repas hors plage de poste, les frais de téléphone personnel, et tout achat d'accessoire pour le véhicule.

⚠️ **Le cas de l'hydrogène hors liste mérite une précision.** Un chauffeur qui ravitaille dans une station hors liste **avec** l'accord téléphonique de l'exploitation est remboursé sur justificatif. Sans cet accord, il ne l'est pas, même si la situation était justifiée. ⭐ **C'est l'appel qui déclenche le remboursement, pas la justification après coup.**

## 10.6 Procédure de note de frais

1. Conserver le justificatif original, daté et lisible.
2. Porter le numéro de course au dos quand le frais s'y rattache.
3. Déposer la note **avant le 5 du mois suivant**.
4. Remboursement sur la paie du mois suivant le dépôt.

⛔ **Une note déposée après le 5 passe au mois d'après**, et une note déposée plus de 3 mois après la dépense n'est plus recevable.

## 10.7 Primes et éléments variables

| Élément | Déclenchement |
|---|---|
| Majoration de nuit | heures effectuées entre 19 h et 7 h |
| Majoration dimanche et jours fériés | heures effectuées ces jours-là |
| Prime de propreté | contrôle mensuel du véhicule sans réserve |
| Prime de ponctualité | aucun retard non prévenu sur le mois |
| Prime sans incident | aucun incident de niveau 2 ou 3 imputable sur le trimestre |

⭐ **La prime sans incident n'est pas perdue par un incident non imputable.** Un chauffeur victime d'un choc arrière à l'arrêt, ou dont le véhicule a eu un défaut de pile, conserve sa prime. ⛔ **Elle est perdue par une panne sèche d'hydrogène**, qui est retenue comme faute d'exploitation selon le point 1.6.

---

# Chapitre 11. Conditions dégradées

## 11.1 Grand froid

Le froid affecte ces véhicules plus qu'un thermique, et de trois façons.

**L'autonomie chute.** Sous zéro degré, compter **20 à 25 % d'autonomie en moins** par rapport à l'autonomie retenue. Un H2-A passe ainsi de 520 km à environ 400 km, et un H2-C de 400 km à environ 310 km.

**La pile met du temps à atteindre son régime.** Les premières minutes après un démarrage à froid donnent une puissance réduite. Le chauffeur roule souplement les 5 premières minutes et ne force pas.

**Le pistolet de ravitaillement peut geler sur le véhicule.** Voir le point 2.4 : attendre 2 à 3 minutes, le dégivrage est automatique, ⛔ **ne jamais forcer**, la réparation d'un raccord cassé immobilise le véhicule 4 jours.

⭐ **Consigne de planification par grand froid** : abaisser le seuil de vigilance de 40 % à **50 %**, et le seuil de réserve de 15 % à **20 %**. Tous les autres seuils du point 1.5 glissent d'autant.

## 11.2 Canicule

Au-delà de 30 degrés ambiants, deux effets.

**Le remplissage plafonne plus bas.** Voir le point 2.2 : le plafond descend de 5 à 10 points. Un plein à 85 % par 34 degrés est normal.

**La climatisation consomme.** Compter 8 à 12 % d'autonomie en moins en usage urbain climatisation permanente.

⚠️ **La consigne de couper la climatisation en attente prolongée, du point 4.6, ne s'applique pas par canicule avec un passager à bord.** Dans ce cas on garde la climatisation et on fait tourner le véhicule, en acceptant la consommation. ⭐ **Le confort et la santé du passager passent avant l'économie d'hydrogène.**

## 11.3 Neige et verglas

Les véhicules H2-A et H2-B sont **propulsés par les roues arrière**, ce qui les rend plus sensibles à la neige et au verglas qu'une traction avant. Les H2-C sont des tractions.

La flotte monte des pneus toutes saisons homologués 3PMSF sur l'ensemble du parc du 1er novembre au 31 mars. ⛔ **Les chaînes ne sont pas fournies et ne se montent pas sur ces véhicules** sans accord de l'atelier, le passage de roue étant réduit.

Conduite à tenir : accélérations très progressives, anticipation du freinage, abandon de la récupération forte au freinage si l'arrière se dérobe, et refus des rues en pente non traitées.

⭐ **Un chauffeur peut refuser une destination précise pour cause de voirie non traitée**, en le signalant à l'exploitation et en proposant au client la dépose la plus proche praticable. Ce refus-là n'est jamais compté comme un refus de course.

## 11.4 Pluie forte et inondation

⛔ **Un véhicule à hydrogène ne traverse pas une zone inondée.** La règle de la flotte est de ne jamais engager le véhicule dans plus de **10 centimètres d'eau stagnante**, et jamais dans de l'eau courante quelle que soit sa hauteur.

La raison est double : l'électronique de puissance et la haute tension sont en partie basses, et une immobilisation dans l'eau transforme un incident en niveau 3.

En cas d'immobilisation dans l'eau : couper le contact, évacuer, s'éloigner, appeler le 112 puis l'exploitation. ⛔ **Ne jamais tenter de ressortir le véhicule.**

## 11.5 Grève, manifestation et blocage

Les jours de manifestation déclarée, l'exploitation diffuse la veille les zones à éviter et les itinéraires de contournement.

Consignes : ne jamais traverser un cortège, ne jamais discuter avec des manifestants ou des forces de l'ordre depuis le véhicule, ne jamais filmer. En cas de blocage, prévenir l'exploitation, informer le passager, et proposer soit l'attente compteur à l'arrêt, soit la dépose au plus près praticable.

⭐ **Le compteur se met à l'arrêt pendant un blocage total de la circulation**, sur décision du chauffeur. C'est une règle de la flotte plus favorable au client que l'usage, et elle évite la grande majorité des réclamations de ces journées.

## 11.6 Épisodes de forte demande

Trois configurations saturent la flotte : la circulation différenciée du point 6.10, les grèves de transports en commun, et les intempéries fortes.

Dans ces trois cas, les stations saturent en même temps que la demande explose. ⭐ **La consigne est contre-intuitive mais elle est ferme : ravitailler tôt et plein, même en perdant une course.** Un véhicule à 100 % en début de journée fera 6 à 8 courses de plus qu'un véhicule qui devra faire la queue 40 minutes à Paris Alésia en milieu d'après-midi.

## 11.7 Vigilance météo, qui décide

| Niveau | Décision |
|---|---|
| Vigilance jaune | service normal, consignes de prudence diffusées |
| Vigilance orange | service maintenu, ⚠️ **le chauffeur peut refuser une destination précise** pour raison de sécurité, en la signalant |
| Vigilance rouge | ⛔ **service suspendu sur décision de l'exploitation uniquement.** Les véhicules en course terminent et rentrent au dépôt |

⛔ **Un chauffeur ne décide jamais seul d'une suspension de service**, et l'exploitation ne peut jamais imposer de rouler en vigilance rouge.

---

# Chapitre 12. Contacts, escalade et rappels

## 12.1 Les numéros

| Numéro | Qui | Disponibilité |
|---|---|---|
| **01 84 77 20 10** | ⭐ pôle exploitation, **urgences et incidents** | 24 h sur 24, 7 jours |
| 01 84 77 20 20 | planning, absences, retards | 5 h à 1 h, 7 jours |
| 01 84 77 20 30 | atelier | lundi au vendredi 7 h à 19 h, samedi 8 h à 13 h |
| 01 84 77 20 40 | pôle social, paie, documents | lundi au vendredi 9 h à 17 h |
| 112 | secours, tous services | 24 h sur 24 |
| 17 | police, agression, refus de paiement | 24 h sur 24 |

## 12.2 Quel numéro pour quoi

| Situation | Numéro, dans cet ordre |
|---|---|
| Voyant rouge, fuite, fumée | 01 84 77 20 10, et 112 si danger immédiat |
| Accident avec blessé | 112, puis 01 84 77 20 10 |
| Accident sans blessé | 01 84 77 20 10 |
| Panne sèche, panne, immobilisation | 01 84 77 20 10 |
| Agression, client qui refuse de payer et reste | 17, puis 01 84 77 20 10 |
| Station en panne | 01 84 77 20 10 |
| Retard ou absence | 01 84 77 20 20 |
| Bruit suspect, voyant orange | 01 84 77 20 10, puis atelier si on vous l'indique |
| Document expiré, question de paie | 01 84 77 20 40 |
| Objet oublié par un client | dépôt au pôle exploitation, pas d'appel |

⭐ **En cas de doute sur le numéro, appeler le 01 84 77 20 10.** Il est joint 24 h sur 24 et il réoriente. Un appel mal orienté n'est jamais reproché, un appel non passé l'est toujours.

## 12.3 Les délais d'escalade

| Événement | Délai |
|---|---|
| Incident de niveau 3 | immédiat, avant tout autre geste |
| Incident de niveau 2 | 15 minutes |
| Incident de niveau 1 | fin de poste, sur la fiche |
| Refus de course | dans l'heure |
| Contrôle de police, même sans suite | fin du contrôle |
| Rapport d'incident écrit | 24 heures |
| Version du chauffeur sur une réclamation | 48 heures |
| Événement affectant le permis | 48 heures |
| Perte ou vol de carte flotte | immédiat |

## 12.4 Ce qui ne passe jamais par un collègue

⛔ Une absence ou un retard. ⛔ Un échange de poste. ⛔ Un objet trouvé. ⛔ Un signalement d'incident. ⛔ Une pièce d'identité ou un document médical. ⛔ Une carte flotte.

⭐ **La règle unique derrière ces six interdits** : rien de ce qui engage la société ou les données d'une personne ne transite entre chauffeurs. Tout passe par un canal interne, qui en garde la trace.

## 12.5 Les dix règles à ne jamais oublier

1. Un **voyant rouge** ou une **détection de fuite** : arrêt immédiat, contact coupé, évacuation, et on n'essaie pas de rentrer au dépôt.
2. En cas d'accident, **dire aux secours « véhicule à hydrogène, réservoirs sous haute pression »**.
3. Sous **15 % d'hydrogène**, plus aucune course, station la plus proche, et on prévient avant de partir.
4. Un **plein qui plafonne à 85 %** par temps chaud ou sur réservoirs chauds est normal, sous 70 % à froid ne l'est pas.
5. Une **carte professionnelle ou une visite médicale expirée** interdit le poste, sans tolérance, le jour même.
6. On ne **refuse jamais** une course courte, une carte bancaire, ni un chien guide.
7. Tout **supplément s'annonce avant** la prise en charge, jamais à la dépose.
8. On ne cherche **jamais une borne de recharge électrique** pour ces véhicules.
9. Un **objet oublié** va au pôle exploitation le jour même, et le chauffeur ne contacte jamais le client.
10. En cas de doute sur quoi que ce soit : **01 84 77 20 10**, 24 h sur 24.

---

# Chapitre 13. Questions fréquentes

**Le véhicule fait un bruit de soufflerie à l'arrêt, est-ce normal ?**
Oui. Le compresseur d'air de la pile à combustible fonctionne même à l'arrêt quand la pile produit. Le bruit est plus audible qu'un thermique au ralenti parce qu'il n'y a aucun bruit de moteur pour le masquer.

**De l'eau s'écoule sous le véhicule, est-ce une fuite ?**
Non. La pile à combustible produit de l'eau, qui est évacuée. Un écoulement d'eau claire sous le véhicule, surtout après un trajet, est le fonctionnement normal. ⚠️ Un liquide coloré, huileux ou visqueux n'est pas de l'eau et se signale en niveau 2.

**Puis-je purger l'eau manuellement ?**
Il existe une commande de purge sur le tableau de bord, à utiliser avant d'entrer dans un parking fermé ou un lavage, pour éviter de laisser une flaque. Elle ne sert à rien d'autre et son usage n'est pas obligatoire.

**Combien coûte un plein ?**
La question n'a pas de réponse utile pour le chauffeur : le ravitaillement passe par la carte flotte et ne sort pas de son enveloppe de frais. Le prix au kilogramme est négocié par la société station par station.

**Le véhicule peut-il rouler sans hydrogène, sur la batterie seule ?**
Non, pas de façon utile. La batterie de traction est de faible capacité et sert d'appoint. Un véhicule sans hydrogène est un véhicule immobilisé, et il se remorque.

**Que faire si je ne trouve pas la notice de sécurité hydrogène dans le véhicule ?**
La signaler immédiatement au pôle exploitation. Elle est rangée dans la pochette du pare-soleil conducteur. Son absence n'est pas bloquante pour la prise de poste mais elle se régularise le jour même.

**Puis-je garer le véhicule dans un parking souterrain ?**
Oui, les parkings souterrains ne sont pas interdits à ces véhicules en fonctionnement normal. ⛔ **En revanche, un véhicule présentant un voyant de détection de fuite ne s'arrête jamais en souterrain** : on sort à l'air libre avant de s'arrêter, voir le point 4.4.

**La climatisation consomme-t-elle de l'hydrogène ?**
Oui, indirectement : elle consomme de l'électricité, que la pile produit à partir d'hydrogène. Compter 8 à 12 % d'autonomie en moins en usage urbain avec climatisation permanente.

**Combien de temps dure un plein par rapport à une recharge électrique ?**
De 3 à 5 minutes pour un plein complet sur une station en bon état et des réservoirs froids. C'est le principal avantage d'exploitation de cette technologie sur un véhicule électrique à batterie pour un usage taxi.

**Dois-je débrancher quelque chose en fin de poste ?**
Non. Il n'y a aucun branchement à faire ni à défaire. Le véhicule se verrouille et la clé va au tableau du dépôt.

---

# Chapitre 14. Gares, aéroports et sites particuliers

## 14.1 Pourquoi ce chapitre existe

Les sites à forte affluence ont chacun leurs règles d'accès, leurs zones d'attente et leurs redevances. **Une erreur sur un site coûte au mieux une amende, au pire l'exclusion du site pour tout le véhicule.** Les règles ci-dessous prévalent sur les habitudes orales transmises entre chauffeurs.

## 14.2 Roissy Charles-de-Gaulle

| Point | Règle |
|---|---|
| Accès à la zone de prise en charge | badge véhicule obligatoire, lecteur à l'entrée de la zone taxi |
| Zone d'attente | parc d'attente commun, appel par vague, ⛔ **l'ordre d'appel se respecte sans exception** |
| Terminaux desservis | 1, 2A à 2F, 3 |
| Ravitaillement sur site | station Roissy Cargo, 5 h à 1 h, badge d'accès zone nécessaire |
| Redevance | prélevée automatiquement par le badge, aucune avance de frais |
| Attente moyenne au parc | 40 à 90 minutes selon la tranche horaire |
| Sous-parc autorisé | ⛔ **H2-A uniquement**, voir le point 1.1 |

⛔ **Un chauffeur ne quitte jamais le parc d'attente pour aller chercher un client en direct sur un terminal.** C'est le manquement le plus sanctionné sur ce site, et il entraîne une exclusion temporaire du véhicule.

⚠️ **Le badge est attaché au véhicule, pas au chauffeur.** Un chauffeur affecté à un véhicule sans badge ne peut pas prendre de course aéroport, et il le signale avant d'accepter la première course de la journée.

## 14.3 Orly

| Point | Règle |
|---|---|
| Accès | badge véhicule obligatoire |
| Zone d'attente | parc d'attente unique, appel par vague |
| Terminaux desservis | Orly 1, 2, 3, 4 |
| Ravitaillement sur site | station Orly Fret, 24 h sur 24, badge d'accès zone nécessaire |
| Attente moyenne au parc | 30 à 70 minutes |
| Sous-parc autorisé | ⛔ **H2-A uniquement** |

⭐ **Orly Fret est la seule station de la liste ouverte 24 h sur 24.** C'est elle qui sert de recours pour les postes de nuit, y compris sans course aéroport, à condition de disposer du badge d'accès zone.

## 14.4 Gares parisiennes

Les gares n'exigent pas de badge, mais chacune a une zone de prise en charge dédiée dont la sortie est à sens unique.

| Gare | Zone de prise en charge | Particularité |
|---|---|---|
| Gare du Nord | niveau départ, côté rue de Dunkerque | ⚠️ saturée de 7 h à 9 h 30 et de 17 h à 20 h |
| Gare de Lyon | zone taxi sous la halle, accès par le boulevard Diderot | sortie à sens unique, pas de retour arrière possible |
| Montparnasse | niveau parking taxi, accès par la rue du Commandant Mouchotte | ⚠️ hauteur limitée à 2,00 m, sans objet pour la flotte |
| Saint-Lazare | zone cour de Rome | file courte, rotation rapide |
| Gare de l'Est | parvis, côté rue du Faubourg Saint-Martin | peu saturée hors départs de vacances |
| Austerlitz | zone taxi devant le hall principal | travaux fréquents, se renseigner avant |
| Bercy | zone taxi côté rue de Bercy | affluence concentrée sur les départs nocturnes |

⛔ **La prise en charge à une gare se fait exclusivement dans la zone dédiée.** Charger un client sur la voie publique à 50 mètres de la zone, parce que la file est longue, est un détournement de file sanctionné.

## 14.5 Le relais gare

Certains postes commencent et finissent sur un site plutôt qu'au dépôt. La procédure complète est au point 3.5. Trois rappels propres aux gares.

Le relais se fait **dans la zone d'attente et non dans la zone de prise en charge**, pour ne pas bloquer la file.

Le chauffeur entrant vérifie en priorité le niveau d'hydrogène et les documents de bord, les véhicules en relais passant moins souvent au dépôt.

⚠️ **Le niveau d'hydrogène attendu au relais est de 50 % minimum**, comme en fin de poste au dépôt, selon le point 3.3. Un relais pris sous 30 % se signale et le temps de ravitaillement est décompté du poste du chauffeur sortant.

## 14.6 Hôpitaux et établissements de santé

Les courses vers et depuis les établissements de santé suivent trois règles particulières.

L'accès aux zones de dépose est souvent réservé et contrôlé. Le chauffeur suit la signalisation « dépose minute » et ne stationne pas en zone ambulance, **sous aucun prétexte, même pour aider un passager à descendre**.

Une course médicale prise en charge par un organisme se traite sur bon de transport et non en paiement direct. Le chauffeur vérifie que le bon est rempli et signé avant de démarrer. ⛔ **Un bon incomplet se refuse et se signale à l'exploitation**, parce qu'un bon incomplet n'est jamais payé.

⚠️ **Un transport médical allongé ou nécessitant un accompagnement soignant n'est pas du ressort de la flotte.** Le chauffeur refuse et appelle l'exploitation, qui réoriente vers un transporteur sanitaire.

## 14.7 Grands événements et sites temporaires

Pour les salons, stades et sites événementiels, l'exploitation diffuse une note la veille comportant la zone de prise en charge autorisée, l'itinéraire d'accès, l'itinéraire de sortie et le contact sur site.

⛔ **En l'absence de note, le chauffeur ne se rend pas sur le site en maraude.** La forte demande apparente de ces événements cache presque toujours une zone fermée et une amende.

## 14.8 Clients entreprise et bons de transport

Les clients entreprise règlent sur bon de transport. Le chauffeur vérifie trois éléments avant de démarrer : le nom de la société cliente, la validité du bon, et la présence d'un numéro de commande ou de centre de coût.

Il ne demande aucun paiement complémentaire au passager, y compris pour les suppléments. ⭐ **Les suppléments d'une course sur bon se portent sur le bon, pas sur le passager.**

Le bon se remet au pôle exploitation en fin de poste, avec la fiche. ⛔ **Un bon perdu est une course perdue** : elle n'est pas facturable au client et elle n'est pas comptée au chauffeur.

---

# Chapitre 15. Terminal embarqué et gestion des courses

## 15.1 Les équipements embarqués

Quatre équipements, tous alimentés par le véhicule et aucun par une batterie propre.

| Équipement | Fonction | En cas de panne |
|---|---|---|
| Compteur horokilométrique | tarification réglementaire | ⛔ **niveau 2, aucune course possible** |
| Terminal de paiement | encaissement carte et sans contact | niveau 2, courses possibles avec réserve, voir 4.8 |
| Tablette de course | réception, acceptation et suivi des courses | niveau 2, bascule en mode téléphone |
| Lumineux de toit | affichage de la disponibilité | ⛔ **niveau 2, aucune course possible** |

⚠️ **Le compteur et le lumineux sont réglementaires, la tablette et le terminal sont commerciaux.** C'est pourquoi la panne des deux premiers interdit de travailler et pas celle des deux seconds.

## 15.2 Les états de la tablette

| État | Signification | Visible du client |
|---|---|---|
| Libre | disponible pour une course | lumineux vert |
| Approche | course acceptée, en route vers le client | lumineux éteint |
| À bord | client pris en charge, compteur en marche | lumineux rouge |
| Pause | indisponible, pause réglementaire | lumineux éteint |
| Hors service | indisponible, anomalie ou fin de poste | lumineux éteint |

⛔ **L'état de la tablette doit toujours refléter la réalité.** Rester en « Libre » pendant une pause, ou en « Pause » pour éviter les courses courtes, est une faute d'exploitation et c'est détecté automatiquement par le rapprochement entre la tablette et le compteur.

## 15.3 Accepter et refuser une course

Une course proposée s'accepte ou se refuse dans les **30 secondes**. Sans réponse, elle part au véhicule suivant et le refus est compté comme un refus implicite.

Le taux de refus est suivi mensuellement. ⭐ **Un refus motivé et déclaré selon le point 8.1 n'entre pas dans le taux.** Un refus implicite y entre.

Les motifs de refus proposés par la tablette sont : amplitude atteinte, niveau d'hydrogène insuffisant, hors zone, capacité insuffisante, véhicule inadapté, sécurité. ⛔ **Il n'existe pas de motif « course trop courte », et c'est volontaire.**

## 15.4 Quand la tablette tombe en panne

1. Passer l'état en « Hors service » si l'écran répond encore.
2. Appeler le 01 84 77 20 10.
3. Basculer en **mode téléphone** : l'exploitation attribue les courses par appel et le chauffeur les note sur sa fiche de poste.
4. Tenir le carnet de bord à la main, selon le point 6.7, puisque la tablette ne le remplit plus.
5. Terminer le poste en mode téléphone, sauf instruction contraire.

⚠️ **En mode téléphone, le compteur reste la référence réglementaire.** Toute course se tarifie au compteur, et aucun forfait ne s'improvise, sauf prix communiqué par écrit par l'exploitation.

## 15.5 Le rapprochement de fin de poste

À la clôture, l'exploitation rapproche trois sources : les courses de la tablette, les relevés du compteur, et les encaissements du terminal.

Les écarts les plus fréquents et leur cause habituelle :

| Écart | Cause habituelle |
|---|---|
| Course sur tablette sans encaissement | paiement sur bon non remis, ou terminal en panne |
| Encaissement sans course sur tablette | course prise en mode téléphone non ressaisie |
| Kilométrage compteur supérieur au cumul des courses | trajets à vide normaux, ou compteur laissé en marche à vide |
| Kilométrage compteur inférieur au cumul des courses | ⛔ **anomalie à expliquer, jamais normale** |

⭐ **Un écart signalé par le chauffeur sur sa fiche n'est jamais un problème.** Un écart découvert par l'exploitation sans mention sur la fiche en est un, parce que personne ne sait plus le reconstituer trois jours après.

## 15.6 Téléphone personnel

Le téléphone personnel ne sert jamais à prendre une course, à encaisser, ni à communiquer avec un client. ⛔ **Aucune coordonnée de client ne se note sur un téléphone personnel.**

Il est toléré pour appeler l'exploitation, en mains libres uniquement, et son usage en conduite reste interdit par le code de la route. ⚠️ **L'infraction est à la charge du chauffeur**, selon le point 7.5.

---

# Chapitre 16. Sécurité personnelle et travail de nuit

## 16.1 Principe général

**La sécurité du chauffeur passe avant la course, avant le chiffre et avant la satisfaction du client.** Aucune règle de ce manuel ne s'oppose à ce principe, et aucune instruction de l'exploitation ne peut y déroger.

## 16.2 Réflexes de base

Portes verrouillées en roulant, y compris en circulation lente. Fenêtre conducteur entrouverte de quelques centimètres au maximum lors d'un échange avec une personne à l'extérieur. Fonds de caisse limité à 40 euros, jamais plus, et jamais visible. Aucun objet de valeur personnel dans l'habitacle.

⭐ **Le véhicule reste la protection la plus efficace.** Portes verrouillées, moteur en marche, il permet de quitter les lieux. ⛔ **Sortir du véhicule pour s'expliquer avec quelqu'un est l'erreur à ne jamais commettre.**

## 16.3 Prise en charge nocturne

| Situation | Conduite à tenir |
|---|---|
| Client seul, adresse isolée, 2 h du matin | course acceptable, ⭐ signaler la destination à l'exploitation avant de démarrer |
| Groupe de plus de 4 personnes voulant monter | refus, capacité, voir 8.6 |
| Client qui refuse de donner la destination | ⛔ refus, et signalement |
| Client qui veut changer de destination pour un lieu isolé | arrêt à la destination initiale, appel à l'exploitation |
| Personne qui ouvre une portière à un feu rouge | ⛔ portes verrouillées, c'est précisément pour ça |

⭐ **Le signalement de destination avant départ est gratuit et il est la meilleure protection du poste de nuit.** L'exploitation connaît alors le trajet attendu et l'heure prévue d'arrivée.

## 16.4 Agression

La procédure est au point 8.7. Trois compléments.

Après une agression, le chauffeur **ne reprend pas son poste**. L'exploitation envoie un remplaçant ou ramène le véhicule. Le poste est payé en totalité.

La société accompagne le dépôt de plainte, fournit les éléments du carnet de bord et de la tablette, et se constitue partie civile quand la qualification le permet.

⭐ **Un suivi psychologique est proposé systématiquement et il n'est pas conditionné à la gravité apparente.** Le contact est au 01 84 77 20 40.

## 16.5 Malaise d'un passager

1. S'arrêter en sécurité.
2. Appeler le **112** et suivre les instructions du régulateur.
3. ⛔ **Ne jamais déplacer une personne inconsciente** et ne jamais la sortir du véhicule sauf danger immédiat.
4. Ne pas tenter de conduire la personne à l'hôpital soi-même, sauf instruction expresse du 112.
5. Appeler l'exploitation après le 112.

⚠️ Un chauffeur titulaire du PSC1 agit dans la limite de sa formation. **L'absence d'action n'est jamais reprochée, une action au-delà de la formation peut l'être.**

## 16.6 Malaise du chauffeur

Au premier signe de malaise, de somnolence incontrôlable ou de douleur inhabituelle : s'arrêter en sécurité, passer la tablette en « Hors service », appeler l'exploitation, et appeler le 112 au moindre doute.

⛔ **Terminer une course en se sentant mal n'est jamais la bonne décision**, et aucune prime ni aucun objectif ne le justifie. Le client est réaffecté par l'exploitation en quelques minutes.

## 16.7 Fatigue et travail de nuit

Les postes de nuit et de soir exposent à une dette de sommeil cumulative. Les règles d'amplitude et de repos du point 6.6 sont des minima légaux, pas des cibles.

Signaux à prendre au sérieux : bâillements répétés, paupières lourdes, kilomètres dont on ne se souvient pas, dérive dans la voie, besoin de monter le son ou d'ouvrir la fenêtre pour tenir.

⭐ **Au moindre de ces signaux, la consigne est une pause de 20 minutes**, tablette en « Pause », avant de reprendre. Cette pause n'a pas à être justifiée et elle n'entre dans aucun indicateur.

## 16.8 Postures et santé

La conduite prolongée en position assise expose au dos, aux épaules et aux poignets.

Réglages à faire en début de poste, et pas en roulant : assise au fond du siège, dossier légèrement incliné, hauteur telle que les hanches soient au niveau des genoux ou légèrement au-dessus, volant à hauteur permettant de garder les coudes fléchis, appui-tête au niveau de l'arrière du crâne.

⭐ **Descendre du véhicule et marcher 3 minutes à chaque pause** vaut mieux qu'une pause assise plus longue. C'est la seule recommandation de ce chapitre qui change quelque chose dès le premier jour.

---

# Chapitre 17. Environnement et discours client

## 17.1 Ce que le chauffeur peut affirmer

Trois faits, vérifiables et suffisants.

Le véhicule ne rejette à l'échappement que de la vapeur d'eau. Il ne produit aucune émission de gaz d'échappement, aucune particule de combustion et aucun oxyde d'azote en roulant.

Il est silencieux à faible vitesse, ce qui réduit le bruit en milieu urbain.

Il se ravitaille en 3 à 5 minutes, ce qui le rend adapté à un usage taxi continu, contrairement à un véhicule à batterie qui demande une immobilisation plus longue.

## 17.2 Ce que le chauffeur ne doit pas affirmer

⛔ **Que le véhicule est « à zéro émission » sans précision.** La formule exacte est « zéro émission à l'échappement ». La production de l'hydrogène, elle, peut émettre, selon sa méthode de fabrication.

⛔ **Qu'il n'y a aucun risque.** La formule est « le véhicule est homologué et les réservoirs sont contrôlés périodiquement ».

⛔ **Tout chiffre de comparaison avec un autre carburant ou une autre technologie.** Ce n'est pas le rôle du chauffeur et les chiffres cités de mémoire sont presque toujours faux.

⛔ **Toute opinion sur un incident relayé par la presse**, sur la politique énergétique, ou sur les choix de la société.

## 17.3 L'origine de l'hydrogène de la flotte

L'hydrogène livré aux stations conventionnées est d'origine mixte. ⭐ **Le chauffeur peut dire qu'une part est produite par électrolyse à partir d'électricité bas carbone et qu'une autre part est d'origine industrielle, et que la répartition varie selon la station et la période.**

⛔ **Il ne donne aucun pourcentage.** La donnée est contractuelle, elle change, et l'exploitation la communique aux clients entreprise qui la demandent.

## 17.4 Questions pièges fréquentes

**« Ça explose, non ? »**
« C'est un véhicule homologué, les réservoirs sont testés et contrôlés périodiquement, et l'hydrogène se disperse vers le haut au lieu de s'accumuler au sol. » Puis on change de sujet.

**« C'est écologique ou c'est du greenwashing ? »**
« À l'échappement il n'y a que de la vapeur d'eau. Pour la production de l'hydrogène, ça dépend de la méthode, et je n'ai pas les chiffres exacts de notre fournisseur. »

**« Combien ça coûte à la société ? »**
« Je n'ai pas cette information, le ravitaillement passe par une carte flotte. »

**« Vous préférez ça ou un diesel ? »**
Réponse personnelle acceptée, sur le ressenti de conduite uniquement : silence, souplesse, absence de vibrations, et temps de plein court. ⛔ Aucune affirmation technique ou environnementale.

---

# Glossaire

**Amplitude.** Durée entre le début et la fin d'un poste, pauses comprises. Maximum 11 heures. Distincte de la conduite effective, plafonnée à 9 heures.

**Autonomie annoncée.** Autonomie du constructeur, environ 650 km sur H2-A et H2-B, environ 500 km sur H2-C. ⛔ Ne sert pas à planifier une tournée.

**Autonomie retenue.** Autonomie utilisée par l'exploitation pour planifier : 520 km sur H2-A et H2-B, 400 km sur H2-C. Intègre climatisation, trafic et réserve.

**Badge véhicule.** Dispositif attaché au véhicule donnant accès aux zones taxi des aéroports et déclenchant la redevance. Attaché au véhicule et non au chauffeur.

**Carnet de bord.** Registre tenu par poste et par véhicule, rempli au fil du poste. Relevé chaque semaine, archivé 5 ans.

**Carte flotte.** Carte de paiement attachée à un véhicule, limitée à l'hydrogène et au lavage conventionné. Reste dans le véhicule.

**Carte professionnelle.** Autorisation personnelle d'exercer comme conducteur de taxi, valable 5 ans, obligatoirement visible du passager.

**Détection d'hydrogène.** Capteurs de l'habitacle et du compartiment arrière. Leur voyant rouge déclenche la procédure d'arrêt immédiat du point 4.4.

**Forfait.** Prix annoncé et accepté avant le départ, sur réservation uniquement. Non révisable à la hausse en cours de route.

**H2-A, H2-B, H2-C.** Les trois sous-parcs. Seuls les H2-A sont autorisés aux courses aéroport.

**Maraude.** Circulation en quête de clients sur la voie publique, autorisée dans la seule zone de l'autorisation de stationnement.

**Niveau 1, 2, 3.** Les trois niveaux de gravité d'une anomalie, qui déterminent le droit de rouler et le délai d'appel. Voir le point 4.1.

**Notice de sécurité hydrogène.** Document de deux pages destiné aux secours, rangé dans la pochette du pare-soleil conducteur. Ne sort jamais du véhicule.

**Pile à combustible.** Organe qui transforme l'hydrogène en électricité. 128 kW sur H2-A et H2-B, 114 kW sur H2-C. Son seul rejet est de l'eau.

**Plafonnement de remplissage.** Arrêt d'un plein avant 100 % dû à l'échauffement des réservoirs. Normal au-dessus de 80 % dans les trois situations du point 2.2. ⚠️ Anormal sous 70 % sur station et véhicule froids.

**Relais.** Passation d'un véhicule entre deux chauffeurs hors dépôt, typiquement en gare ou en aéroport. Niveau d'hydrogène attendu de 50 % minimum.

**Réserve.** Tranche de jauge de 24 % à 15 %. Aucune nouvelle course, trajet direct vers une station.

**Seuil critique.** Jauge sous 15 %. Trajet direct vers la station la plus proche et signalement avant de partir. Par grand froid, le seuil passe à 20 %.

**Vigilance.** Tranche de jauge de 39 % à 25 %. Courses acceptées à moins de 60 km avec une station sur le trajet retour. Par grand froid, le seuil passe à 50 %.

**Zone de l'autorisation.** Périmètre communal de rattachement de la licence. La prise en charge en maraude ou en station n'y est autorisée que dedans. Hors zone, uniquement sur réservation prouvée.

---

---

# Annexe. Historique des versions

| Version | Date | Principales modifications |
|---|---|---|
| 4.2 | 1er septembre 2026 | seuils de jauge révisés, chapitre conditions dégradées ajouté, procédure de fuite précisée pour les parkings souterrains |
| 4.1 | 15 mars 2026 | ajout du sous-parc H2-A, restriction des courses aéroport aux H2-A |
| 4.0 | 2 janvier 2026 | refonte complète, passage de 9 à 13 chapitres |
| 3.3 | 10 septembre 2025 | durcissement de la procédure voyant rouge après les deux incidents de 2025 |
| 3.2 | 4 avril 2025 | ajout de la station Les Loges-en-Josas |

⛔ **Seule la version 4.2 est en vigueur.** Un exemplaire d'une version antérieure trouvé dans un véhicule se remet au pôle exploitation.
