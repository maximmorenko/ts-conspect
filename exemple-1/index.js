"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    // axios возвращает промис, поэтому можем строить зен цепочки
    .then(function (response) { return console.log(response.data); });
