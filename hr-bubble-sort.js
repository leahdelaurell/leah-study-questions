/**
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * 
 * @param {*} a 
 */

function countSwaps(a) {
  let swaps = 0
  const n = a.length
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
          // need to change to assending order
          if (a[j] > a[j + 1]) {
              // need to swap them
              const _tempholdjInd = a[j]
              a[j] = a[j+1]
              a[j+1] = _tempholdjInd
              swaps += 1
          }
      }   
  }
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length-1]}`)
}