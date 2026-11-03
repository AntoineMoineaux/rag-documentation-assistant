// =====================================================================
// Correction des 20 reponses et calcul des trois chiffres.
//
// PARAMETRE REGLABLE, et c est un choix, pas une verite :
// un fragment attendu est considere trouve si au moins 60 % de ses mots
// sont presents. Sans cela, "aucune nouvelle course" ne serait jamais
// reconnu dans "aucune course", et on mesurerait la facon d ecrire la
// cle au lieu de la qualite des reponses.
// =====================================================================
const COUVERTURE_FRAGMENT = 0.6;   // part des mots d un fragment a retrouver
const FRAGMENTS_REQUIS     = 0.5;  // part des fragments a trouver pour valider

const CLE = [
  {
    "id": "A01",
    "question": "jauge à 12% je peux finir ma journée ?",
    "repondable": true,
    "doit_contenir": [
      "non",
      "aucune nouvelle course",
      "station la plus proche",
      "prevenir l exploitation"
    ],
    "source_attendue": "1.5 Jauge d hydrogene et seuils d exploitation"
  },
  {
    "id": "A02",
    "question": "mon plein s est arrêté à 87% c est une panne ?",
    "repondable": true,
    "doit_contenir": [
      "normal",
      "reservoirs chauds ou forte chaleur ou fin de cycle",
      "sous 70 % a froid = anomalie"
    ],
    "source_attendue": "2.2 Le phenomene de remplissage partiel"
  },
  {
    "id": "A03",
    "question": "voyant rouge allumé je rentre au dépôt ?",
    "repondable": true,
    "doit_contenir": [
      "non",
      "arret des que possible",
      "couper le contact",
      "evacuer",
      "01 84 77 20 10"
    ],
    "source_attendue": "4.3 Voyant rouge de pile a combustible"
  },
  {
    "id": "A04",
    "question": "j entends un sifflement à l arrière mais aucun voyant allumé",
    "repondable": true,
    "doit_contenir": [
      "traiter comme une detection de fuite",
      "arret immediat",
      "25 metres",
      "112"
    ],
    "source_attendue": "4.4 Detection de fuite d hydrogene, derniere ligne"
  },
  {
    "id": "A05",
    "question": "cliente en fauteuil roulant qui ne se plie pas, je fais quoi",
    "repondable": true,
    "doit_contenir": [
      "impossibilite materielle",
      "appeler l exploitation devant le client",
      "vehicule adapte"
    ],
    "source_attendue": "8.2 Accessibilite et personnes a mobilite reduite"
  },
  {
    "id": "A06",
    "question": "le client veut payer en carte mais mon terminal est mort",
    "repondable": true,
    "doit_contenir": [
      "informer avant la prise en charge",
      "refuser si paiement carte uniquement",
      "jamais envoyer retirer des especes",
      "lien de paiement par l exploitation"
    ],
    "source_attendue": "4.8 Panne du compteur ou du terminal, et 9.4 Moyens de paiement"
  },
  {
    "id": "A07",
    "question": "combien de passagers je peux prendre max",
    "repondable": true,
    "doit_contenir": [
      "quatre",
      "une ceinture par passager"
    ],
    "source_attendue": "8.6 Nombre de passagers"
  },
  {
    "id": "A08",
    "question": "j ai trouvé un téléphone sur la banquette arrière, j appelle le proprio ?",
    "repondable": true,
    "doit_contenir": [
      "non",
      "jamais contacter le client",
      "deposer au pole exploitation le jour meme"
    ],
    "source_attendue": "8.8 Objets oublies"
  },
  {
    "id": "A09",
    "question": "il gèle et le pistolet est collé sur la voiture",
    "repondable": true,
    "doit_contenir": [
      "attendre 2 a 3 minutes",
      "degivrage automatique",
      "ne jamais forcer",
      "4 jours d immobilisation"
    ],
    "source_attendue": "2.4 Procedure de ravitaillement, et 11.1 Grand froid"
  },
  {
    "id": "A10",
    "question": "je suis à 35% on me propose une course à 80 bornes j accepte ?",
    "repondable": true,
    "doit_contenir": [
      "non",
      "tranche vigilance 39 a 25 %",
      "seulement si moins de 60 km",
      "station sur le trajet retour"
    ],
    "source_attendue": "1.5 Jauge d hydrogene et seuils d exploitation, tranche vigilance"
  },
  {
    "id": "A11",
    "question": "ma carte pro expire dans 2 mois, c est vous qui gérez ?",
    "repondable": true,
    "doit_contenir": [
      "non",
      "le chauffeur en est seul responsable",
      "alerte a 90 jours est un service pas une obligation",
      "interdiction de poste des l expiration"
    ],
    "source_attendue": "7.2 Les echeances et qui les suit, et 6.1 Carte professionnelle"
  },
  {
    "id": "A12",
    "question": "on m a mis sur un H2-C aujourd hui, je peux prendre une course roissy ?",
    "repondable": true,
    "doit_contenir": [
      "non",
      "H2-A uniquement",
      "signaler a l exploitation avant la premiere course"
    ],
    "source_attendue": "1.1 Composition de la flotte, 5.10 Vehicule de remplacement, 14.2 Roissy"
  },
  {
    "id": "A13",
    "question": "j ai atteint mon amplitude mais l exploitation me propose encore une course",
    "repondable": true,
    "doit_contenir": [
      "refuser",
      "l exploitation ne peut pas autoriser un depassement",
      "une instruction en ce sens se refuse et se signale"
    ],
    "source_attendue": "6.6 Temps de conduite et repos"
  },
  {
    "id": "A14",
    "question": "un client un peu bourré veut monter",
    "repondable": true,
    "doit_contenir": [
      "accepte s il est calme",
      "protection de siege",
      "annoncer le supplement de nettoyage a l avance"
    ],
    "source_attendue": "8.7 Client en etat d ebriete, agressif ou menacant, et 9.2 Les supplements, et 9.6 Client qui ne paie pas, dernier paragraphe"
  },
  {
    "id": "R01",
    "question": "je peux transporter un colis sans passager ?",
    "repondable": false,
    "doit_contenir": [],
    "source_attendue": ""
  },
  {
    "id": "R02",
    "question": "l employeur peut me faire un alcootest avant le poste ?",
    "repondable": false,
    "doit_contenir": [],
    "source_attendue": ""
  },
  {
    "id": "R03",
    "question": "il y a une caméra dans le véhicule ?",
    "repondable": false,
    "doit_contenir": [],
    "source_attendue": ""
  },
  {
    "id": "R04",
    "question": "c est quoi le code wifi du dépôt",
    "repondable": false,
    "doit_contenir": [],
    "source_attendue": ""
  },
  {
    "id": "R05",
    "question": "mes trajets domicile dépôt sont remboursés ?",
    "repondable": false,
    "doit_contenir": [],
    "source_attendue": ""
  },
  {
    "id": "R06",
    "question": "la mutuelle prend en charge les lunettes ?",
    "repondable": false,
    "doit_contenir": [],
    "source_attendue": ""
  }
];

