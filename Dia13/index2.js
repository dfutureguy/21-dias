class carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao){
        this.Nome=Nome
        this.Potencia=Potencia
        this.VelocidadeMaxima=VelocidadeMaxima
        this.Aceleracao=Aceleracao
    }

    tempo(distancia){
        let resultado = distancia/ (this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}


