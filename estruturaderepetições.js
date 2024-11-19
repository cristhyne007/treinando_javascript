// - For Ela permite que possamos repetir o mesmo código varias vezes.
// Diferente da configuração  const,  o let consegue Alterar seu valor a qualquer momento do programa.
//Inicialização: let i = 0 (o contador começa em 0).Condição: i < 5 (o loop continua enquanto i for menor que 5).Quando i atingir 5, a condição será falsa, e o loop parará.Incremento: i++ (o contador é incrementado em 1 a cada iteração).

for (let i = 0;i<5;i++){
    console.log(i)
}
const frase = "Estou aprendendo programação!";

for (let i = 0; i < 5000; i++) {
  console.log(frase);
}
const meh = "Estou aprendendo programação!";
let resultado = "";

for (let i = 0; i < 5000; i++) {
  resultado += frase + " "; // Adiciona a frase ao resultado com um espaço
}

console.log(resultado); // Exibe a frase repetida
