import outersideClick from './outesideclick.js';

export default function iniciarMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo');
    outersideClick(menuList, eventos, () => {
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
