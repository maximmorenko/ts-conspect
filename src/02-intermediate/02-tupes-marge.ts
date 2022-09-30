// елиасы как интерфейсы нельзя расширять, но можно наследовать
// но в отличии от инт. у елиасов имена должны быть уникальные
type Union1 = 'a' | 'b' | 'c';
type Union2 = 'a' | 'd' | 'с';

// если использовать знак или |, то в новый елиас повторяющиеся елементы бубут включены только один раз
type Union3 = Union1 | Union2 | 'f'; // a,b,c,d,f все елементы по одному

//если использовать амперсанд, то в новый елиас бутут включены только одинаковые елементы
type Union4 = Union1 & Union2; //a | c


// перепишем интерфейсы на елиасы
type User = {
    readonly email: string,
    readonly login: string,
    password: string,
    isOnline: boolean,
}

type Person = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearObBirth?: number,
}

// у елиасов нет extends
// если амперсанд использовать с объектами, то он будет объединять, а не исключать елементы
// также можно добавить свои, новые поля
type Union5 = User & Person & {x: string, y: string};
const user2: Union5 = {
    // объект user2 должен содержать все поля елиасов User и Person + новые поля
    email: '',
    firstName: '',
    isOnline: true,
    lastName: '',
    login: '',
    password: '',
    phone: '',
    yearObBirth: 3,

    x: '',
    y: '',
}

type Employee = {
    dateContract: Date,
    phone: string, 
    say(): void,
    code?: (arg: string) => void,
}

const user1: User = {
    login: 'dfdf',
    password: 'hhh',
    email: 'dfdf@dfdf',
    isOnline: true,
}
