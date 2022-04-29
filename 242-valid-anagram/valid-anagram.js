var isAnagram = function(s, t) {
  // If the words are not the same length, reject
  if (s.length !== t.length) return false;
  
  // Create a hash map of s & t
  // Iterate through hash map of s
  // If there is the same value of the same letter until the end, then it is correct
  let mapS = new Map();
  let mapT = new Map();
  
  for (let i = 0; i < s.length; i++) {
    if (!mapS.get(s[i])) {
      mapS.set(s[i], 1)
    }
    else {
      mapS.set(s[i], mapS.get(s[i]) + 1)
    }
  
    if (!mapT.get(t[i])) {
      mapT.set(t[i], 1)
    }
    else {
      mapT.set(t[i], mapT.get(t[i]) + 1)
    }
  }
  
  for (let j = 0; j < s.length; j++) {
    if (mapS.get(s[j]) !== mapT.get(s[j])) {
      return false;
    }
  }
  return true;
};