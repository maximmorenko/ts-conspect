// условные типы conditions

// пример 1
export const x = 1;
// проверяем на отрицательное
const isXNegaive = x >= 0 ? 'no' : 'yes' // const isXNegaive: "no" | "yes"



interface StringRecord {
    [key: string]: string; //динамические ключи - строки, значения тоже строки
}

interface DateRecord {
    [key: string]: Date; //динамические ключи - строки, значения - Даты
}
// создадим условный тип, будем проверять, что в момент создания типа у нас строка или нет, если строка, 
// то используем первый интерфейс StringRecord
// в противном случае испольжуем второй DateRecord
type MyRecord<T> = T extends string ? StringRecord : DateRecord
// создадим еще один тип, инстанс MyRecord и передадим в дженерик string
type obj1 = MyRecord<string>
// теперь может создать объект с любым наюором ключей, но значением толь строками
const o1: obj1 = {
    1212: 'er',
    'dd': 'dfdf',
    //'erer': 56, //Тип "number" не может быть назначен для типа "string"
}
