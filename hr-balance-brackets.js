/**
 * 
 * https://www.hackerrank.com/challenges/balanced-brackets/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * 
 * 
 * 
{}
}([[{)[]))]{){}[
{]]{()}{])
(){}
{}{()}{{}}
 * 
 * 
 */

function isBalanced(s) {
    let i = 0
    let j = s.length-1
    let answer = 'YES'
    const mapping = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    while (i <= j) {
        const mappedString = mapping[s[i]]
        if (mappedString === s[j]) {
            j--
            i++
            continue
        } else if (s[i] === mapping[s[i+1]]) {
            i += 2
            continue
        } else if (s[j] === mapping[s[j-1]]) {
            j -= 2
            continue
        } else if (s[i] !== s[j]) {
            answer = 'NO'
            break
        }
    }
    
    return answer
}