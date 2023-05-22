export default function iniciarScrollSuave() {
  const linksInterno = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');

  function moverSection(evento) {
    evento.preventDefault();
    const href = evento.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // Forma Alternativa de rolar o Scroll
    /* const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior:'smooth',
        }); */

    // Forma sem precisa saber o topo
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInterno.forEach((link) => {
    link.addEventListener('click', moverSection);
  });
}
