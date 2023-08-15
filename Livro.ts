export class Livro{
    Id: string;
    Titulo: string;
    Autor: string;
    Ano_publicacao:number;
    Genero:string;
    Exemplares_disponiveis:number

    constructor(ID:string,Título:string,Autor:string,Ano_publicacao:number,Genero:string,Exemplares_disponiveis:number){
        this.Id = ID;
        this.Titulo = Título;
        this.Autor = Autor;
        this.Ano_publicacao = Ano_publicacao;
        this.Genero = Genero;
        this.Exemplares_disponiveis = Exemplares_disponiveis;
    }
    getId():string{
        return this.Id;
    }
    getTitulo():string{
        return this.Titulo;
    }
    getAutor():string{
        return this.Autor;
    }
    getAno_publicacao():number{
        return this.Ano_publicacao;
    }
    getGenero():string{
        return this.Genero;
    }
    getExemplares_disponiveis():number{
        return this.Exemplares_disponiveis;
    }
    setId(ID:string){
        this.Id = ID;
    }
    setTitulo(Título:string){
        this.Titulo = Título;
    }
    setAutor(Autor:string){
        this.Autor = Autor;
    }
    setAno_publicacao(Ano_publicacao:number){
        this.Ano_publicacao = Ano_publicacao;
    }
    setGenero(Genero:string){
        this.Genero = Genero;
    }
    setExemplares_disponiveis(Exemplares_disponiveis:number){
        this.Exemplares_disponiveis = Exemplares_disponiveis;
    }
    
}