/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//PREP
/*
P: string
R: boolean
E: input: "The quick brown fox jumps over the lazy dog" "abcdefghijklmnopqrstuvwxyz" output: true
P: isPangram (string)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    string = string.split("").map((element) => element.toLowerCase())
    for character of string
      if (chacter.includes(...alphabet)){
        alphabet.splice(index, 1)
      }
   
*/

function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.split("").every((element) => string.toLowerCase().includes(element));
}
