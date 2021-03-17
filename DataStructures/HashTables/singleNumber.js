// 136. Single Number
// Easy

// 5882

// 193

// Add to List

// Share
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
// Accepted
// 1,112,971
// Submissions
// 1,671,064


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let map = new Map();
    
    for (let x of nums) {
        if (map.has(x)) {
            map.set(x,map.get(x)+1)
        } else {
            map.set(x,1)
        }
    }
    
    for (let [k,v] of map) {
        if (map.get(k)===1) {
            return k
        }

    }
};