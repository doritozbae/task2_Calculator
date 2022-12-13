// const { expect, test } = require("@jest/globals");
import { expect, test } from "@jest/globals";
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
} from "./mathActions.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 95 + 11 to equal 106", () => {
  expect(sum(95, 11)).toBe(106);
});

test("adds 1578383 + 499928 to equal 2078311", () => {
  expect(sum(1578383, 499928)).toBe(2078311);
});

test("diffs 15 - 6 to equal 9", () => {
  expect(diff(15, 6)).toBe(9);
});

test("diffs 175 - 290 to equal -115", () => {
  expect(diff(175, 290)).toBe(-115);
});

test("diffs 198765 - 34545 to equal 164220", () => {
  expect(diff(198765, 34545)).toBe(164220);
});

test("multiplies 3 * 3 to equal 9", () => {
  expect(multiple(3, 3)).toBe(9);
});

test("multiplies 2343 * 0 to equal 0", () => {
  expect(multiple(2343, 0)).toBe(0);
});

test("multiplies 3566 * 9930 to equal 35410380", () => {
  expect(multiple(3566, 9930)).toBe(35410380);
});

test("divides 54 / 9 to equal 6", () => {
  expect(divide(54, 9)).toBe(6);
});

test("divides 23456 / 13 to equal 1804.30769231", () => {
  expect(divide(23456, 13)).toBe(1804.30769231);
});

test("divides 999 / (-99) to equal -10.09090909", () => {
  expect(divide(999, -99)).toBe(-10.09090909);
});

test("x in y, where x = 2 and y = 2 to equal 4", () => {
  expect(xInY(2, 2)).toBe(4);
});

test("x in y, where x = 23 and y = 4 to equal 279841", () => {
  expect(xInY(23, 4)).toBe(279841);
});

test("x in y, where x = 121 and y = 5 to equal 25937424601", () => {
  expect(xInY(121, 5)).toBe(25937424601);
});

test("x in 2, where x = 121 to equal 14641", () => {
  expect(square(121)).toBe(14641);
});

test("x in 2, where x = 666 to equal 443556", () => {
  expect(square(666)).toBe(443556);
});

test("x in 3, where x = 121  to equal 1771561", () => {
  expect(cube(121)).toBe(1771561);
});

test("x in 3, where x = 666  to equal 295408296", () => {
  expect(cube(666)).toBe(295408296);
});

test("10 in x, where x = 6 to equal 1000000", () => {
  expect(tenInX(6)).toBe(1000000);
});

test("10 in x, where x = 0.5 to equal 3.16227766", () => {
  expect(tenInX(0.5)).toBe(3.16227766);
});

test("y root of x, where x = 16 and y = 4 to equal 2", () => {
  expect(yRootOfX(16, 4)).toBe(2);
});

test("y root of x, where x = 456 and y = 5 to equal 3.40245953", () => {
  expect(yRootOfX(456, 5)).toBe(3.40245953);
});

test("2 root of x, where x = 16 to equal 4", () => {
  expect(rootOfX(16)).toBe(4);
});

test("2 root of x, where x = 1111 to equal 33.33166662", () => {
  expect(rootOfX(1111)).toBe(33.33166662);
});

test("3 root of x, where x = 789 to equal 9.24043325", () => {
  expect(cubeRootOfX(789)).toBe(9.24043325);
});

test("3 root of x, where x = 10000000 to equal 100", () => {
  expect(cubeRootOfX(1000000)).toBe(100);
});

test("factorial of x, where x = 5 to equal 120", () => {
  expect(factorial(5)).toBe(120);
});

test("factorial of x, where x = 66 to equal 720", () => {
  expect(factorial(6)).toBe(720);
});

test("percent of x, where x = 82 to equal 0.82", () => {
  expect(percent(82)).toBe(0.82);
});

test("percent of x, where x = 1 to equal 0.01", () => {
  expect(percent(1)).toBe(0.01);
});
