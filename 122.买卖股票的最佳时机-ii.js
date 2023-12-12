/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * i 天
 * 0 代表当前未持有股票 1 代表当前持有股票
 * dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]) 今天手上未持有股票，前一天未持有或者前一天持有但是卖出
 * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]) 今天手上持有股票，前一天持有或者前一天未持有但是买入
 * 最终取 dp[n-1][0]，最后一天手上未持有，此时收益最大
 */
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from(Array(n), () => Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue
    }
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
  }

  return dp[n-1][0];
};
// @lc code=end

