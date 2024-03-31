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


class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(Nome,Tipo,Distancia){
    this.Nome=Nome
    this.Tipo=Tipo
    this.Distancia=Distancia
    this.Participantes=[]
    this.Vencedor=""
    }

    DefinirVencedor(){
        let MenorTempo = this.Participantes[0].tempo(this.Distancia)
        let Vencedor = this.Participantes[0]

        for(let i=0;i<this.Participantes.length;i++){
            let time = this.Participantes[i].tempo(this.Distancia)
            if (time<MenorTempo){
                MenorTempo = time
                Vencedor = this.Participantes[i]
            }
        }
        return this.Vencedor = Vencedor
    }

    ExibirVencedor(){
    console.log("O vencedor é o carro: "+this.Vencedor.Nome)
    }

}



let distancia = prompt("A corrida já vai começar, insira a distância do circuito em metros:")

let corrida = new Corrida("monza","fórmula 1",distancia) 
corrida.Participantes[0]= new carro ("mclaren",450,100,1);
corrida.Participantes[1]= new carro ("mercedez",430,300,3);
corrida.Participantes[2]= new carro ("ferrari",420,450,4);

corrida.DefinirVencedor()
corrida.ExibirVencedor()
