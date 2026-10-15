// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 18
// Output: [1,2]

let array = [2,7,11, 15, 4, 3];
let target = 18;

function twoSumPairs(arr, target) {
    if(!Array.isArray(array)) return "Invalid Input";

    let map = new Map();
    let pairs = [];

    for(let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let complement = target - currentElement;

        if(map.has(complement)) {
            // return [map.get(complement), i]
            pairs.push([map.get(complement), i])
        }

        map.set(currentElement, i)
    }

    // return null; 
    return pairs.length > 0 ? pairs : null
}

console.log(twoSumPairs(array, 18))