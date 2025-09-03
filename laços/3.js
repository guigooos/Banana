// Gera a tabuada dos números de 1 a 10
for (let n = 1; n <= 10; n++) {
    // Mostra qual tabuada está sendo gerada
    console.log("========== Tabuada do " + n + " ==========");

    // Segundo for: multiplica o número atual por 1 até 10
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        let resultado = n * multiplicador;

        // Mostra o resultado da multiplicação
        console.log(n + " x " + multiplicador + " = " + resultado);
    }

    // Linha em branco para separar as tabuadas
    console.log("");
}

