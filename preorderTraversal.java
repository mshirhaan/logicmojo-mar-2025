class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }

    public void helper(TreeNode node, List<Integer> res) {
        if(node == null) return;
        res.add(node.val);
        helper(node.left, res);
        helper(node.right, res);
    }
}
