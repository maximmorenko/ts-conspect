// narrowing сужение типов

function exemple1 (x?: number | string) {
    if (typeof x === 'string') {
        x.toUpperCase()
    } else if (typeof x === 'number') {
        x.toFixed()
    } else if (x === undefined) {
        console.log('not value');
    } else {
        x
    }
}

function exemple2 (strs: string | string[] | null) {
    // так как null это обоъект, то для начала нужно провверить что strs есть
    // если есть , то null немоте быть а значит можем проверить на объект
    if (strs && typeof strs === 'object') {
        strs.concat([])
    } else if (typeof strs === 'string') {
        strs.toUpperCase()
    }
}

// пример 3 как определить какой из объектов чем является (и массив цифр и Дата - объекты)
function exemple3 (x: number[] | Date) {
    // мы должны доказать что х это Дата
    // в операторе instanseof указываем конструктор Дата
    if (x instanceof Date) {
        // если х это Дата, то доступны все метоюы Даты
        x.getMonth()
    } else {
        // в противном случае это массив, соотвевтственно доступны все его методы
        x.join()
    }
}

// пример 4
type Fish = {swim: () => void};
type Bird = {fly: () => void};

// в зависимотся он типа входящего животного бедет сработывать метод
// нужно определить какое животное на входе
function move (animal: Fish | Bird) {
    // нужно проверить какое ключ в параметре, на выбор.
    // проверим swim, есть ли он в параметре
    if ( 'swim' in animal) {
        // если есть то используем метд свим
        return animal.swim();
    } else {
        return animal.fly();
    }
}

// такие проверки могут быть очень большими, поэтому их выносят в отдельные функции,
// которые называются защитники типов
