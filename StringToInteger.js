/** https://leetcode.com/problems/string-to-integer-atoi/ */

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let result = parseInt(s) || 0;
  if (result < -Math.pow(2,31)) {
      return "-2147483648";
  }

  if (result  > Math.pow(2,31) - 1) {
      return "2147483647";
  }
  return result;
};