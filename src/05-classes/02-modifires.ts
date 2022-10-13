export class Vehicle {
    // по умолчанию все модификаторы являются доступными public
    public drive(speed: number): void {
        console.log('let us go', speed.toFixed());
        // хотим передавать скорость в приватный модификатор лог
        this.log(speed)
    }
    public stop(): void {
        console.log('stopped');
    }
    // свойство private делает модификатор нидоступным для изменения снаружи. им можно пользоваться только внутри родного класса
    private log(speed: number): void {
        console.log('Vehicle has changed speed to', speed);
    }
    // свойство protected позволяет изпользовать это свойство в дочерних классах, но не в инстансах
    protected alternativeLog(text: string) {
        console.log(text.toUpperCase());
    }
}

class Car extends Vehicle {
    changeSpeed(speed: number): void {
        this.drive(speed)
        this.alternativeLog('hi')
    }


}

// инстанс
const car1 = new Car();

car1.drive(32)
car1.stop()
// car1.log(23) //недоступен
car1.changeSpeed(56)
