// Опишите функции type guards и выведите их типы.
// Приветствую
// Подскажите пожалуйста
// 1.
// эта строка говорит о том, что возможерн пустой заказ, верно?
// type PossibleOrders = TelephoneOrder | InternetOrder | undefined;
// Как достигается undefined ? Ведь по условию в интерфейсах поля обязательные.
const order3: PossibleOrders = {
    address: 'dddd3',
   // создать заказ без обязательных полей TS не дает такой возможности
}


// 2.
// Возможен ли такой вариант решения
interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}
 
type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

// guards
function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
    return (order as InternetOrder).email !== undefined;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
    return (order as TelephoneOrder).callerNumber !== undefined;
}

// function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
//     return !!order && 'email' in order;
// }

// function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
//     return !!order && 'callerNumber' in order;
// }


function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    } else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}

const order1: PossibleOrders = {
    address: 'dddd',
    callerNumber: 'cccc',
}
const order2: PossibleOrders = {
    address: 'dddd2',
    email: 'mmmm',
}
const order3: PossibleOrders = {
     address: 'dddd3',
    // создать заказ без обязательных полей TS не дает такой возможности
}


makeOrder(order1)
makeOrder(order2)
makeOrder(order3)
