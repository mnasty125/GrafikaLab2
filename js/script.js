// Получение и определение размеров канваса
const context = document.getElementById("grid").getContext("2d");
const ctx = document.getElementById("canvas").getContext("2d");

// Инициализация инпутов
let size = document.getElementById("SIZE");
let slideY = document.getElementById("Y");
let slideX = document.getElementById("X");
let rt = document.getElementById("ROTATE");

//Размеры канваса
const w  = 600;
const h = 600;

// Функция отрисовки сетки
function draw_grid() {

  context.clearRect(0, 0, w, h);

  requestAnimationFrame(draw_grid);

  let step = size.value * 10;

  context.lineWidth = 2;
  context.strokeStyle = "#E0E0E0";

  for (let i = 0; i <= w; i += Number(step)) {

      context.beginPath();
      context.moveTo(w / 2 + i, 0);
      context.lineTo(w / 2 + i, h);
      context.stroke();

      context.beginPath();
      context.moveTo(0, h / 2 + i);
      context.lineTo(w, h / 2 + i);
      context.stroke();

      context.beginPath();
      context.moveTo(w / 2 - i, 0);
      context.lineTo(w / 2 - i, h);
      context.stroke();

      context.beginPath();
      context.moveTo(0, h / 2 - i);
      context.lineTo(w, h / 2 - i);
      context.stroke();
    }

  // Рисование осей OX OY
  context.beginPath();
  context.moveTo(0, h / 2);
  context.lineTo(w, h / 2);
  context.lineWidth = 3;
  context.strokeStyle = "purple";
  context.stroke();

  context.beginPath();
  context.moveTo(w / 2, 0);
  context.lineTo(w / 2, h);
  context.stroke();
}

//Функция отрисовки графика
function draw() {

  ctx.clearRect(0, 0, w, h);
  
  requestAnimationFrame(draw);

  ctx.fillStyle = "red";

  for (let t = 0; t <= Math.PI * 10; t += 0.001) {
    let x = size.value * (24.8 * (Math.cos(t + Number(rt.value)) + Math.cos(6.2 * t) / 6.2)) + w / 2 + Number(slideX.value);
    let y = w / 2 - size.value * (24.8 * (Math.sin(t + Number(rt.value)) - Math.sin(6.2 * t) / 6.2)) + Number(slideY.value);
    ctx.fillRect(x, y, 1, 1);
  }
}

//Функции получения значений из инпетов и записи их в параграфы
function fun1() {
  const p1 = document.getElementById("text_rotate");
  p1.innerHTML = rt.value;
}

function fun2() {
  const p2 = document.getElementById("text_size");
  p2.innerHTML = size.value * 10;
}

function fun3() {
  const p3 = document.getElementById("text_slideX");
  p3.innerHTML = slideX.value;
}

function fun4() {
  const p4 = document.getElementById("text_slideY");
  p4.innerHTML = slideY.value;
}