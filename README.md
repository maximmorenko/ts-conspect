# TypeScript основы
- TypeScript - это JS + строгая система типов
- Статическая типизация 
- Большинство ошибок проявляется при написании кода
- Связь участков описана через типы (+ доступ автоподсказки)

## Альтернативы TS:
- JS Doc (спецальные комментарии с описанием типов) htpps://jsdoc.app/
- Flow (отдельный язык) аналог TS htpps://flow.org/
- языки со статической типизацией (java, c#, c++, python и др) можно компилировать в JS

## Настройка окружения
- формируем храниличще package.json (npm init -y)
- Локальная установка TS (npm install -D typescript)
- Создаем правило как и куда будем собирать проект, для этого нужен фацл с правилами
- используем компилятор от TS
- создаем настройки компиляции в файли конфиг
- делаем инициализацию файла tsc, в терминале пишем сроку: ./node_modules/.bin/tsc --init
- в появившемся конфиге tsconfig.json розкомментируем outDir (выходная дериктория для JS)
- устанавливаем путь для outDir - dist (дистрибутив) "outDir": "dist"
- также в корень конфига добавляем поля include exclude
- "include": ["src"], папка из которой будем брать файлы на компеляцию
- "exclude": ["node_modules"] указываем папку, из которой не брать файлы на компеляцию
- добавляем скрипт stsrt в скрипты в package.json ("start": "tsc --watch",) обращаемся к файлу tsc в режиме watch.
- т.е при старте будет преобразование файлов в режиме просмотра

## для запросов на сервер установим axios
- npm install axios

## [API](https://jsonplaceholder.typicode.com/todos/1)

## Глобальная установка TS
- позволит преобразовывать TSфайлы в JSфайлы
- npm install -g typescript
- npm uninstall -g typescript

## Проверка версии TS
- tsc -v

## Преобразование TS to JS
- tsc index.ts
- создастся файл JS на основе TS
- теперь можно обратиться к js через node (получим рез логики, в данном случае печатаем туду)
- node index.js

## Установка TS node
- позволит и преобразовать и запустить файл TS
- npm install -g ts-node
- запуск команды (ts-node index.js)

## Типы в TypeScript
- TypeScript добавляет слой статических типов
- Проверка типов осуществляется при компелпяции или проверке исходного кода
- Каждое место хранения данных (переменная либо ключ в объекте либо параметр в функции) имеет статический тип
- тип статический, а значения (динамические), могут меняться
- провеврка типов гарантирует что значения всегда будут соответствовать прогнозам
- проверка случится ещедо запуска кода

## Аннотация типов (указание типа)
- let x: number; //не undefined, х не будт прочитан
- TS не будет читать х пока ему не будет задано значение

## Вывод типа
- в TS есть возможность определять тип, в большинстве случаев аннотация не нужна
- если переменная let то тип данных прпеделяется автоматом

## Определение типа через выражение
## Тип данных union (составной)
- когда нужно указать несколько типов то используется оператор пайпа pipe |
- let myScore: number | string; // либо число либо строка и никакой другой!

## Псевдоним типа (алиас)
- При частом использовании составного типа, ему задают псевдоним (алиас)
- type Score = number | string;
- const myScore: Score = 7;
- Имена псевдонимов в большой буквы

## Когда аннотация типа нужна?!
- 1 когда функция возвращает тип any и мы хотим уточнить значение (any - любой тип данных)
- 2 когда объявление переменной и присвоение ей значения происходят на разных строчках
- 3 когда мы хотим чтобы тип был сложносоставной и не определялся автоматически

## Подключение рекомендованного конфига
- посли инициализации файла tsc, (./node_modules/.bin/tsc --init) получим базовый tsconfig
- дальше можно удалить все внутри объекта, будем наследоваться от рекомендуемого
- для этого нужно для начала установить тот другой, выбираем нужный по ссылке (https://github.com/tsconfig/bases/)
- например для Create React App (npm install --save-dev @tsconfig/create-react-app)
- дальше расширяем наш базовый конфиг новым установленным ("extends": "@tsconfig/create-react-app/tsconfig.json")
- если какие-то поля не устраивают или чего-то не хватает, то можем в фазовом переопределить и добавить новые поля.
