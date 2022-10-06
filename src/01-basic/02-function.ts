// при типизации функций вспегда первым делом нужно задать тип входным параметрам
// также, не обязательно но часто, нужно явно указывать тип на выходе
function sum(a: number, b: number): number {
    return a + b;
}
sum(2, 7);
// сумма в виде стрелочной функции
const sum2 = (a: number, b: number): number => a + b;
sum2(5, 8);
// сумма в виде функционального выражения
const sum3 = function sum(a: number, b: number): number {
    return a + b;
}


// есть специальные возврощаемые типы 
// тип void (функция завершится) можно не указывать
function log(name: string): void {
    console.log('hi', name);
}

// тип never (функция не завершится)
function crash(): never {
    throw new Error('crash')
}

// необязательный опциональный параметр функции помесается знаком ? 
// в результате тип становится либо указаный либо андефаинд string | undefined
function logi(name: string, userId?: string): void {
    console.log('hi', name, 'with ID', userId || 'anonym');
}
logi('Mac', '123');

// нужно явно указать какие елеменыт в массиве
export function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current = total, 0)

    return sum / nums.length;
}

average(1,2,3,4)
