(() => {
  const refs = {
    openModalBookTableBtn: document.querySelector(
      "[data-modal-book-table-open]"
    ),
    closeModalBookTableBtn: document.querySelector(
      "[data-modal-book-table-close]"
    ),
    modalBookTable: document.querySelector("[data-modal-book-table]"),
    SubmitBtn: document.querySelector(".button-send"),
    form: document.querySelector(".form"),
  };

  refs.openModalBookTableBtn.addEventListener("click", toggleModalBookTable);
  refs.closeModalBookTableBtn.addEventListener("click", toggleModalBookTable);

  function toggleModalBookTable() {
    refs.modalBookTable.classList.toggle("is-hidden");
  }
  function createSubmit(e) {
    e.preventDefault();

    if (e.target === e.currentTarget) {
      refs.modalBookTable.classList.toggle("is-hidden");
      Notiflix.Notify.success("Дякуємо! Ваш столик зарезервовано!", {
        timeout: 6000,
      });
    }
    e.currentTarget.reset();
  }

  // refs.SubmitBtn.addEventListener("click", createSubmit);
  refs.form.addEventListener("submit", createSubmit);
})();
