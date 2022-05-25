let popupBtn = document.querySelectorAll(".popup-close");

let addBtn = document.querySelector(".add-btn");
let popupModalAddBg = document.querySelector(".popup-modal-add-bg");

let editBtn = document.querySelector(".edit-btn");
let popupModalEditBg = document.querySelector(".popup-modal-edit-bg");

let deleteBtn = document.querySelector(".delete-btn");
let popupModalDeleteBg = document.querySelector(".popup-modal-delete-bg");

addBtn.addEventListener("click", function () {
    popupModalAddBg.classList.add("popup-toggle");
});

editBtn.addEventListener("click", function () {
    popupModalEditBg.classList.add("popup-toggle");
});

deleteBtn.addEventListener("click", function () {
    popupModalDeleteBg.classList.add("popup-toggle");
});

popupBtn[0].addEventListener("click", function () {
    popupModalAddBg.classList.remove("popup-toggle");
});

popupBtn[1].addEventListener("click", function () {
    popupModalEditBg.classList.remove("popup-toggle");
});

popupBtn[2].addEventListener("click", function () {
    popupModalDeleteBg.classList.remove("popup-toggle");
});
