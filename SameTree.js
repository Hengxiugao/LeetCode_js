/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return dfs(p, q);
};

function dfs(p, q){
    if(!p && !q){
        return true;
    }
    if(!p || !q){
        return false;
    }
    if(p.val != q.val){
        return false;
    }
    return dfs(p.left, q.left) && dfs(p.right, q.right);
}
