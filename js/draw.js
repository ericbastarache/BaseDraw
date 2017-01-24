var color = document.getElementById('colorChoice').value;
var choice = document.getElementById('choice');

window.onload = function () {
  color = document.getElementById('colorChoice').value;
  choice.innerHTML = color;
}

document.getElementById('colorChoice').addEventListener('click', function () {
  color = document.getElementById('colorChoice').value;
  choice.innerHTML = color;
});

document.getElementById('colorChoice').addEventListener('change', function () {
  color = document.getElementById('colorChoice').value;
  choice.innerHTML = color;
});
