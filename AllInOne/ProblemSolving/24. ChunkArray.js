// [1,2,3,4,5,6,7]  size 2 =>  [[1,2],[3,4],[5,6],[7]]

const chunkArray = (arr, size) =>{
    res = []
    for(let i =0; i< arr.length ; i +=size){
        let chunk = arr.slice(i, i+size)
        res.push(chunk)
    }
    return res
}

console.log(chunkArray([1,2,3,4,5,6,7], 2))