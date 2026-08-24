/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

//PREP
/*
P: 2 integers
R: integer
E: input 30, 12 output 30 % 12 = 6 12 % 6 = 0  6
P: mygcf(x, y)
    remainder = x % y
    if (remainder == 0)
      return y;
    return mygcf(y, remainder)
*/
function mygcd(x,y){
  let remainder = x % y;
  if (remainder === 0){
    return y;
  }
  return mygcd(y, remainder);
}
