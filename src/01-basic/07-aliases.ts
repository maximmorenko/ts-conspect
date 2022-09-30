// aliases элиасы - это вынесеные отдельно типы 
// задаем псевдоним для какого-то типа, с большой буквы
type MyBoolian = false | true; //union

// елиас для пары (кортежа)
type Pair = [string, string];
// елиас для массива (кортежей)
type Pairs = Pair[];

// интерфейс кар в виде елиаса, разница только в знаке равно
type CarDifferent = {
    wheels: number;
    brend: string;
    type: string;
    isNew: boolean;
    color?: string;

    [key: string]: unknown;
}
// возможностей у элиаса гораздо больше чем у интерфейса
