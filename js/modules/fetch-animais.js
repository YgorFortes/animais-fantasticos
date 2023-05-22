import iniciarAnimaNumeros from './anima-numeros.js';

export default function iniciarFetchAnimais() {
  function criarAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResposta = await fetch(url);
      const animaisJSON = await animaisResposta.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = criarAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      iniciarAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
