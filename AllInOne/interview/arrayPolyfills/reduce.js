let array = [1,2,3,4];

// let sum = array.reduce((acc, curr) => {
//    return acc + curr
// }, 0)

// console.log("sum", sum)


if(!Array.prototype.muReduce){
    Array.prototype.myReduce = function(cb, init){
        if(typeof cb !== "function"){
            throw TypeError(`${cb} is not a function`)
        }

        let accumulator = init;
        for(let i = 0;  i < this.length; i++) {
            accumulator = accumulator ? cb(accumulator, this[i], this) : this[i]
        }

        return accumulator
    }
}

let sum = array.myReduce((acc, curr) => {
   return acc + curr
}, 0)

console.log("sum", sum)