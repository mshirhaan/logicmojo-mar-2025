class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();

        // Counting frequencies of each number
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

         Map<Integer, List<Integer>> flippedMap = new HashMap<>();

        // Flipping the map: key = frequency, value = list of numbers with that frequency
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();

            flippedMap.computeIfAbsent(value, j -> new ArrayList<>()).add(key);
        }

        int ans[] = new int[k];
        int curr = 0;

        for(int count = nums.length; count>0; count--) {
            boolean flagToStop = false;
            if(flippedMap.containsKey(count)) {
                for(int num : flippedMap.get(count)) {
                    ans[curr] = num;
                    curr++;

                    if(curr == k) {
                        flagToStop = true;
                        break;
                    }
                }
            }
            if(flagToStop) {
                break;
            }   
        }
        
        return ans;
    }
}


//24 th may explained heap logic for this

class Node {
    int val;
    int priority;

    Node (int val, int priority) {
        this.val = val;
        this.priority = priority;
    }
}

class MaxHeap {
    List<Node> list = new ArrayList<>();

    public void insert(Node node) {
        list.add(node);
        bubbleUp(list.size() - 1);
    }

    public Node getMax() {
        if (list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }

    public Node removeMax() {
        if (list.isEmpty()) {
            return null;
        }
        Node max = list.get(0);
        list.set(0, list.get(list.size() - 1));
        list.remove(list.size() - 1);
        bubbleDown(0);
        return max;
    }

    private void bubbleUp(int index) {
        int currentIndex = index;
        while (true) {
            int parentIndex = (currentIndex - 1) / 2;
            if (parentIndex < 0 || list.get(currentIndex).priority <= list.get(parentIndex).priority) {
                break;
            }
            swap(list, currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }

    private void bubbleDown(int index) {
        int currentIndex = index;

        while (true) {
            int leftChildIndex = 2 * currentIndex + 1;
            int rightChildIndex = 2 * currentIndex + 2;

            // Check if left child is out of bounds
            if (leftChildIndex >= list.size()) {
                break;
            }

            // Check if right child is out of bounds
            if (rightChildIndex >= list.size()) {
                if (list.get(currentIndex).priority < list.get(leftChildIndex).priority) {
                    swap(list, currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                }
                break;
            }

            if (list.get(currentIndex).priority >= list.get(leftChildIndex).priority
                    && list.get(currentIndex).priority >= list.get(rightChildIndex).priority) {
                break;
            }
            if (list.get(leftChildIndex).priority >= list.get(rightChildIndex).priority) {
                swap(list, currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            } else {
                swap(list, currentIndex, rightChildIndex);
                currentIndex = rightChildIndex;
            }
        }
    }

    private void swap(List<Node> list, int i, int j) {
        Node temp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, temp);
    }
}


class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        MaxHeap heap = new MaxHeap();
        Map<Integer, Integer> map = new HashMap<>();

        // Counting frequencies of each number
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();
            Node node = new Node(key, value);
            heap.insert(node);
        }

        int ans[] = new int[k];
        int curr = 0;

        while(k > 0) {
            k--;
            ans[curr++] = heap.removeMax().val;
        }
        return ans;
    }
}
