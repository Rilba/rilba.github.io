let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;


let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function mostrarBolinha(){
  
  circle (xBolinha,yBolinha,diametro);
  
  
}


function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  //yBolinha += velocidadeYBolinha;
  
}

function verificacaoColisaoBorda(){
  
if (xBolinha+raio >width || xBolinha -raio <0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha+ raio >height|| yBolinha-raio <0){
    velocidadeYBolinha *= -1;
  }
}


