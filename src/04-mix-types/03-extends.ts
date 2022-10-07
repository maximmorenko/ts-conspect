// extends и условные типы

type Answer_1 = 64 extends number ? true : false; // число 64 допустимо в числах? (во всех) // получим тру

type Answer_2 = number extends 64 ? true : false; // все число включают в себя 64? (и да и нет, включают только 1 раз) // получим фолс

type Answer_3 = string[] extends any ? true : false; // так как эни - это что угодно, то что бы мы не передали плучим тру

type Answer_4 = string[] extends any[] ? true : false; // передаем массив строк а хотим получить массив чего угодно (эни) полцчим тру

type Answer_5 = never extends any ? true : false; // опять таки хотим получить что угодно, а неве это набор несуществующих значений. получим тру

type Answer_6 = any extends any ? true : false; // хотим получить что угодно из чего угодно, получим тру

type Answer_7 = Date extends { new(...args: any[]): any } 
? true 
: false; 
// если классы использовать в типовых выражениях то получим интерфейс
// соответственно сравниваем интерфейс с методом нью (конструктором), который что-то создает мы не может, получим фолс

type Answer_8 = typeof Date // получим конструктор (DateConstructor)
type Answer_88 = typeof Date extends { new(...args: any[]): any } 
? true 
: false; //конструктор с конструктором можно сравнивать получим тру

type T0 = typeof NaN extends number ? true : false //тру
type T1 = number extends any ? true : false //тру
type T2 = string extends 'a' | 'b' | 'c' ? true : false //фолс
type T3 = { getDay(): number } extends Date ? true : false //фолс
type T4 = (number | string) extends string ? true : false; //фолс
