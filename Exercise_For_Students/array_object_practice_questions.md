
# 🧪 JavaScript Practice Questions – Arrays & Objects

This file includes 15 practice questions covering:

- `Array.slice()`
- `Array.splice()`
- Spread Operator (`...`)
- Rest Operator (`...`)
- `Object.keys()` / `Object.values()` / `Object.entries()`

---

## 🔹 Array.slice()

### Question 1
```js
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// Get the first three elements using slice
```

### Question 2
```js
const numbers = [1, 2, 3, 4, 5];
// Use slice to get [3, 4] from the array
```

### Question 3
```js
const animals = ['cat', 'dog', 'elephant', 'tiger'];
// Use slice to copy the entire array
```

---

## 🔹 Array.splice()

### Question 4
```js
const colors = ['red', 'blue', 'green'];
// Use splice to insert 'yellow' at index 1
```

### Question 5
```js
const arr = [10, 20, 30, 40, 50];
// Use splice to remove 2 elements starting from index 2
```

### Question 6
```js
const names = ['Alice', 'Bob', 'Charlie'];
// Replace 'Bob' with 'David' using splice
```

---

## 🔹 Spread Operator (`...`)

### Question 7
```js
const a = [1, 2, 3];
const b = [4, 5];
// Merge arrays a and b into a new array using spread operator
```

### Question 8
```js
const obj1 = { x: 1 };
const obj2 = { y: 2 };
// Combine both objects into a new object using spread
```

### Question 9
```js
const original = [1, 2, 3];
// Make a shallow copy of the original array using spread
```

---

## 🔹 Rest Operator (`...`)

### Question 10
```js
function sum(...args) {
  // Return the sum of all arguments
}
console.log(sum(1, 2, 3)); // Output: 6
```

### Question 11
```js
function firstAndRest(a, ...rest) {
  console.log("First:", a);
  console.log("Rest:", rest);
}
firstAndRest(10, 20, 30, 40);
```

### Question 12
```js
const { a, ...rest } = { a: 1, b: 2, c: 3 };
// Log values of 'a' and 'rest'
```

---

## 🔹 Object.keys(), values(), entries()

### Question 13
```js
const person = { name: "Alice", age: 25, job: "Engineer" };
// Use Object.keys to get all keys from person
```

### Question 14
```js
const scores = { math: 90, science: 85, english: 88 };
// Use Object.values to get an array of all scores
```

### Question 15
```js
const settings = { theme: "dark", layout: "grid" };
// Use Object.entries to iterate and log key-value pairs
```

---

**💡 Tip:** Try solving without looking up syntax first — it helps reinforce learning.
