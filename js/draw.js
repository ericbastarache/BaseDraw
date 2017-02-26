let canvas = document.getElementById('drawing-board');
canvas.width = 1200;
canvas.height = 850;
let ctx = canvas.getContext('2d');

//Variables for download link and download element
let dl, dlElem;

//Variables for tracking mouse location
let flag = false;

let prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0;

window.onload = () => {

  canvas.addEventListener('mousemove', (e) => {
    findxy('move', e);
  }, false);

  canvas.addEventListener('mousedown', (e) => {
    findxy('down', e);
  }, false);

  canvas.addEventListener('mouseup', (e) => {
    findxy('up', e);
  }, false);

  canvas.addEventListener('mouseout', (e) => {
    findxy('out', e);
  }, false);

  //Apply the background color to the buttons
  for(let i = 0; i < document.getElementsByClassName('btn-color').length; i++) {
    document.getElementsByClassName('btn-color')[i].style.background = document.getElementsByClassName('btn-color')[i].value;
  }

  document.getElementById('choice').style.background = document.getElementById('colorChoice').value;
  draw();
}

document.getElementById('colorChoice').addEventListener('click',  () => {
  ctx.fillStyle = document.getElementById('colorChoice').value;
});

document.getElementById('button-area').addEventListener('click', (e) => {
  changeColor(e.target);
});

document.getElementById('colorChoice').addEventListener('change', () => {
  ctx.fillStyle = document.getElementById('colorChoice').value;
  document.getElementById('choice').style.background = document.getElementById('colorChoice').value;
});

document.getElementById('clear-button').addEventListener('click', () => {
  document.getElementById('download').style = "display: none;";
  document.getElementById('save-button').disabled = false;
  location.reload();
});

document.getElementById('save-button').addEventListener('click', (e) => {
  document.getElementById('download').style = "display: block;";
  dl = canvas.toDataURL('image/png', 1.0);
  dlElem = document.createElement("a");
  dlElem.innerHTML = "Click here to download your image";
  dlElem.download = "image.png";
  dlElem.href = dl;
  if(document.getElementById('download').hasChildNodes()) {
    this.disabled = true;
  } else {
    document.getElementById('download').append(dlElem);
  }
  this.disabled = true;
});

const findxy = (res, e) => {
  if(res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;

    flag = true;

    ctx.beginPath();
    ctx.fillStyle = document.getElementById('colorChoice').value;
    ctx.fillRect(currX, currY, 2, 2);
    ctx.closePath();

  }

  if(res == 'up' || res == 'out') {
    flag = false;
  }

  if(res == 'move') {
    if(flag) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
      draw();
    }
  }
}

const draw = () => {
  ctx.strokeStyle = document.getElementById('colorChoice').value;
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.stroke();
  ctx.closePath();

}

const changeColor = (elem) => {
  if(elem.value === 0) {
    document.getElementById('colorChoice').value = "#000000";
    document.getElementById('choice').style.background = "#000000";
  } else {
    ctx.fillStyle = elem.value;
    document.getElementById('colorChoice').value = elem.value;
    document.getElementById('choice').style.background = elem.value;
  }
}
