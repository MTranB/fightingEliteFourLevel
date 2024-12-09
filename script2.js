//checks the src of the image and changes it to the next image using parameterized function
function chatBoxes(chatImage) {
  //split the returned text at the / after "images" and store what comes after it
  const imageFileName = chatImage.src.split("/").pop();

  if (imageFileName === "chat1.png") {
    console.log("working");
    chatImage.src = "images/chat2.png";
  } else if (imageFileName === "chat2.png") {
    chatImage.src = "images/chat3.png";
  } else if (imageFileName === "chat3.png") {
    window.location.href = "battle.html";
  }
}

function showModal() {
  console.log("show modal");
  document.getElementById("myModal").style.display = "flex";
}
