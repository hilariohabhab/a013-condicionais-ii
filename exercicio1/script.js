const num = Number(prompt("Digite um número"))

if (num % 2 === 0) {
    console.log("Numero divisivel por 2")
    if (num % 3 === 0) {
      console.log("Numero divisivel por 3")
  } else {
    console.log("Não é divisivel por 3");
  }
} else {
    console.log("Não é divisivel por 2")
} 


// Operador Lógico.

// if (num % 2 === 0 || num % 3 === 0) {
//     console.log("Numero divisivel por 2 ou 3")
// } else {
//    console.log("Este numero não é divisivel por 2 e 3 ao mesmo tempo.")
//}