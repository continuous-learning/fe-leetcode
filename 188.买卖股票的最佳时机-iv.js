/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 * i 天
 * k 最多交易次数
 * 0 代表当前未持有股票 1 代表当前持有股票
 * dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]) 今天手上未持有股票，前一天未持有或者前一天持有但是卖出
 * dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]) 今天手上持有股票，前一天持有或者前一天未持有但是买入
 */
var maxProfit = function(k, prices) {
  let n = prices.length;
  let dp = Array.from(Array(n), () => new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));
  for (let i = 0; i < n; i++) {
    for (let j = k; j > 0; j--) {
      if (i - 1 === -1) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }
      dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j - 1][0] - prices[i]);
    }
  }
  return dp[n-1][k][0];
};
// @lc code=end

