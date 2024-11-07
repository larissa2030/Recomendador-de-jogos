//mortal kombat , idade 18 , fantasia , gore , luta
//alice madness returns idade 14 , fantasia , terror psicologico
//until danw idade 16 , terror 
//detroit become human , 18 , ação 
//horizon zero danw  14 , ação , fantasia 
//life is strange 14, fantasia , ação 
//dead by daylight 15  , competitivo 
//mafia definition edition 18 , ação , misterio
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos");
  createSpan("Sua idade:");
  campoIdade = createInput("14 ou 18");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de terror?");
}

function draw() {
  background("#E91E63");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 23, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 18) {
    if (idade >= 14) {
      return "mortal kombat";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "alice madness returns";          
        } else{
         return "life is strange";
        }
      } else {
        if (gostaDeFantasia) {
          return "detroit become human";
        } else {
          return "mafia definition edition";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "dead by daylight";
    } else {
      return "until danw";
    }
  }
}
