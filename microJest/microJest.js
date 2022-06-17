const { sum, subtract, sumAsync, subtractAsync } = require("./math");

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

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`🚫 ${title}`);
    console.log(`🚫 ${error}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
  };
}
