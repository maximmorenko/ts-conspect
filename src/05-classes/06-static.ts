// Статическими могут быть и свойства и методы

export class Circle {
    // по умолчанию мод. доступа у статических свойств и методов это public
    protected static pi: number = 3.14;

    private static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    constructor(public radius: number) {}

    get area() {
        return Circle.pi * this.radius * this.radius
    }
}

// из инстансов мы не достанем статические значения
const c1 = new Circle(34);

// но может обратиться к класу и взять у него
// Circle.pi
// Circle.calculateArea(9)

class Ellipse extends Circle {
    constructor(public radius: number) {
        super(radius);
        Circle.pi
    }
}
