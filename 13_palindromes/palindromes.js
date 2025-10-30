const palindromes = function (word) {
  const reversedWord = word.split(``).reverse().join(``);
  return word === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
