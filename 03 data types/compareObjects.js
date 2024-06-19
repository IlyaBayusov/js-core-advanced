function compareObjects(obj1, obj2) {
  const length1 = Object.keys(obj1).length;
  const length2 = Object.keys(obj2).length;

  if (length1 != length2) return false;

  for (const key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 2, b: 3 };
const obj3 = { a: 2, b: 3 };

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj2, obj3));
