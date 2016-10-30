/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums){
        //return [-1, -1];
    }
    var start = 0;
    var end = nums.length - 1;
    while(start + 1 < end){
        var mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] == target){
            end = mid;
        } else if(nums[mid] < target){
            start = mid;
        } else {
            end = mid;
        }
    }
    var firstPosition = -1;
    if (nums[start] == target){
        firstPosition = start;
    } else if(nums[end] == target){
        firstPosition = end;
    } else {
        //return [-1, -1];
    }

    start = firstPosition;
    end = nums.length - 1;
    while(start + 1 < end){
        var mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] == target){
            start = mid;
        } else if(nums[mid] < target){
            start = mid;
        } else {
            end = mid;
        }
    }
    var lastPosition = start;
    if(nums[end] == target){
        lastPosition = end;
    }
    return [firstPosition, lastPosition];
};

document.write(searchRange([1,2,3,3,3,3,4],3));