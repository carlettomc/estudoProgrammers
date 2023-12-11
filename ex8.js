const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero: "));

let fibonacci = [0, 1];

for (let i = 2; i <= numero; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(fibonacci);
