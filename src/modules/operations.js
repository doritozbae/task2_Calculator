import {
  btns,
  screen,
  digits,
  mainActions,
  stateKeys,
  btnKeys,
  additionalActions,
} from "./variables";
import { errorAlert } from "./errors";

export const calculator = () => {
  let state = {
    firstOperand: "",
    secondOperand: "",
    operator: "",
    finish: false,
  };

  btns.forEach((item) => {
    const btn = item;
    btn.onclick = (event) => {
      calculatorLogic(event.target.innerText);
    };
  });

  function clearState() {
    state.firstOperand = "";
    state.secondOperand = "";
    state.operator = "";
    screen.innerText = 0;
    // state.finish = false;
  }

  function screenResults(position) {
    screen.textContent = state[position];
  }

  function onChangeState(val, position) {
    state[position] += val;

    const strValue = String(val);

    switch (val) {
      case btnKeys.plusMinus:
        state[position] = String(0 - state[position]);
        break;
      case btnKeys.percent:
        state[position] = String(state[position] / 100);
        break;
    }

    position === "operator" && state.operator
      ? (state.operator = strValue)
      : null;
    screenResults(position);
  }

  function calculatorLogic(val) {
    switch (val) {
      case btnKeys.clearAllBtn:
        clearState();
        break;
      case btnKeys.equal:
        mathsFunction();
        break;
      default:
        break;
    }

    if (digits.includes(val) && !state.operator) {
      onChangeState(val, "firstOperand");
    }

    if (digits.includes(val) && state.operator) {
      onChangeState(val, "secondOperand");
    }

    if (mainActions.includes(val) && state.firstOperand) {
      onChangeState(val, "operator");
    }

    if (mainActions.includes(val) && state.secondOperand) {
      state.secondOperand = "";
      onChangeState(val, "operator");
    }

    if (additionalActions.includes(val)) {
      state.operator = val;
      mathsFunction();
      state.operator = "";
      screenResults("firstOperand");
    }

    // if (state.secondOperand === '' && state.finish == true ) {state.secondOperand = state.firstOperand}
  }

  function mathsFunction() {
    const { firstOperand, secondOperand, operator } = state;

    switch (state.operator) {
      case "+":
        state.firstOperand = +firstOperand + +secondOperand;
        break;
      case "-":
        state.firstOperand = firstOperand - secondOperand;
        break;
      case "x":
        state.firstOperand = firstOperand * secondOperand;
        break;
      case "÷":
        if (secondOperand === "0") {
          errorAlert("na nol hyli delish");
        }
        secondOperand !== "0"
          ? (state.firstOperand = +firstOperand / +secondOperand)
          : (state.firstOperand = "");
        break;
      case "xᵞ":
        state.firstOperand = (+firstOperand) ** +secondOperand;
        break;
      case "ᵞ√x":
        state.firstOperand = (+firstOperand) ** (1 / +secondOperand);
        break;
      case btnKeys.square:
        state.firstOperand = (+firstOperand) ** 2;
        break;
      case "x³":
        state.firstOperand = (+firstOperand) ** 3;
        break;
      case "²√x":
        console.log("aaaa");
        state.firstOperand = (+firstOperand) ** (1 / 2);
        break;
      case "³√x":
        state.firstOperand = (+firstOperand) ** (1 / 3);
        break;
      case "x!":
        state.firstOperand = factorial(+firstOperand);
        state.secondOperand = "";
        state.operator = "";
        break;
      case "10ᵡ":
        state.firstOperand = 10 ** +firstOperand;
        state.secondOperand = "";
        state.operator = "";
        break;
      case "1/x":
        state.firstOperand = 1 / +firstOperand;
        state.secondOperand = "";
        state.operator = "";
        break;
    }
    screen.textContent = state.firstOperand;
    state.finish = true;
  }
};
