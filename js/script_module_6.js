"use strict";

// ===== Метод forEach(callback) =====

// Task_1
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (number, index) {
    totalPrice += orderedItems[index];
  });
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// Task_2
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

// Task_3
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  firstArray.forEach(function (number) {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });
  return commonElements;
  // Пиши код выше этой строки
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]

// ===== Стрелочные функции. =====

// Task_4
// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
};
console.log(calculateTotalPrice(5, 100));

// ===== Неявный формат =====

// Task_5
// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ===== Стрелочные функции как коллбеки =====

// Task_6
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её
// объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в метод
// forEach() на стрелочную функцию.
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
};
// Пиши код выше этой строки

// Task_7
// Замени объявление функции filterArray() и коллбек для метода forEach() на
// стрелочные функции.
const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};

// Task_8
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на
// стрелочные функции.
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [ 12, 27, 3 ]

// ===== Чистые функции =====

// Task_9
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет
// каждый элемент, значение которого это чётное число, добавляя к нему значение
// параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив
// чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными
// значениями.
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const clean = [];
  numbers.forEach((element) => {
    if (element % 2 !== 0) {
      clean.push(element);
    }
    if (element % 2 === 0) {
      clean.push(element + value);
    }
  });
  return clean;
  // Пиши код выше этой строки
}
console.log(changeEven([1, 2, 3, 4, 5], 10)); // [ 1, 12, 3, 14, 5 ]

// ===== Метод map() =====

// Task_10
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);

// ===== Метод map() и массив объектов =====

// Task_11
// Задание
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки
const titles = books.map((book) => book.title);
console.log(titles);

// ===== Метод flatMap() =====

// Task_12
// Задание
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];
// Пиши код ниже этой строки
const genres = books.flatMap((book) => book.genres);
console.log(genres); // [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ]

// Task_13
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// Task_14
// Задание
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
const getUserEmails = (users) => {
  return users.map((user) => user.email);
};

// ===== filter и find =====

// Task_15
// Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers); // [ 24, 82, 36, 18, 52 ]
console.log(oddNumbers); // [ 17, 61, 47, 73 ]

// ===== Фильтрация уникальных элементов =====

// Task_16
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);

// ===== Метод filter() и массив объектов =====

// Task_17
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";
// Пиши код ниже этой строки
const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);

// Task_18
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

// Task_19
// Задание
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge);
};

// Task_20
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

// Task_21
// Задание
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех
// пользователей(свойство friends).У нескольких пользователей могут быть одинаковые
// друзья, сделай так чтобы возвращаемый массив не содержал повторений.
const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((elem, index, arr) => arr.indexOf(elem) === index);
};

// Task_22
// Задание
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных
// пользователей, значение свойства isActive которых true.
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};

// Task_23
// Задание
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
};

// ===== Метод find() =====

// Task_24
// Задание
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";
// Пиши код ниже этой строки
const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

// Task_25
// Задание
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

// ===== Метод every() =====

// Task_26
// Задание
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// Task_27
// Задание
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive === true);
};

// ===== Метод some() =====

// Task_28
// Задание
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// Task_29
// Задание
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных
// пользователей(свойство isActive) и возвращала true или false.
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive === true);
};

// ===== Метод reduce() =====

// Task_30
// Задание
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки
const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

// ===== Метод reduce() и массив объектов =====

// Task_31
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
const players = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки
const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);

// Task_32
// Задание
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// Пиши код ниже этой строки
const calculateTotalBalance = (users) => {
  return users.reduce((all, user) => all + user.balance, 0);
};
// Пиши код выше этой строки

// Task_33
// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
const getTotalFriendCount = (users) => {
  return users.reduce((all, user) => all + user.friends.length, 0);
};

// ===== Метод sort() =====

// Task_34
// Задание
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// ===== Свой порядок сортировки чисел =====

// Task_35
// Задание
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ===== Свой порядок сортировки строк =====

// Задание
// Онлайн библиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

// ===== Сортировка объектов =====

// Task_37
// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// Task_38
// Задание
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
const sortByAscendingBalance = (users) => {
  return users.sort((a, b) => a.balance - b.balance);
};

// Task_39
// Задание
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

// Task_40
// Задание
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

// ===== Цепочки методов (чейнинг, chaining) =====

// Task_41
// Задание
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

// Task_42
// Задание
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

// Task_43
// Задание
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .sort((a, b) => a.localeCompare(b))
    .filter((value, idx, arr) => arr.indexOf(value) === idx);
};

// Task_44
// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((itemOf) => itemOf.gender == gender)
    .reduce((summ, itemOf) => summ + itemOf.balance, 0);
};
