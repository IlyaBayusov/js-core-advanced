function func() {
  let a = 1;
  var b = 2;
  const c = 3;

  console.log("func", a);
  console.log("func", b);
  console.log("func", c);
}

func();

console.log(a); //Uncaught ReferenceError: a is not defined
console.log(b); //Uncaught ReferenceError: b is not defined
console.log(c); //Uncaught ReferenceError: c is not defined
