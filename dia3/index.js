//Entrada de dados

let Nome = prompt("Eaí qual teu nome?")
let Idade = prompt("E tua idade?")
Idade = parseInt(Idade)
let Altura = prompt("Agora fala tua altura:")
Altura = Number(Altura)
let Peso = prompt ("tu pesa quanto?")
Peso = Number(Peso)

//Fazendo os cálculos
let ano = 2024 - Idade
let IMC = Peso/(Altura*Altura)

//Escrevendo a mensagem
console.log ("Eaí ",Nome,"! Você nasceu em ",ano,", tem ",Idade," anos, ",Altura,"m e seu IMC =",IMC)