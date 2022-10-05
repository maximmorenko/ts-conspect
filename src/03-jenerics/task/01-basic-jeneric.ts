//Затипизируйте данную функцию:

// function append(el, list) {
//   return list.concat(el)
// }

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el)
}

append(1, [23, 56])
append('1', ['23', '56', 'tytyty'])

// полиморфизм - использование разных типов для одного функционала
