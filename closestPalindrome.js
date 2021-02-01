/**
 * You are given a number. Find another number closest to the given number which is a palindrome.
 * Examples
 * - Input - 123, Expected output - 121
 * - Input - 998, Expected output - 999
 *
 * Assumptions
 * 1. All single digit numbers are palindrome.
 * 2. Input will always be a positive number.
 * 3. If a palindrome number is given the closest palindrome number to the
 * given number is returned.
 */

/**
 * @param {Number} num
 * @returns {(undefined | Number)}
 */
function closestPalindromeNumber(num) {
  if (num === 0) return undefined;
  if (num % 10 === num) return num - 1;

  const leftNearestPalindrome = getClosestPalindromeFrom(num, 'LEFT');
  const rightNearestPalindrome = getClosestPalindromeFrom(num, 'RIGHT');

  if (num - leftNearestPalindrome > rightNearestPalindrome - num) {
    return rightNearestPalindrome;
  } else {
    return leftNearestPalindrome;
  }
}

/**
 *
 * @param {Number} num
 * @param {String} searchOrder
 * @returns {Number}
 */
function getClosestPalindromeFrom(num, searchOrder) {
  if (searchOrder === 'LEFT') {
    while (num >= 10) {
      num -= 1;

      if (isPalindrome(num)) return num;
    }
  } else if (searchOrder === 'RIGHT') {
    while (true) {
      num += 1;

      if (isPalindrome(num)) return num;
    }
  }

  return undefined;
}

/**
 *
 * @param {*} input
 * @returns {Boolean}
 */
function isPalindrome(input) {
  const stringifiedInput = input.toString();

  return stringifiedInput === stringifiedInput.split('').reverse().join('');
}

console.log(closestPalindromeNumber(998));
console.log(closestPalindromeNumber(123));
