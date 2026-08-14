/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

//PREP
/*
P: integer
R: integer
E: input: 10  3, 6, 9, 5 output: 23
P: multiples(number)
    result = 0
    for index of number
      if (index % 3 === 0 || index % 2 === 0)
        result += index
    return result
*/

function solution(number){
  let result = 0;
  for (let i = 0; i < number; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
      result += i;
    }
  }
  return result;
}
