function delay(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

function callbackFunc() {
  console.log("Функция callback");
}

delay(callbackFunc);
