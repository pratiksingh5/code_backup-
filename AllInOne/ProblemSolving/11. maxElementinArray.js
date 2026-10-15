// Find maximum element in an array 
// [2,13,15,10,9]
// max = 15 


// let max = Number.MIN_SAFE_INTEGER

function maxElement(arr){
    let max= 0;
    for(let i = 0; i<arr.length; i++){
     if(arr[i]>max){
         max = arr[i]
     }
    }
    return max
}

let array = [2,15,10,12]

console.log(maxElement(array))