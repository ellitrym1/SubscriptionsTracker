let popupBtn = document.querySelector(".popup-close");
let popupModalBg = document.querySelector(".popup-modal-bg");

let editBtn = document.querySelector(".edit-btn");
let popupModalEditBg = document.querySelector(".popup-modal-edit-bg");

let deleteBtn = document.querySelector(".delete-btn");
let popupModalDeleteBg = document.querySelector(".popup-modal-delete-bg");

editBtn.addEventListener("click", function () {
    popupModalBg.classList.add("popup-toggle");
});

deleteBtn.addEventListener("click", function () {
    popupModalDeleteBg.classList.add("popup-toggle");
});

popupBtn.addEventListener("click", function () {
    console.log("MEOW");
    popupModalBg.classList.remove("popup-toggle");
});
