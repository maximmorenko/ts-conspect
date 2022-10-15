// геттеры и сеттеры

export class Rectangle {
    constructor(public width: number, public height: number) {}

    get area(): number {
        // если этот метод преобразовать как гетер, то в инстансе не нужно будет его вызывать, чтобы получить значение
        return this.height * this.width;
    }
}
//  инстанс
const rect1 = new Rectangle(10, 20)
//rect1.area() //до геттета
rect1.area // после геттера. это значение нельзя переписать, оно становится как readonly

export class Car {
    constructor(public color: string, private _maxSpeed: number) {}
    // к приватному свойству по прежнему можно обращаться только в теле класса, в геттере и сеттере в том числе
    get maxSpeed(): number {
        return this._maxSpeed;
    }

    set maxSpeed(speed: number) {
        if (speed > 0)
        this._maxSpeed = speed;
    }
}

const c1 = new Car('red', 1243)
c1.maxSpeed = 0;
