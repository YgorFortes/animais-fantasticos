export default function iniciarToolTip() {
  const toolTips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(evento) {
      this.toolTipBox.style.top = `${evento.pageY + 20}px`;
      this.toolTipBox.style.left = `${evento.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    toolTipBox: '',
    element: '',
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarToolTioBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tolltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  function onMouseOver() {
    const toolTipBox = criarToolTioBox(this);
    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
