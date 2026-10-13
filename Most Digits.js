/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

//PREP
/*
P: array
R: integer
E: input: [1, 10, 100] output: 100
P:

findLongest(array)
  array = String(array)
  array = array.sort()
  return Number(array[array.length - 1])
*/
function findLongest(array){
  array = array.map((element) => String(element));
  array = array.sort((a, b) => b.length - a.length);
  return Number(array[0]);
}
