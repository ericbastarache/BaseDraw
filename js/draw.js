let canvas = document.getElementById('drawing-board');
canvas.width = 1200;
canvas.height = 850;
let ctx = canvas.getContext('2d');

window.onload = () => {

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

document.getElementById('toolbox').addEventListener('click', (e) => {
  drawShape(e.target);
});


document.getElementById('clear-button').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('download').style = "display: none;";
  document.getElementById('save-button').disabled = false;
});

document.getElementById('save-button').addEventListener('click', (e) => {
  document.getElementById('download').style = "display: block;";
  let dl = canvas.toDataURL('image/png', 1.0);
  let dlElem = document.createElement("a");
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

var draw = () => {
  ctx.fillStyle = document.getElementById('colorChoice').value;


}

var changeColor = (elem) => {
  if(elem.value === 0) {
    document.getElementById('colorChoice').value = "#000000";
    document.getElementById('choice').style.background = "#000000";
  } else {
    ctx.fillStyle = elem.value;
    document.getElementById('colorChoice').value = elem.value;
    document.getElementById('choice').style.background = elem.value;
  }
}


var drawShape = (elem) => {
  if(elem.id === "gradient") {
    if (document.getElementById('gradient-tool').style = "display: none") {
      document.getElementById('gradient-tool').style = "display: block";
      getGradient();
    }
  }
  if(elem.id === "square") {
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
    ctx.fillRect(0,0,100,100);
  }
  if(elem.id === "callout") {
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
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
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
    let circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);
    ctx.fill(circle);
  }
  if(elem.id === "heart") {
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
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
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
    ctx.fillRect(90,90,100,100);
  }
  if(elem.id === "star") {
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
    let points = [ [ 0, 85 ], [ 75, 75 ], [ 100, 10 ], [ 125, 75 ],
    [ 200, 85 ], [ 150, 125 ], [ 160, 190 ], [ 100, 150 ],
    [ 40, 190 ], [ 50, 125 ], [ 0, 85 ] ];

    let len = points.length;

    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);

    for (let i = 0; i < len; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }

    ctx.fill();
  }
  if(elem.id === "pencil") {
    if(document.getElementById('brush-tool').style = "display: none") {
      document.getElementById('brush-tool').style = "display: block";
    }
  }
  if(elem.id === "text") {
    if(document.getElementById('brush-tool').style = "display: block") {
      document.getElementById('brush-tool').style = "display: none";
    }
    ctx.font = "48px serif";
    ctx.fillText('Hello, my name is Hello World!', canvas.width/4, canvas.height/2);
  }
}
