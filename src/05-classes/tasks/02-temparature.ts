//Опишите типы для класса Temperature:

// export class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
 
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
 
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }
 
//   static fromFahrenheit(value) {
//     return new Temperature(Math.round((value - 32) / 1.8));
//   }
// }



export class Temperature {
    constructor(public celsius: number) {}

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value: number) {
        this.celsius = (value - 32) / 1.8;
    }

    public static fromFahrenheit(value: number) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}

const temp0 = Temperature.fromFahrenheit(63)
temp0.celsius
const temp1 = new Temperature(25);
temp1.fahrenheit = 33
