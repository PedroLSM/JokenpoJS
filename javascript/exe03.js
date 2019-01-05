function verificarVelocidade(vel){
    let pontos = Math.floor((vel - 70) / 5);
    if(pontos < 1){
        console.log("Ok!");
    }else if (pontos < 12){
        console.log(pontos + " Ponto(s).");
    }else{
        console.log("Licensa Suspensa.");
    }
} 

for (let i = 70; i < 150; i += 4) {
    console.log(i);
    verificarVelocidade(i);
    console.log("---");
}