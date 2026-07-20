/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
 */

/*if 15 or less Woohoo!
else
Car Dead 

bump:n nobump: _
P: string e.g. "__n_"
R: string either Woohoo! or Car Dead
E: input: "__n_" output: "Woohoo!"
P: bumpCheck (string)
    if (string.split("").filter((element) => element === "n").length <= 15)
      return "Whoohoo!"
    else
      return  "Car Dead"
*/
function bump(x){
  return ((x.split("").filter((element) => element === "n").length) <= 15) ? "Woohoo!" : "Car Dead";
}
