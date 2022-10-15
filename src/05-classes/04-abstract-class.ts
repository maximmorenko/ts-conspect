// в TS есть абстрактыные классы, которых нет в обычном JS
// создается с помощью ключевого слова abstract, ставится вначале
// из этого класса нельзя будет сделать инстанс
// абстрактыными могут быть свойства и методы, абстрактный метод или свойство обязует дочерние классы описать этот метод

abstract class Vehicle {
    abstract drive(speed: number): void;
    abstract color: string;
    public stop(): void {
        console.log('stopped');
    }
}

export class Car extends Vehicle {
    // класс Car обязан описать метод drive и свойство color указанные в родителе как абстактные
    constructor(public color: string) {
        super();
    }

    drive(speed: number) {
        console.log(speed);
    }
}
