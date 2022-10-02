// альтернативой защитникам типов являются никие утверждения выбрасывающие ошибки
// asserts - утверждение как защита

export type User = {
    name: string;
    displayName: string | null; //дополнительное имя, неоригинальное
}

// функция проврки наличия поля 
function isHasUserDisplayName(user: User): asserts user is User & { displayName: string } {
    if(!user.displayName) throw new Error('user has no displayName');
    // раз мы выбрасываем ошибку, то возвращаемый вывод функции будет утверждением двух фактов
    // перовое это то, что юзер это юзер
    // второе, то что поле displayName есть
}

// функция вывода дополнительного имени
function logUserByDisplayName(user: User) {
    // if(!user.displayName) throw new Error('user has no displayName'); // эту проверку можно вынести в отдельную функ.
    isHasUserDisplayName(user)
    // если ок, то печатаем
    console.log(user.displayName.toUpperCase());
}
