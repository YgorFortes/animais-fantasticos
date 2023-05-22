export default function iniciarAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');
  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  let observador;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observador.disconnect();
      animaNumeros();
    }
  }

  observador = new MutationObserver(handleMutation);
  const observadorTarget = document.querySelector('.numeros');
  observador.observe(observadorTarget, { attributes: true });
}
