const prompt = require("prompt-sync")();

// let numero1 = parseInt(prompt("Digite um numero:"));
// let numero2 = parseInt(prompt("Digite o segundo numero:"));

// let soma = numero1 + numero2;

// console.log("A soma é:", soma);

// function soma() {
//   let primeiroNumero = prompt("Digite o primeiro número:");
//   let segundoNumero = prompt("Digite o segundo número:");

//   primeiroNumero = parseInt(primeiroNumero);
//   segundoNumero = parseInt(segundoNumero);

//   let soma = primeiroNumero + segundoNumero;

//   console.log("A soma dos dois números é:", soma);
// }
// soma();

function soma() {
  let numero1 = prompt("Digite o primeiro numero: ");
  let numero2 = prompt("Digite o segundo numero: ");

  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);

  let soma = numero1 + numero2;

  console.log("A soma é: ", soma);
}
soma();
