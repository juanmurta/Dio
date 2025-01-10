function somar(vitorias, derrotas){
    let somatorio = vitorias - derrotas    
    return somatorio
}

let resultado = somar(51,2)
console.log(resultado)

let rank = ""

if (resultado < 11){
    rank = "Ferro"
}
    else if (resultado > 10 && resultado < 21){
        rank = "Bronze";
    }
    else if ((resultado > 20) && (resultado < 51)){
        rank = "Prata";
    }
    else if ((resultado > 50) && (resultado < 81)){
        rank = "Ouro";
    }
    else if ((resultado > 80) && (resultado < 91)){
        rank = "Diamante"
    }
    else if ((resultado > 90) && (resultado < 101)){
        rank = "Lendario"
    }
    else {
        (resultado > 100)
        rank = "Imortal";
    }

switch (rank){
    case "Ferro":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;

    case "Bronze":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;

    case "Prata":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;

    case "Ouro":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;

    case "Diamante":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;
    
    case "Lendario":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;
    
    case "Imortal":
        console.log("O Herói tem saldo de: " + resultado + " vitórias e está no rank: " + rank)
    break;
}