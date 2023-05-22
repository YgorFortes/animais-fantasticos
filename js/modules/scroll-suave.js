export default class ScrollSuave {
  constructor(links, options) {
    this.linksInterno = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.moverSection = this.moverSection.bind(this);
  }

  moverSection(evento) {
    evento.preventDefault();
    const href = evento.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInterno.forEach((link) => {
      link.addEventListener('click', this.moverSection);
    });
  }

  init() {
    if (this.linksInterno.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
