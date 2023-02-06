const toastTrigger = document.getElementById('comprarEvento');
const toastLiveExample = document.getElementById('liveToast');
const btContent = document.getElementById('comprarEvento')

function barra() {
  let barWidth = 100;
  const progressBar = document.getElementById("barra");
  const interval = setInterval(diminuirBarra, 50);
  btContent.innerHTML = ' <i class="bi bi-cart"></i> Item já adicionado ao carrinho'
  btContent.classList.add('disabled')

  function diminuirBarra() {
    if (barWidth == 0) {
      clearInterval(interval);


      setTimeout(() => {
        progressBar.style.width = "100%";
        btContent.classList.remove('disabled')
        btContent.innerHTML = ' <i class="bi bi-cart"></i> COMPRAR'
      }, 1000);

    } else {
      barWidth--;
      progressBar.style.width = `${barWidth}%`;
    }
  }
}

if (toastTrigger) {
  toastTrigger.addEventListener('click', function (event) {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
    barra();
    event.preventDefault();
  });
}
