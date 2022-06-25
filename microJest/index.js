const { sum, subtract, sumAsync, subtractAsync } = require("./math");
const { test, expect } = require("./microJest");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("sum test", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("sub test", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("대소비교", () => {
  expect(1).toBeGreaterThan(2);
});

test("객체비교", () => {
  expect({name: 'Juliet', boyfriend: "Romeo"}).toEqual({name: 'Juliet', boyfriend: "someone else"});
});
