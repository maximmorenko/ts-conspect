// утилиты ReturnType Parameters ConstructorParameters
export {};


function f1(arg: {a: number, b: string}, arg2: {c: number}) {
    return arg.a + arg.b + arg2.c;
}

// в случае если нам нужно узнать возвращаемый тип используем ReturnType
type T0 = ReturnType<typeof f1> // string

// в случае если нам нужно узнать типы входных парамеров используем Parametrs
// в результате получаем кортеж из типов параметров
type T1 = Parameters<typeof f1> // [arg: {a: number; b: string;}, arg2: {c: number;}]]

// class
// чтобы получить тип параметров конструктора класса используем ConstructorParameters
// в результате получаем кортеж из типов параметров
class Car {
    constructor(brend: string, model: string) {}
}
type T2 = ConstructorParameters<typeof Car> //[brend: string, model: string]
