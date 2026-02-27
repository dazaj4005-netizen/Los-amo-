// ❤️ FECHA DE INICIO (CAMBIA ESTO)
const fechaInicio = new Date("2024-01-01");

// 📅 CONTADOR EMOCIONAL
function calcularDias() {
  const hoy = new Date();
  const dias = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));
  document.getElementById("dias").innerText =
    `Llevamos ${dias} días eligiéndonos cada día 💕`;
}
calcularDias();

// 💖 INICIAR EXPERIENCIA
function iniciarAmor() {
  document.getElementById("cumplidosCard").style.display = "block";
  document.getElementById("familiaCard").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("musica").play();
  nuevoCumplido();
  dibujarFamilia();
}

// 💌 CUMPLIDOS (NO REPETITIVOS)
const cumplidos = [
  "Eres el mejor regalo que la vida me dio ❤️",
  "Tu sonrisa hace que todo valga la pena",
  "Gracias por ser amor, hogar y equipo",
  "Nuestro amor es mi lugar seguro",
  "Eres magia, paz y alegría al mismo tiempo ✨"
];

let ultimo = -1;

function nuevoCumplido() {
  let i;
  do {
    i = Math.floor(Math.random() * cumplidos.length);
  } while (i === ultimo);
  ultimo = i;
  document.getElementById("cumplido").innerText = cumplidos[i];
}

// 🎨 DIBUJO ANIMADO TIPO CRAYOLA
const canvas = document.getElementById("familia");
const ctx = canvas.getContext("2d");

function personaAnimada(x, y, color, delay) {
  setTimeout(() => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + 18);
    ctx.lineTo(x, y + 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - 20, y + 35);
    ctx.lineTo(x + 20, y + 35);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + 60);
    ctx.lineTo(x - 15, y + 90);
    ctx.moveTo(x, y + 60);
    ctx.lineTo(x + 15, y + 90);
    ctx.stroke();
  }, delay);
}

function dibujarFamilia() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  personaAnimada(80, 60, "#ec4899", 200);   // Mamá
  personaAnimada(150, 70, "#22c55e", 700); // Hijo
  personaAnimada(220, 60, "#3b82f6", 1200); // Papá
}
// 🕒 MENSAJE SEGÚN LA HORA
const hora = new Date().getHours();
let mensaje = "";

if (hora < 12) {
  mensaje = "Buenos días, amor. Pensé en ti desde que desperté ☀️";
} else if (hora < 18) {
  mensaje = "Espero que tu día esté siendo hermoso, como tú 💖";
} else {
  mensaje = "Esta noche también es nuestra… te amo 🌙❤️";
}

document.getElementById("mensajeHora").innerText = mensaje;
