import { errorAlert } from "../errors";
// import { clearState } from "../operations";

const max = 2 ** 53 - 1;
const min = -(2 ** 53 - 1);

export function sum(firstOperand, secondOperand) {
  const res = +firstOperand + +secondOperand;
  numberLengthCheck(res);
  return res;
}

export const diff = (firstOperand, secondOperand) => {
  const res = +firstOperand - +secondOperand;
  numberLengthCheck(res);
  return res;
};

export const multiple = (firstOperand, secondOperand) => {
  const res = +firstOperand * +secondOperand;
  numberLengthCheck(res);
  console.log(res);
  return res;
};

export const divide = (firstOperand, secondOperand) => {
  const res = +firstOperand / +secondOperand;
  return fixedResult(res);
  // return res;
};

export const xInY = (firstOperand, secondOperand) => {
  const res = (+firstOperand) ** +secondOperand;
  numberLengthCheck(res);
  return fixedResult(res);
};

export const square = (firstOperand) => xInY(+firstOperand, 2);

export const cube = (firstOperand) => xInY(+firstOperand, 3);

export const tenInX = (firstOperand) => xInY(10, +firstOperand);

export const yRootOfX = (firstOperand, secondOperand) => {
  const res =
    firstOperand >= 0
      ? (+firstOperand) ** (1 / +secondOperand)
      : -((0 - firstOperand) ** (1 / +secondOperand));

  // numberLengthCheck(res);
  return fixedResult(res);
};

export const rootOfX = (firstOperand) => yRootOfX(+firstOperand, 2);

export const cubeRootOfX = (firstOperand) => yRootOfX(+firstOperand, 3);

export const factorial = (x) => {
  if (parseInt(String(x)) !== x || x <= 0 || x > max) {
    return 0;
  }

  if (x <= 1) {
    return x;
  }

  return x * factorial(x - 1);
};

export const minusOrPlusFunc = (x) => {
  // console.log(x);
  return 0 - x;
};

export const percent = (firstOperand) => divide(firstOperand, 100);

function numberLengthCheck(res) {
  if (res < min || res > max) {
    errorAlert("ERROR: too long number");
    return 0;
  }
}

const fixedResult = (res) => {
  const amountOfNumAfterPoint = (x) =>
    x.toString().includes(".") ? x.toString().split(".").pop().length : 0;
  if (amountOfNumAfterPoint(res) !== 0 && amountOfNumAfterPoint(res) > 8) {
    return +res.toFixed(8);
  } else return +res;
};

// export { sum, diff };
