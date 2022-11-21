nome = prompt("Qual o seu nome?")
sobrenome = prompt("Qual o seu sobrenome?")
diaNas = Number(prompt("Que dia vc nasceu?"))
mesNas = Number(prompt("Que mês vc nasceu?"))
anoNas = Number(prompt("Que ano vc nasceu?"))
end = prompt("Qual o seu endereço?")
cpf = Number(prompt("Qual o seu cpf?"))
escolariedade = prompt("Qual sua escolariedade?")
cnh = Number(prompt("Qual seu CNH?"))
filhos = Number(prompt("Quantos filhos vc tem?"))
cargo = prompt("Qual seu cargo atual?")
salario = Number(prompt("Qual o seu salário atual? R$ "))
comis = prompt("Recebe comissão?")
anoAdm = Number(prompt("Qual o ano de admissão?"))

console.log(nome, "O tipo de variável é:", typeof nome)
console.log(sobrenome, "O tipo de variável é:", typeof sobrenome)
console.log(diaNas, "O tipo de variável é:",  typeof diaNas)
console.log(mesNas, "O tipo de variável é:",  typeof mesNas)
console.log(anoNas, "O tipo de variável é:",  typeof anoNas)
console.log(end, "O tipo de variável é:",  typeof end)
console.log(cpf, "O tipo de variável é:",  typeof cpf)
console.log(escolariedade, "O tipo de variável é:",  typeof escolariedade)
console.log(cnh, "O tipo de variável é:",  typeof cnh)
console.log(filhos, "O tipo de variável é:",  typeof filhos)
console.log(cargo, "O tipo de variável é:",  typeof cargo)
console.log(salario, "O tipo de variável é:",  typeof salario)
console.log(comis, "O tipo de variável é:",  typeof comis)
console.log(anoAdm, "O tipo de variável é:",  typeof anoAdm)


console.log("Nome completo: ",nome,sobrenome)
console.log("Data de nascimento: ", diaNas,"/",mesNas,"/",anoNas)
console.log("Endereço: ",end)
console.log("CPF: ",cpf)
console.log("Escolariedade: ",escolariedade)
console.log("CNH número: ",cnh)
console.log("Filhos: ",filhos)
console.log("Cargo atual: ",cargo)
console.log("Salário: R$",salario)
console.log("Comissão de ",comis)
console.log("Ano de admissão: ",anoAdm)



/*
a) Nome completo
b) Data de nascimento (utilize as / )
c) Endereço
d) CPF
e) Escolaridade
f) Possui CHN?
g) Quantos filhos possui?
h) Cargo atual
i) Salário
j) Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero
k) Informe o ano de admissão
*/