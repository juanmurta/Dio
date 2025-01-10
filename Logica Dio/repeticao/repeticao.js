let nome = "Juan"
let xp = 5000
let rank = ""

if (xp < 1001){
    rank = "Ferro"
} else if (xp > 1000 && xp < 2001){
    rank = "Bronze"
} else if (xp > 2000 && xp < 5001){
    rank = "Prata"
} else if (xp > 5000 && xp < 8001){
    rank = "Platina"
} else if (xp > 8000 && xp < 9001){
    rank = "Ascendente"
} else if (xp > 9000 && xp < 10001){
    rank = "Imortal"
} else {
    rank = "Radiante"
}

console.log("O heroi de nome: " + nome + " está no nivel: " + rank)
