/** https://leetcode.com/problems/build-an-array-with-stack-operations/ */

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
  　const PU  = "Push";
  　const PO = "Pop";
  　let result = [];
  　let count = 1;
  　
  　for (let i = 0; i <= n; i++) {
  　    if (i >= target.length) break;
  　    result.push(PU);
  　    if (target[i] != count) {
  　        result.push(PO);
  　        i--;
  　    }
  　    
  　    count ++;
  　}
  　
  　return result;
  };