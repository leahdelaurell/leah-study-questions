// given an array of positive numbers and a target number, print all the subarrays that have sum equal to target sum.

function sumOfNums(nums, target) {
  const val = new Array(target+1).fill(0)
  // [3,4,5]  8  -> 2
  //       0,1,2,3,4,5,6,7,8
  // 3 -> [1,0,0,1,0,0,1,0,0]
  // 4 -> [1,0,0,1,1,0,1,1,1]
  // 5 -> [1,0,0,1,1,1,1,1,2]
  val[0] = 1
  for (let num of nums) {
    for (let i=num; i<target; i++) {
      val[i] += val[i-num]
    }
  }
  return val[target]
}