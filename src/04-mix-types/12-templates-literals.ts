// Шаблонные литералы, утилита Capitalize


// literal - это тип который принимает какое-то конкретное значение
export {};

// есть возможность налету формировать юнионы с помощью шаблонных литералов
// создадим какой-то тип и используем его как шаблон
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin-${Side}`; //получим "margin-top" | "margin-right" | "margin-bottom" | "margin-left"

// утилита Capitalize
// дает возможность сделать первую букву заглавной
type Padding = `padding${Capitalize<Side>}`; // "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"

type Margin2 = `margin${'' | Capitalize<Side>}`; // "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft"


// пример 2
// задача объединить типы чтобы Direction и Position не пересекались
type Direction = 'down' | 'left'  | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';

type FadeClassName = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`
// получим "fadeIn" | "fadeInTop" | "fadeInRight" | "fadeInBottom" | "fadeInLeft" | "fadeInDown" | "fadeInUp" | "fadeOut" | "fadeOutTop" | "fadeOutRight" | "fadeOutBottom" | "fadeOutLeft" | "fadeOutDown" | "fadeOutUp"


// пример 3
// задача создать тип на основе интерфейса Car который будет создавать поля динамически

interface Car {
    brend: string;
    model: string;
    year: number;
}

type CarFactory = {
    // формируем ключ
    [key in keyof Car as `set${Capitalize<key>}`]
    : 
    // формируем значение в виде функции
    (car: Car, value: Car[key]) => void
}

// получим
// {
//     setBrend: (car: Car, value: string) => void;
//     setModel: (car: Car, value: string) => void;
//     setYear: (car: Car, value: number) => void;
// }
