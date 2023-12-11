const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero: ");

let primos = [];

for (let i = 2; i <= numero; i++) {
  let primo = true;
  for (let j = 2; j * j <= 1; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    primos.push(i);
  }
}

console.log(primos);
