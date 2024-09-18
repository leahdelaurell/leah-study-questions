/**
 * https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * Ended up watching the coding video for this and it made more sense doing it with dynamic programming
 * 
 * This is inefficent but it works for most use cases! Going to see if I can
 * make it more efficent before I look at the discussion
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    const amountarray = new Array(amount+1).fill(amount+1)
    amountarray[0] = 0
    // console.log(amountarray)
    for (let i = 1; i < amountarray.length; i++) {
        for(let j = 0; j < coins.length; j++) {
            const _sub = i - coins[j]
            // check if the subtraction of the coin is still a possible value
            if (_sub >= 0) {
                // if so we can grab the minimum value of those coins added up
                // and add one on top of it for the one we just subtracted
                const _addingMinCoins = amountarray[_sub] + 1
                // then we can check if that coin is the minimum amount 
                if (_addingMinCoins < amountarray[i]) {
                    amountarray[i] = _addingMinCoins
                }
            }
        }
    }

    return amountarray[amount] !== amount+1 ? amountarray[amount] : -1
};