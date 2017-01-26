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
});

document.getElementById('save-button').addEventListener('click', function () {
  var dl = canvas.toDataURL('image/png', 1.0);
  var dlElem = document.createElement("a");
  dlElem.innerHTML = "Click to download your image";
  dlElem.download = "image.png";
  dlElem.href = dl;
  document.getElementById('download').append(dlElem);
  console.log(canvas.toDataURL('image/png', 1.0));
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
  if(elem.id === "circle") {
    ctx.fillRect(30,30,100,100);
  }
  if(elem.id === "heart") {
    ctx.fillRect(60,60, 100, 100);
  }
  if(elem.id === "line") {
    ctx.fillRect(90,90,100,100);
  }
  if(elem.id === "star") {
    ctx.fillRect(120,120,100,100);
  }
}
