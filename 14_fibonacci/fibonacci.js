const fibonacci = function (num) {
  if (num < 0) {
    return `OOPS`;
  }
  if (num === 0) {
    return 0;
  }
  let prev = 1;
  let prevPrev = 0;
  for (let i = 2; i <= num; i++) {
    let curr = prev + prevPrev;
    prevPrev = prev;
    prev = curr;
  }
  return prev;
};

// Do not edit below this line
module.exports = fibonacci;
