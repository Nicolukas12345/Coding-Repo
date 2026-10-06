/*
A perfect power is a classification of positive integers:

    In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check whether a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3, 4) and (9, 2) are both valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.
Examples

describe("perfect powers", function(){
  it("should work for some examples",function(){
    assert.deepEqual(isPP(4), [2, 2], "4 = 2^2");
    assert.deepEqual(isPP(9), [3, 2], "9 = 3^2");
    assert.strictEqual(isPP(5), null, "5 isn't a perfect number");
  });
});

*/

//PREP
/*
P: integer
R: pair
E: input: 81 81^2 = 9 output: 9 ^ 2 = 81
P: 
isPP(n)
  index = 2
  nthRoot
  WHILE (true)
    nthRoot = (n^(1/index))
    IF ((nthRoot % 1) === 0) THEN
      RETURN [nthRoot, index]
    index++
*/
function isPP(n){
  for (let m = 2; m * m <= n; m++){
    for (let k = 2; m**k <= n; k++){
      if (m**k === n){
        return [m, k];
      }
    }
  }
  return null;
}
