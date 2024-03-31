class computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD

    constructor(Tipo,Processador,Video,Armazenamento,MemoriaRam,SSD){
        this.Tipo = Tipo
        this.Processador = Processador
        this.Video = Video
        this.Armazenamento = Armazenamento
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD

    }
    apresentar(){
        console.log("Seu computador é um: "+this.Tipo+" Processador "+ this.Processador+" Vídeo "
        +this.Video+","+this.Armazenamento+" GB de memória,"+this.MemoriaRam+"GB de RAM e SSD:"+this.SSD)
    }
}

//CRIANDO OBJETO

tipo = prompt("Insira o tipo do seu computador:");
Processador = prompt("Qual o seu processador?")
Video = prompt("Qual o tipo de vídeo?")
Armazenamento = prompt("Qual o armazenamento do seu computador em GB?")
MemoriaRam = prompt("Qual a memória RAM do seu computador em GB?")
SSD = prompt("Possui SSD?")
if (SSD=="sim"){
    SSD=true;
}else{
    SSD=false;
}

computador = new computador(tipo,Processador,Video,Armazenamento,MemoriaRam,SSD)

computador.apresentar()