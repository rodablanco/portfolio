// let modal = document.getElementById("exampleModalCenter");

// let btn = document.getElementById("modal-btn");

// let span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//     modal.style.display = "block";
// }

// span.onclick = function () {
//     modal.style.display = "block";
// }


// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.mdb.modal", () => {
  myInput.focus();
});