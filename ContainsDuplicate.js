/** https://leetcode.com/problems/contains-duplicate/ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  nums.sort(function(a,b) {
     return a-b; 
  });
  
  for (let i = 0; i < nums.length-1; i++) {
      if (nums[i] == nums[i+1]) return true;
  }
  
  return false;
};