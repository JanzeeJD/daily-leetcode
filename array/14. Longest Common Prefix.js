//05-07-2024
//Longest Common prefix

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  
  let minLen = Math.min(...strs.map(str => str.length));
  
  let prefix = "";

  for (let i = 0; i < minLen; i++) {
      let char = strs[0][i];
      
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== char) {
              return prefix;
          }
      }
      prefix += char;
  }
  
  return prefix;
};


strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));



/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. 
*/