// exclemation-marc 
// Оператор !

// этот оператор указывает TS что в переменной точно что-то есть, и она не пустая (т.е не равна undefined or null)
// ставится он после переменной

// пример 1
export let word: string | null = null;
const num = 10;
if(num > 5) {
    word = 'hellow';
}

console.log(word!.toLowerCase()); //возможно ворд равен null поэтому нам нужно доказать TS что это не так. используем !

// пример 2
function printName(name?: string) {
    // на входе пока неизветсно что string иди undefined
    // и мы попытаемся переназначить fullName, у которого явно указано string
    const fullName: string = name!; //получим ошибку, если не скажем TS что там точно что-то есть (оператор !)
}

// пример 3
interface Person {
    name: string;
    age: number;
}
function printName2(preson?: Person) {

    console.log(preson?.name); // все ок, печатаем либо name либо undefined
    console.log(preson!.name); // тоже все ок, но печатаем только name
}

// пример 4
// расширим интерфейс
interface Person {
    sex: 'male' | 'female';
}

const people: Person[] = [
    {
        name: 'we',
        age: 1,
        sex: "female",
    },
    {
        name: 'kl',
        age: 2,
        sex: "male",
    },
    {
        name: 'hj',
        age: 3,
        sex: "male",
    },
    {
        name: 'ty',
        age: 4,
        sex: "female",
    }
]

// попробуем собрать всех female
const femalePeople = people.find(person => person.sex === 'female')!; 
// find найдет первого чела у которого пол = female
// но для TS возможен исход со значением undefined, чтобы етого избежать явно скажем ему что чначение не пустое (оператор !)
