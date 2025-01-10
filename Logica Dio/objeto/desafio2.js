class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
 
    atacar(){
        let ataque;
        switch(this.tipo){
            case "Guerreiro":
                ataque = "usou espada"
            break;
 
            case "Mago":
                ataque = "usou magia"
            break;
 
            case "Monge":
                ataque = "usou artes marciais"
            break;
 
            case "Ninja":
                ataque = "usou shuriken"
            break;
        }
 
        return ataque;
    }
 }
 
 let start = new heroi("Juan", 35, "Mago")
 let ataque = start.atacar() 
 
 console.log(start)
 console.log(`O heroi ${start.nome} tem ${start.idade} anos, ele é do tipo ${start.tipo} e atacou com ${ataque}`)
 