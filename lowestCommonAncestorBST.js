var lowestCommonAncestor = function(root, p, q) {
 
 
    if((p.val> root.val && q.val<root.val) || (p.val< root.val && q.val>root.val)) {
        return root;
    }
    if(root.val === p.val || root.val === q.val) {
        return root;
    }
    if(p.val>root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else {
        return lowestCommonAncestor(root.left, p, q);
    }
    
}
