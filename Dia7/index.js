let nota = 0
let sexo = "f"
let n = 0;
let media = 0;
let pergunta = "s"
let m = 0;
let maior = 0;

while(pergunta === "s"){
    nota = Number(prompt("Qual a nota?"));
    sexo = prompt("Qual o sexo?");
    console.log(sexo,nota)    
    n=n+1;
    media = media + nota;
    if (sexo === "m"){
        m=m+1;
        if (maior < nota){
            maior = nota;
        }
    }
    pergunta = prompt("deseja adicionar mais alunos?")
}

console.log("A média das notas é: ",media/n)
console.log(m," homens enviaram notas")
let f=n-m;
console.log(f," mulheres enviaram notas")
console.log("A maior nota entre os homens foi: ",maior)