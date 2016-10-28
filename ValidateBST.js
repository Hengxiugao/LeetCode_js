var isValidBST = function(root) {
    return dfsHelper(root, Number.MAX_VALUE, -Number.MAX_VALUE);
};

function dfsHelper(root, max, min){
    if(typeof root == "undefined" || !root){
        return true;
    }
    var left_max = Math.min(max, root.val);
    var left_min = min;
    var right_max = max;
    var right_min = Math.max(min, root.val);
    if(typeof root.left != "undefined" && root.left){
        if(root.left.val >= left_max || root.left.val <= left_min){
            return false;
        }
    }
    if(typeof root.right != "undefined" && root.right){
        if(root.right.val >= right_max || root.right.val <= right_min){
            return false;
        }
    }
    return dfsHelper(root.left, left_max, left_min) && dfsHelper(root.right, right_max, right_min);

}
