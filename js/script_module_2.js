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
