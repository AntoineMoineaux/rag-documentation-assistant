const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CORPUS = process.argv[2];
const OUT    = process.argv[3];           // dossier corpus/ du projet
const WORK   = process.argv[4];           // dossier de travail (scratchpad)

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const POP    = 'C:\\Users\\antoi\\AppData\\Local\\Microsoft\\WinGet\\Packages\\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\\poppler-25.07.0\\Library\\bin';

// Les cinq fascicules, et leurs en-tetes volontairement heterogenes :
// chacun vient d un document source different, donc personne ne les a harmonises.
const PARTS = [
  { id: 'p1', num: 1, titre: 'Manuel du véhicule et du ravitaillement',
    hdr: 'HYDROCAB  |  Manuel du véhicule et du ravitaillement  |  v4.2',
    ftr: 'HYDROCAB, document interne, ne pas diffuser hors de la société',
    sections: ['Chapitre 1.', 'Chapitre 2.', 'Chapitre 11.'] },
  { id: 'p2', num: 2, titre: 'Manuel d\'exploitation',
    hdr: 'Manuel d\'exploitation HYDROCAB, version 4.2, septembre 2026',
    ftr: 'Pôle exploitation  .  01 84 77 20 10  .  usage interne',
    sections: ['Chapitre 3.', 'Chapitre 4.', 'Chapitre 5.', 'Chapitre 15.'] },
  { id: 'p3', num: 3, titre: 'Réglementation, conformité et paie',
    hdr: 'RÉGLEMENTATION ET CONFORMITÉ CHAUFFEUR  /  HYDROCAB  /  4.2',
    ftr: 'Document établi avec le pôle social. Toute question : 01 84 77 20 40',
    sections: ['Chapitre 6.', 'Chapitre 7.', 'Chapitre 10.'] },
  { id: 'p4', num: 4, titre: 'Guide de la course et du client',
    hdr: 'Guide de la course et du client, HYDROCAB, v4.2',
    ftr: 'HYDROCAB',
    sections: ['Chapitre 8.', 'Chapitre 9.', 'Chapitre 14.', 'Chapitre 16.', 'Chapitre 17.'] },
  { id: 'p5', num: 5, titre: 'Mémo chauffeur',
    hdr: 'MÉMO CHAUFFEUR HYDROCAB v4.2  .  à garder dans le véhicule',
    ftr: 'Mémo chauffeur v4.2. En cas de doute, appeler l\'exploitation.',
    sections: ['Chapitre 12.', 'Chapitre 13.', 'Glossaire', 'Annexe.'] },
];

// ------------------------------------------------- decoupage du corpus

const brut = fs.readFileSync(CORPUS, 'utf8');
const lignes = brut.split('\n');

