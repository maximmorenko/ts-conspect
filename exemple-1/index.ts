import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// axios.get(url)
// // axios возвращает промис, поэтому можем строить зен цепочки
// .then(response => console.log(response.data))

// установим типы полей 
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // укажем что полученые данные нужно интерпритировать как интерфейс туду
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    // console.log(`
    //     Todo ID: ${id}
    //     Todo title: ${title}
    //     Is todo finished: ${finished}
    // `);

    logTodo(id, title, finished)
})

function logTodo(id: number, title: string, completed: boolean) {
    console.log(`
    Todo ID: ${id}
    Todo title: ${title}
    Is todo finished: ${completed}
`);
}
