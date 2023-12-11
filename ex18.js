const prompt = require("prompt-sync")();

// let matriz = prompt("Digite uma matriz de numeros: ");

// let matrizArray = matriz.split(" ");

// let matrizTransposta = [];

// for (let i = 0; i < matrizArray.length; i++) {
//   let linha = [];
//   for (let j = matrizArray[i].length - 1; j >= 0; j--) {
//     linha.push(matrizArray[j][i]);
//   }
//   matrizTransposta.push(linha);
// }

// console.log(matrizTransposta);

let matriz = "1 2 3 4 5";

let matrizArray = matriz.split(" ");

let matrizTransposta = [];

for (let i = 0; i < matrizArray.length; i++) {
  let linha = [];
  for (let j = matrizArray[i].length - 1; j >= 0; j--) {
    linha.push(matrizArray[j][i]);
  }
  matrizTransposta.push(linha);
}

console.log(matrizTransposta); // [1, 4, 2, 5, 3]
