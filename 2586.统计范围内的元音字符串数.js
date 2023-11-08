/*
 * @lc app=leetcode.cn id=2586 lang=javascript
 *
 * [2586] 统计范围内的元音字符串数
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  const array = ['a', 'e', 'i', 'o', 'u'];
  const newWords = words.slice(left, right + 1);
  let count = 0;
  for (let i = 0; i < newWords.length; i++) {
    if (newWords[i].length === 1 && array.includes(newWords[i][0])) {
      count++;
    } else if (array.includes(newWords[i][0]) && array.includes(newWords[i][newWords[i].length - 1])) {
      count++;
    }
  }
  return count
};
// @lc code=end

