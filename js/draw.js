var canvas = document.getElementById('drawing-board');
canvas.width = 1200;
canvas.height = 850;
var ctx = canvas.getContext('2d');

window.onload = function () {

  //Apply the background color to the buttons
  for(var i = 0; i < document.getElementsByClassName('btn-color').length; i++) {
    document.getElementsByClassName('btn-color')[i].style.background = document.getElementsByClassName('btn-color')[i].value;
  }

  document.getElementById('choice').style.background = document.getElementById('colorChoice').value;
  draw();
}

var choiceButton = document.getElementById('colorChoice').addEventListener('click', function () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
});

document.getElementById('button-area').addEventListener('click', function(e) {
  changeColor(e.target);
});

document.getElementById('colorChoice').addEventListener('change', function () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
  document.getElementById('choice').style.background = document.getElementById('colorChoice').value;
});

document.getElementById('toolbox').addEventListener('click', function (e) {
  drawShape(e.target);
});

document.getElementById('clear-button').addEventListener('click', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('download').style = "display: none;";
  document.getElementById('save-button').disabled = false;
});

document.getElementById('save-button').addEventListener('click', function (e) {
  document.getElementById('download').style = "display: block;";
  var dl = canvas.toDataURL('image/png', 1.0);
  var dlElem = document.createElement("a");
  dlElem.innerHTML = "Click here to download your image";
  dlElem.download = "image.png";
  dlElem.href = dl;
  document.getElementById('download').append(dlElem);
  this.disabled = true;
});

function draw () {
  ctx.fillStyle = document.getElementById('colorChoice').value;


}

function changeColor(elem) {
  if(elem.value === 0) {
    document.getElementById('colorChoice').value = "#000000";
    document.getElementById('choice').style.background = "#000000";
  } else {
    ctx.fillStyle = elem.value;
    document.getElementById('colorChoice').value = elem.value;
    document.getElementById('choice').style.background = elem.value;
  }
}

function drawShape(elem) {
  if(elem.id === "square") {
    //getMouseCoords();
    ctx.fillRect(0,0,100,100);
  }
  if(elem.id === "callout") {
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
  if(elem.id === "circle") {
    ctx.fillRect(30,30,100,100);
  }
  if(elem.id === "heart") {
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
  if(elem.id === "line") {
    ctx.fillRect(90,90,100,100);
  }
  if(elem.id === "star") {
    ctx.fillRect(120,120,100,100);
  }
}
