//Crie uma função chamada diasAteAnoNovo que calcule quantos dias faltam até o próximo ano novo.
function diasateanonovo(){
    const hoje= new Date();
    const anoatual=hoje.getFullYear();
    const anonovo=new Date(anoatual + 1,0,1);
    const diferencaMilissegundos=anonovo - hoje;
    const diasRestantes=Math.ceil(diferencaMilissegundos/(1000*60*60*24));
    return diasRestantes;
}
console.log(`Faltam ${diasateanonovo()} dias para o próximo Ano Novo!`);