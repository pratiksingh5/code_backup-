<details>
  <summary><strong>2. What is the difference between <code>Promise.resolve</code> / <code>Promise.reject</code> and <code>new Promise</code> in JavaScript?</strong></summary>

### 🔹 `Promise.resolve()` and `Promise.reject()`

These are **shortcut methods** to create promises that are immediately resolved or rejected.

#### ✅ Example:
```js
const resolved = Promise.resolve("Done!");
resolved.then(console.log); // Output: Done!

const rejected = Promise.reject("Error!");
rejected.catch(console.error); // Output: Error!
```

- Use these when the result is already known or available.
- Helpful for mocking async behavior or setting default return values.

---

### 🔹 `new Promise()`

This is used to create a promise with **custom asynchronous logic**.

#### ✅ Example:
```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
};

fetchData().then(console.log); // Output after 1 sec: Data fetched
```

- Use this when you want to wrap or control real async operations like `setTimeout`, `fetch`, file reading, etc.
- Gives full access to when and how to resolve or reject.

---

### 🔍 Key Differences

| Feature         | `Promise.resolve()` / `reject()`         | `new Promise()`                         |
|----------------|------------------------------------------|-----------------------------------------|
| Purpose         | Return an already resolved or rejected promise | Create a custom promise with logic       |
| Syntax Simplicity | One-liner                             | Requires executor function               |
| Use Case        | Immediate result, mocking, chaining      | Actual async tasks, manual control       |
| Control         | No control over timing or logic          | Full control over when to resolve/reject |

---

### 🧠 Summary

- Use `Promise.resolve()` and `Promise.reject()` when you need a **quick resolved/rejected promise**.
- Use `new Promise()` when you need to perform **asynchronous operations** and resolve manually.

</details>