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
