/*
//PREP
/*
P: two integers
R: array of pairs
E: input: [1, 250] output: [[1, 1], [42, 2500], [246, 84100]] recreate the system you want to hav eon
P: 

listSquared(m, n)
  number
  result = []
  FOR x = m TO n
    number = 0
    FOR y = 1 TO x
      IF x % y === 0 THEN
        number += y**2
    IF Math.sqrt(number) % 1 === 0 THEN
      result.push([x, number])
  RETURN result
    

*/
function listSquared(m, n) {
  let number;
  let result = [];
  for (let x = m; x <= n; x++){
    number = 0;
    for (let y = 1; y <= x; y++){
      if ((x % y) === 0){
        number += y**2;
      }
    }
    if ((Math.sqrt(number) % 1) === 0){
      result.push([x, number]);
    }
  }
  return result;
}
*/
