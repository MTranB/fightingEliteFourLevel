console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/arena.png",
  "images/battleBG.jpg",
  "images/block.png",
  "images/characterfinal.png",
  "images/chat1.png",
  "images/chat2.png",
  "images/chat3.png",
  "images/chatDefeat.png",
  "images/chatVictory.png",
  "images/defeatChat.png",
  "images/fightingBall.png",
  "images/fist.png",
  "images/hariyama.png",
  "images/machamp.png",
  "images/machampName.png",
  "images/megalucario.png",
  "images/megalucarioName.png",
  "images/pangoro.png",
  "images/pangoroName.png",
  "images/sawk.png",
  "images/sawkName.png",
  "images/sliderBar1.png",
  "images/sliderBarNew.png",
  "images/throh.png",
  "images/throhName.png",
  "images/trainer.png",
  "images/trainerName.png"
);
