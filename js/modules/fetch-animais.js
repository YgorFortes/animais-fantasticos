import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o total de animais
  function criarAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no Doom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = criarAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal ultilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma a resposta em json
      const animaisResposta = await fetch(url);
      const animaisJSON = await animaisResposta.json();

      // Após a tranformação de json, ativa as funções
      // Para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
