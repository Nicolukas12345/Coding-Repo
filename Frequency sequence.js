/*
Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

//PREP
/*
P: string and a character
R: string
E: input: "hello world", "-" output: "1-1-3-3-2-1-1-2-1-3-1"
P:

freqSeq(str, sep)
  keyVowel = {}
  str = str.split("")
  FOR index = 0 TO str.length
    IF (keyVowel[str[i]]) THEN
      keyVowel[str[i]] += 1
    ELSE
      keyVowel[str[i]] = 1
  FOR index = 0 TO str.length
    str[i] = String(keyVowel[str[i]])
  RETURN str.join(sep)
*/

function freqSeq(str, sep) {
  let keyVowel = {};
  str = str.split("");
  for (let i = 0; i < str.length; i++){
    if (keyVowel[str[i]]){
      keyVowel[str[i]] += 1;
    }else{
      keyVowel[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++){
    str[i] = String(keyVowel[str[i]]);
  }
  return str.join(sep);
}
