//Escreva uma função chamada calcularMedia que receba um array de números e retorne a média deles.
function calcularMedia (notas){
    let soma = 0;
    for( let i=0;i<notas.length;i++){
        soma = notas[i];
    }
    return soma / notas.length;
}
const notas = [10,8,5,4,8,9];
console.log(calcularMedia(notas));