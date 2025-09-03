// Definimos a variável com um valor direto (como se fosse a escolha do usuário)
let escolha = 3; // Você pode mudar esse valor para 1, 2, 4, etc.

// Usa switch para verificar o valor da variável 'escolha'
switch (escolha) {
    case 1:
        console.log("Você escolheu Rock! 🎸");
        break;

    case 2:
        console.log("Você escolheu Pop! 🎤");
        break;

    case 3:
        console.log("Você escolheu Jazz! 🎷");
        break;

    case 4:
        console.log("Você escolheu Funk! 🎧");
        break;

    case 5:
        console.log("Você escolheu Sertanejo! 🎻");
        break;

    default:
        console.log("Opção inválida. Escolha um número de 1 a 5.");
}
