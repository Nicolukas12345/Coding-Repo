//PREP 
/*
Given a string and a mask (a list of lengths), split the string into its parts accordingly.
Examples:

|     String      |  Mask (lengths)  |          Output           |
|-----------------|------------------|---------------------------|
|  "1234567890"   |  (3, 3, 4)       |  ["123", "456", "7890"]   |
|  "codewars"     |  (4, 4)          |  ["code", "wars"]         |

Notes:

    The mask only contains strictly positive integers.
    A mask is valid if and only if the sum of the lengths is equal to the length of the string.
    Otherwise, return None, Nothing or a similar empty value.


*/


//PREP
/*
P:
*/

function split(string,mask) {
  let sepCounter = 0;
  let result = mask.map((element) => string.slice(sepCounter, sepCounter += element));
  return ((sepCounter === string.length) ? result : null);
}
