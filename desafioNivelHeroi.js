// Desafio do Heroi Felipão
// Classificar o heroi usando o nome e o nível e exibindo no final

// Lê o nome do heroi:
var nomeHeroi = "Camila";

// Lê o nivel em XP do heroi:
var xpHeroi = 7200;

function verHeroi(xpHeroi) {
    var nivelHeroi;
    if (xpHeroi <= 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi > 1000 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi > 2000 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi > 5000 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi > 7000 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi > 8000 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi > 9000 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else if (xpHeroi > 10000) {
        nivelHeroi = "Radiante";
    } else {
        nivelHeroi = "";
    }
    return nivelHeroi;
};
    
var mostraHeroi = verHeroi(xpHeroi) ;
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + mostraHeroi);
