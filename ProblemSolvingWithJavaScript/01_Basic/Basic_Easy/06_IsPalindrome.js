// Ques 6 - Check if a number is a palindrome number
// A number is a palindrome if it reads the same backward as forward.

// Input: n = 121 ----->>>>> Output: true
// Input: n = 123 ----->>>>> Output: false


// Approach 1 

function isPalindrom(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrom(1231))

// Approach 2

function isNumberPalindrom(number) {
    const str = number.toString();

    if(str.length <= 1) return true;

    if(str[0] !== str[str.length - 1]) return false;

    return isNumberPalindrom(str.slice(1, -1))
}

console.log(isNumberPalindrom(1231))
