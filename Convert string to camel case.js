/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

//PREP
/*
P: string
R: string
E: input: "the-stealth-warrior" output: "theStealthWarrior"
P: toCamelCase(str)
    str = str.split("-")
    str = str.split("_")
    loop 1 index < str.length
      str[index][0].toUpperCase
    return str.join("")

*/
function toCamelCase(str){
  str = str.replaceAll("-", " ");
  str = str.replaceAll("_", " ");
  str = str.split(" ");
  console.log(str);
  for (let i = 1; i < str.length; i++){
    str[i] = str[i].split("");
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("");
  }
  return str.join("");
}
