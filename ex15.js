const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero: ");

let fatorial = 1;

for (let i = 2; i <= numero; i++) {
  fatorial *= i;
}

console.log("O fatorial de", numero, "é", fatorial);
