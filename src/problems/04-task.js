const task4 = {
  httpGetRequest(url, params, callback) {
    /**
     * аргументы:
     * url - адрес сервера
     * params - объект, в котором хранятся параметры для запроса
     * этот объект должен быть преобразован в строку и добавлен к url после символа '?'
     * callback - ф-ция которая будет вызвана после того как запрос выполнен и данные удачно распарсились
     * callback должен вызываться так:
     * если случилась какая-то ошибка то callback(error), если ошибки не было то callback(null, data);
     * использовать XmlHttpRequest
     * https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
     *
     */
    const xhr = new XMLHttpRequest();

    // Open request and use task4 method objectToQuery()
    xhr.open('GET', url + '?' + this.objectToQuery(params));
    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
        const error = new Error(`Error ${xhr.status}: ${xhr.statusText}`);
        callback(error);
      } else {
        const data = JSON.parse(xhr.response);
        callback(null, data);
      }
    };

    xhr.onerror = function () {
      alert('Request failed');
    };
  },

  objectToQuery(obj) {
    //ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....

    let result = '';
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const val = obj[key];
        result += `${key}=${val}&`;
      }
    }

    // remove last &
    result = result.slice(0, -1);

    return result;
  },

  queryToObject(query) {
    //ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }

    const obj = {};

    const propsArr = query.split('&');

    propsArr.forEach((prop) => {
      const [key, value] = prop.split('=');
      obj[key] = value;
    });

    return obj;
  }
};

// task4.httpGetRequest('https://jsonplaceholder.typicode.com/posts/1', { key1: 'value1', key2: 'value2' }, ()=>{})
// console.log(task4.objectToQuery({ key1: 'value1', key2: 'value2' }));
// console.log(task4.queryToObject('key1=value1&key2=value2'));
