let modelos = [];
let anos = [];
let valores = [];
let contador = true;
let i = 0;

while(contador){
    let modelo = prompt("Qual o modelo do carro?")
    let ano = parseInt(prompt("Qual o ano do carro?"))
    let valor = Number(prompt("Qual o valor do carro?"))

    modelos[i]=modelo;
    anos[i]=ano;
    valores[i]=valor;
    
    i++;

    let teste = prompt("Deseja inserir mais carros? (1)Sim (2)Não")
    if (teste=="2"){
        contador=false
    }
}

console.log(`${modelos},${anos} Valor: ${valores}`)

for (let i=0;i<valores.length - 1;i++){
    for (let j=0;j<valores.length - i -1;j++){
        if (valores[j]>valores[j+1]){

            let modeloMaior = modelos[j]
            modelos[j]=modelos[j+1]
            modelos[j+1]=modeloMaior

            let anoMaior = modelos[j]
            anos[j]=anos[j+1]
            anos[j+1]=anoMaior

            let valorMaior = modelos[j]
            valores[j]=valores[j+1]
            valores[j+1]=valorMaior
        }
    }
}

console.log("Carros ordenados pelo preço:")
for(let i=0;i<valores.length;i++){
    console.log(`${modelos[i]} - ${anos[i]} - ${valores[i]} `)
}
