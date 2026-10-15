const array = [3, 1, -4, 2, -1, 5, -2, 4];

function findAllPairsWithZeroSum(arr) {
    if(!Array.isArray(array)) return "Invalid Input";

    let map = new Map();
    let pairs = [];

    for(let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];

        if(map.has(-currentElement)) {
            pairs.push([currentElement, -currentElement])
        }

        map.set(currentElement, true);
    }

    return pairs.length > 0 ? pairs : null;
}

console.log(findAllPairsWithZeroSum(array))