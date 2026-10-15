
# 🧠 JavaScript Guess The Output – Hoisting, Scope, Scope Chain, let, var, const

These 15 tricky JavaScript questions test your understanding of **hoisting**, **scope**, **scope chain**, and the differences between **var**, **let**, and **const**.

---

### 🔹 Question 1
```js
console.log(a);
var a = 10;
```
---

### 🔹 Question 2
```js
console.log(b);
let b = 20;
```
---

### 🔹 Question 3
```js
var x = 1;
function test() {
  console.log(x);
  var x = 2;
}
test();
```
---

### 🔹 Question 4
```js
let a = 5;
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
const fn = outer();
fn();
```
---

### 🔹 Question 5
```js
const a = 10;
a = 20;
console.log(a);
```
---

### 🔹 Question 6
```js
var a = 10;
(function() {
  console.log(a);
  var a = 5;
})();
```
---

### 🔹 Question 7
```js
let a = 10;
{
  let a = 20;
  console.log(a);
}
console.log(a);
```
---

### 🔹 Question 8
```js
(function() {
  console.log(a);
  let a = 15;
})();
```
---

### 🔹 Question 9
```js
function foo() {
  if (true) {
    var x = 5;
  }
  console.log(x);
}
foo();
```
---

### 🔹 Question 10
```js
function foo() {
  if (true) {
    let x = 5;
  }
  console.log(x);
}
foo();
```
---

### 🔹 Question 11
```js
console.log(typeof a);
var a = 'hello';
```
---

### 🔹 Question 12
```js
console.log(typeof b);
let b = 'hello';
```
---

### 🔹 Question 13
```js
function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  x = 20;
  return inner;
}
const innerFn = outer();
innerFn();
```
---

### 🔹 Question 14
```js
var a = 1;
function test() {
  console.log(a);
  var a = 2;
  console.log(a);
}
test();
```
---

### 🔹 Question 15
```js
let a = 1;
function one() {
  let a = 2;
  function two() {
    console.log(a);
  }
  return two;
}
const func = one();
func();
```

---

**Tip:** Try to reason out the answers before running the code. These questions are designed to uncover subtle behaviors in JavaScript's scoping and hoisting model.
