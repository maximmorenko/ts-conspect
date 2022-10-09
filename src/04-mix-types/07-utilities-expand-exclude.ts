// утилиты exclude, extract, NonNullable

export {};

// exclude исключить

type T0 = Exclude<'a' | 'b' | 'c', 'a'> // получим "b" | "c"
// утилита Exclude принимает два параметра 
// первый это юнион
// второй это какая-то сущность которую нужно исключить из первого параметра

// во втором параметре может быть несколько значений
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'd'> // получим "b" | "c"

// исключать можно не только значения, а также типы, функции
type T2 = Exclude<string | number | (() => void), Function> // получим string | number

// пример 1
// имеем юнион с со строчными и числовыми означениями
type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
// хотим сузить его до только строчных или чифр
type T3 = Exclude<Status, string> // получим 200 | 401 | 504
type T4 = Exclude<Status, number> // получим "success" | "clientError" | "serverError"


// extract извлеч

// утилита Exclude принимает два параметра 
// первый это юнион
// второй это какая-то сущность которую нужно извлечь из первого параметра
type T00 = Extract<'a' | 'b' | 'c', 'a'> // получим "a"
type T10 = Extract<'a' | 'b' | 'c', 'a' | 'd'> // получим "a"
type T20 = Extract<string | number | (() => void), Function> // получим () => void

type Status1 = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
// хотим сузить его до только строчных или чифр
type T30 = Extract<Status, string> // получим "success" | "clientError" | "serverError"
type T40 = Extract<Status, number> // получим 200 | 401 | 504


// пример 2

interface Person {
    firstName: string;
    age: number;
    lastName: string;
    sex: 'male' | 'female';
    country: string;
    skils: string[];
}
// задача извлечь только имена
// оператор keyof создаст юнион из Person, его и будем использовать
type PersonName = Extract<keyof Person, 'firstName' | 'lastName'> // получим "firstName" | "lastName"


//  NonNullable
//  принимает один параметр (юнион) и выбрасывает из него пустые значения
type T5 = NonNullable<string | number | undefined | null> // получим string | number


// пример 3

export function keys<T extends object>(obj: T): Extract<keyof T, string>[] {
    // что на выходе писать необязательно TS делает это автоматически
    // запись Extract<keyof T, string>[] эквивалентна Array<keyof T>
    const currentKeys = [];
 
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }
    
    return currentKeys;
}
