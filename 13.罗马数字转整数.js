/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 定义一个Map，用于存储罗马数字和整数的映射关系
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  // 定义一个变量count，用于存储转换后的整数
  let count = 0;
  // 遍历罗马数字字符串
  for (let i = 0; i < s.length; i++) {
    // 获取当前罗马数字对应的整数
    let cur = map.get(s[i]);
    // 如果当前罗马数字对应的整数小于下一个罗马数字对应的整数，则减去当前罗马数字对应的整数
    if (cur < map.get(s[i + 1])) {
      count -= cur;
    // 否则，加上当前罗马数字对应的整数
    } else {
      count += cur;
    }
  }
  // 返回转换后的整数
  return count;
};
// @lc code=end

