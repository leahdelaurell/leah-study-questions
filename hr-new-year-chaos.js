/**
 * 
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * 
 * Fixed the jumps but it times out on hacker rank. Went to the discussion and
 * saw that my very first iteration (which I didnt save) was on the right track
 * for optimization. O(n^2) solution
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


/**
 * Ended up looking at the discussions and understanding the O(n) 
 * solution, which was this. 
 * 
 * So I was on the right track with this when I first started where I had one
 * loop and was checking based off of subtractions, but I was 
 * going forward instead of backward. I ended up going backward and 
 * adding in the second loop because I didnt think about the subtraction pattern, 
 * but that wasn't necessary.
 */

function minimumBribes(q) {
    let bribe = 0
    let min = q.length
    for (let i=q.length-1; i >= 0; i--) {
       // if the move was greater than 3 it was too chaotic
        if (q[i] - i > 3) {
           console.log('Too chaotic')
           return
       }
       // if the number is bigger than the current position + 1 then there
       // was multiple bribes and we can add
       if (q[i] > i+1) {
           bribe += q[i]-(i+1)
       } else {
            // checking against the minimum value
           if (min > q[i]) {
                // changing if its less than
               min = q[i]
            } else if (q[i] != min) {
                // there was a bribe if it wasnt smaller
                bribe++
            }   
       }
    }
    console.log(bribe)
}