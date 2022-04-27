var maxSubArray = function(nums) {
  let maxSub = nums[0]
  let curSum = 0;
  
  // Iterate through the numbers array
  for (let i = 0; i < nums.length; i++) {
    // If the current sum up to that point is less than 0
    // Reset current sum
    if (curSum < 0) {
      curSum = 0;
    } 
    // Add the current number to sum
    curSum += nums[i];
    // Check if the current sum is larger than the current max subarray
    maxSub = Math.max(maxSub, curSum);
  }
  return maxSub
};