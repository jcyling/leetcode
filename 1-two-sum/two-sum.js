function twoSum(nums, target) {
  // Brute force solution
  // Make each number add each subsequent number and check against target
  let indices = [];
  for (let i = 0, j = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target && indices.length < 2) {
        indices.push(i)
        indices.push(j)
      }
  }
  return indices

  // Hash map solution
  // See if the necessary number has been seen before
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}