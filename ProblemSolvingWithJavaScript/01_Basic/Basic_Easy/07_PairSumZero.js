// Ques 7 - Find the first pair whose sum is zero using indexing
// Given an array of integers, find the first pair whose sum is zero, if it exists.

// Input: [-3, 1, 2, -1, 3] ----->>>>> Output: [-3, 3]
// Input: [1, 2, 3] ----->>>>> Output: null

const array = [3, 1, -4, 2, -1, 5];

function findFirstPairWithZeroSum(arr) {
    if(!Array.isArray(arr)) return "Invalid Input";

    let map = new Map();

    for(let i = 0; i < arr.length; i++) {

       let currentElement = arr[i];

       if(map.has(-currentElement)) {
            return [currentElement, -currentElement]
        }

       map.set(currentElement, true);
    //    console.log(map); 
    }
    
    // throw new Error("No Pair Found") 
    return null;
}

console.log(findFirstPairWithZeroSum(array))