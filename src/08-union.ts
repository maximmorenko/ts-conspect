// union объединенные типы

type Status = 'ok' | 'loading' | 'error';

const xxx: Status = "loading";// можно выбрать любое из трех значений юнион статуса

// пример с функцией
function printId(id: number | string): void {
    // некоторые методы не работают напрямую с union, чтобы метод заработал нужно сделать уточнение
    // проверим, если тип это строка то строковые методы будут работать
    if (typeof id === 'string') {
        // эта проверка называется сужение типов
        console.log(id.toUpperCase()); 
    } else {
        // в противном случае (а этот случай может быть только второе значение параметра - number) выбодим id без метода
        console.log(id);
    }
}

// пример с функцией 2
// в зависимости от входных параметров делаем возврат
function welcome(person: [string, string] | string): number | string {
    // на входе либо кортеж (имя фамилия), либо просто строка
    // делаем проверку на массив или нет (у глобального объекта Array есть метод isArray)
    if (Array.isArray(person)) {
        console.log('Hi', person.join(' '));
        return 1;
    } else {
        console.log(person);
        return person;
    }
}
