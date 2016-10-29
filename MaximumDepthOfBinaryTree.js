/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return dfs(root);
};

function dfs(root){
    if(!root){
        return 0;
    }
    return Math.max(dfs(root.left), dfs(root.right)) + 1;
}
