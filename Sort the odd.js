/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

//PREP
/*
P: array of numbers
R: array of numbers
E: input [7, 1] output [1, 7]
P: sortArray (array)
    evens = []
    indexes = []
    loop number of array
      if number % 2 !== 0
        evens.push(number)
        indexes.push(index)
    loop element of evens
      array.splice(index[i], 1, evens[i])
    return array
        
*/
function sortArray(array) {
  let evens = [];
  let indexes = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
      evens.push(array[i]);
      indexes.push(i);
    }
  }
  evens.sort((a, b) => a - b);
  for (let i = 0; i < evens.length; i++){
    array.splice(indexes[i], 1, evens[i]);
  }
  return array;
}


