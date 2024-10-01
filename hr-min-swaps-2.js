/**
 * https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * 
 * @param {*} arr 
 * @returns 
 */
function minimumSwaps(arr) {
  let i = 0
  let temp
  let minSwaps = 0
  while (i < arr.length) {
      if (arr[i] !== i+1) {
          temp = arr[arr[i]-1]
          arr[arr[i]-1] = arr[i]
          arr[i] = temp
          minSwaps++
      } else {
          i++
      }
  }
  return minSwaps
}