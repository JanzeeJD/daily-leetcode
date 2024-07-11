//11-07-2024
// Merge sorted array

var merge = function(nums1, m, nums2, n) {
  // Pointers for nums1 and nums2
  let i = m - 1;
  let j = n - 1;
  // Pointer for the end of merged array
  let k = m + n - 1;
  
  // While there are elements to be checked in nums1 and nums2
  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
      } else {
          nums1[k] = nums2[j];
          j--;
      }
      k--;
  }
  
  // If there are remaining elements in nums2, copy them over
  while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
  }
};

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

console.log(merge(nums1,m,nums2,n));


/* Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/