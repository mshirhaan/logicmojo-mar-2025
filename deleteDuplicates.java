class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode i = head;
        ListNode j = head.next;


        while(j!=null) {
            while(j!=null && i.val == j.val) {
                j = j.next;
            }
            i.next = j;
            if(j== null) {
                break;
            }

            i = i.next;
            j = j.next;
        }
        return head;
    }
}
