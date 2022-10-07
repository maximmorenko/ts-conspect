// маппинг типов

// пример 1
type PcBrend = {
    name: string;
    country: string;
    createdAt: Date;
}

// создадим юнион брендов
type KnownBrends = 'apple' | 'lenovo' | 'hp' | 'dell' | 'huawei'

type myPcRecord = {
    // [key: string]: PcBrend; //динамический строковый ключ с заданым типом значения (объект)
    // в ключ можно записать только одну сущность, юнион или массив нельзя
    // как это реалиозовать?
    // для етого есть мапинг, через ключевое слово указываем список значений (юнион)
    // динамический ключ для мапинга принято писать с большой буквы
    [BrendKey in KnownBrends]?: PcBrend;
}

const brendRecord: myPcRecord = {
    dell: {
        country: 'usa',
        createdAt: new Date(),
        name: 'dell',
    }
};

// пример с функцией
function printPcCatalog(pcCatalog: myPcRecord) {
    console.log(pcCatalog.apple?.country)
}

// пример с глобальным объектом Window
type PartOfWindow = {
    [Key in 'navigator' | 'screen' | 'document' ]?: Window[Key];
}

const screen: PartOfWindow = {
    screen: window.screen
}

export {}
