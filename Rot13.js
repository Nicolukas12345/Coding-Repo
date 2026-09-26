/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.

If there are nonletter characters in the string, they should be left as-is in the output. Only letters from the ASCII alphabet should be shifted, like in the original Rot13 "implementation".
*/

//PREP
/*
P: string
R: string
E: input: 'test' output: 'grfg'
P:

rot13(message)
  alphabet = [a, b, c, d, e, f... z]
  message = message.split("")
  letterIndex;
  FOR i = 0 TO message.length
    letterIndex = alphabet.indexOf(message[i]);
    IF message[i] === message[i].toUpperCase() THEN
      message[i] = alphabet[(letterIndex + 13) % 26].toUpperCase()
    ELSE
      message[i] = alphabet[(letterIndex + 13) % 26]
  RETURN message.join("");
*/

function rot13(message){
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  message = message.split("");
  let letterIndex;
  for (let i = 0; i < message.length; i++){
    letterIndex = alphabet.indexOf(message[i].toLowerCase());
    if (letterIndex != -1){
      if (message[i] === message[i].slice().toUpperCase()){
        message[i] = (alphabet[(letterIndex + 13) % 26]).toUpperCase();
      }else if (message[i] === message[i].slice().toLowerCase()){
        message[i] = alphabet[(letterIndex + 13) % 26];
      }
    }
  }
  return message.join("");
}
