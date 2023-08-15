export class Usuario{
    nome: string;
    ID: number;
    constructor(nome: string, ID: number){
        this.nome = nome;
        this.ID = ID;
    }
    setNome(nome:string){
        this.nome = nome;
    }
    setID(ID:number){
        this.ID = ID;
    }
    getNome(){
        return this.nome;
    }
    getID(){
        return this.ID;
    }

}
