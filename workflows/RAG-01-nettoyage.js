// =====================================================================
// Serie 2 : nettoyage des en-tetes et pieds de page.
// A placer dans le workflow 1, ENTRE l extraction du PDF et l indexation.
// Mode du noeud : Run Once for All Items.
//
// HYPOTHESE DE TRAVAIL, et c est la seule qu on s autorise :
// on recoit un PDF, point. On ne sait pas qui l a fabrique, avec quel
// outil, ni combien de documents ont ete fusionnes dedans. Aucune liste
// de chaines connues d avance : tout se decouvre dans le texte extrait.
//
// LE PRINCIPE. Un en-tete ou un pied de page se repete a chaque page.
// Une phrase du contenu, non. Donc on ne cherche pas QUOI retirer,
// on cherche CE QUI SE REPETE. La regle marche sur n importe quel PDF.
//
// CE QUE CA DETECTE AUSSI, sans l avoir prevu : une fusion de plusieurs
// documents se voit, parce qu on obtient plusieurs familles d en-tetes
// au lieu d une. Le compte rendu les separe.
// =====================================================================

// ---------- les deux seuls reglages, et ce sont des choix ----------
// Un document de N pages peut contenir plusieurs sous-documents. Le plus
// court d entre eux fait peut etre 5 pages, donc son en-tete n apparait
// que 5 fois. Descendre trop bas attraperait des en-tetes de tableaux
// legitimes ("Regle Valeur", "Situation Conduite a tenir").
const SEUIL_REPETITION = 4;    // a partir de combien d occurrences on suspecte
const LONGUEUR_MAX     = 120;  // un en-tete est court, un paragraphe ne l est pas

// ---------- recuperation du texte, quel que soit le nom du champ ----------
const entree = $input.first().json;
let texte = entree.text;
if (typeof texte !== 'string' || texte.length < 500) {
  texte = Object.keys(entree)
    .map(k => entree[k])
    .filter(v => typeof v === 'string')
    .sort((a, b) => b.length - a.length)[0] || '';
}
if (!texte) {
  throw new Error('aucun champ texte trouve. Champs recus : ' + Object.keys(entree).join(', '));
}

// comparaison insensible aux accents, a la casse et aux espaces multiples :
// un meme en-tete peut sortir avec des espacements differents selon la page.
function cle(s) {
  return String(s == null ? '' : s)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const lignes = texte.split('\n');

// ---------- 1. on compte ----------
const compte = {};
const exemple = {};   // on garde la forme d origine pour le compte rendu
lignes.forEach(l => {
  const k = cle(l);
  if (k === '' || k.length > LONGUEUR_MAX) return;
  compte[k] = (compte[k] || 0) + 1;
  if (!exemple[k]) exemple[k] = l.trim();
});

// ---------- 2. on decide ----------
const aJeter = new Set(
  Object.keys(compte).filter(k => compte[k] >= SEUIL_REPETITION)
);

// ---------- 3. on retire ----------
const retire = {};
const gardees = [];
lignes.forEach(l => {
  const k = cle(l);
  if (k !== '' && aJeter.has(k)) {
    retire[k] = (retire[k] || 0) + 1;
    return;
  }
  gardees.push(l);
});
const propre = gardees.join('\n');

// ---------- 4. on rend des comptes ----------
// Rien n est supprime en silence. Chaque chaine retiree est listee avec son
// nombre d occurrences, et on montre aussi la zone grise juste sous le seuil :
// c est la que se cache une erreur de reglage, dans un sens ou dans l autre.
const retirees = Object.keys(retire)
  .sort((a, b) => retire[b] - retire[a])
  .map(k => ({ fois: retire[k], ligne: exemple[k] }));

const zoneGrise = Object.keys(compte)
  .filter(k => compte[k] >= 2 && compte[k] < SEUIL_REPETITION)
  .sort((a, b) => compte[b] - compte[a])
  .slice(0, 12)
  .map(k => ({ fois: compte[k], ligne: exemple[k] }));

const total = retirees.reduce((s, r) => s + r.fois, 0);

return [{
  json: {
    text: propre,

    nettoyage: {
      seuil_utilise: SEUIL_REPETITION + ' occurrences, lignes de ' + LONGUEUR_MAX + ' caracteres maximum',

      lignes_avant: lignes.length,
      lignes_retirees: total,
      caracteres_avant: texte.length,
      caracteres_apres: propre.length,
      caracteres_gagnes: texte.length - propre.length,
      part_du_corpus: (texte.length ? ((texte.length - propre.length) / texte.length * 100).toFixed(1) : '0') + ' %',

      // ce que la regle a decide, a relire avant de reindexer
      motifs_retires: retirees.length,
      detail: retirees,

      // juste sous le seuil : a regarder, c est la que se trouve une erreur
      a_verifier_juste_sous_le_seuil: zoneGrise.length ? zoneGrise : 'rien entre 2 et ' + (SEUIL_REPETITION - 1) + ' occurrences',
    },
  },
}];
