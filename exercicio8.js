//Dado um array de números, filtre apenas os números pares, multiplique-os por 2 e some os valores resultantes.
function processandoNumeros(numeros){
    return numeros
    .filter(num=> num % 2==0)
    .map(num=>num*2)
    .reduce((acc,num)=>acc + num,0);
}
const numeros=[1,2,3,4,5,6,7,8,9]
console.log(processandoNumeros(numeros));