const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero: ");

let qtd = 0;
while (numero > 0) {
  numero = numero / 10;
  qtd++;
}
console.log("O numero tem", qtd, "algarismos.");
