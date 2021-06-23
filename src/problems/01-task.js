var task1 = {
  //написать логику для подсчета суммы от 1 до n
  sumFromOneToN: function (n) {
    // return (n * (n+1)) / 2;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  },

  //на входе массив объектов, среди которых могут быть числа
  //вернуть сумму всех чисел, что есть в массиве, если чисел нет - вернуть 0
  totalSum: function (array) {
    let sum = 0;

    array.forEach((i) => {
      if (typeof i === 'number') {
        sum += i;
      }
    });

    return sum;
  },

  //ф-ция должна возвращать true, если элемент elem присутствует в массиве, иначе false
  includes: function (array, elem) {
    let result = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === elem) {
        result = true;
        break;
      }
    }

    //   array.forEach(el => {
    //       if (el === elem) {
    //         result = true
    //       }
    //   })

    return result;
  },

  //на входе 2 массива, вернуть массив, в котором будут элементы из этих 2х массивов
  concat: function (array1, array2) {
    return [...array1, ...array2];
  },

  /*написать ф-цию объеденения 2х массивов в 1 таким образом, что сначала  идут первые элемент, потом вторые элементы и тд
    если массивы содержать разное кол-во элементов, то все элементы, после одинакового кол-ва просто дописать в конец результирующего массива
    combine([1, 2, 3], ['a', 'b', 'c', 'd'])
    [1, 'a', 2, 'b', 3, 'c', 'd']
     */
  combine: function (array1, array2) {
    const result = [];

    const maxLength =
      array1.length >= array2.length ? array1.length : array2.length;

    for (let i = 0; i < maxLength; i++) {
      if (array1[i] !== undefined) {
        result.push(array1[i]);
      }

      if (array2[i] !== undefined) {
        result.push(array2[i]);
      }
    }

    console.log(maxLength);

    return result;
  }
};

// console.log(task1.sumFromOneToN(5));
// console.log(task1.totalSum([{}, 3, 4, {}, '']));
// console.log(task1.includes([1,2,3,4], 0));
// console.log(task1.concat([1,2,3,4], [0, 9, 8]));
// console.log(task1.combine([1, 2, 3], ['a', 'b', 'c', 'd']));
