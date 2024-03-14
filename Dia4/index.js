let Fome = prompt("tá com fome?")
let Dinheiro = prompt("tem grana?")
let Aberto = prompt("Restaurante tá aberto?")

if (Fome === "não" || Dinheiro === "não"){
    console.log("Hoje a janta será em casa.")
}else if (Fome === "sim" && Dinheiro === "sim" && Aberto === "não"){
    console.log("Peça um delivery.")
}else if (Fome === "sim" && Dinheiro === "sim" && Aberto === "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido.")
}
