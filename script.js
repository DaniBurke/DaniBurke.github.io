const doubleCard = document.querySelector('.doubleCard');
let isFlipped = false; // Estado inicial de la carta

// Detecta el movimiento del ratón para rotar dinámicamente la carta
document.querySelector('.cont').addEventListener('mousemove', (e) => {
  const rect = e.currentTarget.getBoundingClientRect(); // Obtiene las coordenadas del contenedor
  const x = e.clientX - rect.left; // Posición X relativa al contenedor
  const y = e.clientY - rect.top; // Posición Y relativa al contenedor

  const centerX = rect.width / 2; // Centro del contenedor en X
  const centerY = rect.height / 2; // Centro del contenedor en Y

  // Calcula el ángulo de rotación en función de la posición del ratón
  const rotateX = (centerY - y) / 5; // Rotación en el eje X
  const rotateY = (x - centerX) / 5; // Rotación en el eje Y

  // Si la carta está volteada, se invierte el valor de rotateX pero no el de rotateY
  if (isFlipped) {
    // Invertimos solo el rotateX y dejamos rotateY como está
    doubleCard.style.transform = `rotateY(180deg) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  } else {
    doubleCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

// Resetea la rotación dinámica al salir del área del contenedor
document.querySelector('.cont').addEventListener('mouseleave', () => {
  if (!isFlipped) {
    doubleCard.style.transform = ''; // Quita las transformaciones dinámicas cuando el ratón sale
  } else {
    // Si la carta está volteada, solo reseteamos la rotación en Y (porque el flip ya la voltea en Y)
    doubleCard.style.transform = 'rotateY(180deg)';
  }
});

// Alterna entre los lados de la carta al hacer clic
document.querySelector('.cont').addEventListener('click', () => {
  isFlipped = !isFlipped; // Cambia el estado de la carta

  // Si está volteada, se queda en 180 grados; si no, vuelve a 0
  if (isFlipped) {
    doubleCard.style.transform = 'rotateY(180deg)'; // Voltea la carta
  } else {
    doubleCard.style.transform = 'rotateY(0)'; // Vuelve al estado original
  }
});

const frontCard = document.querySelector('.frontCard');

// Crear estrellas de forma dinámica
for (let i = 0; i < 40; i++) { // Cambia el número de estrellas si quieres más o menos
    const star = document.createElement('div');
    star.classList.add('star');

    // Posición aleatoria dentro de la carta
    const x = Math.random() * 100; // % horizontal
    const y = Math.random() * 100; // % vertical
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;

    // Tamaño aleatorio para variedad
    const size = Math.random() * 8 + 12; // Entre 8px y 16px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Retraso aleatorio para que no brillen todas al mismo tiempo
    const delay = Math.random() * 2; // Hasta 2 segundos
    star.style.animationDelay = `${delay}s`;

    frontCard.appendChild(star);
}


document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { // Activa con la tecla Enter
      isFlipped = !isFlipped;
      doubleCard.style.transform = `rotateY(${isFlipped ? 180 : 0}deg)`;
  }
});




