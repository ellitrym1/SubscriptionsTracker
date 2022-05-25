let popupBtn = document.querySelector(".popup-btn");
let editBtn = document.querySelector(".edit-btn");
let popupModalBg = document.querySelector(".popup-modal-bg");

editBtn.addEventListener("click", function () {
    popupModalBg.classList.add("popup-toggle");
});
