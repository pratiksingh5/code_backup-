// array = [1,2,1,3,2]

// Output: 1:2,2:2,3:1

arr = [1,2,1,3,2]
let map = {}
for(let i =0; i< arr.length; i++){
    if(!map[arr[i]]){
        map[arr[i]] = 1
    }
    else{
        map[arr[i]] += 1
    }
}

console.log(map)