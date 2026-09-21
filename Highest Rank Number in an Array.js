/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

//PREP
/*
P: array
R: integer
E: input: [12, 10, 8, 12, 7, 6, 4, 10, 12] output: 12
P:
highestRank(arr)
  arr.sort((a, b) => a - b);
  newArr = []
  buffer = []
  FOR i = 0 TO arr.length
    buffer.push(arr[i])
    IF i > 0 AND arr[i - 1] !== arr[i] THEN
      newArr.push(buffer)
      buffer = []
  newArr.sort((a, b) => a.length - b.length)
  RETURN Math.max(newArr[newArr.length - 1][0], newArr[newArr.length - 2][0])

*/

function highestRank(arr){
  arr.sort((a, b) => a - b);
  let newArr = [[]];
  let buffer = [];
  for (let i = 0; i <= arr.length; i++){
    if (i > 0 && arr[i - 1] !== arr[i] || i === arr.length){
      newArr.push(buffer);
      buffer = [];
    }
    buffer.push(arr[i]);
  }

  newArr.sort((a, b) => a.length - b.length);
  if (newArr[newArr.length - 1].length === newArr[newArr.length - 2].length){
    return Math.max(newArr[newArr.length - 1][0], newArr[newArr.length - 2][0]);
  }else{
    return newArr[newArr.length - 1][0];
  }
}
