
# JavaScript Callback and Higher-Order Function Exercises

## 📘 Callback Function Exercises

---

### Question 1:

Create a function named `greet` that takes a name and a callback function. The callback should be executed with the greeting message.

```js
function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

greet("Alice", function(message) {
  console.log(message);
});
// Expected Output: "Hello, Alice!"
```

---

### Question 2:

Write a function named `processNumbers` that accepts an array and a callback. The callback should double each number and return the result.

```js
function processNumbers(arr, callback) {
  const result = [];
  for (let num of arr) {
    result.push(callback(num));
  }
  return result;
}

const numbers = [1, 2, 3];
const result = processNumbers(numbers, function(num) {
  return num * 2;
});

console.log(result); // Output: [2, 4, 6]
```

---

### Question 3:

Create a function `fetchData` that simulates data fetching using `setTimeout` and takes a callback to run when data is "fetched".

```js
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'John' };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log("Data received:", data);
});
```

---

## 📘 Higher-Order Function Exercises

---

### Question 4:

Write a higher-order function `calculator` that takes two numbers and a callback function to perform operations like add, subtract, etc.

```js
function calculator(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log(calculator(5, 3, add));      // Output: 8
console.log(calculator(5, 3, subtract)); // Output: 2
```

---

### Question 5:

Create a function `repeatAction` that takes a function and a number `n`, and calls the function `n` times.

```js
function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action();
  }
}

repeatAction(() => {
  console.log("Running...");
}, 3);

// Output:
// Running...
// Running...
// Running...
```

---

### Question 6:

Write a higher-order function `filterArray` that takes an array and a condition function, and returns a filtered array.

```js
function filterArray(arr, condition) {
  const result = [];
  for (let item of arr) {
    if (condition(item)) {
      result.push(item);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const isEven = (n) => n % 2 === 0;

console.log(filterArray(numbers, isEven)); // Output: [2, 4]
```
