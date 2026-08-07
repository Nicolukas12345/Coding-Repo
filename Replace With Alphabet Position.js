//PREP
/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
: string
E:
P: positionAlphabet (string)
    string = string.split("").map((element) => element.toLowerCase())
    result = []
    for (element of string)
      if (element >= "a" && element <= "z")
        result.push(element.charCodeAt(0) - 96)
    return result
*/

function alphabetPosition(text) {
  text = text.split("").map((element) => element.toLowerCase());
  let result = "";
  for (let element of text){
    if (element >= "a" && element <= "z"){
      result += (`${element.charCodeAt(0) - 96} `);
    }
  }
  return result.slice(0, -1)
}


