let xRaquete=[50,385,200,535];
let yRaquete=[150,150,150,150];

let comprimentoR =10;
let alturaR = 90;




let velocidadeY=4;

let colidiu=false;
let colidiu2=false;
let colidiuOp = false;
let colidiuOp2 = false;

function mostrarRaquete(){
  fill (color(0,0,255));
  rect(xRaquete[0],yRaquete[0],comprimentoR,alturaR);
  
  rect(xRaquete[1],yRaquete[1],comprimentoR,alturaR);
  
  fill(color(255,0,0));
  rect(xRaquete[2],yRaquete[2],comprimentoR,alturaR);
   rect(xRaquete[3],yRaquete[3],comprimentoR,alturaR);
}


function movimentarRaquete(){
  if(yRaquete[0]>0 && yRaquete[1]>0)
  {
    if(keyIsDown(UP_ARROW)){
    yRaquete[0] -= velocidadeY;
      yRaquete[1] -= velocidadeY;
  }
  }
  
   if(yRaquete[0]<310 && yRaquete[1]<310){
     if(keyIsDown(DOWN_ARROW) ){
    yRaquete[0] += velocidadeY;
       yRaquete[1] += velocidadeY;
  }
   }
}
function movimentaRaquete2(){
  if(yRaquete[2]>0 && yRaquete[3]>0)
  {
    if(keyIsDown(87)){
    yRaquete[2] -= velocidadeY;
      yRaquete[3] -= velocidadeY;
  }
  }  
  if(yRaquete[2]<310 && yRaquete[3]<310){
     if(keyIsDown(83)){
    yRaquete[2] += velocidadeY;
       yRaquete[3] += velocidadeY;
  }
   }
  
  
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + comprimentoR && yBolinha - raio < yRaquete + alturaR
        && yBolinha + raio > yRaquete  ) {
        velocidadeXBolinha *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete[0],yRaquete[0],comprimentoR,alturaR,xBolinha,yBolinha,raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
   colidiu2 = collideRectCircle(xRaquete[1],yRaquete[1],comprimentoR,alturaR,xBolinha,yBolinha,raio);
  if(colidiu2){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  colidiuOp = collideRectCircle(xRaquete[2],yRaquete[2],comprimentoR,alturaR,xBolinha,yBolinha,raio);
  if(colidiuOp){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
   colidiuOp2 = collideRectCircle(xRaquete[3],yRaquete[3],comprimentoR,alturaR,xBolinha,yBolinha,raio);
  if(colidiuOp2){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}