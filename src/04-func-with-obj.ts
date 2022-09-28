// пример 1

function printPoint(point: {x: string, y: string}): void {
    // на входе ждем объект с кординатами
    // void указывает на то что функцию может ничего не возвращат или возвращать что угодно
    console.log(`Coordinate for the point is x: ${point.x}, y: ${point.y}`);
}

const obj1 = {
    x: '1',
    y: '2',
}

printPoint(obj1) //свё ок

const obj2 = {
    x: '3',
    y: '9',
    z: '6',
}

printPoint(obj2) //тоже свё ок
// хоть и лишний параметр в объекте, ошибки не будет, так как функция получила все необходимые (ожидаемые),
// а она ждада (x) и (y), они пришли - все ок, если один из них не придет, тогда ошибка


// пример 2

function printName(user: {
    // если какой-то из полей сделать необязательным (?), 
    // то будет ошибка, так как функция toUpperCase() не работает с undefined
    firstName: string;
    lastName?: string;
}): void {
    console.log('Hello', user.firstName.toUpperCase());
    //console.log('Nice to meet you Mr.', user.lastName.toUpperCase()); // будет ошибка
    // чтобы не было ошибки нужно Доказать TS что необязательный параметр это строка и оно есть
    if (user.lastName) {
        console.log('Nice to meet you Mr.', user.lastName.toUpperCase()); //теперь все ок
    }
}

printName({ firstName: 'Mac' });
printName({ firstName: 'Mac', lastName: 'Mor'});