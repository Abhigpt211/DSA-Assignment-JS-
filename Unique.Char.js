function firstUniqChar(s) {
    // Create a hash map to store the frequency of characters
    const charMap = {};
  
    // Iterate through the string to populate the hash map
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    // Iterate through the string again to find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charMap[char] === 1) {
        return i; // Return the index of the first non-repeating character
      }
    }
  
    return -1; // If no non-repeating character found, return -1
  }
  
  // Example usage:
  var s = "leetcode";
  console.log(firstUniqChar(s));