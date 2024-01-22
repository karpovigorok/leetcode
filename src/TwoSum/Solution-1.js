/**
 *
 * Author: Igor Karpov <igorok.karpov@gmail.com>
 *
 * Best runtime
 *
 * @param nums
 * @param target
 * @returns {[any,number]|*[]}
 */

let twoSum = function(nums, target) {
    let numsIndexes = new Map();
    for(let key = 0; key < nums.length; key++) {
        let searchNum = target - nums[key];
        if(numsIndexes.has(searchNum)) {
            return [numsIndexes.get(searchNum), key];
        }
        numsIndexes.set(nums[key], key)
    }
    return [];
};

let nums = [3, 3], target = 6;
console.log(twoSum(nums, target));