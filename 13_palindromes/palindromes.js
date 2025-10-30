const palindromes = function (word) {
  const allowedChar = `abcdefghijklmnopqrstuvwxyz0123456789`;
  const cleanedWord = word
    .toLowerCase()
    .split(``)
    .filter((char) => allowedChar.includes(char))
    .join(``);
  const reversedWord = cleanedWord.split(``).reverse().join(``);
  return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
