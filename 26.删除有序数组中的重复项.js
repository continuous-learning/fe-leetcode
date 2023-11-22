/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0;
  let right = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }
  return left + 1
};
// @lc code=end

