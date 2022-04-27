var subarraySum = function(nums, k) {
  let count = 0, sum = 0;
  const map = new Map();
  // Add 0 as a prefix sum in the map
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
      // Get the current sum
      sum += nums[i];
      // If there is a prefix sum that complements the current sum
      // Add to count by the number of times that prefix sum has been seen
      if (map.has(sum - k))
          count += map.get(sum - k);
      // Add the number of times this prefix sum has been seen
      map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};