var entrada = require("readline-sync")
var nome = entrada.question(" Qual seu nome: ")
console.log("Olá, ", nome, "seja bem vinda")
var sobrenome = entrada.question("qual seu sobrenome: ")
console.log("Seu nome completo é: ", nome, sobrenome)
var n1 = parseInt (entrada.question("Me diga um valor: "))
var n2 = parseInt (entrada.question("Me diga um segundo valor: "))
console.log(n1 + n2)
var d1 = parseInt (entrada.question("qual sua nota na d1? "))
var d2 = parseInt (entrada.question("qual sua nota na d2? "))
var d3 = parseInt (entrada.question("qual sua nota na d3? "))
console.log((d1 + d2 + d3) / 3 )






