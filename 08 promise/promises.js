function runSequentially(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(currentTask);
  }, Promise.resolve());
}

function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Запрос 1 выполнен");
      resolve();
    }, 1000);
  });
}

function asyncTask2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Запрос 2 выполнен");
      resolve();
    }, 1000);
  });
}

function asyncTask3(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Запрос 3 выполнен");
      resolve();
    }, 1000);
  });
}

const tasks = [asyncTask1, asyncTask2, asyncTask3];

runSequentially(tasks).then(() => {
  console.log("Все запросы выполнены");
});
