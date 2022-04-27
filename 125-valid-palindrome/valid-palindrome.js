var isPalindrome = function(s) {
  let string = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reversed = string.split('').reverse().join('')
  return reversed === string  
};