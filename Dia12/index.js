let nomes = [];
let senhas = [];
let i = 0;
let parada = true;
let pergunta = true;

while (parada){
    let pergunta = prompt("(1)Cadastrar (2)Login (3)Excluir (4)Encerrar")
    let parada2 = true;
    switch(pergunta){
        case "1":
            parada2=true;
            while(parada2){
                let nome = prompt("Insira o nome:")
                let senha = prompt("Insira a senha:")
                nomes[i]=nome;
                senhas[i]=senha;
                i++
                let para = prompt("Deseja cadastrar outro usuário? (2)Não")
                if (para == "2"){
                    parada2=false;
                }
            }
            console.log(nomes,senhas)
            break;
        case "2":
            while(parada2){
                let nome = prompt("Insira o nome:")
                for (let i=0;i<nomes.length;i++){
                    if (nome==nomes[i]){
                        let senha = prompt("Insira a senha:")
                            if (senha==senhas[i]){
                                console.log("Sucesso!")
                                parada2 = false;
                                break;
                            }else{
                                console.log("Senha incorreta!")
                            }
                    }
                }
            }           
            break;
        case "3":
            let nomesAux=[];
            let senhasAux=[];
            let contadorAux = 0;

            while(parada2){
                let nome = prompt("Qual nome deseja excluir?")
                for (let i=0;i<nomes.length;i++){
                    if (nome==nomes[i]){
                        console.log("Cadastro excluído")
                        parada2=false;
                    }else{
                        nomesAux[contadorAux]=nomes[i]
                        senhasAux[contadorAux]=senhas[i]
                        contadorAux++;
                    }
                }    
            }
            nomes=nomesAux
            senhas=senhasAux   
            break;
        case "4":
            parada=false;
            break;
    }
}