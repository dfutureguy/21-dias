let numbers=[];
let indice = 0;
let continua = true;


let tamanhoArray = prompt("quantos números deseja inserir?")
tamanhoArray = parseInt(tamanhoArray)

while (continua){
    number = prompt("Insira um número:")
    number = parseInt(number)
    numbers[indice]=number;
    console.log(indice,numbers[indice])
    indice++;
    
    if (indice==tamanhoArray){
        continua = false
    }

}

for (indice;indice>=0;indice-=1){
    console.log(numbers[indice]);
}