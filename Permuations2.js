/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (typeof nums == "undefined")
        return;
    var resultList = [];
    var curList = [];
    var used = [];
    nums.sort(function(a,b){
        return a - b;
    });
    dfs(resultList, curList, nums, used);
    return resultList;
};

function dfs(resultList, curList, nums, used){
    if (curList.length == nums.length){
        resultList.push(curList.slice());
        return;
    }
    for (var i = 0; i < nums.length; i++){
        if (used[i]){
            continue;
        }
        if (i != 0 && nums[i]==nums[i-1] && !used[i-1] ){
            continue;
        }
        curList.push(nums[i]);
        used[i] = true;
        dfs(resultList, curList, nums, used);
        used[i] = false;
        curList.pop();
    }
}

document.write(permuteUnique([1,1,2]));
