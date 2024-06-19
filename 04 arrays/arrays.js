const numbers = [1, 5, 12, 4, 10, 20];

const newArr = numbers.map((number) => parseFloat((number * 1.1).toFixed(1)));

console.log(newArr);
