/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"
: string numberofnumbers
E: input "312" output "333122"
P: explodeNumbers (string)
    result = ""
    loop i of string.split
      loop i < Number(element)
        result += element
    return result
*/

function explode(s) {
  let result = "";
  for (const element of s){
    for (let i = 0; i < Number(element); i++){
      result += element;
    }
  }
  return result;
}
    FL Name,FolderAndSubfolderSize,ItemsInFolderAndSubfolders
*/


