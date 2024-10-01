/**
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0
  let left = 0
  let right = height.length-1

  if (height.length === 2) {
      const lowestH = height[0] < height[1] ? height[0] : height[1] 
      return lowestH*1
  }

  while (left < right) {
      // grab the width
      const w = right - left
      // grab the lowest heigh because it cant be higher than that
      const lowestH = height[left] < height[right] ? height[left] : height[right] 
      const area = w * lowestH
      if (maxArea < area) {
          maxArea = area
      }

      if (height[left] < height[right]) {
          left++
      } else {
          right--
      }
  }
  return maxArea
};