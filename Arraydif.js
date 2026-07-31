//PREP
/*
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
Examples

If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

*/

//PREP 
/*
P: array array2
R: array
E: arrayDifference (array array2)
    newarray = array.slice
    loop i to newarray.length
      loop (newarray.indexof bvalue != -1)
        newarray.splice(newarray.indexof(bvalue), 1)
*/

function arrayDiff(a, b) {
  let newArray = a.slice();
  for (let i = 0; i < b.length; i++) {
    while (newArray.indexOf(b[i]) !== -1){
      newArray.splice(newArray.indexOf(b[i]), 1);
    }
  }
  return newArray;  
}
