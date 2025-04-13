//fair unfair race method
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode a = headA, b = headB;
        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        return a;
    }
}




//count method
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int firstCount = 0;
        int secondCount = 0;

        ListNode curr = headA;

        while(curr!=null) {
            firstCount++;
            curr = curr.next;
        }

        curr = headB;
        while(curr!=null) {
            secondCount++;
            curr = curr.next;
        }

        ListNode first = headA, second = headB;


        if(firstCount > secondCount) {
            //skip starting from first linked list
            first = skipNodes(first, firstCount - secondCount);
        } else {
             //skip starting from second linked list
             second = skipNodes(second, secondCount - firstCount );
        }

        while(first!= null && second!=null) {
            if(first == second) return first;

            first = first.next;
            second = second.next;
        }

        return null;
    }

    private ListNode skipNodes(ListNode node, int countToSkip) {
            while(countToSkip>0) {
                node = node.next;
                countToSkip--;
            }
            return node;
    }
}
