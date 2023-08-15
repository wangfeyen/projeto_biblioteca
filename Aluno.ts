import { Usuario } from "./Usuario";

export class Aluno extends Usuario{
    Turma: string;
    NumMatricula:number;
    constructor(nome:string,ID:number,Turma:string,NumMatricula:number){
        super(nome,ID)
        this.Turma = Turma;
        this.NumMatricula = NumMatricula;
    }
    getTurma(){
        return this.Turma
    }
    getNumMatricula(){
        return this.NumMatricula
    }
    setTurma(Turma:string){
        this.Turma = Turma;
    }
    setNumMatricula(NumMatricula:number){
        this.NumMatricula = NumMatricula;
    }
}