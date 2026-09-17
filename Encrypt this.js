/*
I thank yvonne-liu for the idea and for the example tests :)
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

//PREP
/*
P: string
R: string
E:

FUNCTION encrypt(text)
  buffer
  text = text.split(" ")
  FOR word of text
    buffer = ""
    word = word.split("")
    word[0] = String(word[0].charCodeAt())
    buffer = word[1]
    word[1] = word[word.length - 1]
    word[word.length - 1] = word[1]
    word.join("")
  return text.join(" ")
*/

var encryptThis = function(text) {
  let buffer;
  text = text.split(" ");
  for(let i = 0; i < text.length; i++){
    buffer = "";
    text[i] = text[i].split("");
    text[i][0] = String(text[i][0].charCodeAt());
    buffer = text[i][1];
    text[i][1] = text[i][text[i].length - 1];
    text[i][text[i].length - 1] = buffer;
    text[i] = text[i].join("");
  }
  return text.join(" ");
}
