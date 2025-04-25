// Reverse a string
function reverseString(str) {
    let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;    
}
console.log(reverseString("hello"));

// Find max in array
function findMax(arr) {
    let maxNum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }
      }
      return maxNum;   
}
console.log(findMax([9, 4, 5, 5, 10]));

// Check if palindrome
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; 
    }
    left++;
    right--;
  }

  return true; 
}

console.log(isPalindrome("hello"));

module.exports = { reverseString, findMax, isPalindrome };