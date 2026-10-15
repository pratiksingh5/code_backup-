function validMobileNumber(numbers){
    let arr =  numbers.split('')
    let a = arr.indexOf(':')
    let currentNumber = arr.slice(a+2)
    let num1 = currentNumber.join('')
    let newNumbers= num1.split(',')
    var validNumber = []
    for(i=0;i<newNumbers.length;i++){       
        if(!isNaN(newNumbers[i])){
            if(newNumbers[i].split(' ').join('').length==10){
               validNumber.push(newNumbers[i])
            }
        }
    }
    return validNumber
    // numbers.slice()
}
console.log(validMobileNumber('These are few mobile#: 9739112323, 24524f5807, 33434, 9085434508'))