/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes

    Array/list will contain positives only .
    Array/list will always have even size

Input >> Output Examples

minSum({5,4,2,3}) ==> return (22) 

Explanation:

    The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
*/

//PREP
/*
P: array of integers
R: integer
E: [5, 4, 2, 3] output: 22
P: minSum (array)
    lowHalf = array.slice(array.legth/2);
    highHalf = array.slice(0, (-array.length/2))
    result = []
    loop i of howHalf.legnth
      result.push(lowhalf[i] * highHalf[i])
    return result.reduce
*/

function minSum(arr) {
   arr = arr.sort((a, b) => a - b);
   let result = 0;
   for (let i = 0; i < arr.length/2; i++){
     result += (arr[i] * arr[arr.length - (i + 1)]);
   }
   return result;
}
