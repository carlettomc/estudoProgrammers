const prompt = require("prompt-sync")();

let palavra = prompt("Digite uma palavra: ");

palavra = palavra.toUpperCase();

console.log("A palavra maiuscula é: ", palavra);
