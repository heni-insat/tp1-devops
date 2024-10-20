const { sum, substract } = require("../app/index");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("substracts 2 - 1 to equal 1", () => {
  expect(substract(2, 1)).toBe(1);
});
