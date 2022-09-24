# TypeScript основы


## формируем храниличще package.json
- npm init -y

## для запросов на сервер установим axios
- npm install axios

## [API](https://jsonplaceholder.typicode.com/todos/1)

## Глобальная установка TS
- позволит преобразовывать TSфайлы в JSфайлы
- npm install -g typescript

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
