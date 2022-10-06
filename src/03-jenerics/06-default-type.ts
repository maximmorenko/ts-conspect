// Дефолтное значение типов

// задача, типизировать функцию.

export async function request<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json()
}
const data = request(''); // получим Promise<unknown> , 
// этот тип стал более безопасен чем эни, но все равно придется делать проверки



// вар 2
// у TS есть дефолтное значение типов, также как и в JS в параметрах, пишится после знака =
interface AnyObject {
    [key: string]: unknown // ключ формируется динамически
}
// зададим по умолчанию объект интерфейс
export async function request2<T = AnyObject>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json()
}

interface Todo {
    id: number;
    title: string;
    complited: boolean;
}
// в качестве ответа хотим получить массив туду <Todo[]>
const data2 = request2<Todo[]>(''); // теперь получим Promise<Todo[]> и можем работать как с объектом
// чтобы получить конкретные значения, не промис, нужно воспользоваться then либо await
