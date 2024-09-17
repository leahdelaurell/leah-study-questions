/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let isFinished = false
    let i = 0
    while(!isFinished) {
        if (nums[i] === nums[i+1]) {
            // remove and add _ to end of array
            nums.splice(i, 1)
        } else {
            i++
        }

        if (nums[i] === undefined) {
            isFinished = true
        }
    }
    return nums.length
};