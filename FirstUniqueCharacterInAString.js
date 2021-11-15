/** https://leetcode.com/problems/first-unique-character-in-a-string/ */

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let map = {};
  const size = s.length;
  //Build map
  for (let i = 0; i < size; i++) {
      let c = s.charAt(i);
      if (map[c]) {
          map[c] += 1;
      } else {
          map[c] = 1;
      }
  }
  
  for (let i = 0; i < size; i++) {
      if (map[s.charAt(i)] == 1) {
          return i;
      }
  }
  
  return -1;
};