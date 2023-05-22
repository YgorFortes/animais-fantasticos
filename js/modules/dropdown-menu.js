import outersideClick from './outesideclick.js';

export default function iniciarDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(evento) {
    evento.preventDefault();
    this.classList.add('ativo');
    outersideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((menu) => {
    menu.addEventListener('touchstart', handleClick);
    menu.addEventListener('click', handleClick);
  });
}
