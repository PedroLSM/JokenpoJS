function VerificarJogada(x1, y1){
    var jogadasPermitidas = ["pedra", "papel", "tesoura"];
    return ( jogadasPermitidas.includes(x1) && jogadasPermitidas.includes(y1) );
}

function VerificarVencedor(x, y){
    x = x.toLowerCase();
    y = y.toLowerCase();

    if(!VerificarJogada(x, y)) return "Jogada Inválida !!!";

    var result = "Jogador";
    switch(x){
        case y:
            return "empate";
        case "pedra":
            result += ( y == "tesoura" ? " 01 - " + x : " 02 - " + y ); 
            break;
        case "papel":
            result += ( y == "pedra" ? " 01 - " + x : " 02 - " + y ); 
            break;
        case "tesoura":
            result += ( y == "papel" ? " 01 - " + x : " 02 - " + y ); 
            break;
    }

    return result;
}

/* PROGRAM */
var jogadas = ["Pedra", "Papel", "Tesoura"];
for(let jg1 of jogadas){ 
    console.log("[ JOGADOR 01 X JOGADOR 02 ]");
    console.log("");
    for(let jg2 of jogadas){
        console.log(jg1 + " X " + jg2);

        let juiz = VerificarVencedor(jg1, jg2);
        console.log("Resultado: " + juiz);
        console.log("---");
    }
}