// Составные части конфига

// есть 6 частей конфига:
// extends (необязательный раздел, говорит нам что конфиг может быть разбит на части)
// files (для небоольших проектов)
// include exclude
// compailerOptions (настройки компилятора)
// references
// typeAcquisition

// Базовые настройки:

// include 
// в этом разделе пишем путь, папку, откуда барать файлы тс для компиляции

// exclude
// в этом разделе указываем какие файлы, кпапки нужно исключить из компиляции

// files
// в этом разделе перечисляем конкретные файлы (путь к файлам) для компиляции (на случай когда не пользуемся include exclude)

// extends
// этот раздел нужен для рашлирения тс коняига который идет в продакшин, мы можем создать еше одн конфиг, для девелопера 
// и используя ключевое слово extends в ключить в него уже существующий конфиг для породакшина плюс добавить собственные настройки
// например: tsconfig-dev.json
// {
//     "extends": "./tsconfig.json",
//     "compailerOptions": {
//         "sourcemap": true,
//     },
// }
// как запуститьновый конфиг:
// в tsc help есть ссылка. (./node_modules/.bin/tsc -p ./tsconfig-dev.json)
