let nome
let idade
console.log(typeof nome, typeof idade)
// "undefined" Pq não foi definido o valor da variável.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
console.log("Olá", nome, "você tem", idade, "anos.")

let pet
let roupa
let water

pet = confirm("Vc tem um pet?")
roupa = confirm("Vc está usando uma roupa rosa hj?")
water = confirm("Tem bebeido água o suficiente todos os dias?")
//console.log(pet, roupa, water)

console.log ("Vc tem um pet?", pet)
console.log ("Vc está usando uma roupa rosa hj?", roupa)
console.log ("Tem bebido água o suficiente todos os dias?", water)


