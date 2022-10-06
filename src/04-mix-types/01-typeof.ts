// оператор typeof
import { average } from '../01-basic/02-function'

let str5 = 'Hello Word';
type X = typeof str; // х равен типу, не литералу в кавычках

// пример 2
// получим тип ранее созданой функции
type Fn = typeof average; // получим (...nums: number[]) => number
// теперь имея этот тип, можем использовать его в другой функции
const max: Fn = (...numbers) => Math.max(...numbers)
// на входе теперь числа можно не типизировать
max(1, 2, 3) // получим 3


// иногда нужно возвращать тип 
// для этого есть спец. утилита
// ReturnType<>
// в дженерик передаем то что хотим вернуть
type returnFn = ReturnType<typeof average>; // получим тип number
