import { options, themeInput } from "./variables";

const theme = {
  default: {
    bgColor: "#686868",
    mainBtns: "rgb(117, 118, 119)",
    mainOp: "rgb(241, 162, 59)",
    extraOp: "rgb(90, 91, 92)",
    main: "rgb(72, 73, 74)",
    fontColor: "#e7e7e7",
  },
  pink: {
    bgColor: "#FFDDD2",
    mainBtns: "#FFE3E1",
    mainOp: "#FFF5E4",
    extraOp: "#FFD1D1",
    main: "#FF9494",
    fontColor: "#FF9494",
  },
  mint: {
    bgColor: "#EDE4E0",
    mainBtns: "#BCEAD5",
    mainOp: "#DEF5E5",
    extraOp: "#9ED5C5",
    main: "#8EC3B0",
    fontColor: "#fff",
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

export function themeSwitcher() {
  let dropdown = document.querySelector(".dropdown");
  dropdown.onclick = function () {
    dropdown.classList.toggle("active");
  };

  options.forEach((item) => {
    const option = item;
    option.onclick = () => {
      themeInput.value = option.innerText;
      if (themeInput.value == "Pink Theme") {
        changeSkeleton("pink");
      } else if (themeInput.value == "Mint Theme") {
        changeSkeleton("mint");
      } else if (themeInput.value == "Dark Theme") {
        changeSkeleton("default");
      }
    };
  });
}
