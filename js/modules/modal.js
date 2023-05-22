export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind thia ao callback para
    // fazer referencia ao objeto
    // da class
    this.eventToogleModal = this.eventToogleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toogle ao modal
  eventToogleModal(evento) {
    evento.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar oo lado de fora
  cliqueForaModal(evento) {
    if (evento.target === this.containerModal) {
      this.toggleModal(evento);
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToogleModal);
    this.botaoFechar.addEventListener('click', this.eventToogleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
