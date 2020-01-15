<?php


namespace Leetcode\MergeTwoSortedLists;
/**
 * Project: leetcode
 * Problem URL: https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 * Description: Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * Author: Igor Karpov <igorok.karpov@gmail.com>
 * Date: 14.01.20
 * Time: 01:14
 * Class Solution
 * @package Leetcode\MergeTwoSortedLists
 */

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
//    function mergeTwoLists($l1, $l2) {
//        print_r($l1);
//
//        if(is_null($l1)) {
//            return $l2;
//        }
//        if(is_null($l2)) {
//            return $l1;
//        }
//        //make head
//        if($l1->val <= $l2->val) {
//            $mergedList = new ListNode($l1);
//            $l1 = $l1->next;
//        }
//        else {
//            $mergedList = new ListNode($l2);
//            $l2 = $l2->next;
//
//        }
//        print_r($mergedList);
//
//        while(!is_null($l1) && !is_null($l2)) {
//            if($l1->val <= $l2->val) {
//                $mergedList->next = new ListNode($l1);
//                $l1 = $l1->next;
//            }
//            else {
//                $mergedList->next = new ListNode($l2);
//                $l2 = $l2->next;
//            }
//        }
//        print_r($mergedList);
//    }
//
}