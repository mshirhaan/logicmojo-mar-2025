class Solution {
    public Node cloneGraph(Node node) {
        if(node == null) {
            return null;
        }
        Map<Integer, Node> cloneMap = new HashMap<>();
        return helper(node, cloneMap);
    }

    public Node helper(Node node, Map<Integer, Node> cloneMap) {
        
        Node cloneNode = new Node(node.val);
        cloneMap.put(node.val, cloneNode);
       
        for(Node neighbor : node.neighbors) {
            if(cloneMap.containsKey(neighbor.val)) {
                cloneNode.neighbors.add(cloneMap.get(neighbor.val));
            } else {
                cloneNode.neighbors.add(helper(neighbor, cloneMap));
            }
        }

        return cloneNode;
    }
}
