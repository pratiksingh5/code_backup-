function findMinNum(array){
    if(!array.length){
        throw new Error("Empty Array")
    }
    else if(array.length===1){
        return array[0]
    }
    else{
        let currentMinimum = array[0];
        for(let i =1; i<array.length; i++){
            if(array[i]<currentMinimum){
             currentMinimum = array[i]
            }
        }
        return currentMinimum
    }
}

const result = findMinNum([6,3,4])

console.log(result)