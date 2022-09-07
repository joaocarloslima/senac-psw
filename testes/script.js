// Disciplina:
// Autor: Joao Carlos (joao.clsilva@sp.senac.br)
// Data: 22/08/2022
// Objetivo: Calcular aumento salarial

// ler os dados
var nome = prompt("digite seu nome")
var salario = prompt("digite seu salario")

// verificar se tem aumento
if(salario <= 2424) {
    console.log(nome, "você terá aumento")
}else{
    console.log(nome, "você não terá aumento")
}

var novoSalario = salario * 1.06;
console.log("Seu novo salário será", novoSalario)


