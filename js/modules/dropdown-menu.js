import outersideClick from './outesideclick.js';

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'ativo';
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona
  // a função que o oberseva o clique fora dele
  activeDropDownMenu(evento) {
    evento.preventDefault();
    const element = evento.currentTarget;
    element.classList.add(this.activeClass);
    outersideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiona os eventos ao dropdownmenu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
