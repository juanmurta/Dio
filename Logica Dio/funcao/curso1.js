let userName = getFirstName1("Juan Tardelly Aguiar Murta")

console.log("Seja bem vindo " + userName)


function getFirstName1(name){
    let firstName = name.split(" ")[0]
    return firstName
}


let userName1 = getFirstName("Juan-Tardelly-Aguiar-Murta", "-")

console.log("Seja bem vindo " + userName1)


function getFirstName(name, splitchar){
    let firstName = name.split(splitchar)[0]
    return firstName
}





teste("pao teste")
var nome


function teste(pao){
    nome = "Juan"
    console.log(pao)
    console.log(nome)
}


torrar("pão integral", "Juan", 10.50)
torrar("pão integral", 10.50)

function torrar(pao, valor, nome = "cliente"){
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é " + valor)
}