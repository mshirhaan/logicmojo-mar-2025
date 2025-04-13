var detectCycle = function(head) {
    let fast = head, slow = head;

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if(fast==slow) break;
    }
    if(!fast || !fast.next) return null;

    slow = head
    while(fast != slow) {
        slow = slow.next
        fast = fast.next
    }
    return fast;
};
