const prompt = require("prompt-sync")();

let string = prompt("Digite uma string: ");

let ocorrencias = {};

for (let i = 0; i < string.length; i++) {
  if (ocorrencias[string[i]] === undefined) {
    ocorrencias[string[i]] = 1;
  } else {
    ocorrencias[string[i]]++;
  }
}
for (let letra in ocorrencias) {
  console.log(letra, ":", ocorrencias[letra]);
}
