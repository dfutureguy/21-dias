let Num1 = Number(prompt("Digite um número:"))
let Num2 = Number(prompt("Digite outro número:"))

let opera = prompt("Qual operação quer fazer com esses números?")

switch(opera){
    case "soma":
        console.log(opera)
        opera=Num1+Num2
        console.log(opera)
        break;
    case "subtrair":
        console.log(opera)
        opera=Num1-Num2
        console.log(opera)
        break;
    case "multiplica":
        console.log(opera)
        opera=Num1*Num2
        console.log(opera)
        break;
    case "divide":
        console.log(opera)
        opera=Num1/Num2
        console.log(opera)
        break;
}