/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(typeof nums === "undefined" || nums.length === 0)
        return;
    var resultList = [];
    var curList = [];
    nums.sort(function(nums1, nums2){
        return nums1 - nums2;
    });
    helper(resultList, curList, nums, 0);
    return resultList;
};

function helper(resultList, curList, nums, index){
    resultList.push(curList.slice());

    for(var i = index; i < nums.length; i++){
        if(i > index && nums[i] == nums[i-1])
            continue;
        curList.push(nums[i]);
        helper(resultList, curList, nums, i + 1);
        curList.pop();
    }
}
var nums = [1,1,2,3];
document.write(subsetsWithDup(nums));
