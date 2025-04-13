var hasCycle = function(head) {

    let slow = head;
    let fast = head;

    while(true) {
        if(!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next?.next;

        if(slow == fast) {
            return true;
        }
    }

    return true;
};
