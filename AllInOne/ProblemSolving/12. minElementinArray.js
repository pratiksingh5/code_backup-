// Find maximum element in an array 
// [2,13,15,10,9]
// min = 2


// let max = Number.MIN_SAFE_INTEGER

function minElement(arr){
    let min= Number.MAX_SAFE_INTEGER;

    for(let i = 0; i<arr.length; i++){
     if(arr[i]<min){
         min = arr[i]
     }
    }
    return min
}

let array = [2,15,10,12]

console.log(minElement(array))