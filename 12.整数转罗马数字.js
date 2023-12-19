/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'};
  const keys = Object.keys(map).sort((a, b) => b - a);
  var result = '';
  for(k of keys) {
  // 当num大于等于当前的k值时，将map对象中对应的值拼接到result中，并将num减去当前的k值
    while(num >= +k) {
      result += map[k] ;
      num -= +k;
    }
  }
  return result;
};
// @lc code=end

