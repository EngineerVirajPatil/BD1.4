const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our Service!';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is strong';
  } else {
    return 'Password is weak';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

app.get('/sum', (req, res) => {
  let number1 = parseFloat(req.query.number1);
  let number2 = parseFloat(req.query.number2);
  res.send(calculateSum(number1, number2).toString());
});

function checkSubscriptionStatus(username, isSubscribed) {
  let result;
  if (isSubscribed) {
    result = username + ' is subscribed';
  } else {
    result = username + ' is not subscribed';
  }
  return result;
}

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === 'true';
  res.send(checkSubscriptionStatus(username, isSubscribed));
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - discount;
  return finalPrice;
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat((price * req.query.discount) / 100);
  res.send(calculateDiscountedPrice(price, discount).toString());
});

function getGreeting(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' years old ' + gender + '.';
}

app.get('/personalized-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreeting(age, gender, name));
});

function calculateFinalPrice(price, discount, tax) {
  let discountedPrice = price - discount;
  let finalPrice = discountedPrice + (discountedPrice * tax) / 100;
  return finalPrice;
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat((price * req.query.discount) / 100);
  let tax = parseFloat(req.query.tax);
  res.send(calculateFinalPrice(price, discount, tax).toString());
});

function calculateTotalExcercise(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calculateTotalExcercise(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
