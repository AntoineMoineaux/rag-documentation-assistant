// =====================================================================
// Serie 3 : decoupage sur la structure du document.
// A placer dans le workflow 1, APRES le noeud Nettoyage.
// Mode du noeud : Run Once for All Items.
//
// LE PROBLEME QU ON REPARE. Le decoupage a 1000 caracteres coupait au
// milieu des procedures. Mesure du run du 03/11 : A04 recevait les
// etapes 1 et 2 du point 4.4, les etapes 3 a 6 tombaient dans l autre
// morceau. Idem A03 sur le point 4.3. Deux questions sur 14 perdues
// pour cette seule raison.
//
// ⭐ CE QU ON GARANTIT, ET C EST UNE GARANTIE, PAS UNE GRANULARITE :
// aucun morceau ne coupe une section en deux. Un morceau peut contenir
// deux ou trois sections voisines, et c est tres bien : une section de
// 200 caracteres comme "9.8 Pourboires" est trop maigre pour vivre
// seule, elle est plus utile accompagnee de ses voisines.
//
// COMMENT, SANS AJOUTER DE NOEUD. Le decoupeur de n8n coupe en priorite
// sur les lignes vides, puis regroupe les bouts obtenus. Donc :
//   1. on supprime toutes les lignes vides a l interieur des sections
//   2. on separe les sections par une ligne vide
// La ligne vide devient le marqueur exclusif d une frontiere de section,
// et le decoupeur de n8n ne peut plus couper ailleurs. ⭐ On ne le
// contourne pas, on lui donne un texte dont les frontieres sont justes.
//
// ⛔ ET PAS D IA ICI, VOLONTAIREMENT. Un LLM ne decoupe pas deux fois
// pareil. On ne pourrait plus attribuer une variation des trois
// chiffres a un changement plutot qu au hasard du decoupage.
// =====================================================================

// ---------- les reglages, et ils sont mesures, pas devines ----------
// Taille des 120 sous-sections du corpus, relevee avant de choisir :
// moyenne 777 caracteres, mediane 691, et 118 sur 120 sous 2000.
// ⚠️ CONTRAINTE DURE : MAX_MORCEAU doit rester STRICTEMENT INFERIEUR au
// Chunk Size du noeud n8n, sinon le decoupeur se remet a couper dans
// une section et la garantie tombe. Ici 1800 contre 2000.
const MAX_MORCEAU = 1800;

// Une ligne de sommaire a exactement la meme forme qu un vrai titre.
// Ce qui les distingue n est pas leur texte, c est que le sommaire n a
// rien derriere lui. En dessous de ce corps minimal, c est du sommaire.
const MIN_CORPS = 100;

// ---------- reperage des titres ----------
// "4.4 Detection de fuite" oui. "3. Evacuer tout le monde" non : un
// seul nombre, c est une etape de procedure. "4.2 1er septembre" non
// non plus : ce qui suit doit commencer par une lettre, sinon c est le
// tableau d historique des versions de l annexe.
const RE_SOUS  = /^(\d{1,2}\.\d{1,2})\s+([A-Za-zÀ-ÖØ-öø-ÿ].*)$/;
const RE_CHAP  = /^(Chapitre \d{1,2})\.\s*(.*)$/;
const RE_AUTRE = /^(Glossaire|Annexe\.?.*)$/;

function titreDe(l) {
  const s = l.trim();
  let m = s.match(RE_SOUS);
  if (m) return { section: m[1], titre: s };
  m = s.match(RE_CHAP);
  if (m) return { section: m[1], titre: s };
  m = s.match(RE_AUTRE);
  if (m) return { section: m[1], titre: s };
  return null;
}

// ---------- recuperation du texte ----------
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

const lignes = texte.split('\n');

// ---------- 1. couper aux titres ----------
const blocs = [];
let courant = { section: 'preambule', titre: 'Page de titre et sommaires', lignes: [] };

lignes.forEach(l => {
  const t = titreDe(l);
  if (t) {
    blocs.push(courant);
    courant = { section: t.section, titre: t.titre, lignes: [l] };
  } else {
    courant.lignes.push(l);
  }
});
blocs.push(courant);

