const task2 = {
  /*на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
    вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
    например
    printInFrame('This string will be printed in frame', '*');
    ***********
    * This    *
    * string  *
    * will    *
    * be      *
    * printed *
    * in      *
    * frame   *
    * *********
     */
  printInFrame: function (srcString, ch) {
    let output = '';

    const words = srcString.split(' ');
    const longestWordLength = words.reduce((a, b) =>
      a.length > b.length ? a : b
    ).length;

    words.forEach((word, i, arr) => {
      if (i === 0) {
        output += `${ch.padEnd(longestWordLength + 4, ch)}\n`;
      }
      output += `${ch} ${word.padEnd(longestWordLength)} ${ch}\n`;

      if (i === arr.length - 1) {
        output += `${ch} ${ch.padEnd(longestWordLength + 2, ch)}\n`;
      }
    });

    return output;
  },

  /*
    reverseString('abc') => 'cba';
     */
  reverseString(str) {
    return str.split('').reverse().join('');
  },
  /*
    reverseNumber(2) => 2
    reverseNumber(12345) => 54321
    reverseNumber(543210) => 12345
    reverseNumber(1020) => 201
    reverseNumber(-345) => -543
     */
  reverseNumber: function (n) {
    return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
  },
  /*
    capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
     */
  capitalizeWords: function (str) {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  },
  /*
    chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
  chunk: function (arr, chunkSize) {
    const arrCopy = [...arr];
    const result = [];

    while (arrCopy.length > 0) {
      result.push(arrCopy.splice(0, chunkSize));
    }
    return result;
  }
};

// console.log(task2.printInFrame('This string will be printed in frame', '*'));
// console.log(task2.reverseString('abc'));
// console.log(task2.reverseNumber(543210));
// console.log(task2.capitalizeWords('this string will be capitalized'));
// console.log(task2.chunk([1, 2, 3, 4, 5], 3));
