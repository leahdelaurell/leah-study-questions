/**
 * https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * This is inefficent but it works for most use cases! Going to see if I can
 * make it more efficent before I look at the discussion
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount == 0) {
      return 0
  }
  let minLength 
  for (let i=0; i<coins.length; i++) {
      let combo = 0
      const _currentAmount = amount - coins[i]
      // if current amount hasn't been filled continue to find combo
      if (_currentAmount > 0) {
          combo++
          combo = findCombo(coins, _currentAmount, combo, minLength)
      } else if (_currentAmount === 0) {
          combo++
      } else {
          continue
      }

      if (minLength && combo > 0 && minLength > combo) {
          minLength = combo
      } else if (!minLength && combo > 0) {
          minLength = combo
      }
  }
  return minLength ? minLength : -1
};

function findCombo(coins, amount, combo, minLength) {
  for (let i = 0; i<coins.length; i++) {
      let _newCombo = combo
      let _currAmount = amount - coins[i]
      if (_currAmount > 0) {
          _newCombo++
          _newCombo = findCombo(coins, _currAmount, _newCombo, minLength)
      } else if (_currAmount === 0) {
          _newCombo++
      } else if (_currAmount < 0) {
          continue
      }

      if (minLength && minLength > _newCombo) {
          minLength = _newCombo
      } else if (!minLength && _newCombo > 0) {
          minLength = _newCombo
      }
      _newCombo--
  }

  return minLength
}