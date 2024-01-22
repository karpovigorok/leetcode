<?php

require "../../vendor/autoload.php";

use Leetcode\MajorityElement\Solution;

$solution = new Solution();

$a = [100, 1, 100, 100];
$result = $solution->majorityElement($a);
var_dump($result);
