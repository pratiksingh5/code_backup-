// Ques 1 - Find Factorial
// Write a program to find the factorial of a given number.

// Input: (n = 5) ----->>>>> Output: 120;
// Input: (n = 7) ----->>>>> Output: 5040; 


function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n - 1)
}

const result = factorial(4);
console.log("result ", result)