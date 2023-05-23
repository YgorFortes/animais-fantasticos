export default function iniciarFetchBitcoin() {
  console.log('teste');
  fetch('https://blockchain.info/ticker').then((resposta) => resposta.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      const btcCompra = (100 / bitcoin.BRL.sell).toFixed(4);
      btcPreco.innerText = btcCompra;
    }).catch((erro) => {
      console.log(Error(erro));
    });     
}
