/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

//PREP
/*
P: string
R: string
E: input: "abc#d##c" output: "ac"
P:
cleanString(s)
  foundIndex = true
  s = s.split("")
  WHILE foundIndex
    foundIndex = s.indexOf((element) => element === "#")
    splice((foundIndex - 1), 2);
  return s.join("")
*/
function cleanString(s) {
  let foundIndex;
  s = s.split("");
  while (s.find((element) => element === "#")){
    foundIndex = s.indexOf("#");
    (foundIndex > 0) ?  s.splice((foundIndex - 1), 2) : s.splice((foundIndex), 1);
  }
  return s.join("");
}
