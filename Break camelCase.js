/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//PREP
/*
P: string
R: string
E: input "camelCasing" output: "camel Casing"
P: solution(string)
    array = []
    loop character of string
      if character >= "A" && character <= "Z"
        array.push(index)
    loop number of array
      string.splice(number, 0, " ")
    return string
*/

function solution(string) {
  let array = [];
  string = string.split("");
  for (let i = 0; i < string.length; i++){
    if (string[i] >= "A" && string[i] <= "Z"){
      string.splice(i, 0, " ");
      i++;
    }
  }
  return string.join("");
}
