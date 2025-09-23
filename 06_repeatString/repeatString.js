const repeatString = function (string, num) {
  if (num < 0) {
    return `ERROR`;
  }

  let word = ``;

  for (let index = 0; index < num; index++) {
    word += string;
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;
