// задачи:
// 1. создать два интерфейса User и Admin
// 2. создать функцию login принимающую два параметра user c ключами login и password и если они оба есть,
// то вывести в консоль приветствие

interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}

interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

const user1: User = {
    login: 'mac',
    email: 'mac@gmail.com',
    password: '11',
    isOnline: false,
    lastVisited: new Date(2022, 9, 29),
}

const admin1: Admin = {
    login: 'trew',
    email: 'trew@gmail.com',
    password: '21122',
    isOnline: false,
    lastVisited: new Date(2022, 9, 29),
    role: 'dfdfdf',
}

function login (user: {login: string, password: string}): void {
    
    if (user.login.length > 0, user.password.length > 0) {
        // проверим оба поля на длину, если они не равны 0, то печатаем поздравление
        console.log('Hi', user.login);
    }
}

login(user1);
login(admin1);
