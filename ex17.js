const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero: ");

let fibonacci = [0, 1];

for (let i = 2; i <= numero; i++) {
  let proximo = fibonacci[i - 1] + fibonacci[i - 2];

  if (fibonacci[i - 1] === proximo) {
    continue;
  }

  fibonacci.push(proximo);
}
console.log(fibonacci);
