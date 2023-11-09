/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 数组倒序遍历，最大的放在 nums1 的后面
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]; // nums1[i]是最大的
      i--;
    } else {
      nums1[k] = nums2[j]; // nums2[j]是最大的
      j--;
    }
    k--;
  }
  // 剩下的都是最大的，放在剩余位置
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
// @lc code=end

