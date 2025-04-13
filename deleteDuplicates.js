var deleteDuplicates = function(head) {
    let curr = head;

    while(curr) {
        while(curr.val == curr.next?.val) {
            curr.next = curr.next.next;
        }
        curr = curr.next
    }
    return head;
};
