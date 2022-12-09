import {
  btns,
  screen,
  digits,
  mainActions,
  btnKeys,
  additionalActions,
  memoryActions,
  mr,
} from "./variables";
import { errorAlert } from "./errors";
import {
  sum,
  diff,
  multiple,
  divide,
  xInY,
  square,
  cube,
  tenInX,
  yRootOfX,
  percent,
  rootOfX,
  cubeRootOfX,
  factorial,
  minusOrPlusFunc,
} from "./mathActions/mathActions";

export const calculator = () => {
  let state = {
    firstOperand: "",
    secondOperand: "",
    operator: "",
    memory: "0",
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
  }

  function clearMemory() {
    mr.classList.remove("pressed");
    screen.textContent = 0;
    state.memory = "0";
    console.log(state.memory);
  }

  function screenResults(position) {
    screen.textContent = state[position];
  }

  // work with state
  function onChangeState(val, position) {
    // state[position] += val;

    switch (val) {
      case btnKeys.plusMinus:
        state[position] = minusOrPlusFunc(state[position]);
        break;
      case btnKeys.percent:
        state[position] = percent(state[position]);
        break;
      case btnKeys.mMinus:
        state.memory = diff(+state.memory, +state.firstOperand);
        console.log(state.memory);
        break;
      case btnKeys.mPlus:
        state.memory = sum(+state.memory, +state.firstOperand);
        console.log(state.memory);
        break;
      case btnKeys.mr:
        state.firstOperand && state.operator
          ? (state.secondOperand = state[position])
          : (state.firstOperand = state[position]);
        console.log(state.memory);
        break;
      case btnKeys.mc:
        clearMemory();
        break;
      default:
        String(state[position]) === 0 && val !== "."
          ? (state[position] = String(val))
          : (state[position] += String(val));
        break;
    }

    position === "operator" && state.operator
      ? (state.operator = String(val))
      : null;
    screenResults(position);
  }

  // main logic of calculator, connection between UI and JS
  function calculatorLogic(val) {
    switch (val) {
      case btnKeys.ac:
        clearState();
        break;
      case btnKeys.equal:
        mathFunctions();
        // screenResults(stateKeys.firstOperand);
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
      mathFunctions();
      state.operator = "";
      screenResults("firstOperand");
    }

    if (memoryActions.includes(val)) {
      onChangeState(val, "memory");
    }

    if (state.memory !== "0") {
      mr.classList.add("pressed");
    }
    // else {
    //   mr.classList.remove("pressed");
    // }
  }

  // appeal to math functions after pressing the "=" button
  function mathFunctions() {
    const { firstOperand, secondOperand } = state;

    switch (state.operator) {
      case btnKeys.plus:
        state.firstOperand = sum(+firstOperand, +secondOperand);
        break;
      case btnKeys.minus:
        state.firstOperand = diff(+firstOperand, +secondOperand);
        break;
      case btnKeys.multiple:
        state.firstOperand = multiple(+firstOperand, +secondOperand);
        break;
      case btnKeys.divide:
        if (!secondOperand) {
          errorAlert("ERROR: enter the divider");
          clearState();
        } else if (secondOperand == 0) {
          errorAlert("ERROR: you cannot divide by 0");
          clearState();
        }
        state.firstOperand = divide(+firstOperand, +secondOperand);
        break;
      case "xᵞ":
        state.firstOperand = xInY(+firstOperand, +secondOperand);
        break;
      case "ᵞ√x":
        if (firstOperand < 0 && secondOperand % 2 === 0) {
          errorAlert("ERROR: result doesn't exist");
        }

        if (secondOperand < 2) {
          errorAlert("ERROR: result doesn't exist");
        }
        state.firstOperand = yRootOfX(+firstOperand, +secondOperand);
        break;
      case btnKeys.square:
        state.firstOperand = square(+firstOperand);
        break;
      case "x³":
        state.firstOperand = cube(+firstOperand);
        break;
      case "²√x":
        // console.log("sqr x");
        state.firstOperand = rootOfX(+firstOperand);
        break;
      case "³√x":
        state.firstOperand = cubeRootOfX(+firstOperand);
        break;
      case "x!":
        state.firstOperand = factorial(+firstOperand);
        break;
      case "10ᵡ":
        state.firstOperand = tenInX(+firstOperand);
        break;
      case "1/x":
        state.firstOperand = 1 / +firstOperand;
        break;
    }
    state.secondOperand = "";
    state.operator = "";
    screen.textContent = state.firstOperand;
  }
};
