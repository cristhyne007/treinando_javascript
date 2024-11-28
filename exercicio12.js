function criarContador(){
    let count=0;
    
    return function(){
        count++;
        return count;
    };
}
 const contador1= criarContador();
 console.log(contador1());
 console.log(contador1());
const contador2= criarContador();
console.log(contador2());
console.log(contador2());