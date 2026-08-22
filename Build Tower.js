/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

//PREP
/*
P: integer
R: array of strings
E: input 4 output:
[
"   *   ",
"  ***  ",
" ***** ",
"*******"
]
P: towerBuilder(nFloor)
    result = []
    floor = ""
    asterisk = 1
    loop 1 to nFloor
      floor += (" ").repeat(nFloor - (i + 1))
      floor += ("*").repeat((2 * i) + 1)
      floor += (" ").repeat(nFloors - (i + 1))
      result.push(floor)
      floor = ""
    return result
*/
function towerBuilder(nFloors) {
  let result = [];
  let floor = "";
  let asterisk = 1;
  for (let i = 0; i < nFloors; i++){
    floor += (" ").repeat(nFloors - (i + 1));
    floor += ("*").repeat((2 * i) + 1);
    floor += (" ").repeat(nFloors - (i + 1));
    result.push(floor);
    floor = "";
  }
  return result;
}
