let openModal = document.getElementById("openModal")
let closeModal= document.getElementById("closeModal")
let myModal = document.querySelector('.myModal')
console.log(myModal)

openModal.onclick = function() {
    myModal.style.display = "flex";
    console.log(123)
}

closeModal.onclick = function() {
    myModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }