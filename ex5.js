const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero para saber se é par ou impar: ");

if (numero % 2 == 0) {
  console.log("O numero é par.");
} else {
  console.log("É impar.");
}
