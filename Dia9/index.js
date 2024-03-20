let teste=true;
do{
    //declarando variáveis
    let nome = prompt("Insira seu nome:")
    let idade = parseInt(prompt("Insira sua idade:"))
    let peso = Number(prompt("Insira seu peso:"))
    let altura = Number(prompt("Insira sua altura:"))
    let profissão = prompt("Insira sua profissão")
    let i=0
    let age

    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissão}, tem ${altura}m de altura e pesa ${peso}kg`);

    //Verificando se é maior ou menor de idade
    if(idade>=18){
        console.log(`Está liberado para tomar umas geladas.`)
    }else if (idade<18){
            console.log(`Sem gelada para você.`)
    }

    let dias = parseInt(idade*365)
    let semanas = parseInt(dias/7)
    let meses = parseInt(dias/30)

    console.log(`Sua idade tem ${meses} meses ${semanas} semanas e ${dias} dias`)

    //Calculando o IMC
    let imc = peso / (altura*altura)

    if(imc < 18.5){
        console.log(`Seu IMC=${imc}kg/m2 e está baixo, você está num estado de magreza`)
    }else if (imc >= 18.5 && imc < 24.9){
        console.log(`Seu IMC=${imc}kg/m2 e está normal.`)
    }else if (imc >= 24.9 && imc < 30){
        console.log(`Seu IMC=${imc}kg/m2 e você está acima do peso`)
    }else if (imc >=30){
        console.log(`Seu IMC=${imc}kg/m2 e você está obeso, hora de tratar da saúde`)
    }

    console.log(`
        - Magreza, quando o resultado é menor que 18,5 kg/m2;
        - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
        - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
        - Obesidade, quando o resultado é maior que 30 kg/m2.`)

    //Verificando a idade, ano após ano do nascimento
    let ano = 2023-idade;
    console.log(`Você nasceu em ${ano}`)

    for(age=ano;age<=2023;age++){
        console.log(age,i)
        i++;
    }

    //adicionar mais dados?
    let pergunta = prompt(`Deseja inserir novos dados? Sim(1) Não(2)`)
    if (pergunta=="2"){
        teste=false;
    }
} while (teste)