// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creare arrey di bici da corsa con proprità nome e peso

const bicycles = [
  {
    nome: "Bianchi",
    peso: 6,
  },
  {
    nome: "Trek",
    peso: 2,
  },
  {
    nome: "Cannondale",
    peso: 5,
  },
  {
    nome: "Cube",
    peso: 3,
  },
];

console.table(bicycles);

// Stampare la bici con il peso minore
let lighterBicycle;

for (let i = 0; i < bicycles.length; i++) {
  const currentBicycle = bicycles[i];
  if (currentBicycle.peso < bicycles[0].peso) {
    lighterBicycle = currentBicycle;
  }
}
console.log("Bici più leggera:", lighterBicycle);

// Snack2

// Creare un array di oggetti di squadre di calcio.

// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console.

// Creare un array di squadre di calcio con proprietà: nome, punti fatti, falli subiti, dove
// Nome sarà l’unica proprietà da compilare

const teams = [
  {
    nome: "Napoli",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Cagliari",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Roma",
    punti: 0,
    falli: 0,
  },
];
console.table(teams);

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];
  currentTeam.punti += RandomNumbers(0, 100);
  currentTeam.falli += RandomNumbers(0, 100);
}
console.table(teams);

function RandomNumbers(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];
  const newObj = { nome: currentTeam.nome, falli: currentTeam.falli };
  newTeams.push(newObj);
}
console.table(newTeams);
