let estoque = 5;  // estoque inicial
const estoqueSeguro = 3; // nível mínimo desejado após reposição

console.log("Estoque inicial: " + estoque);

// Venda: enquanto houver estoque, vendemos uma unidade
while (estoque > 0) {
    console.log("Venda realizada. Estoque antes: " + estoque);
    estoque--;  // reduz uma unidade no estoque
    console.log("Estoque agora: " + estoque);
}

console.log("Estoque zerado! Iniciando reposição...");

// Reposição: usamos do...while para repor até o estoque atingir o nível seguro
do {
    estoque++;
    console.log("Repondo estoque... Estoque atual: " + estoque);
} while (estoque < estoqueSeguro);

console.log("Reposição finalizada. Estoque seguro: " + estoque);

