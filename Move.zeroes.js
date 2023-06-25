function moveZeros(nums) {
  let insertPos = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is non-zero
    if (nums[i] !== 0) {
      // Move it to the insert position and increment the insert position
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Fill the remaining positions with zeros
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  return nums;
}

// Example usage:
var nums = [0, 1, 0, 3, 12];
console.log(moveZeros(nums));