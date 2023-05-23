export default class AnimaNumeros {
  constructor(numeros, observadorTarget, observadorClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observadorTarget = document.querySelector('.numeros');
    this.observadorClass = observadorClass;

    // Bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
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
  }

  // Ativa incrementar número para cada
  // número selecionado do com
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observadorClass)) {
      this.observador.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // Quando a classe ativo é adicionado ao element target
  addMutationObserver() {
    this.observador = new MutationObserver(this.handleMutation);
    this.observador.observe(this.observadorTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observadorTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
