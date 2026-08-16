/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

//PREP
/*
P: integer array
R: string
E: input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] output: "(123) 456-7890"
P: createPhoneNumber(numbers)
    return (`(${numbers.slice(0, 2).join("")}) ${numbers.slice(3, 5).join("")}-${numbers.slice(6, 9).join("")}`);
*/

function createPhoneNumber(numbers){
  return (`(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6, 10).join("")}`);
}
