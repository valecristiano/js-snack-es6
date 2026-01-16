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
