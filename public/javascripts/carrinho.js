const buyBtn = document.getElementById('comprarEvento');
const nomeEvento = document.getElementById('event-title').innerHTML;
const precoEvento = document.getElementById('event-price').innerHTML;
const imagemEvento = document.getElementById('event-image').src;

function localCartStorage() {
  const cart = [];

  cart.push(nomeEvento, precoEvento, imagemEvento);

  localStorage.setItem('cartUser', JSON.stringify(cart));
}

buyBtn.addEventListener('click', localCartStorage());
