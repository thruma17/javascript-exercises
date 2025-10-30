const palindromes = function (string) {
  const allowedChar = `abcdefghijklmnopqrstuvwxyz0123456789`;
  const cleanedString = string
    .toLowerCase()
    .split(``)
    .filter((char) => allowedChar.includes(char))
    .join(``);
  const reversedString = cleanedString.split(``).reverse().join(``);
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
