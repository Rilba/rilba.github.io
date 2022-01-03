let raquetada;
let ponto;
let trilha;
let imagemCampo;


function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}
function preload(){
  trilha = loadSound("sons/trilha.mp3");
  raquetada = loadSound("sons/raquetada.mp3");
  ponto = loadSound("sons/ponto.mp3");
  imagemCampo = loadImage("sons/campo.png");
}

function draw() {
  background(imagemCampo);
  mostrarBolinha();
  movimentaBolinha();
  verificacaoColisaoBorda();
  mostrarRaquete();
  movimentarRaquete();  
  movimentaRaquete2()
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  incluiPlacar();
  placar();
  mostrargol();
  fazerGol();
}