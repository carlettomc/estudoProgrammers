const prompt = require("prompt-sync")();

let string = prompt("Digite uma string: ");

let palavras = string.split(" ");

let maiorP = palavras[0];
let menorP = palavras[0];

for (let i = 1; i < palavras.length; i++) {
  if (palavras[i].length > maiorP.length) {
    maiorP = palavras[i];
  }
  if (palavras[i].length < menorP.length) {
    menorP = palavras[i];
  }
}

console.log("A maior palavra é: ", maiorP);
console.log("A menor palavra é: ", menorP);
