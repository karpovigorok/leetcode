/**
 *
 * Author: Igor Karpov <igorok.karpov@gmail.com>
 *
 * Best Memory
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {

    for(let key = 0; key < nums.length; key++) {

        for(let key2 = 0; key2 < nums.length && key !== key2; key2++) {
            if (nums[key] + nums[key2] === target) return [key, key2];
        }
    }
    return [];
};

let nums = [3, 3], target = 6;
console.log(twoSum(nums, target));