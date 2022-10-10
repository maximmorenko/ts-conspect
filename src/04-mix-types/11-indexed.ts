// Доступ по индексу

export {};

// пример 1
interface DtaMode1 {
    id: string;
    title: string;
    elements: {
        header: {
            // такую глубокую вложеность лучше не использовать
            // разбивать на мелкие интерфейсы
            title: string;
            descrition: string;
            links: string[];
        };
        body: {
            title: string;
            content: {};
        };
        footer: {
            descrition: string;
            links: string[];
        };
    }
}

// для обращения к полю используют квадратные скобки
type T0 = DtaMode1['elements']['header']['title'] //получим string

// пример 2
// кортеж может содержать не ограниченное кол-во елементов
type SomeTuple = [number, string, boolean, ...string[]]// первые три явные, остальные - массив строк, но сколько их неизвестно
type T1 = SomeTuple[0] //number
type T2 = SomeTuple[48] //string
const arr: SomeTuple = [12, 'erer', true, 'ty', '', '56'];


// пример 3
// as const
const sizes = ['small', 'medium', 'large'] as const; // readonly
//если не указывать никакой тип, а указать словосочетание as const
// то тип автоматически становится readonly

// из этого массива можно сделать юнион
// для этого нужно обратиться не к конкретному индексу массива а ко всем, записав в квадратные скобки слово sizes[number]
type T3 = typeof sizes[number] //получим "small" | "medium" | "large"
