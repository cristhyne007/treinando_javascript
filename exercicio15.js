function calculadora() {
    const prompt = require("prompt-sync")();

    const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const operacao = prompt("Digite a operação (+, -, *, /): ");

    let resultado;

    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                console.log("Erro: Divisão por zero não é permitida.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            console.log("Operação inválida.");
            return;
    }

    
        console.log(`O resultado de ${numero1} ${operacao} ${numero2} é: ${resultado}`);
}
calculadora();
