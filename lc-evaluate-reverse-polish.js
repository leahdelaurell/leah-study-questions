/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let i = 0
    let val = 0
    let evalDone = true
    while (evalDone) {
        // if the first two are numbers and the third is an expression evaluate
        if (!isNaN(tokens[i]) && !isNaN(tokens[i+1]) && isNaN(tokens[i+2])) {
            const num1 = Number(tokens[i])
            const num2 = Number(tokens[i+1])
            const exp = tokens[i+2]
            let eval = 0
            if (exp === '+') {
                eval = num1 + num2
            } else if (exp === '-') {
                eval = num1 - num2
            } else if (exp === '*') {
                eval = num1 * num2
            } else if (exp === '/') {
                eval = num1 / num2
                eval = eval < 0  ? Math.ceil(eval) : Math.floor(eval)
            }
            // remove the last two elements
            tokens.splice(i+1,2)
            // replace current i with the new value
            tokens[i] = eval
            // reset and restart evaluation over
            i = 0
            continue
        }
        if (tokens.length === 1 || i === tokens.length-1) {
            evalDone = false
        }
        i++
    }
    return Number(tokens[0])
};