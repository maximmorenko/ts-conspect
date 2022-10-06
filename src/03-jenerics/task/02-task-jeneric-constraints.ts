// Опишите типы для двух функций:

export function keys<T extends object>(obj: T): Array<keyof T> {
    // на входе сужаем входной параметр до объекта, на выходе массив из ключей
    const currentKeys = [];
 
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }
    
    return currentKeys;
}
 
 
export function values<O extends object>(obj: O): Array<O[keyof O]> {
    // на входе сужаем входной параметр до объекта, на выходе массив из значений
    const currentValues = [];
    
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    
    return currentValues;
}
