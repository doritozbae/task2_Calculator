export const btns = document.querySelectorAll(".btn");
export const screen = document.querySelector(
  ".calculatorBody__input-wrapper p"
);
export const themeBtn = document.querySelector(".calculatorBody__themeBtn");

export let errPopup = document.querySelector(".popup-box");
export let errorMessage = document.querySelector(".popup-box p");
export let errCloseBtn = document.querySelector("span");

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
export const mainActions = ["-", "+", "x", "÷", "xᵞ", "ᵞ√x"];
export const additionalActions = ["x²", "x³", "³√x", "²√x", "10ᵡ", "1/x", "x!"];

export const btnKeys = {
  clearAllBtn: "AC",
  plus: "+",
  minus: "-",
  equal: "=",
  divide: "÷",
  multiple: "×",
  square: "x²",
  zero: "0",
  percent: "%",
  plusMinus: "+/-",
};

export const stateKeys = {
  firstOperand: "firstOperand",
  secondOperand: "secondOperand",
  operator: "operator",
};
