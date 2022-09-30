// create a function that change level of incomeing developer

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string,
    skils: string[],
    level: Level,
}

function gradeDeveloper(dev: {level: Level}, newLevel: Level) {
    // на входе ждем девелопера либо с интерфейсом dev: Developer либо с маской dev: {level: Level} на выбор
    // также на входе ждем новый уровень девелопера
    dev.level = newLevel;
}

const dev1: Developer = {
    level: 'junior',
    login: 'mac',
    skils: ['html', 'css', 'js'],
}

gradeDeveloper(dev1, 'middle')
