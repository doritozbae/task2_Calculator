import { errPopup, errorMessage, errCloseBtn } from "./variables";

export function errorAlert(errMessage) {
  errPopup.style.display = "block";
  errorMessage.textContent = errMessage;
}

errCloseBtn.onclick = function () {
  errPopup.style.display = "none";
};
