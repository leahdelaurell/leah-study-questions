/**
 * 
 * 
 * Inefficient one
 */

function arrayManipulation(n, queries) {
    // initialize array to manipulate
    const array = new Array(n).fill(0)
    let maxVal = 0
    for (let query of queries) {
        const [a, b, val] = query
        for (let i = a-1; i < b; i++) {
            array[i] += val
            if (array[i] > maxVal) {
                maxVal = array[i]
            }
        }
    }

    return maxVal
}


/**
 * efficient one
 * Instead of looping through we only worry about the end indexes
 * Add the end indexes and then sum them up
 * As you sum them up you check if it is the max sum and return that
 * @param n 
 * @param queries 
 * @returns 
 */
function arrayManipulation(n, queries) {
  let arr = Array(n+1).fill(0);
  let maxSum = 0;

  for(let query of queries){
      const [a, b, k] = query
      arr[a-1] += k;
      arr[b] -= k;        
  }

  let currSum =0;
  for(let k of arr){
      currSum += k;
      if(currSum > maxSum) {
          maxSum = currSum;
      }
  }
  return maxSum;
}