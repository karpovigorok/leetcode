/**
 *
 * Author: Igor Karpov <igorok.karpov@gmail.com>
 *
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let rev = 0;
    // while (x != 0) {
    //     rev = rev * 10 + x % 10;
    //     x = x / 10;
    //     console.log(x, rev);
    // }
    while (x !== 0) {
        rev = rev * 10 + x % 10;
        rev = parseInt(rev);
        x = x / 10;
        console.log(x, rev);
    }
    return x === rev;



};

const x = 1221;
console.log(isPalindrome(x));