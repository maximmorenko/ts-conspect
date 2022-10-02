// Опишите функции type guards и выведите их типы.

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

function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    } else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
