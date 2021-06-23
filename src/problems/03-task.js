const task3 = {
  /*
    isPalindrome('a') => true;
    isPalindrome('abc') => false;
    isPalindrome('aabbaa') => true;
     */
  isPalindrome: function (str) {
    const reverse = str.split('').reverse().join('');
    return str === reverse;
  },

  /*
    charCount('abc') => a: 1, b: 1, c: 1
    charCount('Hello') => H: 1, e: 1, l: 2, o: 1
     */
  charCount: function (str) {
    const charObj = {};

    const charArr = str.split('');

    charArr.forEach((char) => {
      if (charObj[char]) return charObj[char]++;
      charObj[char] = 1;
    });

    let result = '';

    for (const key in charObj) {
      if (Object.hasOwnProperty.call(charObj, key)) {
        const value = charObj[key];
        result += `${key}: ${value}, `;
      }

      // можно ли без hasOwnProperty?
      // const value = charObj[key];
      // result += `${key}: ${value}, `;
    }

    return result;
  },

  /*
    areAnagrams('anagram', 'nag a ram') => true;
    areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
    areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
     */
  areAnagrams: function (str1, str2) {
    const sortStr = (str) =>
      str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    const sortedStr1 = sortStr(str1);
    const sortedStr2 = sortStr(str2);

    return sortedStr1 === sortedStr2;
  }
};

// console.log(task3.isPalindrome('aabbaa'));
// console.log(task3.charCount('Hello'));
// console.log(task3.charCount('Hello'));
// console.log(task3.areAnagrams('anagram', 'nag a ram'));
