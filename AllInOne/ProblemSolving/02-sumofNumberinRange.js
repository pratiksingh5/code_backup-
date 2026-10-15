

function sumInRange(arr){
    let initial, final;
    if(arr[0]<arr[1]){
         initial = arr[0]
         final = arr[1]
    }
    else{
         initial = arr[1]
         final = arr[0]
    }
    console.log(initial,final)
    let sum = initial;
    for(let i=1+1;i<=final; i++){
        sum = sum + i
    }
 return sum
}

let result = sumInRange([1,4])

console.log(result)