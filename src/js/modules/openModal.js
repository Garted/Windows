// 1.Вызов модального окна на кнопки вызов замерщика и заказать обратный звонок

const modals = () => {
  function modal(trigerSelector, modalSelector, closeSelector) {
    const triger = document.querySelectorAll(trigerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        // document.body.style.overflow = "hidden";
        document.body.classList.add("modal-open");
      });
    });
    close.addEventListener("click", (e) => {
      modal.style.display = "none";
      //   document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        // document.body.style.overflow = "";
        document.body.classList.remove("modal-open");
      }
    });

    // setTimeout(() => {
    //   document.querySelector(".popup").style.display = "block";
    //   // document.body.style.overflow = "hidden";
    //   document.body.classList.add("modal-open");
    // }, 6000);
  }
  modal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  modal(".phone_link", ".popup", ".popup .popup_close");
};
export default modals;
