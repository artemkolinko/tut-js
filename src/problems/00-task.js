const task0 = {
  //вернуть сумму 3х чисел
  sum(a, b, c) {
    let sum = 0;
    //ваш код тут
    sum = a + b + c;
    return sum;
  },
  //вернуть сумму чисел, но надо учесть что аргументы могут быть не только числами, использовать оператор typeof в связке с if-else
  safeSum(a, b, c) {
    let sum = 0;
    //ваш код тут;
    console.log(arguments.length);
    // if (typeof a === 'number') {
    //     sum += a;
    // }
    // if (typeof b === 'number') {
    //     sum += b;
    // }
    // if (typeof c === 'number') {
    //     sum += c;
    // }

    for (let index = 0; index < arguments.length; index++) {
      const arg = arguments[index];
      if (typeof arg === 'number') {
        sum += arg;
      }
    }
    return sum;
  },
  // вернуть максимальное число
  max(a, b, c) {
    let m = a;
    //ваш код тут
    if (b > m) {
      m = b;
    }
    if (c > m) {
      m = c;
    }
    return m;
  },
  //вернуть минимальное число
  min(a, b, c) {
    let m = a;
    //ваш код тут
    if (b < m) {
      m = b;
    }
    if (c < m) {
      m = c;
    }
    return m;
  }
};

// console.log(task0.sum(1, 2, 3));
// console.log(task0.safeSum(2, 5, 9));
// console.log(task0.max(22, 15, 39));
// console.log(task0.min(2, 15, 9));
