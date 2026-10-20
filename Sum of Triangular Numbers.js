/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]

e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/

//PREP
/*
P: integer
R: integer
E: input: 4 output: 1 + 1 + 2 + 1 + 2 + 3 + 1 + 2 + 3 + 4 = 20
P:

firstSum (integer)
  result = 0
  FOR index = 0 TO integer
    result += index
sumTriangularNumbers(n)
  sum = 0
  FOR index = 0 TO n
    sum += firtSum(index)
RETURN sum
*/

function firstSum(integer){
  let result = 0;
  for (let i = 1; i <= integer; i++){
    result += i;
  }
  return result;
}

function sumTriangularNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += firstSum(i);
  }
  return sum;
}
