// ❤️ FECHA DE INICIO (CAMBIA ESTO)
const fechaInicio = new Date("2024-06-24");

// 📅 CONTADOR DE DÍAS
function calcularDias() {
  const hoy = new Date();
  const diferencia = hoy - fechaInicio;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  document.getElementById("dias").innerText =
    `Llevamos ${dias} días escribiendo nuestra historia 💕`;
}
calcularDias();

// 💌 GENERADOR DE CUMPLIDOS
const cumplidos = [
  "Eres el lugar donde mi corazón descansa ❤️",
  "Tu sonrisa es mi momento favorito del día",
  "Amarte ha sido la mejor decisión de mi vida",
  "Eres magia en forma de persona ✨",
  "Gracias por hacerme sentir en casa"
];

function nuevoCumplido() {
  const random = Math.floor(Math.random() * cumplidos.length);
  document.getElementById("cumplido").innerText = cumplidos[random];
}

// 🎨 DIBUJO TIPO CRAYOLA (FAMILIA)
const canvas = document.getElementById("familia");
const ctx = canvas.getContext("2d");

function persona(x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;

  // cabeza
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.stroke();

  // cuerpo
  ctx.beginPath();
  ctx.moveTo(x, y + 18);
  ctx.lineTo(x, y + 60);
  ctx.stroke();

  // brazos
  ctx.beginPath();
  ctx.moveTo(x - 20, y + 35);
  ctx.lineTo(x + 20, y + 35);
  ctx.stroke();

  // piernas
  ctx.beginPath();
  ctx.moveTo(x, y + 60);
  ctx.lineTo(x - 15, y + 90);
  ctx.moveTo(x, y + 60);
  ctx.lineTo(x + 15, y + 90);
  ctx.stroke();
}

// DIBUJAR FAMILIA
persona(80, 60, "#ec4899");   // Mamá
persona(150, 70, "#22c55e"); // Hijo
persona(220, 60, "#3b82f6"); // Papá
