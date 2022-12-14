import { errPopup, errorMessage, errCloseBtn, errBg } from "./variables";

export function errorAlert(errMessage) {
  errPopup.style.display = "block";
  errBg.style.display = "block";
  errorMessage.textContent = errMessage;
}

export function errorFunc() {
  errCloseBtn.onclick = function () {
    errPopup.style.display = "none";
    errBg.style.display = "none";
  };
}
