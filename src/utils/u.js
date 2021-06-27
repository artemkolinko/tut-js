const U = (() => {
  return {
    //ф-ция должна возвращать Promise, который будет resolved когда скрипт из url будет загружен
    loadScript(url) {
      return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = url;
        document.head.append(script);

        script.onload = function () {
          resolve('loaded');
        };

        script.onerror = function () {
          reject('Error loading ' + this.src);
        };
      });
    },

    confirm(msg) {
      return new Promise((resolve, reject) => {
        //надо показать диалог, сделать самому диалог, у которого есть 2 кнопки - ok/cancel
        const result = confirm(msg);
        //promise должен резолвится после нажатия кнопок со значением true/false

        result ? resolve('confirmed') : reject('not confirmed');
        // true - confirmed, false - not confirmed
      });
    },

    formatFileSize(sizeInBytes) {
      const byteUnits = [
        ' kB' /*nls*/,
        ' MB' /*nls*/,
        ' GB' /*nls*/,
        ' TB' /*nls*/,
        'PB' /*nls*/,
        'EB' /*nls*/,
        'ZB' /*nls*/,
        'YB' /*nls*/
      ];

      if (sizeInBytes < 1024) return sizeInBytes + ' B';

      let i = -1;
      do {
        sizeInBytes = sizeInBytes / 1024;
        i++;
      } while (sizeInBytes > 1024);

      return sizeInBytes.toFixed(1) + byteUnits[i];

      //1kB === 1024B
    },

    //cmpFn получает на вход (obj1, obj2) и возвращает 1 если obj1 > obj2, -1 если obj1 < obj2, 0 если obj1 == obj2
    minInArray(array, cmpFn) {
      // уточнить условие?
      for (let i = 0; i < array.length; i++) {
        const a = array[i + 1];
        const b = array[i];
        cmpFn(a, b);
      }
    },

    //ф-ция принимает на вход 2 числа, но они могут быть и не заданы, те можно использовать ф-цию так
    // randomInt(), если min не задан тогда считать его равным 0, если max не задан - то считать его равным Number.MAX_SAFE_INTEGER
    randomInt(min, max) {
      if (!min) min = 0;
      if (!max) max = Number.MAX_SAFE_INTEGER;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    //ф-ция принимает на вход массив и callback
    //возвращает новый массив, элементы которого будут преобразованы fn
    //если fn возвращает null, то элемент не надо включать в результирующий массив
    filteredMap(array, fn) {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const newElement = fn(element);
        if (newElement === null) continue;
        result.push(fn(element));
      }
      return result;
    }
  };
})();

const arr = [1, 2, 3, 4, 4, 8];
// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js

// U.loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// U.confirm('Are you OK?')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log(U.formatFileSize(10242424));

console.log(
  U.minInArray(arr, function (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  })
);

// console.log(U.randomInt(-5,5));
// console.log(U.filteredMap(arr, item => item +1));
