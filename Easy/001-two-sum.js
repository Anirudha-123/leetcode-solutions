/*
LeetCode 1. Two Sum

Problem:
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

Assumptions:
- Exactly one solution exists
- You may not use the same element twice

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Approach:
Brute Force

Time Complexity: O(n²)
Space Complexity: O(1)
*/


var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


 console.log('------------------------');



const testCases = [
  { nums: [2, 7, 11, 15], target: 9 },
  { nums: [3, 2, 4], target: 6 },
  { nums: [3, 3], target: 6 },
  { nums: [1, 5, 3, 7], target: 8 }
];

testCases.forEach((test, index) => {
  const result = twoSum(test.nums, test.target);
  console.log(`Example ${index + 1}:`);
  console.log(`Input: nums = ${JSON.stringify(test.nums)}, target = ${test.target}`);
  console.log(`Output: ${JSON.stringify(result)}`);
  console.log('------------------------');
});
