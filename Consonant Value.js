/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"

"zodiac" -> 26

The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

"strength" -> 57

The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:

Word values

Vowel-consonant lexicon
*/

//PREP
/*
P: string
R: integer
E: input: "zodiac" output: 26
P:
solve(s)
vowels = "aeiou"
subsArr = []
s = s.split("")
buffer = ""
 FOR char OF s
  IF NOT vowels.find((element) => element === char) THEN
    buffer += char
  IF ELSE buffer.length > 0
    subsArr.push(buffer)
    buffer = ""
 FOR index TO subsArr.length
  subsArr[index] = subsArr[index].split("").reduce((a, b) => a + b.charCodeAt(), 0)
 RETURN Math.max(...subsArr)
*/

function solve(s) {
  let vowels = "aeiou";
  let subsArr = [];
  s = s.split("");
  let buffer = "";
  for (let char of s){
    if (!(vowels.split("").find((element) => element === char))) {
      buffer += char;
    }else if (buffer.length > 0){
      subsArr.push(buffer);
      buffer = "";
    }
    if (char === s[s.length - 1]){
      subsArr.push(buffer);
    }
  }
  for (let i = 0; i < subsArr.length; i++){
    subsArr[i] = subsArr[i].split("").reduce((a, b) => a + (b.charCodeAt() - 96), 0);
  }
  return Math.max(...subsArr);
};
