let count = 0;

const interval = (func, ms, amount) => {
  const interv = setInterval(() => {
    func();
    count++;

    if (amount !== undefined && count >= amount) clearInterval(interv);
  }, ms);
};

interval(log, 1000, 3);
