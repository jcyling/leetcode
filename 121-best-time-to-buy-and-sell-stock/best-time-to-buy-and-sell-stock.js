var maxProfit = function(prices) {
    
  // Have 2 pointers in each loop (n and n + 1)
  let max = 0;
  let ptl = 0
  let ptr = 1
    
  for (let i = 0; i < prices.length; i++) {
    if (prices[ptl] < prices[ptr]) {
      // Get the difference between pointers
      // If the difference is larger than the current max, replace the current max
      let profit = prices[ptr] - prices[ptl];
      if (profit > max) { max = profit }
    } 
    else {
      // If the left pointer is bigger than the right pointer
      // Advance the left pointer to right
      ptl = ptr;
    }
    // Increment the right pointer
    ptr++;
  }
  return max;
};