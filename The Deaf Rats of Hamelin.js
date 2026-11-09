/*
Story

The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!
Kata Task

How many deaf rats are there?
Legend

    P = The Pied Piper
    O~ = Rat going left
    ~O = Rat going right

Example

    ex1 ~O~O~O~O P has 0 deaf rats

    ex2 P O~ O~ ~O O~ has 1 deaf rat

    ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

Series

    The deaf rats of Hamelin (2D)
*/

//PREP
/*
P: string
R: integer
E: input: "~0~0~0~0 P" output: 0
   input: "~O~O~O~OP~O~OO~" output: 2
   input: 
P:
  countDeafRats(town)
    town = town.split("P")
    blindRats = 0;
    FOR 0 TO array[0].length
      IF (array[0][index] === "~" OR array[0][index] === "0") THEN
        IF (array[0][index] === "0") THEN
          blindRats += 1
        index += 1 
    FOR 0 TO array[1].length 
      IF (array[1][index] === "~" OR array[1][index] === "0") THEN
        IF (array[1]. [index] === "~") THEN
          blindRats += 1
        index += 1. 
*/

var countDeafRats = function(town) {
  town = town.split("P");
  let blindRats = 0;
  for (let i = 0; i < town[0].length; i++){
    if (town[0][i] === "~" || town[0][i] ==="O"){
      if (town[0][i] === "O"){
        blindRats += 1;
      }
    i += 1;
    }
  }
  
  for (let i = 0; i < town[1].length; i++){
    if (town[1][i] === "~" || town[1][i] ==="O"){
      if (town[1][i] === "~"){
        blindRats += 1;
      }
    i += 1;
    }
  }
  return blindRats;
}
