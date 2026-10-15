//Swap two numbers
//a=5 b=10 (swap)=> a 10 b 5

let a = 5;
let b = 10;

[a,b] = [b,a]

console.log(a,b)

function swap(a,b){
    let temp = null
    temp = a;
    a= b;
    b = temp
}