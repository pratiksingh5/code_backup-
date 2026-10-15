// HashMap in JavaScript

let s = 'avcdaaf'

let arr = s.split('')

// console.log(arr)

// {} => key-value pair 

// [a,a,b,c,d ] => {a:2, b:1, c:1, d:1}

let hashMap = {}

for(let i = 0; i<arr.length; i++){
    if(!hashMap[arr[i]]){
        hashMap[arr[i]] = 1
    }
    else{
        hashMap[arr[i]] += 1;
    }
}

console.log(hashMap)

for (let elem in hashMap){
    console.log(elem)
}