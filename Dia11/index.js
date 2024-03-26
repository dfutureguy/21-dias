let nomes = [];
let notas = [];
let contador = true;
let soma = 0;
let n = 0;

while(contador) {

    let nome = prompt("Qual o nome do aluno?")
    let nota = parseInt(prompt("E qual a nota do aluno?"))

    nomes[n]=nome;
    notas[n]=nota;
    
    soma = soma+nota;
    n++;
    let contador = prompt("Deseja inserir mais dados? (1)Sim (2)Não")

    if (contador=="2"){
        contador=false;
        break
    }
}

let media = soma/n;

console.log(nomes,notas)
console.log(`A média geral foi de: ${media}`)