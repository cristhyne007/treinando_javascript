//Crie um objeto representando um carro com as propriedades marca, modelo e ano. Adicione um método chamado descrever que retorna uma string com essas informações.
const carro={
    marca:"AUDI",
    modelo:"R6",
    ano:2016,

descrever:function(){
    return  `O carro disponivel é um ${this.marca},modelo ${this.modelo} do ano de ${this.ano}.`;
}
};
console.log(carro.descrever());