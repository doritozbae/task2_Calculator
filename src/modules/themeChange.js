import { themeBtn } from "./variables";

const theme = {
  default: {
    enabled: true,
    bgColor: "#969191",
    mainBtns: "rgb(117, 118, 119)",
    mainOp: "rgb(241, 162, 59)",
    extraOp: "rgb(90, 91, 92)",
    main: "rgb(72, 73, 74)",
    fontColor: "#e7e7e7",
  },
  pink: {
    enabled: false,
    bgColor: "#EDE4E0",
    mainBtns: "#FFE3E1",
    mainOp: "#FFF5E4",
    extraOp: "#FFD1D1",
    main: "#FF9494",
    fontColor: "#FF9494",
  },
};

function changeSkeleton(color) {
  document.documentElement.style.setProperty(
    "--bgColor",
    `${theme[color].bgColor}`
  );
  document.documentElement.style.setProperty(
    "--mainBtns",
    `${theme[color].mainBtns}`
  );
  document.documentElement.style.setProperty(
    "--mainOp",
    `${theme[color].mainOp}`
  );
  document.documentElement.style.setProperty(
    "--extraOp",
    `${theme[color].extraOp}`
  );
  document.documentElement.style.setProperty("--main", `${theme[color].main}`);
  document.documentElement.style.setProperty(
    "--fontColor",
    `${theme[color].fontColor}`
  );
}

export function colorChange() {
  if (theme.pink.enabled == false) {
    theme.pink.enabled = true;
    theme.default.enabled = false;
    changeSkeleton("pink");
  } else {
    theme.default.enabled = true;
    theme.pink.enabled = false;
    changeSkeleton("default");
  }
}

export function themeSwitcher() {
  themeBtn.onclick = () => {
    colorChange();
  };
}
