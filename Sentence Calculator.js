/*
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

    Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
    Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
    Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
    Other characters: 0 value

Note: input will always be a string
 
/*
P: string
R: integer
E: input: "I Love You" output: 170  
P: stringToInteger (string)
    return string.split("").replaceAll(" ", "").map((element) => (element.toLowerCase() === element) ? element.charCodeAt(0) - 96 : element.charCodeAt(0) - 64)
    
*/
// 65 to 90 Uppercase 97 to 122 lowercase 48 to 57 for numbers
// create case for 48 (decimal numbers`)

function lettersToNumbers(s) {
  let result = 0;
  for (let element of s){
    if (element >= "A" && element <= "Z"){
      result += 2 * (element.charCodeAt(0) - 64);
    }else if (element >= "a" && element <= "z"){
      result += element.charCodeAt(0) - 96;
    }else if (element >= "0" && element <= "9"){
      result += +element;
    }
  }
  return result;
}

*/
