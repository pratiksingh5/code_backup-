// Ques 5 - Check the given number is even or odd 

// Input: n = 123 ----->>>>> Output: Odd
// Input: n = 9876 ----->>>>> Output: Even

function isEven(number) {
    console.log(typeof number)
    if(typeof number !== "number") throw new TypeError("Not a valid number");
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(isEven("2 + 2"))