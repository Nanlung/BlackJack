const suits = require("./main.js");
const values = require("./main.js");

test("the array suits should contain all Suits", () => {
  expect(suits.suits).toContain("Hearts");
  expect(suits.suits).toContain("Spades");
  expect(suits.suits).toContain("Diamonds");
  expect(suits.suits).toContain("Clubs");
});

test("the array suits should not be Undefined", () => {
  expect(suits.suits).not.toBeUndefined();
});

test("the array suits should not be Null", () => {
  expect(suits.suits).not.toBeNull();
});

test("the array values should contain card values", () => {
  expect(values.values).toContain("2");
  expect(values.values).toContain("3");
  expect(values.values).toContain("4");
  expect(values.values).toContain("5");
  expect(values.values).toContain("6");
  expect(values.values).toContain("7");
  expect(values.values).toContain("8");
  expect(values.values).toContain("9");
  expect(values.values).toContain("10");
  expect(values.values).toContain("J");
  expect(values.values).toContain("Q");
  expect(values.values).toContain("K");
  expect(values.values).toContain("A");
});
git;

test("the array values should not be Undefined", () => {
  expect(values.values).not.toBeUndefined();
});

test("the array values should not be null", () => {
  expect(values.values).not.toBeNull();
});
