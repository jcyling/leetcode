var isValid = function (s) {
  const pairs = { ')': '(', ']': '[', '}': '{' };
  const stack = [];

  for (let i of s) {

    // If the opening does not exist as a key in pairs, add it into the stack
    if (!pairs[i]) {
      stack.push(i);
    }
    else {
      // Else, if the last item of the stack is not the matching key/value pair, there is an open bracket
      if (stack.pop() !== pairs[i])
        return false;
    }
  }
  return stack.length === 0;
};