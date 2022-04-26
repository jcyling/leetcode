var containsDuplicate = function(nums) {
  // Create a set which allows only unique numbers
  // If the set length does not equal to the array length, it means there are distinct elements
  return new Set(nums).size !== nums.length;
};