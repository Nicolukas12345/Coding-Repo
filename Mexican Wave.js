/*
Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.
Rules

1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Examples

"hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
" s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]
*/

//PREP
/*
P: string
R: array of strings
E: input: 'mommy' output: ['Mommy', 'mOmmy', 'moMmy', 'momMy', 'mommY']
P: wave(str)
    result = []
    str = str.split("")
    loop char of str
      char = char.toUpperCase()
      result.push(str)
      char = char.toLowerCase()
    return result

*/
function wave(str){
  let result = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++){
    if (str[i] != " "){
      str[i] = str[i].toUpperCase();
      result.push(str.join(""));
      str[i] = str[i].toLowerCase();
    }
  }
  return result;
}
