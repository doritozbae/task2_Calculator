export const btns = document.querySelectorAll(".btn");
export const screen = document.querySelector(
  ".calculatorBody__input-wrapper p"
);
export const mr = document.querySelector(".mr");

export const errPopup = document.querySelector(".popup-box");
export const errorMessage = document.querySelector(".popup-box p");
export const errCloseBtn = document.querySelector("span");
export const errBg = document.querySelector(".popupShade");

export const options = document.querySelectorAll(".option");
export const themeInput = document.querySelector(".text-box");

export const digits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+/-",
  "%",
];

export const memoryActions = ["mr", "mc", "m+", "m-"];
export const mainActions = ["-", "+", "×", "÷", "xᵞ", "ᵞ√x"];
export const additionalActions = ["x²", "x³", "³√x", "²√x", "10ᵡ", "1/x", "x!"];

export const btnKeys = {
  ac: "AC",
  plus: "+",
  minus: "-",
  equal: "=",
  divide: "÷",
  multiple: "×",
  square: "x²",
  zero: "0",
  percent: "%",
  plusMinus: "+/-",
  mr: "mr",
  mc: "mc",
  mPlus: "m+",
  mMinus: "m-",
};
