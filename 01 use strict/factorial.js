"use strict";

function factorial(n) {
  if (n < 0) throw new Error("Число меньше 0");
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(0));
