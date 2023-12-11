const prompt = require("prompt-sync")();

let string = prompt("Digite uma string: ");

let qtdVogais = 0;

let qtdConsoantes = 0;

for (let i = 0; i < string.length; i++) {
  if (
    string[i] === "a" ||
    string[i] === "e" ||
    string[i] === "i" ||
    string[i] === "o" ||
    string[i] === "u"
  ) {
    qtdVogais++;
  } else {
    qtdConsoantes++;
  }
}

console.log(
  "A string tem",
  qtdVogais,
  "vogais e",
  qtdConsoantes,
  "consoantes."
);
