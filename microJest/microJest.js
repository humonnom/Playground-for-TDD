const { isSameObject } = require("./util");
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
    toEqual(expected) {
      if (!isSameObject(expected, actual)){
        throw new Error(`${JSON.stringify(actual)} is not equal to ${JSON.stringify(expected)}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    },
  };
}

module.exports = { test, expect };
