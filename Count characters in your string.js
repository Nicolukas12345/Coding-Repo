/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

//PREP
/*
P: string
R: object contain values pairs
E: input: "aba" output: {'a': 2, b: 1}
P: count(string)
   current = ""
   result = {}
    loop char of string
      current = string.filter((element) => element == char)
      result[char] = current.length
   return result
*/

function count(string) {
  let current = "";
  let result = {};
  string = string.split("");
  for (let char of string){
    current = string.filter((element) => element == char);
    result[char] = current.length;
  }
  return result;
}
