export default function iniciarAccordion() {
  const accordionLista = document.querySelectorAll('[data-anime="accordion"] dt');
  const classeAtivo = 'ativo';

  function ativarAccordion() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
  }
  if (accordionLista.length) {
    accordionLista[0].classList.add(classeAtivo);
    accordionLista[0].nextElementSibling.classList.add(classeAtivo);
    accordionLista.forEach((item) => {
      item.addEventListener('click', ativarAccordion);
    });
  }
}
