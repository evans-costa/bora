let modal = document.getElementById("myModal")


let img = document.getElementsByClassName("photo-event")
let modalImg = document.getElementById("img01")

for(let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

let closeModal = document.getElementsByClassName("modal")[0]

closeModal.onclick = function () {
    modal.style.display = "none"
}