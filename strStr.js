var findSevenAndThree = function(nums) {
    if(typeof nums != "undefined" && nums !== null && nums.length===0)
        return;
    var result = {};
    result[0] = new Array();
    result[1] = new Array();
    result[2] = new Array();
    for(var i=0;i<nums.length;i++){
        if(nums[i]%91==0)
            result[2][result[2].length] = nums[i];
        else if(nums[i]%7==0)
            result[1][result[1].length] = nums[i];
        else if(nums[i]%13==0)
            result[0][result[0].length] = nums[i];
    }
    console.log(result)
    return result;
};

document.write(findSevenAndThree([13,26,91,4,5,6,7,8,9,10,21]));
