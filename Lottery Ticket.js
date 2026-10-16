/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

//PREP
/*
P: array of pairs
R: string, "Winner" or "Loser"
E: input: [['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2 output: "Loser!"
P:

miniWin(ticketSlice)
 FOR index = 0 TO ticketSlice.length
    IF ticketSlice[index].charCodeAt(0) === ticketSlice[1] THEN
      RETURN True

bingo (ticket, win)
  count = 0
  FOR index = 0 TO ticket.length
    IF miniWin(ticket[index])
      count++
  IF (count === win) THEN
    RETURN "Winner!"
  ELSE
    RETURN "Loser!" 
*/



function miniWin(ticketSlice){
  for (let i = 0; i < ticketSlice[0].length; i++){
    if (ticketSlice[0][i].charCodeAt(0) === ticketSlice[1]){
      return true;
    }
  }
  return false;
}

function bingo(ticket, win){ 
  let count = 0;
  for (let i = 0; i < ticket.length; i++){
    if (miniWin(ticket[i])){
      console.log(ticket[i]);
      count++;
    }
  }
  console.log(count);
  if (count >= win){
    return ("Winner!");
  }else{
    return ("Loser!");
  }
}
