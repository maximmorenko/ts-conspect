// области видимости

// создадим функцию по созданию кортежей (tuple)
export function tuplePairCreator<T>(first: T) {
    return function<U>(second: U): [T, U] {
        // возвращаем кортеж из  T, U
        return [first, second]
    }
}

const toTupleWith1 = tuplePairCreator(1) //передаем первое значение , получим [number, U]

// передаем второе значение
const val1 = toTupleWith1(2) //получим кортеж [number, number]
const val2 = toTupleWith1('hellow') // получим кортеж [number, string] 
const val3= toTupleWith1(true) // получим кортеж [number, boolean]
