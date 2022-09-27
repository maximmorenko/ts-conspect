"use strict";
// при типизации функций вспегда первым делом нужно задать тип входным параметрам
// также, не обязательно но часто, нужно явно указывать тип на выходе
function sum(a, b) {
    return a + b;
}
sum(2, 7);
// сумма в виде стрелочной функции
const sum2 = (a, b) => a + b;
sum2(5, 8);
// сумма в виде функционального выражения
con;
// есть специальные возврощаемые типы 
// тип void (функция завершится) можно не указывать
function log(name) {
    console.log('hi', name);
}
// тип never (функция не завершится)
function crash() {
    throw new Error('crash');
}
// необязательный опциональный параметр функции помесается знаком ? 
// в результате тип становится либо указаный либо андефаинд string | undefined
function logi(name, userId) {
    console.log('hi', name, 'with ID', userId || 'anonym');
}
logi('Mac', '123');
// нужно явно указать какие елеменыт в массиве
function average(...nums) {
    const sum = nums.reduce((current, total) => current = total, 0);
    return sum / nums.length;
}
average(1, 2, 3, 4);
