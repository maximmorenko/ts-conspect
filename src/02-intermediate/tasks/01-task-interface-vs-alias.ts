// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title

// Vehicle : wheels, year, brand

// Car: type, model +Product, +Vehicle


// вар елиас
type Product = {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string,
}

type Vehicle = {
    wheels: number,
    year: number,
    brand: string,
}

export type Car = {type: string, model: string} & Product & Vehicle;


// вар интерфейс
// interface Product  {
//     price: number,
//     isNew: boolean,
//     isSale: boolean,
//     title: string,
// }
// interface Vehicle {
//     wheels: number,
//     year: number,
//     brand: string,
// }

// export interface Car extends Product, Vehicle {
//     type: string,
//     model: string,
// }

// export const car: Car = {

// }
