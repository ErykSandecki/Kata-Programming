factorial = (num) => ((num == 0) || (num === 1)) ? 1 : factorial(num - 1) * num;

console.log(factorial()); // <-- add value //
