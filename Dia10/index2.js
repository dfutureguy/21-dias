

let fibonacci = []

let numero = prompt("Insira um número:")
numero = parseInt(numero)

for (let indice=0;indice<=9;indice++){
    if (indice>=2){
    fibonacci[indice]=fibonacci[indice-1]+fibonacci[indice-2];
    } else if (indice==0){
        fibonacci[indice]=numero-1;
    }else if(indice==1){
        fibonacci[indice]= numero
    }
}

console.log(`Essa é a sequência de Fibonacci do seu número: ${fibonacci}`)