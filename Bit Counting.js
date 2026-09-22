/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

//PREP
/*
P: integer
R: integer
E: input: 2  101 output: 2
P: 

countBits(n)
  result = 0
  n = ((n).toString(2)).split("");
  FOR digit OF n
    IF digit = "1" THEN
      result++;
  RETURN result;
*/

function countBits(n) {
  let result = 0;
  n = ((n).toString(2)).split("");
  for (let digit of n){
    if (digit === "1"){
      result++;
    }
  }
  return result;
}
