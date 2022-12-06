import "./index.html";
import "./style.css";
import { calculator } from "./modules/operations";
import { themeSwitcher } from "./modules/themeChange";

window.onload = () => {
  themeSwitcher();
  calculator();
};
