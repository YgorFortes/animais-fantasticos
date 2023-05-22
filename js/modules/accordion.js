export default class Accordion {
  constructor(list) {
    this.accordionLista = document.querySelectorAll(list);
    this.classeAtivo = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  // adiciona o evento ao accordion
  addAccordionEvent() {
    this.accordionLista.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionLista.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionLista[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
