/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/
//PREP
/*
P:integer
R: array of integer arrays
E: input: 2 output: [[1, 2], [2, 4]]
P: multiplicationTable(size)
    result = []
    row = []
    loop x=1 to size
      loop y=1 to size
        row.push(x*y)
      result.push(row)\
      row = []
    return result
*/

function multiplicationTable(size) {
  let result = [];
  let row = [];
  for (let x = 1; x <= size; x++){
    for (let y = 1; y <= size; y++){
      row.push(x*y);
    }
    result.push(row);
    row = [];
  }
  return result;
}
