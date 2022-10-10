//  утилиты pick omit record
export {};


// record
// значения record это однотипные данные
// принимает два параметра
// первый - допустимые типы ключей, напр string
// это ознаяает что ключи могут быть только строки
// второй параметр это допустимые типы значений
type Names = Record<string, any>;


// утилиты pick omit
// работают с объектными структурами

interface Todo {
    id: string,
    title: string,
    description: string,
    complited: boolean,
    createdAt: number,
}

// для выбора некоторых значениий из интерфейса испольжуем pick
type SimpleTood = Pick<Todo, 'id' | 'title' | 'complited'>
const todo1: SimpleTood = {
    complited: false,
    id: 'df',
    title: 'klkl',
}

// оператор omit делает все в тояности наоборот, он исключает указаные поля
type SimpleTood2 = Omit<Todo, 'id' | 'title' | 'complited'>
const todo2: SimpleTood2 = {
    description: 'df',
    createdAt: 2,
}