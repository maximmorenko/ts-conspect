"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // укажем что полученые данные нужно интерпритировать как интерфейс туду
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    // console.log(`
    //     Todo ID: ${id}
    //     Todo title: ${title}
    //     Is todo finished: ${finished}
    // `);
    logTodo(id, title, finished);
});
function logTodo(id, title, completed) {
    console.log("\n    Todo ID: ".concat(id, "\n    Todo title: ").concat(title, "\n    Is todo finished: ").concat(completed, "\n"));
}
