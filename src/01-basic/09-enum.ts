// enum некая структур, которая сама по себе является значением
enum ShapeKind {
    Circle, // 0
    Square, // 1
}
  
const myShape = ShapeKind.Circle;
  
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
  
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
  
const circle1: Circle = {
    radius: 2,
    kind: ShapeKind.Circle,
}
  
enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
    NOT_AUTH = 403
}
  
enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior'
}
  
interface Dev {
    login: string,
    skills: string[],
    level: Grades,
}
const dev2: Dev = {
    level: Grades.Junior,
    login: 'michey',
    skills: ['HTML', 'CSS', 'JS'],
}
  
function upGrade(user: { level: Grades }) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle
    } else if (user.level === Grades.Middle) {
        user.level = Grades.Senior
    }
}