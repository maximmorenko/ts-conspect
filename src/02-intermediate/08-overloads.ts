// перегрузки

// пример1
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    // в связи с тем что непонятно что зайдет в строка или число и TS не может складывать число со строкой будет ошибка
    // на помощь приходит перегрузка
    return a + b;
}
add(1, 3) //все ок
// add(1, '') не ок

// пример2
type asyncCb = (res: number) => number
// перегрузки
function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;
// Promise<number> - эта строка говорит что промис впернет значение
function asyncSum(a: number, b: number, cb?: asyncCb): any {
    const result = a + b;
    if(cb) {
        return cb(result)
    }
    // если колбека нет то возвращаем промис ресолм и передаем в него результат
    return Promise.resolve(result)
};
// теперь у функции два сценария выхова
asyncSum(2, 3)
