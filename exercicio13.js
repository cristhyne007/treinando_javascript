class Artista{
    constructor(nome,música){
        this.nome=nome;
    }
    cantamúsica(){
        console.log(`${this.nome} canta uma música`);
    }
}
class Cantora extends Artista {
    cantamúsica(){
        console.log(`${this.nome} canta washing machine heart`);
    }
}
const artista= new Artista("mitski");
artista.cantamúsica();

const cantora= new Cantora("mistki");
cantora.cantamúsica();
