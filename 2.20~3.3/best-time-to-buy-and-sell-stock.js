/*
一、
1.难易程度：简单；
2.题目：找出最佳卖出股票的利润；（假设你有一个数组，其中第i 个元素是第i天股票的价格。如果你只被允许完成一个交易（即卖一股股票），设计一个算法来找到最大利润。）
网址：https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?tab=Description
例如： 
输入：[7，1，5，3，6，4]
输出：5
最大。差= 6-1 = 5（不是7-1 = 6，因为售价需要大于购买价）

输入：[7，6，4，3，1]
输出：0
在这种情况下，不进行事务，即最大利润= 0。
*/

var maxProfit = function(prices) {
    var i,res = 0,min = Infinity ,len = prices.length;
    for(i=0;i<len;i++){
    // 	if(prices[i]<min)
    // 		min = prices[i];
    // 	if((prices[i] - min)>res)
    // 		res = prices[i] - min;
    min = Math.min(min, prices[i]);
    res = Math.max(res, prices[i] - min);
    }
    return res;
};

//结果60%多