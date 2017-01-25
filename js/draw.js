var canvas = document.getElementById('drawing-board');
canvas.width = 1200;
canvas.height = 850;
var ctx = canvas.getContext('2d');

window.onload = function () {
  
  //Apply the background color to the buttons
  for(var i = 0; i < document.getElementsByClassName('btn-color').length; i++) {
    document.getElementsByClassName('btn-color')[i].style.background = document.getElementsByClassName('btn-color')[i].value;
  }
  draw();
}

var choiceButton = document.getElementById('colorChoice').addEventListener('click', function () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
});

var choiceButtonChange = document.getElementById('colorChoice').addEventListener('change', function () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
  draw();
});

var redButton = document.getElementById('red-button').addEventListener('click', function () {
  document.getElementById('red-button').style.background = document.getElementById('red-button').value;
  ctx.fillStyle = document.getElementById('red-button').value;
});

function draw () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
  ctx.fillRect(10,10,50,50);
}
