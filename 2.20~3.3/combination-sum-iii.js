/*
二、
1.难易层度：中等；
2.题目：查找k个数字的所有可能组合，加起来为n，假设只能使用从1到9的数字，每个组合应该是一组唯一的数字。
网址：https://leetcode.com/problems/combination-sum-iii/?tab=Description
实施例1：
输入： k = 3， n = 7
输出：[[1,2,4]]

实施例2：
输入： k = 3， n = 9
输出：[[1,2,6]，[1,3,5]，[2,3,4]]
*/

var combinationSum3 = function(k, n) {
    var result = [];

    searchArr(0,[],1,k,n,result);

    return result;
};

function searchArr(curSum,curArr,startNum,k,n,result){
	if(curArr.length > k || curSum > n){
		return;
	}

	if(curArr.length === k){
		if(curSum === n){
			result.push(curArr.concat());
		}
		return;
	}

	var temp = curArr.concat(), curNum , i;
	for(i=startNum;i<=9;i++){
		temp.push(i);
		searchArr(curSum+i,temp,i+1,k,n,result);
		temp.pop();
	}
}
