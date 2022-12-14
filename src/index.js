import "./index.html";
import "./style.css";
import { calculator } from "./modules/operations";
import { themeSwitcher } from "./modules/themeChange";
import { errorFunc } from "./modules/errors";

window.onload = () => {
  themeSwitcher();
  calculator();
  errorFunc();
};
