/**
 * 
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * 
 * Fixed the jumps but it times out on hacker rank
 * 
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    let bribe = 0
    const jumpsOnQ = {}
    for (let i=q.length-1; i > 0; i--) {
        for (let j=i-1; j >= 0; j--) {
            if (q[i] < q[j]) {
                if (jumpsOnQ[q[j]]) {
                    jumpsOnQ[q[j]] += 1
                    if (jumpsOnQ[q[j]] > 2) {
                        console.log('Too chaotic')
                        return
                    }
                } else {
                    jumpsOnQ[q[j]] = 1
                }
                bribe += 1
            }
        }
    }
    console.log(bribe)
}