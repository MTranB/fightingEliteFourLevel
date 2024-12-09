var interval = 900;
var level = 4;
var open = false;
var music = new Audio("sounds/battleMusic.m4a");
var click = new Audio("sounds/click.m4a");
var sucess = new Audio("sounds/sucess.wav");
var fail = new Audio("sounds/fail.wav");
var speed = 1000;
var death = new Audio("sounds/lucarioDeath.mp3");
var m;
var chatModal;
var fist;
var chatBox;

const chatImgs = ["images/chat1.png", "images/chat2.png", "images/chat3.png"];
const pokemon = [
  "images/sawk.png",
  "images/throh.png",
  "images/machamp.png",
  "images/hariyama.png",
  "images/pangoro.png",
  "images/megalucario.png",
];
const pokemonName = [
  "images/sawkName.png",
  "images/throhName.png",
  "images/machampName.png",
  "images/hariyamaName.png",
  "images/pangoroName.png",
  "images/megaLucarioName.png",
];

window.onload = function () {
  battleTransition();
  m = document.getElementById("myModal");
  chatModal = document.getElementById("chatModal");
  fist = document.getElementById("fistImg");
  chatBox = document.getElementById("chatBox");
};

function showModal() {
  m.style.display = "flex";
  fist.classList.toggle("transparent");
  open = true;
}

function hideModal() {
  m.style.display = "none";
  fist.classList.toggle("transparent");
  open = false;
}

function battleTransition() {
  //after 1 second plays bg music and triggers jquery animation
  setTimeout(function () {
    $("#transitionBlock").animate({ top: "0%" });
    music.volume = 0.5;
    music.play();
    music.loop = true;
  }, 1000);
  //send the black square back up above the screen
  setTimeout(function () {
    $("#transitionBlock").animate({ top: "-150%" });
  }, 2000);
  setTimeout(function () {
    showModal();
    slider();
  }, 2600);
}

function changePokemon() {
  //after .8 seconds animates the pokemon shrinking
  setTimeout(function () {
    hideModal();
    $("#pokemonDiv").animate({ height: "0%", width: "0%" });
  }, 800);
  //after 1 second changes the pokemon image depending on the lvl they are on. Do the same for the pokemon name plate
  setTimeout(function () {
    $("#pokemonDiv").css("visibility", "visible").css("opacity", 1);
    document.getElementById("pokemon").src = pokemon[level];
    document.getElementById("pokemonName").src = pokemonName[level];
  }, 1000);
  //animates pokemon back to full size after 1.5 seconds
  setTimeout(function () {
    $("#pokemonDiv").animate({ height: "100%", width: "33.33333333%" });
  }, 1500);
  //after 2 seconds triggers the battle transition
  setTimeout(function () {
    battleTransition();
  }, 2000);
}

function victory() {
  hideModal();
  music.pause();
  death.play();
  chatBox.src = "images/chatVictory.png";
  chatModal.style.display = "flex";
  setTimeout(function () {
    chatModal.style.display = "none";
  }, 2000);
  //after .3 seconds animates the pokeball to come down over 5 seconds and spin using css animations
  setTimeout(function () {
    $("#pokeBall").animate({ top: "50%" }, 5000);
    triggerSpin();
  }, 300);
}

function defeat() {
  fail.play();
  hideModal();
  chatBox.src = "images/defeatChat.png";
  chatModal.style.display = "flex";
  setTimeout(function () {
    chatModal.style.display = "none";
    location.reload();
  }, 2500);
}

function slider() {
  //animates the fist to the left of the screen over a certain time frame determined by the speed variable that is reduced per lvl
  $("#fistImg").animate({ left: "85%" }, speed, function () {
    fistImg.style.left = "0px";
    slider();
  });
}

document.addEventListener("keydown", function (event) {
  //checks if the modal is open and the space key has been pressed
  if (event.code === "Space" && open == true) {
    const pageWidth = window.innerWidth; //sets a variable for the width of the whole page
    const leftBoundary = pageWidth * 0.3; //divides the page width by 3 to get the first one third of the page
    const rightBoundary = pageWidth * 0.6; //multiplies the page by .6 to get the latter 60% of the page
    const fistPosition = fist.getBoundingClientRect().left; //grabs the fist image's position offset from the left side of the screen based off of its "hitbox"
    //checks if the position of the fist image is between 30% and 60% of the page aka the middle third of the page
    if (fistPosition > leftBoundary && fistPosition < rightBoundary) {
      block(); //triggers the block image to appear by toggling its visibility class
      level += 1; //adds 1 to lvl
      speed -= 75; //reduces length of fist image's animation by .075 seconds
      //checks if the final pokemon has been defeated or not. If not it changes to the next pokemon
      if (level < 6) {
        changePokemon();
      }
      //if it is it triggers the victory function
      if (level > 5) {
        victory();
      }
    }
    //if you don't press space when the fist is in the middle third of the page it triggers the defeat function
    else {
      defeat();
    }
  }
});

function block() {
  sucess.play();
  document.getElementById("block").classList.remove("transparent");
  setTimeout(function () {
    document.getElementById("block").classList.add("transparent");
  }, 700);
}

//triggers a jquery animation rotates the image using a css animation
function triggerSpin() {
  $(".spin-image").css("transform", "rotateY(1620deg)");
}

function nextPage() {
  window.location.href = "https://vqvdgk.csb.app/";
}
