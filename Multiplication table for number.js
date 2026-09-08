/*
//PREP
/*
P:
multiTable(number)
  result = ""
  FOR index <- 1 TO 9
    result += (`$(index) * $(number) = $(index * number)`) + "\n";
  result += (`$(10) * $(number) = $(10 * number)`) 
  RETURN result
*/
function multiTable(number) {
  let result = "";
  for (let i = 1; i < 10; i++){
    result += (`${i} * ${number} = ${i * number}`) + "\n";
  }
  result += (`10 * ${number} = ${10 * number}`);
  return result;
}
*/
