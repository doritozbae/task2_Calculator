import { themeBtn } from "./variables";

const theme = {
  pink: false,
};

export function colorChange() {
  if (theme.pink == false) {
    // console.log('aa')
    document.documentElement.style.setProperty("--bgColor", "#EDE4E0");
    document.documentElement.style.setProperty("--mainBtns", "#FFE3E1");
    document.documentElement.style.setProperty("--mainOp", "#FFF5E4");
    document.documentElement.style.setProperty("--extraOp", "#FFD1D1");
    document.documentElement.style.setProperty("--main", "#FF9494");
    document.documentElement.style.setProperty("--fontColor", "#FF9494");
    theme.pink = true;
  } else {
    document.documentElement.style.setProperty("--bgColor", "#FF9494");
    theme.pink = false;
  }
}

export function themeSwitcher() {
  themeBtn.onclick = () => {
    colorChange();
  };
}
