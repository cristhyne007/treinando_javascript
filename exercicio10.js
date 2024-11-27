//Escreva uma função que simule um tempo de espera usando setTimeout e a converta para uma Promise. Exemplo: esperar(2000) resolve após 2 segundos.
function esperar(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`esperou ${ms} milissegundos`);
        },ms );
    });
}
 esperar(2000).then((mensagem)=>{
    console.log(mensagem)
 }
)