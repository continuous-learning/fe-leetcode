/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0;
  let right = 0;

  while(left < nums.length) {
    if (nums[left] !== val) {
      nums[right] = nums[left];
      right++
    }
    left++
  }

  return right
};
// @lc code=end

