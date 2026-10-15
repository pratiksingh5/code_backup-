// let array = [1,2,3,4];
let array = null;

// const mappedArray = arr.map((num) =>  num * 2);

// console.log("mappedArray", mappedArray)

// let myMap = function(array, fn){
//     let newArray = [];
//     for(let i = 0; i < arr.length ; i++){
//         let result = fn(arr[i], i);
//         console.log(result);
//         newArray.push(result);
//     }

//     return newArray
// }

// Polyfill for Array.prototype.map

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    
    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }

    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      let res = cb(this[i], i, this);
      newArray.push(res);
    }
    return newArray;
  };
}




// let arr = [1, 2, 3, 4];
// arr.myMap(2); // Throws TypeError: 2 is not a function

let mappedArray = array.myMap((num) => num * 2);
console.log("mappedArray", mappedArray); // Output: [2, 4, 6, 8]
