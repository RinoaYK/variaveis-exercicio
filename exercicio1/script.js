let nome
let idade
console.log(typeof nome, typeof idade)
// "undefined" Pq não foi definido o valor da variável.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
console.log("Olá", nome, "você tem", idade, "anos.")

let pet = "Vc tem um pet?"
let roupa = "Vc está usando uma roupa rosa hj?"
let water = "Tem bebeido água o suficiente todos os dias?"

//pet = confirm("Vc tem um pet?")
//roupa = confirm("Vc está usando uma roupa rosa hj?")
//water = confirm("Tem bebeido água o suficiente todos os dias?")
//console.log(pet, roupa, water)

let resp01 = prompt(pet)
let resp02 = prompt(roupa)
let resp03 = prompt (water)

console.log (pet, resp01)
console.log (roupa, resp02)
console.log (water, resp03)


//console.log ("Vc tem um pet?", pet)
//console.log ("Vc está usando uma roupa rosa hj?", roupa)
//console.log ("Tem bebido água o suficiente todos os dias?", water)


