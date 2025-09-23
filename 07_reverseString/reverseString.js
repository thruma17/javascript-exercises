const reverseString = function (string) {
  array = Array.from(string);
  reversedArray = array.reverse();
  reversedString = reversedArray.join(``);
  return reversedString;
};

reverseString(`hello there`);

// Do not edit below this line
module.exports = reverseString;
