// Ques 2 - Check Prime Number
// Write a program to check if a given number is prime or not.

// Input: (n = 11) ----->>>>> Output: true;
// Input: (n = 8) ----->>>>> Output: false;


function isPrime(number) {
    if(number <= 1) return false;

    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) return false
    }

    return true;
}

console.log(isPrime(14))