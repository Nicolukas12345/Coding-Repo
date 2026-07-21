/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
 */

//PREP
/*
P: array of integers
R: integer largest pair sum
E: [23, 19, 14, 10, 2] output: 42
P: findLargestPair (array)
    array.sort(highest to lowest)
    return (array[0] + array[1])

*/

function largestPairSum (numbers) {
  numbers.sort((a, b) => b - a);
  return (numbers[0] + numbers[1]);
}
