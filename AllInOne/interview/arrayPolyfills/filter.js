let array = [1, 2, 3, 4, 5];
// let greaterThanTwo = array.filter((num) => num > 2)

// console.log("greaterThanTwo", greaterThanTwo )

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    
    if (typeof cb !== "function") {
      throw TypeError("cb is not a function");
    }

    let newArray = [];

    for(let i = 0; i < this.length; i++ ){
        let res = cb(this[i], i, this);
        if(res) newArray.push(this[i])
    }

    return newArray
  };
}


let greaterThanTwo = array.myFilter((num) => num > 2);
console.log("greaterThanTwo", greaterThanTwo )

