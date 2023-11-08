/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var m = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) {
      return [m.get(target - nums[i]), i];
    }
    m.set(nums[i], i);
  }
  return null;
};
// @lc code=end

