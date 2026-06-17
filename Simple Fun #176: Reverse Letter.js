/*
Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/

function reverseLetter(str) {
  return str.split("").map((element) => ((element == "a" || element == "b" || element == "c" || element == "d" || element == "e" || element == "f" || element == "g" || element == "h" || element == "i" || element == "j" ||
 element == "k" || element == "l" || element == "m" || element == "n" || element == "o" || element == "p" || element == "q" || element == "r" || element == "s" || element == "t" ||
 element == "u" || element == "v" || element == "w" || element == "x" || element == "y" || element == "z") ? element : "")).reverse().join("");
}
