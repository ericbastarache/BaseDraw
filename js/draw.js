var color = document.getElementById('colorChoice').value;
var choice = document.getElementById('choice');

window.onload = function () {
  color = document.getElementById('colorChoice').value;
  choice.innerHTML = color;

  var canvas = document.getElementById('drawing-board');
  var ctx = canvas.getContext('2d');
}

document.getElementById('colorChoice').addEventListener('click', function () {
  color = document.getElementById('colorChoice').value;
  choice.innerHTML = color;
});

document.getElementById('colorChoice').addEventListener('change', function () {
  color = document.getElementById('colorChoice').value;
  choice.innerHTML = color;
});
