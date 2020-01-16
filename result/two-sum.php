<?php


/**
 * Result URL: https://leetcode.com/submissions/detail/290623120/
 */

require "../vendor/autoload.php";

use Leetcode\TwoSum\Solution;

$solution = new Solution();
$nums = [2, 7, 11, 15];
$target = 9;
print_r($solution->twoSum($nums, $target));
