const prompt = require("prompt-sync")();

let string = prompt("Digite uma string: ");
let qtdPalavras = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    qtdPalavras++;
  }
}

console.log("A string tem", qtdPalavras, "palavras.");
