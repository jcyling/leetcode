var lengthOfLongestSubstring = function(s) {
  // Create a set to check for unique values  
  let set = new Set();
  let l = 0;
  let result = 0;
  
  for (let r = 0; r < s.length; r++) {
    // At each letter, check if set has current letter
    // If it has the current letter, delete the letter at the left pointer and advance
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    // Add the current letter to the set
    set.add(s[r]);
    // Update the max substring length if it is larger
    result = Math.max(result, r - l + 1);
  }
  return result;
};