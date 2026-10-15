
let arr = [1,2,3,4,2,4,6,3]
let count = 0;
let duplicatesInArray = []

let map= {}

for(let i = 0; i<= arr.length; i++){
    if(!map[arr[i]]){
        map[arr[i]] = 1;
    }
    else{
        map[arr[i]] += 1
    }
}

for(let elem in map){
    if(map[elem]>1){
      count += 1
      duplicatesInArray.push(elem)
    }
}
console.log(count)
console.log(map)
console.log(duplicatesInArray)