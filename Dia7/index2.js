let pergunta = 1;
let saldo = 10000;
let maior = 0;
let n = 0;
let media = 0;
let valor = 0;
do {
let nome = prompt("Insira seu nome: ")
let cpf = prompt("Insira seu cpf: ")
valor = Number(prompt ("Qual o valor?"))
while(valor<0){
    console.log("O valor não pode ser negativo nem maior que o saldo")
    valor = Number(prompt("Digite um valor novamente:"))
}
let opc = Number(prompt ("Pressione sacar(1) ou depositar(2)"))
if (maior < valor){
    maior = valor;
}
media = media + valor;
n = n + 1;
if (opc === 2){
    saldo = saldo + valor;
    //console.log("O saldo da sua conta agora é de: ",saldo)
}else if(opc === 1){
    if (valor>saldo){
        console.log("Você não possui esse saldo para sacar.")
    }else if (valor <=saldo){
    saldo = saldo - valor;
    //console.log("O saldo da sua conta após esse saque é de: ", saldo)
    }
}
pergunta = Number(prompt ("Deseja fazer outra transação(1) ou finalizar(2)"))
}while(pergunta === 1)

console.log("O seu saldo total da conta é de: ",saldo)
console.log("O maior valor foi de: ",valor)
console.log("A média dos valores foi de: ",media/n)