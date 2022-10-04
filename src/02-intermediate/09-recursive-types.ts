// рекурсивные типы

// использование одного и того же имени в момент декларации и в моменту описаняи типа
// пример1
type NestedNumbers = number | NestedNumbers[];
// это позволяет создавать вложеные структуры (массив в массиве)
export const arr: NestedNumbers = [1, 2, 3, [4, 5, [6, 7, [8]]]];

// пример2
// JSON
type JSONprimitive = string | number | boolean | null;
type JSONobject = {[k: string]: JSONvalue}
type JSONarray = JSONvalue[];

// JSONvalue это union из перечисленых типов
// несмотря на то, что JSONvalue записан ниже, нам ничего не мешает использовать JSONvalue в коде выше 
type JSONvalue = JSONprimitive | JSONobject | JSONarray;

function isJSON(arg: JSONvalue) {}
// теперь в функцию можно передать любое значение
isJSON('dfdf');
isJSON({'dfdf': 'hjhj'});
isJSON([1, 2, 3, [4, 5, [6, 7, [8]]]]);
isJSON(true);
