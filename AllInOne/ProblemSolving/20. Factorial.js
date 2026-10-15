let num = 4

// for(let i = num; i>1;){
//     i = i -1
//     var fact = num * i
//     num = fact
// }

// console.log(fact)

for(var fact = 1; num >1; num --){
    fact = fact * num
}

console.log(fact)