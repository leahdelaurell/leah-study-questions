/**
 * https://www.hackerrank.com/challenges/abbr/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
 * 
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
    // Write your code here
    let i = 0
    let j = 0
    
    let _preMatch = []
    let hasCapitalMisMatch = false
    while(i < a.length) {
        if (b[j] && a[i] && ((a[i] === b[j]) || (a[i].toUpperCase() === b[j]))) {
            _preMatch.push(a[i].toUpperCase())
            i++
            j++
            continue
        } else if (b[j] && a[i] && (a[i] !== b[j] && a[i] !== a[i].toUpperCase())) {
            i++
            continue
        } else if (a[i] && a[i] === a[i].toUpperCase()) {
            hasCapitalMisMatch = true
            break
        }
        i++
    }

    if (_preMatch.join('') === b && !hasCapitalMisMatch) return 'YES'
    return 'NO'
}