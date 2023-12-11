const prompt = require("prompt-sync")();

// let tempC = prompt("Digite uma temperatura em graus Celsius: ");

// let tempF = (tempC * 9) / 5 + 32;

// console.log("A temp convertida é: ", tempF);

function tempTotal() {
  let tempC = prompt("Digite uma temperatura em graus Celsius: ");

  tempC = parseFloat(tempC);

  let tempF = (tempC * 9) / 5 + 32;
  tempF = parseFloat(tempF);

  console.log("A temp convertida é: ", tempF);
}
tempTotal();