// ---------- 2. ecraser les lignes vides internes ----------
// ⭐ Effet secondaire utile, mesure le 03/11 : le saut de page du PDF
// laissait une ligne vide au milieu de phrases ("Sous 15 %," d un cote,
// "l autonomie restante" de l autre). Elle disparait ici aussi.
blocs.forEach(b => {
  b.texte = b.lignes.join('\n').replace(/\n{2,}/g, '\n').trim();
  b.corps = b.lignes.slice(1).join('\n').trim().length;
  b.estSommaire = b.corps < MIN_CORPS;
});

// ---------- 3. regrouper les lignes de sommaire consecutives ----------
const regroupes = [];
blocs.forEach(b => {
  const dernier = regroupes[regroupes.length - 1];
  if (b.estSommaire && dernier && dernier.estSommaire) {
    dernier.texte += '\n' + b.texte;
    dernier.titre = 'Sommaire';
    dernier.section = 'sommaire';
    return;
  }
  regroupes.push(Object.assign({}, b));
});

// ---------- 4. tailler les sections trop longues, sans perdre leur titre ----------
// ⭐ Le titre est repete en tete de chaque bout. Un bout issu d une
// coupure continue donc de dire de quelle section il vient, ce qui le
// rend trouvable et interpretable. Gratuit, et sans aucun modele.
function tailler(bloc) {
  if (bloc.texte.length <= MAX_MORCEAU) return [bloc.texte];
  const para = bloc.texte.split('\n');
  const bouts = [];
  let buf = '';
  para.forEach(p => {
    const candidat = buf ? buf + '\n' + p : p;
    if (candidat.length > MAX_MORCEAU && buf) {
      bouts.push(buf);
      buf = bloc.titre + '\n' + p;
    } else {
      buf = candidat;
    }
  });
  if (buf.trim()) bouts.push(buf);
  return bouts;
}

const pieces = [];
regroupes.forEach(b => {
  if (!b.texte) return;
  tailler(b).forEach(txt => pieces.push(txt));
});

// ---------- 5. une ligne vide entre chaque section, et rien d autre ----------
const prepare = pieces.join('\n\n');

// ---------- 6. rendre des comptes ----------
const sousSections = regroupes.filter(b => /^\d/.test(b.section));
const tailles = pieces.map(p => p.length).sort((a, b) => a - b);
const coupees = regroupes
  .filter(b => b.texte && tailler(b).length > 1)
  .map(b => b.titre + ' : ' + tailler(b).length + ' bouts');

// La garantie se verifie, elle ne se suppose pas.
const plusLongue = tailles[tailles.length - 1];
const lignesVidesInternes = pieces.filter(p => /\n\n/.test(p)).length;

const rapport = {
  reglages: 'coupure aux titres, bouts de ' + MAX_MORCEAU + ' caracteres maximum, corps minimal ' + MIN_CORPS,

  sections_decoupees: pieces.length,
  sous_sections_trouvees: sousSections.length,
  // ⭐ Le corpus en compte 120. C est le controle : s il s en ecarte
  // beaucoup, le reperage des titres est a revoir avant d indexer.
  attendu: '120 sous-sections dans le corpus',

  taille_min: tailles[0],
  taille_mediane: tailles[Math.floor(tailles.length / 2)],
  taille_max: plusLongue,

  sections_taillees_en_plusieurs: coupees.length ? coupees : 'aucune',

  // --- les deux verifications de la garantie ---
  garantie_taille: plusLongue < MAX_MORCEAU + 1
    ? 'OK, le plus long bout fait ' + plusLongue + ' caracteres. Mets le Chunk Size de n8n a 2000.'
    : 'ECHEC, un bout fait ' + plusLongue + ' caracteres',
  garantie_lignes_vides: lignesVidesInternes === 0
    ? 'OK, aucune ligne vide a l interieur d une section : n8n ne peut couper qu aux frontieres'
    : 'ECHEC, ' + lignesVidesInternes + ' sections contiennent encore une ligne vide',

  a_relire: sousSections.slice(0, 15).map(b => b.titre.slice(0, 50)),
};

return [{ json: { text: prepare, decoupage: rapport } }];
