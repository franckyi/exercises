// Import stylesheets
import './style.css';

const calciatori = [
  { nome: 'Osihmen', gol: 15, squadra: 'Napoli', palloneDoro: false },
  { nome: 'Khvaratskelia', gol: 12, squadra: 'Napoli', palloneDoro: false },
  { nome: 'Immobile', gol: 9, squadra: 'Lazio', palloneDoro: false },
  { nome: 'Di Maria', gol: 10, squadra: 'Juventus', palloneDoro: false },
  { nome: 'Dybala', gol: 9, squadra: 'Roma', palloneDoro: false },
  { nome: 'Messi', gol: 11, squadra: 'PSG', palloneDoro: true },
  { nome: 'Benzema', gol: 8, squadra: 'Real Madrid', palloneDoro: false },
  { nome: 'Lewandowski', gol: 11, squadra: 'Barcellona', palloneDoro: false },
];

const list = document.getElementById('list');

// Mostra lista
calciatori.forEach((item) => {
  list.innerHTML += `
  <li>
    ${item.nome} | ${item.gol} | ${item.squadra}
  </li>
  `;
});

// Aumenta di +1 tutti i gol
// const gol = calciatori.map((item) => {
//   item.gol += 1;
//   return item;
// });
// console.log(gol);

// Filtra giocatori del Napoli
// const napoli = calciatori.filter((item) => item.squadra == 'Napoli');
// console.log(napoli);

// Filtra chi ha vinto il pallone d'oro
// const oro = calciatori.filter((item) => item.palloneDoro === true);
// console.log(oro);

// Filtra chi ha segnato piu di 10 gol
// const dieci = calciatori.filter((item) => item.gol > 10);
// console.log(dieci);

// Somma tutti i gol con reduce
// const somma = calciatori
//   .map((item) => item.gol) // mostra solo i gol
//   .reduce((prev, next) => prev + next); // somma i gol
// console.log(somma);

// Trova Lewandowski (solo 1 istanza)
// const lewandowski = calciatori.find((item) => item.nome === 'Lewandowski');
// console.log(lewandowski);

// Ordina per nome in ordine alfabetico
const pernome = calciatori.sort((a, b) => {
  const A = a.nome.toUpperCase();
  const B = b.nome.toUpperCase();
  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
});
console.log(pernome);

// Ordina per nome squadra
// const persquadra = calciatori.sort((a, b) => {
//   const A = a.squadra.toUpperCase();
//   const B = b.squadra.toUpperCase();
//   if (A < B) return -1;
//   if (A > B) return 1;
//   return 0;
// });
// console.log(persquadra);

// Ordina una array semplice
// alfabetico
// console.log(['c', 'd', 'b', 'a'].sort());
// al contrario
// console.log(['c', 'd', 'b', 'a'].sort().reverse());

// Ordina per numero di gol
// const pergol = calciatori.sort((a, b) => b.gol - a.gol);
// console.log(pergol);

// Qualcuno di loro ha vinto il pallone d'oro?
// const eoro = calciatori.some((item) => item.palloneDoro === true);
// console.log(eoro);

// Qualcuno di loro gioca nell' Inter?
// const einter = calciatori.some((item) => item.squadra === 'Inter');
// console.log(einter);

// Tutti i giocatori giocano nel Napoli?
// const tuttinapoli = calciatori.every((item) => item.squadra === 'Napoli');
// console.log(tuttinapoli);

// Tutti i giocatori hanno segnato piu di 5 gol?
// const cinque = calciatori.every((item) => item.gol > 5);
// console.log(cinque);
