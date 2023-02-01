const toastTrigger = document.getElementById('comprarEvento');
const toastLiveExample = document.getElementById('liveToast');
const progressBar = document.getElementById("barra");
let barWidth = 100



function barra() {
    function diminuirBarra() {
        barWidth--;
        progressBar.style.width = `${barWidth}%`;
    }

    // if (barWidth === 0) {
    //     barWidth === 100
    //     progressBar.style.width = "100%"
    // }

    diminuirBarra()
}

if (toastTrigger) {
    toastTrigger.addEventListener('click', function (event) {
        const toast = new bootstrap.Toast(toastLiveExample);

        toast.show();

        const interval = setInterval(barra, 50);


        event.preventDefault();



    });
}
