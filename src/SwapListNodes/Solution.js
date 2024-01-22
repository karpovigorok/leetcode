/**
 *
 * Time: O(n)
 *
 * The node "ans" is to point to the head of the original list. It then uses a "curr" node to traverse the list and swap pairs of nodes. The loop continues as long as there are at least two more nodes to swap.
 *
 * Inside the loop, the solution uses two temporary nodes, "t1" and "t2", to hold the first and second nodes of the pair. Then, it updates the pointers to swap the nodes, and moves "curr" two nodes ahead. At the end, it returns the modified list starting from the next node of the "ans" node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    let ans = new ListNode(0);
    ans.next = head;
    let current  = ans;
    while(current.next != null && current.next.next != null) {
        let temp1 = current.next;
        let temp2 = current.next.next;
        current.next = temp2;
        temp1.next = temp2.next;
        temp2.next = temp1;
        current = current.next.next;
    }
    return ans.next;
};
const list = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
    }
};
console.log(list);
let result = swapPairs(list.head);
console.log(result);