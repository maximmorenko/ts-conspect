// оператор keyof создает union неокторых значений

// пример 1
type WindowProp  = keyof Window;
// теперь WindowProp содержита все колючи глобального объекта Window
const myValue: WindowProp = "alert"; // можно выбрать любое значение из доступного теперь списка (ctrl + _ )

// пример 2
export interface PC {
    brand: string;
    year: number;
}

type Type1 = keyof PC; // brand | year
const value1: Type1 = "brand";

// пример 3
type Type2 = keyof [string, number]; // будут доступны все методы массива
const value2: Type2 = "map"; // можно выбрать любой тип массива, или индекс
