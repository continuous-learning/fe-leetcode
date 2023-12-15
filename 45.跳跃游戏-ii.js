/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // 定义一个变量len，用来存储nums的长度
  let len = nums.length;
  // 定义一个变量end，用来存储当前的索引
  let end = 0;
  // 定义一个变量maxPos，用来存储当前最大值
  let maxPos = 0;
  // 定义一个变量steps，用来存储步数
  let steps = 0;
  // 遍历nums，从索引0开始，到索引 len-1 结束
  for (let i = 0; i < len-1; i++) {
    // 比较maxPos和i+nums[i]，取最大值
    maxPos = Math.max(maxPos, i + nums[i]);
    // 如果end等于i，则将maxPos赋值给end，步数加1
    if (end === i) {
      end = maxPos;
      steps++;
    }
  }
  // 返回步数
  return steps;
};
// @lc code=end

