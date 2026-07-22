/*
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims. Sum up each side's letters' power values to determine which side wins.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/
//PREP
/*
only small letters, letters have powers

left

w - 4

p - 3

b - 2

s - 1

right

m - 4

q - 3

d - 2

z - 1


P: string fight
R: string, either "Left side wins!" or "Right side wins!"
E: input: "zzzzs" output "Right side wins!"
P: resultFight (fight)
    right = {w:4. p:3, ...}
    
    left = {w:4. p:3, ...}
    
    leftScore = 0
    RightScore = 0
    leftScore.split("").reduce((a, b) => a + left[b], 0 )
    rightScore.split("").reduce((a, b) => a + right[b], 0 )
   return Math.max(leftScore, rightScore)
*/

function alphabetWar(fight)
{
   let leftKey = {"w":4, "p":3, "b":2, "s":1};
   let rightKey = {"m":4, "q":3, "d":2, "z":1};
   let leftScore = 0;
   let rightScore = 0;
   leftScore = fight.split("").reduce((a, b) => a + (leftKey[b] ? leftKey[b] : 0), 0);
   rightScore = fight.split("").reduce((a, b) => a + (rightKey[b] ? rightKey[b] : 0), 0);
   console.log(`left Score: ${leftScore}`);
   console.log(`right Score: ${rightScore}`);
   if (leftScore > rightScore) {
    return "Left side wins!";
   }else if (leftScore < rightScore){
    return "Right side wins!";
   }else {      
    return "Let's fight again!"; 
   }
}
