var imagemFundo;
var gato, rato;
var gatoImg1, gatoImg2, ratoImg1, ratoImg2, gatoFinal, ratoFinal;

function preload() {
    //carregue as imagens aqui
    imagemFundo =loadImage("garden.png");
    gatoImg1 =loadImage("cat1.png");
    gatoImg2 =loadAnimation("cat2.png","cat3.png");
    ratoImg1 =loadImage("mouse1.png");
    ratoImg2 =loadAnimation("mouse2.png","mouse3.png");

    gatoFinal =loadImage("cat4.png");
    ratoFinal =loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,680);
    gato.addAnimation("gatoSentado",gatoImg1);
    gato.scale = 0.2;

    rato = createSprite(100,680);
    rato.addAnimation("ratoSentado",ratoImg1);
    rato.scale = 0.15;
}

function draw() {

    background(imagemFundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    keyPressed();


    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("imagemGato", gatoFinal);
        gato.changeAnimation("imagemGato")
        gato.x =300;
        gato.scale=0.2;
        
        rato.addAnimation("imagemRato", ratoFinal);
        rato.changeAnimation("imagemRato");
        rato.x = 150;
        rato.scale =0.15;
    }
 

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW){
        rato.addAnimation("ratoProvocando",ratoImg2);
        rato.changeAnimation("ratoProvocando");
        rato.frameDelay = 25;
        
       

        gato.velocityX = -5;
        gato.addAnimation("gatoBravo", gatoImg2);
        gato.changeAnimation("gatoBravo");
        
        
    }

}
