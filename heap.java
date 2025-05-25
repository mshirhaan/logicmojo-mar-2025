import java.util.ArrayList;
import java.util.List;

class MinHeap {
    List<Integer> list = new ArrayList<>();

    public void insert(int val) {
        list.add(val);
        bubbleUp(list.size() - 1);
    }

    public int getMin() {
        if (list.isEmpty()) {
            return -1;
        }
        return list.get(0);
    }

    public int removeMin() {
        if (list.isEmpty()) {
            return -1;
        }
        int min = list.get(0);
        list.set(0, list.get(list.size() - 1));
        list.remove(list.size() - 1);
        bubbleDown(0);
        return min;
    }

    private void bubbleUp(int index) {
        int currentIndex = index;
        while (true) {
            int parentIndex = (currentIndex - 1) / 2;
            if (parentIndex < 0 || list.get(currentIndex) >= list.get(parentIndex)) {
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
                if (list.get(currentIndex) > list.get(leftChildIndex)) {
                    swap(list, currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                }
                break;
            }

            if (list.get(currentIndex) <= list.get(leftChildIndex)
                    && list.get(currentIndex) <= list.get(rightChildIndex)) {
                break;
            }
            if (list.get(leftChildIndex) <= list.get(rightChildIndex)) {
                swap(list, currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            } else {
                swap(list, currentIndex, rightChildIndex);
                currentIndex = rightChildIndex;
            }
        }
    }

    private void swap(List<Integer> list, int i, int j) {
        int temp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, temp);
    }
}

public class Solution {
    public static void main(String[] args) {

        MinHeap minHeap = new MinHeap();
        minHeap.insert(5);
        minHeap.insert(3);
        minHeap.insert(8);
        minHeap.insert(1);
        minHeap.insert(4);

        System.out.println(minHeap.list); // Output: [1, 3, 8, 5, 4]
        // The minimum element is at the root of the heap
        System.out.println(minHeap.getMin()); // Output: 1
        // Remove the minimum element
        System.out.println(minHeap.removeMin()); // Output: 1
        // The heap after removing the minimum element
        System.out.println(minHeap.list); // Output: [3, 4, 8, 5]
        // The new minimum element
        System.out.println(minHeap.getMin()); // Output: 3
        // Remove the minimum element
        System.out.println(minHeap.removeMin()); // Output: 3
        // The heap after removing the minimum element
        System.out.println(minHeap.list); // Output: [4, 5, 8]
    }
}
