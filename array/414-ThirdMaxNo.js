//30/11/2023
//414 Third Maximum Number

var thirdMax = function (nums) {
  let s = new Set();
  for (let num of nums) {
    s.add(num);
  }
  let arr = [...s];
  if (arr.length === 2) return Math.max(...arr);
  arr.sort((a, b) => b - a);
  if (arr.length > 3) {
    value = arr[2];
  }
  else {
    value = arr.at(-1)

  }
  return value
};

const nums = [2,2,3,1]
console.log(thirdMax(nums))
/* 
Given an integer array nums, return the third distinct maximum 
number in this array. If the third maximum does not exist, return
the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/