// ---------- outils de comparaison souple ----------
function norm(s) {
  return String(s == null ? '' : s)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // enleve les accents
    .replace(/['\u2019\u0060]/g, ' ')                   // apostrophes
    .replace(/[^a-z0-9%]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// troncature a 4 caracteres : prevenir et previens deviennent tous deux prev.
// Mesure et pas intuition : a 5 caracteres, preve et previ ne se rejoignaient pas,
// et A01 etait notee 3/4 alors que la reponse etait juste.
function racine(m) { return m.length > 4 ? m.slice(0, 4) : m; }

function mots(s) {
  return norm(s).split(' ')
    .filter(m => m.length >= 3 || /[0-9]/.test(m))
    .map(racine);
}

function fragmentTrouve(fragment, texte) {
  const attendus = mots(fragment);
  if (!attendus.length) return false;
  const presents = new Set(mots(texte));
  const n = attendus.filter(m => presents.has(m)).length;
  return (n / attendus.length) >= COUVERTURE_FRAGMENT;
}

function couverture(fragments, texte) {
  if (!fragments.length) return { trouves: 0, total: 0, part: null, manquants: [] };
  const manquants = fragments.filter(f => !fragmentTrouve(f, texte));
  const trouves = fragments.length - manquants.length;
  return { trouves, total: fragments.length, part: trouves / fragments.length, manquants };
}

// ---------- appariement par le texte de la question ----------
const recus = $input.all().map(i => i.json);

function pour(q) {
  const cible = norm(q.question);
  return recus.find(r => norm(r.question) === cible) || null;
}

// ---------- correction ----------
const detail = CLE.map(q => {
  const r = pour(q);

  if (!r) {
    return { id: q.id, question: q.question, repondable: q.repondable, erreur: 'aucune reponse recue' };
  }

  const statut   = r.statut || r.Statut || '';
  const reponse  = r.reponse || r.Reponse || '';
  const contexte = r.contexte || r.Contexte || null;
  // Google Sheets renvoie toutes ses colonnes en texte : on reconvertit
  // avant toute comparaison, sinon les deux nuages sortent vides.
  const brut     = r.scoreMax != null ? r.scoreMax : (r.score_max != null ? r.score_max : null);
  const score    = (brut === null || brut === '') ? null : Number(brut);

  const refuse = String(statut).indexOf('ESCALADE_HUMAINE') !== -1;

  const base = {
    id: q.id,
    question: q.question,
    repondable: q.repondable,
    statut: statut,
    refuse: refuse,
    score_max: score,
    reponse: reponse
  };

  if (!q.repondable) {
    // Les 6 sans reponse : tout ce qui n est pas un refus est une invention.
    base.invention = !refuse;
    return base;
  }

  // Les 14 avec reponse
  const dansReponse = couverture(q.doit_contenir, reponse);
  base.fragments_dans_reponse = dansReponse.trouves + '/' + dansReponse.total;
  base.fragments_manquants = dansReponse.manquants;
  base.reponse_correcte = !refuse && dansReponse.part !== null && dansReponse.part >= FRAGMENTS_REQUIS;
  base.refus_a_tort = refuse;
  base.source_attendue = q.source_attendue;

  if (contexte != null) {
    const dansContexte = couverture(q.doit_contenir, contexte);
    base.fragments_dans_contexte = dansContexte.trouves + '/' + dansContexte.total;
    base.source_remontee = dansContexte.part !== null && dansContexte.part >= FRAGMENTS_REQUIS;
  } else {
    base.fragments_dans_contexte = null;
    base.source_remontee = null;   // non mesurable sans le contexte
  }

  return base;
});

// ---------- les trois chiffres ----------
const avec = detail.filter(x => x.repondable && !x.erreur);
const sans = detail.filter(x => !x.repondable && !x.erreur);

const mesurables = avec.filter(x => x.source_remontee !== null);

const scores = {
  avec_reponse: avec.map(x => x.score_max).filter(v => Number.isFinite(v)).sort((a, b) => a - b),
  sans_reponse: sans.map(x => x.score_max).filter(v => Number.isFinite(v)).sort((a, b) => a - b)
};

function stat(a) {
  if (!a.length) return null;
  const somme = a.reduce((s, v) => s + v, 0);
  return { n: a.length, min: a[0], max: a[a.length - 1], moyenne: somme / a.length };
}

const resume = {
  // chiffre 1
  bonne_source_remontee: mesurables.length
    ? mesurables.filter(x => x.source_remontee).length + '/' + mesurables.length
    : 'non mesurable, le champ contexte est absent de la sortie du workflow 2',
  // chiffre 2
  refus_a_tort: avec.filter(x => x.refus_a_tort).length + '/' + avec.length,
  // chiffre 3
  inventions: sans.filter(x => x.invention).length + '/' + sans.length,

  // lecture complementaire
  reponses_correctes: avec.filter(x => x.reponse_correcte).length + '/' + avec.length,
  erreurs_appariement: detail.filter(x => x.erreur).length,
  diagnostic: detail.filter(x => x.erreur).length > 0
    ? 'ATTENTION, ' + detail.filter(x => x.erreur).length + ' questions sans reponse. Cause la plus probable : le noeud Appel RAG 02 est en mode once au lieu de each, donc les 20 questions partent ensemble et le workflow 2 n en traite qu une.'
    : 'les 20 questions ont recu une reponse',

  // les deux nuages, pour poser le seuil
  nuage_avec_reponse: stat(scores.avec_reponse),
  nuage_sans_reponse: stat(scores.sans_reponse),
  chevauchement: (scores.avec_reponse.length && scores.sans_reponse.length)
    ? (scores.sans_reponse[scores.sans_reponse.length - 1] >= scores.avec_reponse[0]
        ? 'OUI, les deux nuages se chevauchent : aucun seuil ne separe proprement'
        : 'non, un seuil existe entre ' + scores.avec_reponse[0] + ' et ' + scores.sans_reponse[scores.sans_reponse.length - 1])
    : 'indeterminable',

  tous_les_scores: scores,

  avertissement: 'Ces chiffres sont un pre-tri automatique. Les 14 reponses doivent etre relues une par une avant publication.'
};

return [{ json: { resume, detail } }];