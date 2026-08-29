/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

//PREP
/*
P: integer
R: string
E: input: 45 output:"40 + 5"
P: expandedForm(num)
    num = String(num).split("")
    result = ""
    loop  from 1 digits of num
      if index > 1
        resutl += " + "
      result += digit.padEnd("0", num.length - index)
    return result
*/
function expandedForm(num) {
  num = String(num).split("");
  let result = "";
  for (let i = 0; i < num.length; i++){
    if (num[i] !== "0"){
      if (i > 0){
        result += " + ";
      }
        result += num[i].padEnd((num.length - i), "0");
    }
  }
  return result;
}
