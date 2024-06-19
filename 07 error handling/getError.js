function getError(num) {
  if (!Number.isInteger(num)) {
    throw new Error("Число не является целым");
  }
  return "Число является целым";
}

console.log(getError(1));
console.log(getError(1.222));
