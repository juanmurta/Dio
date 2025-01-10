class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        switch(this.tipo){
            case "Guerreiro":
                console.log(`O heroi ${this.nome} tem ${this.idade} anos, ele é do tipo ${this.tipo} e atacou com espada `)
            break;

            case "Mago":
                console.log(`O heroi ${this.nome} tem ${this.idade} anos, ele é do tipo ${this.tipo} e atacou com magia `)
            break;

            case "Monge":
                console.log(`O heroi ${this.nome} tem ${this.idade} anos, ele é do tipo ${this.tipo} e atacou com artes marciais `)
            break;

            case "Ninja":
                console.log(`O heroi ${this.nome} tem ${this.idade} anos, ele é do tipo ${this.tipo} e atacou com shuriken `)
            break;
        }
    }
}

let start = new heroi("Juan", 35, "Guerreiro")

console.log(start)
start.atacar()