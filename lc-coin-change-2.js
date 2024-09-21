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


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {

  const ways = findSum(coins, amount, 0, 0)
  return ways[0]
};

function findSum(coins, amount, ways, j) {
  let _ways = ways
  for (let i = j; i < coins.length; i++) {
      if (amount === 5) {
          console.log('FIRST ROUND', i, j)
          console.log('coin', coins[i])
      }

      const _val = amount - coins[i]

      if (_val === 0) {
          console.log('adding', i, j)
          console.log('coin', coins[i])
          _ways++
          j++
      } else if (_val > 0) {
          res = findSum(coins, _val, _ways, j)
          console.log('res', res)
          _ways = res[0]
          j = res[1]
      }
      // anything that is below 0 will be to big moving forward and we can return
      if (_val < 0) {
          break
      }
  }

  return [_ways, j]
}




/**
 * Dynamic programming
 * 
 *  @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const amountCoins = new Array(amount+1).fill(amount+1)
  const options = new Array(amount+1).fill(0)
  amountCoins[0] = 0
  options[0] = 0
  console.log(amountCoins)
  console.log(options)
  for (let i=1; i < amountCoins.length; i++) {
      console.log('----------', i, '--------')
      for (let j=0; j < coins.length; j++) {
          const value = i - coins[j]
          console.log('value', value)
          if (value >= 0) {
              console.log(amountCoins[value])
              const newCoinAmount = amountCoins[value] + 1
              console.log('newCoinAmount', newCoinAmount)
              console.log('amountCoins', amountCoins[i])
              if (newCoinAmount < amount+1) {
                  console.log('option', options[i])
                  console.log('options of adding', options)
                  options[i] = options[i]+1
                  console.log('option add', options[i])
                  amountCoins[i] = newCoinAmount
              }
          }
      }
  }
  console.log(options)
  return options[amount]
};


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const range = new Array(amount+1).fill(0)
  range[0] = 1

  for (let coin of coins) {
      for (let j = coin; j <= amount; j++) {
          range[j] += range[j-coin]
      }
  }

  return range[amount]
};



var change = function(amount, coins) {
  const coinWays = new Array(coins.length+1).fill(-1).map(() => Array(amount+1).fill(-1))
  const ways = findSum(coins.length, coins, amount, coinWays)
  return ways
};

function findSum(length, coins, amount, ways) {
  if (amount === 0) {
      return 1
  }
  if (length <= 0 || amount < 0)  {
      return 0
  }
  if (ways[length][amount] !== -1) {
      return ways[length][amount]
  }
  
  ways[length][amount] = findSum(length, coins, amount-coins[length-1], ways) + findSum(length-1, coins, amount, ways)

  return ways[length][amount]

}
