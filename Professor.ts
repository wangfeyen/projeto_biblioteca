import { Usuario } from "./Usuario";
import { Aluno} from "./Aluno";
export class Professor extends Usuario{
    Alunos:Aluno[]=[];
    getAlunos():Aluno[]{
        return this.Alunos;
    }
    addAluno(aluno:Aluno){
        this.Alunos.push(aluno);
    }
}