<?php


/**
 * Result URL: https://leetcode.com/submissions/detail/291701349/
 */

require "../vendor/autoload.php";

use Leetcode\RomanToInteger\Solution;

$solution = new Solution();
echo $solution->romanToInt('IX') . PHP_EOL;
echo $solution->romanToInt('LVIII') . PHP_EOL;
echo $solution->romanToInt('MCMXCIV') . PHP_EOL;