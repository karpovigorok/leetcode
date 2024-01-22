/**
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * 1. sort and find middle element of array. Time: O(n log n)
 * 2. Moore Voting Algorithm O(n)
 * The intuition behind the Moore's Voting Algorithm is based on the fact that if there is a majority element in an array, it will always remain in the lead, even after encountering other elements.
 */
/**
 * @param {number[]} A
 * @return {number}
 */
let majorityElement = function(A) {
    let majority = 0;
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        if(count === 0) {
            majority = A[i];
        }
        if(A[i] === majority) {
            count++;
        }
        else {
            count--;
        }
    }
    return majority;
};