// jenerics
// дженерики — это возможность создавать компоненты, работающие не только с одним, а с несколькими типами данных".

// Значит, основная идея состоит в том, что дженерики позволяют нам создавать некие 
// повторно используемые компоненты, работающие с различными типами передаваемых им данных

// пример1
// в коде явно прослеживается компонент у которого меняется значение (тип данных)
function head(value: string): string;
function head(value: number[]): number;
function head(value: string[]): string;
function head(value: boolean[]): boolean
function head(value: Date[]): Date;

function head(value: any): any {
    return value[0];
}

interface ModelData {
    title: string;
    value: string; //может быть любой тип: num arr boolean obj ...
    // чтобы не создавать десяток таких интерфейсов с разными типами value нужен какой-то инструмент
    // именно для этого нужны дженерики
}
