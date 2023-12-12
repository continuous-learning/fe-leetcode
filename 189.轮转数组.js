/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
    newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
      nums[i] = newArr[i];
  }
}

// @lc code=end
