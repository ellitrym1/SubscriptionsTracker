let popupBtn = document.querySelector(".popup-btn");
let popupModalBg = document.querySelector(".popup-modal-bg");

popupBtn.addEventListener("click", () => {
    popupModalBg.classList.add("popup-toggle");
});
