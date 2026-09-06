/*
//PREP
/*
P: integer
R: array of strings
E: input: 5
output: 
  *  
 ***
*****
 ***
  *
P: diamond (n)
    buffer 
    result = new Array.(n).fill("")
    start = ((n - 1) / 2)
    FOR index <- 1 TO n index <- index + 2
      buffer = (" ").repeat(n).split("")
      FOR index2 <- start TO start + index
        buffer[index2] <- "*"
      result[index - 1], result[n - index] <- buffer.join("")
    
*/
function diamond(n){
  let len;
  let result = "";
  if (n % 2 === 0 || n < 0) {return null}
  for (let i = 0; i < n; i++){
    len = Math.abs((n-(2*i) -1)/2);
    console.log(len);
    result += (" ").repeat(len) + ("*").repeat(n - (len * 2)) + "\n";
  }
  return result;
}
*/
