export class Livro{
    ID:number;
    Titulo: string;
    Autor: string;
    AnoPublicacao:number;
    Genero:string;
    ExemplaresDisponiveis:number

    constructor(ID:number,Título:string,Autor:string,AnoPublicacao:number,Genero:string,ExemplaresDisponiveis:number){
        this.ID = ID;
        this.Titulo = Título;
        this.Autor = Autor;
        this.AnoPublicacao = AnoPublicacao;
        this.Genero = Genero;
        this.ExemplaresDisponiveis = ExemplaresDisponiveis;
    }
    getId():number{
        return this.ID;
    }
    getTitulo():string{
        return this.Titulo;
    }
    getAutor():string{
        return this.Autor;
    }
    getAno_publicacao():number{
        return this.AnoPublicacao;
    }
    getGenero():string{
        return this.Genero;
    }
    getExemplares_disponiveis():number{
        return this.ExemplaresDisponiveis;
    }
    setId(ID:number){
        this.ID = ID;
    }
    setTitulo(Título:string){
        this.Titulo = Título;
    }
    setAutor(Autor:string){
        this.Autor = Autor;
    }
    setAno_publicacao(AnoPublicacao:number){
        this.AnoPublicacao = AnoPublicacao;
    }
    setGenero(Genero:string){
        this.Genero = Genero;
    }
    setExemplares_disponiveis(ExemplaresDisponiveis:number){
        this.ExemplaresDisponiveis = ExemplaresDisponiveis;
    }
    
}