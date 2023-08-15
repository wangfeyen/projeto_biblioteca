export class Usuario{
    nome: string;
    ID: string;
    constructor(nome: string, ID: string){
        this.nome = nome;
        this.ID = ID;
    }
    setNome(nome:string){
        this.nome = nome;
    }
    setID(ID:string){
        this.ID = ID;
    }
    getNome(){
        return this.nome;
    }

}
