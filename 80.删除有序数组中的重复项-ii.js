/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let i = 0;
//   for (n of nums) {
//     if (i < 2 || n !== nums[i - 2]) {
//       nums[i] = n;
//       i++
//     }
//   }
//   return i
// }
var removeDuplicates = function(nums) {
  let left = 0;
  let right = 0;
  let count = 0;

  while(right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    } else if (left < right && count < 2) {
      left++
      nums[left] = nums[right]
    }

    right++
    count++
    // 前一个不等于后一个，清空 count
    if (right < nums.length && nums[right] !== nums[right - 1]) {
      count = 0;
    }
  }
  return left + 1;
};
// @lc code=end

