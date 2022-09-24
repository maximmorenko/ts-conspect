import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url)
// axios возвращает промис, поэтому можем строить зен цепочки
.then(response => console.log(response.data))
