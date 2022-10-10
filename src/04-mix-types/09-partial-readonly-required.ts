// утилиты partial readonly required
export {};

interface Todo {
    id: string,
    title: string,
    description: string,
    complited: boolean,
    createdAt: number,
}

// утилита readonly 
// делает все поля перданого интерфейса только для чтения
type Todo1 = Readonly<Todo>

// утилита partial
// делает все поля перданого интерфейса необязательными
type Todo2 = Partial<Todo>

// утилита required
// делает все поля перданого интерфейса обязательными
type Todo3 = Required<Todo>


// приктика

//Question 1:
//Дан тип Developer. Как на базе него создать тип FrontendDeveloper, у которого все ключи будут совпадать с оригинальным Developer, но будут обязательными?

type LanguageLevel = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

type Developer = {
  html: LanguageLevel,
  css: LanguageLevel,
  javascript?: LanguageLevel,
  typescript?: LanguageLevel,
}

type FrontendDeveloper = Required<Developer>;


//Question 2:
//Дан тип Developer и функция для обновления его полей. Как правильно задать тип для второго параметра функции updateDeveloper?

type LanguageLevel1 = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

type Skill = { language: string, level: LanguageLevel }

type Developer1 = {
  id: string,
  login: string,
  level: 'junior' | 'middle' | 'senior',
  skills: Skill[],
}

function updateDeveloper(dev: Developer1, updatedFields: Partial<Developer1>) {
  return { ...dev, ...updatedFields }
}
