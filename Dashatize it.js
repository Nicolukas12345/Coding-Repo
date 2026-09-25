/*
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'

*/

//PREP
/*
P: integer
R: string
E: input: 6815 output: '68-1-5'
P:

dashtize(num)
  num = String(num).split("")
  FOR digit OF num
    IF +digit % 2 === 1 THEN
      if (!(num[i - 1] === undefined || num[i - 1] === "-")){
        //insert - i at num[i - 1]
      }
      if (!(num[i + 1] === undefined || num[i + 1] === "-")){
        //insert - i at num[i + 1]
      }
  RETURN (num.join("")).slice(1, num.length -1)
*/
function dashatize(num) {
  num = String(num).split("");
  if (num[0] === "-") {num.shift()}
  for (let i = 0; i < num.length; i++){
    if (+num[i] % 2 === 1){
      if (!(num[i - 1] === undefined || num[i - 1] === "-" || num[i] === "-")){
        num.splice(i, 0, "-");
      }
      if (!(num[i + 1] === undefined || num[i + 1] === "-" || num[i] === "-")){
        num.splice(i + 1, 0, "-");
      }
    }
  }
  return (num.join(""));
}
