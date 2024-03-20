let confirma = true;
let income 

do{
let nome = prompt("Insira o nome:")
let idade = parseInt(prompt("Insira a idade:"))
income = Number(prompt("Insira o salário:"))

console.log(`${nome} tem ${idade} anos e seu salário é de ${income} reais.`);

let pergunta = prompt("Os dados estão corretos? (1)Sim ou (2)Não")
if (pergunta=="1"){
    confirma=false
}
}while(confirma)

let i=1.5;
let tempo = parseInt(prompt("Gostaria de fazer uma previsão de quantos anos?"))
tempo = 2024+tempo;
let n

for (n=2024+1;n<=tempo;n++){
    let projection = income*(100+i)/100    
    console.log(`${n} - R$${projection}`)
    i=2*i;
}
