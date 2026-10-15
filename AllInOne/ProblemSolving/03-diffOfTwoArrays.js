function differenceArray(arr1,arr2){
    const union = new Set([...arr1,...arr2])
    const diffArr = []
    for(currentElem of union){
        if(arr1.includes(currentElem) && !arr2.includes(currentElem)){
            diffArr.push(currentElem)
        }else if(arr2.includes(currentElem) && !arr1.includes(currentElem)){
            diffArr.push(currentElem)
        } 
    }
    return diffArr
}

const result = differenceArray([1,2,3,4],[1,2,3,4,5])

console.log(result)