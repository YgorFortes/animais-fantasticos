export default class ToolTip {
  constructor(toolTips) {
    this.toolTips = document.querySelectorAll(toolTips);

    // Bind do objeto da classes aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com o mouse
  onMouseMove(evento) {
    this.toolTipBox.style.top = `${evento.pageY + 20}px`;
    if (evento.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${evento.pageX - 240}px`;
    } else {
      this.toolTipBox.style.left = `${evento.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(evento) {
    this.toolTipBox.remove();
    evento.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    evento.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Criar a tooltip box e coloca no body
  criarToolTioBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tolltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  // Cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver(evento) {
    // Criar a toolTipbox e coloca em uma prorpriedade
    this.criarToolTioBox(evento.currentTarget);

    evento.currentTarget.addEventListener('mousemove', this.onMouseMove);
    evento.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.toolTips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.toolTips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
