import { Usuario } from "./Usuario";
import { Aluno} from "./Aluno";
export class Professor extends Usuario{
    constructor(nome:string,ID:number){
        super(nome,ID);
    }
    Alunos:Aluno[]=[];
    getAlunos():Aluno[]{
        return this.Alunos;
    }
    addAluno(aluno:Aluno){
        this.Alunos.push(aluno);
    }
    buscarAluno(busca:string):Aluno[]{
        const AlunosEncontrados:Aluno[]=[];
        for(let i=0;i<this.Alunos.length;i++){
            const aluno = this.Alunos[i];
            if(aluno===busca){
                AlunosEncontrados.push(aluno)
            }
        }
    }
}