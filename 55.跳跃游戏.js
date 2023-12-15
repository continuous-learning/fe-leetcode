/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let last = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // 所能跳跃的最远距离
    last = Math.max(last, i + nums[i]);
    // 当前下标大于当前所能到达的最远位置，说明无法到达
    if (last <= i) {
      return false;
    }
  }
  return last >= nums.length - 1;
};
// @lc code=end

