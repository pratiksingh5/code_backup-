// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// var twoSum = function(num,target){
//     let resultArr= []
//     for(i=0;i<= num.length; i++){
//         if(num[i]+num[i+1]== target){
//             resultArr.push(i)
//             resultArr.push(i+1)
//             break
//         }    
//     }
//     return resultArr
// }

// console.log(twoSum([3,2,4],6))



var twoSum = function(num,target){
    for(i=0;i<= num.length; i++){
        for(j=i+1;j<=num.length; j++){
            if(num[i]+num[j]=== target){
                return [i,j]
              }  
        }
    }
    return []
}

console.log(twoSum([3,2,4],7))


// var twoSum = function(num,target){
//     for(i=0;i<= num.length; i++){
//         let diff = target - num[i]
//         console.log(diff)
//         if(num.includes(diff)){
//             let a = num.indexOf(diff)
//             return [i, a]
//         }
//     }
//     return []
// }

// console.log(twoSum([3,2,4],6))