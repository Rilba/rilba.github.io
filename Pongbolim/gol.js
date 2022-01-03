let xGol1= 20;
let xGol2= 575;
let yGol=175;
let comprimentoGol= 5;
let alturaGol = 50;
let colidiuGol= false;
let colidiuGol2 = false;



function mostrargol (){
    rect(xGol1,yGol,comprimentoGol,alturaGol);
  
    rect(xGol2,yGol,comprimentoGol,alturaGol);

}

function fazerGol(){
  colidiuGol = collideRectCircle(xGol1,yGol,comprimentoGol,alturaGol,xBolinha,yBolinha,raio);
  colidiuGol2 = collideRectCircle(xGol2,yGol,comprimentoGol,alturaGol,xBolinha,yBolinha,raio);
  if(colidiuGol){
  
    pontosOp +=1;
    ponto.play();
    xBolinha =300;
  }
   if(colidiuGol2){
     meusPontos += 1;
    ponto.play();
     xBolinha = 300;
    
  }
 
}