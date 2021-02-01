/**
 * Write a program to calculate the fibonacci series
 * 0 1 1 2 3 5 8
 *
 * Assumptions
 * 1. I will get an input that tells till what length do I need to calculate
 * the fib sequence.
 * example => 3, 0 1 1
 * example => 2, 0 1
 */

/**
 * @param {Integer} length
 * @returns {( undefined | Array )}
 */
function fibonacci(length = 1) {
  if (length <= 0) return undefined;

  const fibSequence = [0, 1];

  if (length === 1) return [fibSequence[0]];
  if (length === 2) return fibSequence;

  while (fibSequence.length !== length) {
    let numToInsert =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];

    fibSequence.push(numToInsert);
  }

  return fibSequence;
}

console.log(fibonacci());
console.log(fibonacci(5));
console.log(fibonacci(2));
