var linha = document.getElementById("jg");
var jogador = linha.getElementsByTagName("td");
var resultado = document.getElementById("winner");

function jogar(user){
    let cpu =  Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    var jogadas = ["Pedra", "Papel", "Tesoura"];

    document.getElementById("user").src= ("../img/" + user + ".png");
    document.getElementById("cpu").src= ("../img/" + jogadas[cpu] + ".png");

    let juiz = "Resultado: " + VerificarVencedor(user, jogadas[cpu]);
    
    if(juiz.includes("Jogador 01")){
        jogador[0].innerHTML = (parseInt(jogador[0].firstChild.nodeValue) + 1)  + "";
        resultado.innerHTML = juiz;
    }else if (juiz.includes("Jogador 02")){
        jogador[1].innerHTML = (parseInt(jogador[1].firstChild.nodeValue) + 1)  + "";
        resultado.innerHTML = juiz;
    }else{
        resultado.innerHTML = juiz;
    }

}

function VerificarJogada(x1, y1){
    var jogadasPermitidas = ["pedra", "papel", "tesoura"];
    return ( jogadasPermitidas.includes(x1) && jogadasPermitidas.includes(y1) );
}

function VerificarVencedor(x, y){
    x = x.toLowerCase();
    y = y.toLowerCase();

    if(!VerificarJogada(x, y)) return "Jogada Inválida !!!";

    if(x == y) return "empate";

    var result = "Jogador";
    switch(x){
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