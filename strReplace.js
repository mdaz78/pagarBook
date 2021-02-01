/**
 * Find the unique words in a given string after removing all the special
 * characters and number.
 *
 * Example =>
 * Input - Hi! I like to code. Clean&&! Code.. is fun.
 * Output - ["Hi", "I", "like" "to", "code", "clean", "is", "fun"]
 */

const REMOVE_SPECIAL_CHARS = /[^a-zA-Z 0-9]/gm;
/**
 *
 * @param {String} string
 * @returns {Array}
 */
function getUniqueArr(string) {
  const cleanString = string.replace(REMOVE_SPECIAL_CHARS, '');
  return removeDuplicates(cleanString, ' ');
}

/**
 *
 * @param {String} string
 * @param {String} separator
 * @returns {Array}
 */
function removeDuplicates(string, separator) {
  const uniformArr = string.split(separator).map((el) => el.toLowerCase());
  const uniques = new Set(uniformArr);
  return Array.from(uniques);
}

let string = 'Hi! I like to code. Clean&&! Code.. is fun.';
console.log(getUniqueArr(string));
