// "Given an array of integers, return the indices of the two numbers that add up to a specific target." Example: Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1] Explanation: nums[0] + nums[1] = 2 + 7 = 9
function nonDPFunc(values, target) {
  for (let i=0; i<values.length; i++) {
    for (let j=1; j<values.length; j++) {
      if (values[i] + values[j] === target) {
        return [i, j]
      }
    }
  }
}

function dpFunc(values, target) {
  const addUp = {}
  for (let i=0; i<values.length; i++) {
    const _sum = target-values[i]
    if (addUp[_sum] !== undefined) {
      return [addUp[_sum], i]
    }
    addUp[values[i]] = i
  }
}

console.log('nonDP', nonDPFunc([2, 7, 11, 15], 9))
console.log('dp', dpFunc([2, 7, 11, 15], 9))

