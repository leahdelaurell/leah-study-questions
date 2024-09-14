/**
 * 
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * 
 * My jumps are off.. because I am not accounting for the
 * specific character. Maybe I need to watch each character
 * and how far it jumps??
 * 
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    let bribe = 0
    for (let i=q.length-1; i > 0; i--) {
        for (let j=i-1; j >= 0; j--) {
            if (q[i] < q[j]) {
                // TOOD fix this
                const jumps = i - j
                if (jumps > 2) {
                    console.log('Too chaotic')
                    return
                }
                bribe += 1
            }
        }
    }
    console.log(bribe)
}