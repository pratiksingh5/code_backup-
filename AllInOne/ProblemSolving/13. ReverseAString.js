// Reverse a string 

// 'Hello' => 'olleh'
// 'sky' => 'yks'

// let str  = 'hello'

// // Step 1: convert string to array 
// let splitArray = str.split('')
// // console.log(splitArray)

// // step2: reverse the array 
// let reverseArray = splitArray.reverse()

// // step 3 : Join and convert to string 
// let joinString = reverseArray.join('')

// console.log(joinString) 

// one line 

// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// reverseString('hello')


    function reverseString(str){
        let newString = ''
        for (let i = str.length - 1; i>=0; i--){
            newString += str[i]
        }
        return newString
    }

    console.log(reverseString('hello'))