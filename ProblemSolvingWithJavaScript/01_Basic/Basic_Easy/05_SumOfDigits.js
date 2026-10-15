// Ques 5 - Find the sum of digits of a number
// Calculate the sum of all digits in a given number.

// Input: n = 123 ----->>>>> Output: 6 (1 + 2 + 3)
// Input: n = 9876 ----->>>>> Output: 30 (9 + 8 + 7 + 6)


function sumOfDigits(number) {
   if(typeof number !== "number" || isNaN(number)){
    return "Invalid Input"
   }

   let sum = 0;

   for(const digit of number.toString()) {
        sum += parseInt(digit)
   }

   return sum
}

console.log(sumOfDigits(707))