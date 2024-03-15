let combustivel = Number(prompt("Quer abastecer com gasolina(1), alcool(2) ou calibrar(3)? Digite um número"))

switch(combustivel){
    case 1:
        console.log("Litro da gasolina: R$5")
        valor = prompt('Qual o valor que gostaria de abastecer?')
        console.log(valor/5," litros abastecidos")    
    break
    case 2:
        console.log("Litro da alcool: R$3")
        valor = prompt("Qual o valor que gostaria de abastecer?")
        console.log(valor/3," litros abastecidos")
    break
    case 3:
        console.log("Pneus calibrados com sucesso!")
    break
}
    
