//Crie um programa que peça ao usuário para inserir um número e verifique se ele é par ou ímpar.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (input) => {
  const numero = Number(input);
  console.log(
    isNaN(numero)
      ? "Por favor, insira um número válido."
      : `O número ${numero} é ${numero % 2 === 0 ? "par" : "ímpar"}.`
  );
  rl.close();
});
