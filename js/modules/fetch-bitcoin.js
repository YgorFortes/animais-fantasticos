export default function fetchBitcoin(url, target) {
  fetch(url).then((resposta) => resposta.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      const btcCompra = (100 / bitcoin.BRL.sell).toFixed(4);
      btcPreco.innerText = btcCompra;
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
