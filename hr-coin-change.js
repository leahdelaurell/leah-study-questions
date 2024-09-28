/**
 * https://www.hackerrank.com/challenges/coin-change/problem?isFullScreen=true
 * 
 * @param n 
 * @param c 
 * @returns 
 */

function getWays(n, c) {
    const ways = new Array(n+1).fill(0)
    ways[0] = 1
    c = c.sort()
    for (let i = 0; i < c.length; i++) {
        for (let j = 1; j <= n; j++) {    
            if (j >= c[i]) {
                ways[j] += ways[j - c[i]]
            }
        }
    }
    return ways[n]
}