/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (typeof nums == "undefined")
        return;
    var resultList = [];
    var curList = [];
    var used = [];
    dfs(resultList, curList, nums, used);
    return resultList;
};

function dfs(resultList, curList, nums, used){
    if (curList.length == nums.length){
        resultList.push(curList.slice());
        return;
    }
    for (var i = 0; i < nums.length; i++){
        if(used[i]){
            continue;
        }
        curList.push(nums[i]);
        used[i] = true;
        dfs(resultList, curList, nums, used);
        used[i] = false;
        curList.pop();
    }
}

document.write(permute([1,2,3]));
