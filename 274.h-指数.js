/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 * H指数是一种衡量学术成就和影响力的指标，特别是用于评估科研人员的学术论文发表情况。H指数是根据一个人的论文数量和被引用次数来计算的。
 * 具体来说，H指数是指一个学者在其发表的论文中，被引用次数大于等于该学者的论文数量的最大值。例如，一个学者的H指数为10，那么表示该学者有10篇论文每篇至少被引用了10次。
 * H指数的计算方法可以通过以下步骤进行：
 * 1. 将学者的论文按照被引用次数从高到低排列。
 * 2. 从排列好的论文列表中，找到最后一篇被引用次数大于等于该篇论文排名的数字，这个数字就是该学者的H指数。
 * H指数的一个优点是综合考虑了学者的论文数量和被引用次数，避免了只关注论文数量或者只关注被引用次数的局限性。因此，H指数被广泛应用于评估学术界的学者和研究机构的影响力和贡献度。
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
// 对citations数组进行排序，从大到小
  citations.sort((a, b) => b - a);
  // 初始化h和i
  let h = 0;
  let i = 0;
  // 当i小于citations数组的长度，且citations[i]大于h时，循环执行
  while(i < citations.length && citations[i] > h) {
    // h自增1
    h++;
    // i自增1
    i++;
  }
  // 返回h
  return h;
};
// @lc code=end

