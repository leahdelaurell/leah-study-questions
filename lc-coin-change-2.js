/**
 * Coin change 2
 * 
 * This is not correct there is a bug in here and need to figure it out
 * 
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {

    let ways = 0
    findSum(coins, amount, ways)
    return ways
};

function findSum(coins, amount, ways) {
    for (let i = 0; i < coins.length; i++) {
        if (amount === 5) {
            console.log('FIRST ROUND')
        }
        console.log(`${amount} - ${coins[i]}`)
        const _val = amount - coins[i]
        console.log('_val: ', _val)
        if (_val === 0) {
            ways++
            console.log('hitting 0 adding', ways)
        } else if (_val > 0) {
            console.log('finding new sum')
            findSum(coins, _val, ways)
        }
        // anything that is below 0 will be to big moving forward and we can return
        if (_val < 0) {
            break
        }
    }
    console.log('WAYS AT END', ways)
    return
}