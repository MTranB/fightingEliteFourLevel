siteURL = "https://mtranb.github.io/fightingEliteFourLevel/";
//checks the src of the image and changes it to the next image using parameterized function
function chatBoxes(chatImage) {
  console.log(chatImage);
  if (chatImage.src == siteURL + "images/chat1.png") {
    console.log("working");
    chatImage.src = "images/chat2.png";
  } else if (chatImage.src == siteURL + "images/chat2.png") {
    chatImage.src = "images/chat3.png";
  } else if (chatImage.src == siteURL + "images/chat3.png") {
    window.location.href = "battle.html";
  }
}

function showModal() {
  console.log("show modal");
  document.getElementById("myModal").style.display = "flex";
}