const bornes = [];
lignes.forEach((L, i) => { if (/^# /.test(L)) bornes.push({ titre: L.slice(2).trim(), i }); });

function blocDe(prefixe) {
  const k = bornes.findIndex(b => b.titre.startsWith(prefixe));
  if (k === -1) throw new Error('section introuvable : ' + prefixe);
  const debut = bornes[k].i;
  const fin = (k + 1 < bornes.length) ? bornes[k + 1].i : lignes.length;
  return { titre: bornes[k].titre, corps: lignes.slice(debut, fin).join('\n') };
}

// Tete de document : tout ce qui precede le chapitre 1
const iCh1 = bornes.find(b => b.titre.startsWith('Chapitre 1.')).i;
const tete = lignes.slice(0, iCh1).join('\n');

// Controle de couverture : chaque section doit appartenir a une partie et une seule
const attribuees = [];
for (const p of PARTS) for (const s of p.sections) attribuees.push(s);
const toutes = bornes.filter(b => !/^Sommaire$/.test(b.titre) && !/HYDROCAB$/.test(b.titre)).map(b => b.titre);
const manquantes = toutes.filter(t => !attribuees.some(a => t.startsWith(a)));
if (manquantes.length) throw new Error('sections non attribuees : ' + manquantes.join(' | '));
console.log('couverture : ' + toutes.length + ' sections, toutes attribuees');

// ------------------------------------------------- markdown vers html

function inline(s) {
  return s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
}

function md2html(src) {
  const out = [];
  const L = src.split('\n');
  let i = 0;
  let para = [];

  const videPara = () => {
    if (para.length) { out.push('<p>' + inline(para.join(' ')) + '</p>'); para = []; }
  };

  while (i < L.length) {
    const l = L[i];

    if (/^\s*$/.test(l)) { videPara(); i++; continue; }

    if (/^---+\s*$/.test(l)) { videPara(); out.push('<hr>'); i++; continue; }

    let m = l.match(/^(#{1,4})\s+(.*)$/);
    if (m) {
      videPara();
      const n = m[1].length;
      out.push('<h' + n + '>' + inline(m[2]) + '</h' + n + '>');
      i++; continue;
    }

    // Tableau
    if (/^\|/.test(l) && i + 1 < L.length && /^\|[\s:|-]+\|?\s*$/.test(L[i + 1])) {
      videPara();
      const cellules = x => x.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const entete = cellules(l);
      i += 2;
      const corps = [];
      while (i < L.length && /^\|/.test(L[i])) { corps.push(cellules(L[i])); i++; }
      out.push('<table><thead><tr>' + entete.map(c => '<th>' + inline(c) + '</th>').join('') + '</tr></thead><tbody>'
        + corps.map(r => '<tr>' + r.map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('')
        + '</tbody></table>');
      continue;
    }

    // Citation
    if (/^>\s?/.test(l)) {
      videPara();
      const bloc = [];
      while (i < L.length && /^>/.test(L[i])) { bloc.push(L[i].replace(/^>\s?/, '')); i++; }
      out.push('<blockquote>' + md2html(bloc.join('\n')) + '</blockquote>');
      continue;
    }

    // Liste a puces
    if (/^[-*]\s+/.test(l)) {
      videPara();
      const items = [];
      while (i < L.length && /^[-*]\s+/.test(L[i])) { items.push(L[i].replace(/^[-*]\s+/, '')); i++; }
      out.push('<ul>' + items.map(x => '<li>' + inline(x) + '</li>').join('') + '</ul>');
      continue;
    }

    // Liste numerotee
    if (/^\d+\.\s+/.test(l)) {
      videPara();
      const items = [];
      while (i < L.length && /^\d+\.\s+/.test(L[i])) { items.push(L[i].replace(/^\d+\.\s+/, '')); i++; }
      out.push('<ol>' + items.map(x => '<li>' + inline(x) + '</li>').join('') + '</ol>');
      continue;
    }

    para.push(l.trim());
    i++;
  }
  videPara();
  return out.join('\n');
}

// ------------------------------------------------- gabarit de page

const CSS = `
@page { size: A4; margin: 24mm 18mm 20mm 18mm; }
html, body { margin:0; padding:0; }
body { font: 10.5pt/1.5 Georgia, 'Times New Roman', serif; color:#111; }
.hdr { position: fixed; top:-15mm; left:0; right:0; font: 8pt Arial, sans-serif; color:#444;
       border-bottom:.5pt solid #999; padding-bottom:1.2mm; }
.ftr { position: fixed; bottom:-13mm; left:0; right:0; font: 7.5pt Arial, sans-serif; color:#555;
       border-top:.5pt solid #bbb; padding-top:1.2mm; }
h1 { font: bold 17pt Arial, sans-serif; margin:0 0 6mm 0; padding-bottom:2mm;
     border-bottom:1.2pt solid #222; break-before: page; }
h1.premier { break-before: auto; }
h2 { font: bold 12pt Arial, sans-serif; margin:7mm 0 2mm 0; }
h3 { font: bold 10.5pt Arial, sans-serif; margin:5mm 0 1.5mm 0; }
p { margin:0 0 3mm 0; text-align: justify; }
ul, ol { margin:0 0 3mm 0; padding-left:7mm; }
li { margin-bottom:1mm; }
table { width:100%; border-collapse:collapse; margin:3mm 0 4mm 0; font-size:9.5pt; }
th, td { border:.5pt solid #888; padding:1.4mm 2mm; text-align:left; vertical-align:top; }
th { background:#eee; font: bold 9.5pt Arial, sans-serif; }
blockquote { margin:3mm 0; padding:2mm 4mm; background:#f4f4f4; border-left:2pt solid #888; }
blockquote p { margin:0 0 1.5mm 0; }
code { font-family:'Courier New', monospace; font-size:9.5pt; }
hr { border:0; border-top:.5pt solid #ccc; margin:4mm 0; }
.couv { break-after: page; text-align:center; padding-top:55mm; }
.couv .soc { font: bold 13pt Arial, sans-serif; letter-spacing:3pt; color:#333; }
.couv .tit { font: bold 24pt Arial, sans-serif; margin:14mm 0 6mm 0; line-height:1.25; }
.couv .ver { font: 11pt Arial, sans-serif; color:#333; margin-top:10mm; }
.couv .men { font: 9pt Arial, sans-serif; color:#666; margin-top:30mm; }
.som { break-after: page; }
.som h2 { break-before: auto; }
.som ul { list-style:none; padding-left:0; }
.som > ul > li { font: bold 10.5pt Arial, sans-serif; margin-top:3mm; }
.som ul ul { padding-left:6mm; }
.som ul ul li { font: 9.5pt Arial, sans-serif; font-weight:normal; color:#333; }
`;

function page(titreOnglet, hdr, ftr, corpsHtml) {
  return '<!doctype html>\n<html lang="fr"><head><meta charset="utf-8">\n<title>'
    + titreOnglet + '</title>\n<style>' + CSS + '</style>\n</head>\n<body>\n'
    + '<div class="hdr">' + hdr + '</div>\n<div class="ftr">' + ftr + '</div>\n'
    + corpsHtml + '\n</body></html>\n';
}

// ------------------------------------------------- construction

if (!fs.existsSync(WORK)) fs.mkdirSync(WORK, { recursive: true });
const pdfs = [];

// Partie 0 : page de titre de la compilation, avertissement, sommaire general
{
  const html = page(
    'Manuel du chauffeur HYDROCAB v4.2',
    'HYDROCAB  |  Manuel du chauffeur  |  compilation v4.2',
    'HYDROCAB, document interne, ne pas diffuser hors de la société',
    '<div class="couv"><div class="soc">HYDROCAB</div>'
    + '<div class="tit">Manuel du chauffeur<br>Flotte de taxis à hydrogène</div>'
    + '<div class="ver">Compilation version 4.2<br>En vigueur depuis le 1er septembre 2026</div>'
    + '<div class="men">Document interne. Remplace la version 4.1 de mars 2026.<br>'
    + 'Diffusion : tous les chauffeurs titulaires et remplaçants, pôle exploitation, atelier.</div></div>'
    + md2html(tete.split('\n').filter(l => !/^# Manuel du chauffeur/.test(l)).join('\n')).replace('<h1>', '<h1 class="premier">')
  );
  const f = path.join(WORK, 'p0.html');
  fs.writeFileSync(f, html, 'utf8');
  pdfs.push({ id: 'p0', html: f, pdf: path.join(WORK, 'p0.pdf') });
}

// Les cinq fascicules
for (const p of PARTS) {
  const blocs = p.sections.map(blocDe);

  // Sommaire du fascicule : chapitres et leurs sous-sections
  const som = blocs.map(b => {
    const sous = b.corps.split('\n').filter(l => /^## /.test(l)).map(l => l.slice(3).trim());
    return '<li>' + b.titre + (sous.length ? '<ul>' + sous.map(s => '<li>' + s + '</li>').join('') + '</ul>' : '') + '</li>';
  }).join('');

  const corps =
    '<div class="couv"><div class="soc">HYDROCAB</div>'
    + '<div class="tit">' + p.titre + '</div>'
    + '<div class="ver">Version 4.2  .  septembre 2026</div>'
    + '<div class="men">Fascicule ' + p.num + ' sur 5 du manuel du chauffeur</div></div>'
    + '<div class="som"><h2>Sommaire de ce fascicule</h2><ul>' + som + '</ul></div>'
    + blocs.map(b => md2html(b.corps)).join('\n');

  const html = page(p.titre + ', HYDROCAB v4.2', p.hdr, p.ftr, corps);
  const f = path.join(WORK, p.id + '.html');
  fs.writeFileSync(f, html, 'utf8');
  pdfs.push({ id: p.id, html: f, pdf: path.join(WORK, p.id + '.pdf') });
}

// ------------------------------------------------- impression

console.log('\nimpression :');
for (const d of pdfs) {
  if (fs.existsSync(d.pdf)) fs.unlinkSync(d.pdf);
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
    '--print-to-pdf=' + d.pdf, d.html,
  ], { stdio: 'pipe' });
  if (!fs.existsSync(d.pdf)) throw new Error('pdf non produit : ' + d.id);
  const info = execFileSync(path.join(POP, 'pdfinfo.exe'), [d.pdf], { encoding: 'utf8' });
  const pages = (info.match(/^Pages:\s+(\d+)/m) || [])[1];
  d.pages = Number(pages);
  console.log('  ' + d.id + ' : ' + String(pages).padStart(3) + ' pages');
}

// ------------------------------------------------- fusion

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
const final = path.join(OUT, 'manuel-chauffeur-hydrocab-v4.2.pdf');
if (fs.existsSync(final)) fs.unlinkSync(final);

execFileSync(path.join(POP, 'pdfunite.exe'), [...pdfs.map(d => d.pdf), final], { stdio: 'pipe' });

const infoF = execFileSync(path.join(POP, 'pdfinfo.exe'), [final], { encoding: 'utf8' });
const pagesF = Number((infoF.match(/^Pages:\s+(\d+)/m) || [])[1]);
const attendu = pdfs.reduce((a, d) => a + d.pages, 0);
if (pagesF !== attendu) throw new Error('fusion incoherente : ' + pagesF + ' vs ' + attendu);

console.log('\nfusion : ' + final);
console.log('  pages  : ' + pagesF + ' (somme des fascicules : ' + attendu + ')');
console.log('  octets : ' + fs.statSync(final).size);
