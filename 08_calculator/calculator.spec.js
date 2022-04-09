const calculator = require("./calculator");

describe("factorial", () => {
  test("computes the factorial of 0", () => {
    expect(calculator.factorial(0)).toBe(1); // 0! = 1
  });

  test("computes the factorial of 1", () => {
    expect(calculator.factorial(1)).toBe(1);
  });

  test("computes the factorial of 2", () => {
    expect(calculator.factorial(2)).toBe(2);
  });

  test("computes the factorial of 5", () => {
    expect(calculator.factorial(5)).toBe(120);
  });

  test("computes the factorial of 10", () => {
    expect(calculator.factorial(10)).toBe(3628800);
  });
});
