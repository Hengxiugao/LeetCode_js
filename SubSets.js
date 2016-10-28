/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(typeof nums === "undefined" || nums.length == 0)
        return;
    var resultList = [];
    var curList = [];
    console.log(nums);
    helper(resultList, curList, nums, 0);
    return resultList;
};

function helper(resultList, curList, nums, index){
    resultList.push(curList.slice());

    for(var i = index; i < nums.length; i++){
        //if(curList[nums])
        curList.push(nums[i]);
        helper(resultList, curList, nums, i + 1);
        curList.pop();
    }
};
var nums = [1,2,3];
document.write(subsets(nums));
