
var canConstruct = function(ransomNote, magazine) {
  let hashmag = new Map()
  
  let note = ransomNote
  let mag = magazine
  
  // Iterate through the magazine, and register each letter to the hash map
  // If letter already exists, add on to value
  // If it does not exist, create a new key/value pair
  for (let i = 0; i < mag.length; i++) {
    let letter = mag[i]
    hashmag.has(letter) 
      ? hashmag.set(letter, hashmag.get(letter) + 1)
      : hashmag.set(letter, 1)
  }
  
  // Iterate over the ransom note
  // If the hashmap does not contain the letter or if its value pair is 0, return false
  // Else, the letter exists, so its value can decrement
  // Return true at the end!
  for (let i = 0; i < note.length; i++) {
    let letter = note[i]
    if (!hashmag.has(letter) || hashmag.get(note[i]) === 0) {
      return false
    }
    hashmag.set(letter, hashmag.get(letter) - 1)
  }
  
  return true

};
