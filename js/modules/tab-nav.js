export default function iniciarTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li img');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function ativaTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativaTab(index);
      });
    });
  }
}
