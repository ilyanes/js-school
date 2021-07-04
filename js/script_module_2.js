"use strict";

// Task_1
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}
checkAge(20);
// "You are an adult"
checkAge(8);
// "You are a minor"

// Task_2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
  // Change code above this line
}

// Task_3
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
  // Change code above this line
}

// Task_4
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

// Task_5
const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// Task_6
const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach";
fruits[3] = "banana";
// Write your code under this line

// Task_7
const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length;
// 4 длина

// Task_8
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// Task_9
function getExtremeElements(array) {
  // Change code below this line
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  const firstElement = array[0];
  const newArray = [firstElement, lastElement];
  return newArray;
}
getExtremeElements([1, 2, 3, 4, 5]);
// [1.5]

// Task_10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}

// Task_11
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  message = message.split(" ").length * pricePerWord;
  return message;
}

// Task_12
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);

  // Change code above this line
  return string;
}
makeStringFromArray(["top", "picks", "for", "you"], "_");
// top_picks_for_you

// Task_13
function slugify(title) {
  // Change code below this line
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
}
// slugify("Arrays for begginers") возвращает "arrays-for-begginers"

// Task_14
// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов
const fruits = ["apple", "plum", "pear", "orange", "banana"];
// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

// Task_15
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

// Task_16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);
  const afterArray = newArray.slice(0, maxLength);
  return afterArray;
  // Change code above this line
}

// Task_17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
const start = 3;
const end = 7;
for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

// Task_18
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}

// Task_19
// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
const fruits = ["apple", "plum", "pear", "orange"];
for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// Task_20
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}

// Task_21
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов
// разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
  const newArray = string.split(" ");
  let longWord = newArray[0];
  for (let i = 0; i < newArray.length; i += 1) {
    if (longWord.length < newArray[i].length) {
      longWord = newArray[i];
    }
  }
  return longWord;
}

// Task_22
// Задание
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

// Task_23
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает
// новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).
function filterArray(numbers, value) {
  // Change code below this line
  const filtrNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      filtrNumbers.push(number);
    }
  }
  return filtrNumbers;
}

// Task_24
// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit);
}

// Task_25
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
  const uniqieElements = [];
  //через фор оф перебрать элементы первого массива,
  for (const element of array1) {
    //через иф проверить включаются элементы второго массива в первый(инклуд),
    if (array2.includes(element)) {
      //вывести общие элементы в Новый массив(push)
      uniqieElements.push(element);
    }
  }
  //и ретерн новый массив
  return uniqieElements;
  // Change code above this line
}

// Task_26
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// FOR - цикл
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// For of цикл
function calculateTotalPrice(order) {
  let total = 0;
  for (const number of order) {
    total += number;
  }
  return total;
}

// Task_27
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// FOR ========
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  for (number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}

// Task_28
// Задание
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6; // остаток 2

// Task_29
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).
function getEvenNumbers(start, end) {
  const result = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

// Task_30
// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
const start = 6;
const end = 27;
let number;
for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);

// Task_31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }
//   return number;
// }
function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log(findNumber(2, 6, 5));

// Task_32
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение)
//     - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
function includes(array, value) {
  // Change code below this line
  for (i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
