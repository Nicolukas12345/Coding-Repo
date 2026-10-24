/*
Task

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

    There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
    The set of used punctuation is ,.!?.
    Punctuation should be kept in your return string, but spaces should not.
    Xray should not have a dash within.
    Every word and punctuation mark should be seperated by a space ' '.
    There should be no trailing whitespace 
*/

//PREP
/*
P: string
R: return string
E: input: "If, you can read?" output: "India Foxrot , Yankee Oscar Uniform Charlie Alpha November Romeo Echo Alpha Delta"
P:

toNato(words)
  words = words.replaceAll(" ", "")
  word = word.split("")
  FOR index = 0 TO words.length
    words[index] = NATO[words[index]] || words[index]
  RETURN words.join("")
*/
function toNato(words) {
  return words.toUpperCase().replaceAll(" ", "").split("").map((element) => NATO[element] || element).join(" ");
}
