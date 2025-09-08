
let idade = 19;

// Verifica se a idade é menor que 18
if (idade < 18) {
    console.log("Você é menor de idade.");
} 
// Verifica se a idade está entre 18 e 59 (inclusive)
else if (idade >= 18 && idade < 60) {
    console.log("Você é adulto.");
} 
// Se não for nenhuma das anteriores, considera que é idoso (60 ou mais)
else {
    console.log("Você é idoso.");
}
