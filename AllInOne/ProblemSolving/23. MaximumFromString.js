const maximumFromSring=(str)=>{
    let strArr = str.split('')
    let map = {}
    for(let i =0 ; i< strArr.length; i++){
        if(!map[strArr[i]]){
            map[strArr[i]] = 1
        }
        else{
            map[strArr[i]] += 1
        }
    }
    let max = 0
    console.log(map)
    for (let n in map){
        if(map[n] > max){
            max = map[n]
        }
    }
    return max

  }

console.log(maximumFromSring('aapppq'))