/* https://leetcode.com/problems/remove-duplicates-from-sorted-array/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let i = 0;
  for (i = 1; i < nums.length; i++) {
      if (nums[i] == nums[i-1]) {
          nums.splice(i, 1);
          i--;
      }
  }

  return nums.length;
};