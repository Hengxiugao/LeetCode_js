/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return true;
    }
    return equalsDFS(root.left, root.right);
};

function equalsDFS(p, q){
    if(!p && !q){
        return true;
    }
    if(!p || !q){
        return false;
    }
    if(p.val != q.val)
        return false;
    return equalsDFS(p.left, q.right) && equalsDFS(p.right, q.left);
}
