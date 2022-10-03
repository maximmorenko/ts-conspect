// Опишите перегрузку для заданной функции.
// Дана функция head, которая возвращает либо первый символ переданной строки, 
// либо первый элемент переданного массива.
// Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки.

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean

function head(value: any): any {
    return value[0];
}

head([true, false]) // true
head([37, 56, 56565]) // 37
head('eeerrr') // e
